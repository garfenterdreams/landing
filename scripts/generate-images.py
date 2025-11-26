#!/usr/bin/env python3
"""
Generate landing page images using Gemini 2.0 Flash
"""

import os
import sys
import base64
import time
from pathlib import Path

# Try to import required packages
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Installing google-genai...")
    os.system(f"{sys.executable} -m pip install google-genai Pillow")
    from google import genai
    from google.genai import types

from PIL import Image
import io

# Configuration
API_KEY = os.environ.get('GEMINI_API_KEY', 'AIzaSyACHVYRd2CyGrYZgNXVl4qotq4kJEe63E8')
OUTPUT_DIR = Path(__file__).parent.parent / 'public' / 'images' / 'hero'
MODEL = "gemini-2.0-flash-exp-image-generation"  # Nano Banana - native image generation

# Image prompts for each product
PROMPTS = {
    'hero': "Modern tech office in Latin America, diverse professional team working on computers and tablets, blue and white color scheme, professional corporate photography style, warm natural lighting, clean modern interior design, no text or logos, 16:9 aspect ratio",

    'tienda': "Modern e-commerce fashion retail store interior, clothing racks with stylish items, tablet showing online store interface, clean minimalist design, professional lighting, Latin American boutique setting, no text or logos, warm atmosphere",

    'pos': "Modern point of sale counter in a small retail store, barcode scanner, touchscreen POS terminal, friendly cashier serving customer, warm lighting, clean organized counter, Latin American small business setting, no text",

    'contable': "Professional accountant at modern desk reviewing financial charts on computer monitor, organized office with plants, natural lighting, Latin American professional woman, spreadsheets and graphs visible on screen, no text",

    'clientes': "Sales team in modern open office using CRM software, multiple monitors showing customer data dashboards, collaborative workspace, diverse Latin American professionals in business casual, natural lighting, no text",

    'inmuebles': "Modern residential apartment building exterior, sunny day, contemporary Latin American architecture, well-maintained gardens, blue sky, professional real estate photography style, no text or signs",

    'campo': "Latin American farmer using tablet in lush green crop field, modern agriculture technology, sunny day, drone visible in sky, healthy crops, professional photography, no text",

    'banco': "Modern credit union office interior, friendly staff member helping customer at desk, professional banking environment, warm welcoming atmosphere, Latin American setting, computer screens visible, no text",

    'salud': "Modern hospital reception and waiting area, medical staff in scrubs, clean bright environment, patients being attended, professional healthcare facility, Latin American hospital, no text or signs",

    'delivery': "Food delivery rider on motorcycle with insulated delivery bag, urban Latin American city street, smartphone mounted for navigation, daytime, professional photography, no text or logos",

    'educacion': "Virtual classroom scene with students on video call displayed on large monitor, modern learning environment, teacher at desk with laptop, educational posters, Latin American classroom, no text",

    'mercado': "Digital marketplace concept visualization, grid of product images on screen, multiple vendor storefronts, modern e-commerce UI design, colorful products, professional tech visualization, no text",

    'erp': "Business analytics dashboard on large curved monitor, charts and KPIs, modern executive office, data visualization, professional corporate setting, blue color scheme, no text or readable data",

    'og-image': "Garfenter Tech brand hero image, modern tech company office, blue gradient overlay, professional team collaboration, computers and technology, Latin American business, corporate photography, no text"
}

def setup_client():
    """Configure Google GenAI client"""
    return genai.Client(api_key=API_KEY)

def generate_image(client, prompt: str, output_path: Path) -> bool:
    """Generate a single image using Gemini 2.0 Flash"""
    try:
        print(f"  Generating: {output_path.stem}...")

        # Use Gemini 2.0 Flash for native image generation
        response = client.models.generate_content(
            model=MODEL,
            contents=f"Generate a professional photograph image (not a description, generate the actual image): {prompt}",
            config=types.GenerateContentConfig(
                response_modalities=['IMAGE', 'TEXT'],
            )
        )

        # Save the image from response
        output_path.parent.mkdir(parents=True, exist_ok=True)

        for part in response.candidates[0].content.parts:
            if hasattr(part, 'inline_data') and part.inline_data is not None:
                # Get image bytes
                image_data = part.inline_data.data
                img = Image.open(io.BytesIO(image_data))

                # Save as WebP for better compression
                webp_path = output_path.with_suffix('.webp')
                img.save(webp_path, 'WEBP', quality=85)

                # Also save PNG as fallback
                img.save(output_path, 'PNG')

                print(f"  ✓ Saved: {webp_path.name}")
                return True

        print(f"  ✗ No image in response for {output_path.stem}")
        return False

    except Exception as e:
        print(f"  ✗ Error generating {output_path.stem}: {e}")
        return False

def main():
    print("=" * 50)
    print("Garfenter Landing Page Image Generator")
    print("Using Google Imagen 3")
    print("=" * 50)
    print()

    # Setup
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    client = setup_client()

    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Images to generate: {len(PROMPTS)}")
    print()

    # Generate images
    success = 0
    failed = 0

    for name, prompt in PROMPTS.items():
        output_path = OUTPUT_DIR / f"{name}.png"

        if generate_image(client, prompt, output_path):
            success += 1
        else:
            failed += 1

        # Rate limiting - wait between requests
        time.sleep(2)

    print()
    print("=" * 50)
    print(f"Complete! Success: {success}, Failed: {failed}")
    print("=" * 50)

if __name__ == "__main__":
    main()
