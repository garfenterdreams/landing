export interface Product {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'comercio' | 'empresa' | 'servicios' | 'especializado';
  categoryLabel: string;
  icon: string;
  color: string;
  demoUrl: string;
  status: 'active' | 'coming-soon';
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  benefits: {
    number: string;
    label: string;
  }[];
  useCases: string[];
  basedOn: string;
  techStack: string[];
}

export const products: Product[] = [
  {
    id: 'tienda',
    name: 'Tienda',
    title: 'Tu Tienda Online Profesional',
    subtitle: 'Plataforma de comercio electrónico moderna y escalable',
    description: 'Crea una tienda online profesional con Garfenter Tienda. Plataforma de e-commerce moderna basada en Saleor, con GraphQL API, soporte multi-moneda y arquitectura headless para máxima flexibilidad.',
    category: 'comercio',
    categoryLabel: 'Comercio',
    icon: '🛒',
    color: '#2563EB',
    demoUrl: 'https://tienda.garfenter.com',
    status: 'active',
    features: [
      { title: 'API GraphQL', description: 'API moderna y flexible para integraciones', icon: '⚡' },
      { title: 'Multi-moneda', description: 'Vende en Quetzales, Dólares y más', icon: '💱' },
      { title: 'Multi-idioma', description: 'Soporte para español y otros idiomas', icon: '🌐' },
      { title: 'Headless', description: 'Frontend personalizable 100%', icon: '🎨' },
      { title: 'Gestión de Inventario', description: 'Control total de stock y variantes', icon: '📦' },
      { title: 'Checkout Optimizado', description: 'Proceso de compra fluido y rápido', icon: '✅' }
    ],
    benefits: [
      { number: '160+', label: 'Webhooks disponibles' },
      { number: '45+', label: 'Puntos de extensión' },
      { number: '100%', label: 'Personalizable' }
    ],
    useCases: ['Marcas y minoristas', 'Emprendedores digitales', 'Tiendas con múltiples sucursales', 'E-commerce B2B y B2C'],
    basedOn: 'Saleor',
    techStack: ['Python', 'Django', 'GraphQL', 'React', 'PostgreSQL']
  },
  {
    id: 'pos',
    name: 'POS',
    title: 'Punto de Venta Inteligente',
    subtitle: 'Sistema de caja para pequeños y medianos negocios',
    description: 'Sistema de punto de venta completo para tu negocio. Gestiona ventas, inventario, clientes y reportes desde una interfaz intuitiva. Funciona sin conexión a internet.',
    category: 'comercio',
    categoryLabel: 'Comercio',
    icon: '💳',
    color: '#10B981',
    demoUrl: 'https://pos.garfenter.com',
    status: 'active',
    features: [
      { title: 'Escaneo de Códigos', description: 'Lectura rápida de códigos de barras', icon: '📷' },
      { title: 'Inventario en Tiempo Real', description: 'Stock actualizado automáticamente', icon: '📊' },
      { title: 'Reportes Detallados', description: 'Ventas, productos, empleados', icon: '📈' },
      { title: 'Multi-tienda', description: 'Gestiona varias ubicaciones', icon: '🏪' },
      { title: 'Modo Offline', description: 'Funciona sin internet', icon: '📴' },
      { title: 'Impresión de Tickets', description: 'Compatible con impresoras térmicas', icon: '🖨️' }
    ],
    benefits: [
      { number: '0', label: 'Costo de licencia' },
      { number: '∞', label: 'Productos ilimitados' },
      { number: '24/7', label: 'Disponibilidad' }
    ],
    useCases: ['Tiendas minoristas', 'Restaurantes y cafés', 'Farmacias', 'Ferreterías'],
    basedOn: 'OSPOS',
    techStack: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap']
  },
  {
    id: 'contable',
    name: 'Contable',
    title: 'Contabilidad Simplificada',
    subtitle: 'Software contable inteligente para PYMEs',
    description: 'Gestiona las finanzas de tu empresa con facilidad. Facturación, reportes financieros, multi-moneda e integración bancaria. Todo lo que necesitas para tomar mejores decisiones.',
    category: 'empresa',
    categoryLabel: 'Empresa',
    icon: '📊',
    color: '#8B5CF6',
    demoUrl: 'https://contable.garfenter.com',
    status: 'active',
    features: [
      { title: 'Facturación Profesional', description: 'Crea facturas elegantes', icon: '📄' },
      { title: 'Reportes Financieros', description: 'Balance, P&L, flujo de caja', icon: '📑' },
      { title: 'Multi-moneda', description: 'Trabaja con cualquier divisa', icon: '💰' },
      { title: 'Integración Bancaria', description: 'Sincroniza tus cuentas', icon: '🏦' },
      { title: 'Gestión de Inventario', description: 'Control de costos', icon: '📦' },
      { title: 'Colaboración', description: 'Múltiples usuarios con roles', icon: '👥' }
    ],
    benefits: [
      { number: '100%', label: 'En la nube' },
      { number: '0', label: 'Instalación requerida' },
      { number: '∞', label: 'Transacciones' }
    ],
    useCases: ['Pequeños negocios', 'Contadores independientes', 'Emprendedores', 'Freelancers'],
    basedOn: 'Bigcapital',
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis']
  },
  {
    id: 'clientes',
    name: 'Clientes',
    title: 'Gestión de Clientes Moderna',
    subtitle: 'CRM moderno alternativa a Salesforce',
    description: 'Gestiona tus relaciones con clientes de forma inteligente. Pipeline de ventas visual, automatización de tareas y API completa para integraciones.',
    category: 'empresa',
    categoryLabel: 'Empresa',
    icon: '👥',
    color: '#EC4899',
    demoUrl: 'https://clientes.garfenter.com',
    status: 'active',
    features: [
      { title: 'Pipeline Visual', description: 'Vista Kanban de oportunidades', icon: '📋' },
      { title: 'Automatización', description: 'Flujos de trabajo sin código', icon: '⚙️' },
      { title: 'API Completa', description: 'GraphQL y REST disponibles', icon: '🔌' },
      { title: 'Personalizable', description: 'Campos y objetos a medida', icon: '🎯' },
      { title: 'Tareas y Notas', description: 'Seguimiento integrado', icon: '📝' },
      { title: 'Importación Fácil', description: 'Desde Excel o CSV', icon: '📥' }
    ],
    benefits: [
      { number: '300+', label: 'Contribuidores' },
      { number: '20K+', label: 'Estrellas GitHub' },
      { number: '100%', label: 'Personalizable' }
    ],
    useCases: ['Equipos de ventas B2B', 'Startups', 'Agencias', 'Consultoras'],
    basedOn: 'Twenty CRM',
    techStack: ['TypeScript', 'React', 'NestJS', 'PostgreSQL']
  },
  {
    id: 'inmuebles',
    name: 'Inmuebles',
    title: 'Administración de Propiedades',
    subtitle: 'Gestión integral de bienes inmuebles',
    description: 'Administra condominios y propiedades de forma eficiente. Tickets de servicio, pagos, facturas y comunicación con residentes en una sola plataforma.',
    category: 'servicios',
    categoryLabel: 'Servicios',
    icon: '🏢',
    color: '#F59E0B',
    demoUrl: 'https://inmuebles.garfenter.com',
    status: 'active',
    features: [
      { title: 'Tickets de Servicio', description: 'Gestiona solicitudes fácilmente', icon: '🎫' },
      { title: 'Portal de Residentes', description: 'Comunicación directa', icon: '🏠' },
      { title: 'Facturación', description: 'Cobros de mantenimiento', icon: '💵' },
      { title: 'Seguimiento de Pagos', description: 'Control de morosidad', icon: '📋' },
      { title: 'Marketplace', description: 'Servicios para residentes', icon: '🛍️' },
      { title: 'Reportes', description: 'Análisis financiero completo', icon: '📊' }
    ],
    benefits: [
      { number: '100%', label: 'Digital' },
      { number: '0', label: 'Papel necesario' },
      { number: '24/7', label: 'Acceso residentes' }
    ],
    useCases: ['Administradores de condominios', 'Edificios residenciales', 'Propiedades comerciales', 'Centros empresariales'],
    basedOn: 'Condo',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS S3']
  },
  {
    id: 'campo',
    name: 'Campo',
    title: 'Gestión Agrícola Digital',
    subtitle: 'Planificación y registro para fincas modernas',
    description: 'Digitaliza la gestión de tu finca. Mapas GPS, registro de cultivos, inventario de insumos y app móvil que funciona sin internet.',
    category: 'servicios',
    categoryLabel: 'Servicios',
    icon: '🌾',
    color: '#22C55E',
    demoUrl: 'https://campo.garfenter.com',
    status: 'active',
    features: [
      { title: 'Mapas GPS', description: 'Delimita áreas y parcelas', icon: '🗺️' },
      { title: 'Registro de Cultivos', description: 'Historial completo de siembras', icon: '🌱' },
      { title: 'Inventario', description: 'Control de insumos y equipos', icon: '📦' },
      { title: 'App Móvil', description: 'Funciona sin internet', icon: '📱' },
      { title: 'Planificación', description: 'Calendario de actividades', icon: '📅' },
      { title: 'Reportes', description: 'Análisis de rendimiento', icon: '📈' }
    ],
    benefits: [
      { number: '50+', label: 'Países usando farmOS' },
      { number: '100%', label: 'Personalizable' },
      { number: '0', label: 'Costo mensual' }
    ],
    useCases: ['Agricultores', 'Fincas familiares', 'Cooperativas agrícolas', 'Producción orgánica'],
    basedOn: 'farmOS',
    techStack: ['Drupal', 'PHP', 'PostgreSQL', 'PWA']
  },
  {
    id: 'banco',
    name: 'Banco',
    title: 'Plataforma de Microfinanzas',
    subtitle: 'Core banking para instituciones financieras',
    description: 'Sistema bancario completo para cooperativas y microfinancieras. Gestión de préstamos, ahorros, clientes y reportes regulatorios.',
    category: 'servicios',
    categoryLabel: 'Servicios',
    icon: '🏦',
    color: '#0EA5E9',
    demoUrl: 'https://banco.garfenter.com',
    status: 'active',
    features: [
      { title: 'Gestión de Préstamos', description: 'Múltiples productos de crédito', icon: '💳' },
      { title: 'Cuentas de Ahorro', description: 'Intereses configurables', icon: '💰' },
      { title: 'Gestión de Clientes', description: 'Perfiles completos', icon: '👤' },
      { title: 'API REST', description: 'Integraciones externas', icon: '🔌' },
      { title: 'Reportes Regulatorios', description: 'Cumplimiento normativo', icon: '📋' },
      { title: 'Multi-oficina', description: 'Varias sucursales', icon: '🏢' }
    ],
    benefits: [
      { number: '50+', label: 'Países implementados' },
      { number: '2M+', label: 'Clientes atendidos' },
      { number: '100%', label: 'Configurable' }
    ],
    useCases: ['Cooperativas de ahorro', 'Microfinancieras', 'Bancos comunitarios', 'Fintechs'],
    basedOn: 'Apache Fineract',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'REST API']
  },
  {
    id: 'salud',
    name: 'Salud',
    title: 'Sistema Hospitalario Integral',
    subtitle: 'Gestión de hospitales y registros médicos',
    description: 'Sistema completo para gestión hospitalaria. Pacientes, citas, laboratorio, farmacia y facturación. Funciona sin conexión a internet.',
    category: 'especializado',
    categoryLabel: 'Especializado',
    icon: '🏥',
    color: '#EF4444',
    demoUrl: 'https://salud.garfenter.com',
    status: 'active',
    features: [
      { title: 'Registro de Pacientes', description: 'Historial médico completo', icon: '👤' },
      { title: 'Citas Médicas', description: 'Agenda y recordatorios', icon: '📅' },
      { title: 'Laboratorio', description: 'Gestión de muestras y resultados', icon: '🔬' },
      { title: 'Farmacia', description: 'Inventario de medicamentos', icon: '💊' },
      { title: 'Facturación', description: 'Cobros y seguros', icon: '💵' },
      { title: 'Modo Offline', description: 'Funciona sin internet', icon: '📴' }
    ],
    benefits: [
      { number: '500+', label: 'Hospitales usando HMIS' },
      { number: '2M+', label: 'Pacientes registrados' },
      { number: '50+', label: 'Países' }
    ],
    useCases: ['Hospitales', 'Clínicas', 'Centros de salud', 'Laboratorios clínicos'],
    basedOn: 'Bahmni/HMIS',
    techStack: ['OpenMRS', 'Java', 'PostgreSQL', 'Angular']
  },
  {
    id: 'delivery',
    name: 'Delivery',
    title: 'Plataforma de Entregas',
    subtitle: 'Sistema completo tipo UberEats para tu negocio',
    description: 'Lanza tu propia plataforma de delivery. App para clientes, app para repartidores, panel de restaurantes y tracking GPS en tiempo real.',
    category: 'especializado',
    categoryLabel: 'Especializado',
    icon: '🛵',
    color: '#F97316',
    demoUrl: 'https://delivery.garfenter.com',
    status: 'active',
    features: [
      { title: 'App Clientes', description: 'Ordena desde el celular', icon: '📱' },
      { title: 'App Repartidores', description: 'Gestión de entregas', icon: '🛵' },
      { title: 'Multi-restaurante', description: 'Varios negocios en uno', icon: '🍽️' },
      { title: 'Tracking GPS', description: 'Seguimiento en tiempo real', icon: '📍' },
      { title: 'Pagos Online', description: 'Múltiples métodos', icon: '💳' },
      { title: 'Panel Admin', description: 'Control total', icon: '⚙️' }
    ],
    benefits: [
      { number: '100%', label: 'Personalizable' },
      { number: '0', label: 'Comisiones a terceros' },
      { number: '∞', label: 'Pedidos sin límite' }
    ],
    useCases: ['Restaurantes', 'Dark kitchens', 'Cadenas de comida', 'Servicios de delivery'],
    basedOn: 'Enatega',
    techStack: ['React Native', 'Node.js', 'GraphQL', 'MongoDB']
  },
  {
    id: 'educacion',
    name: 'Educación',
    title: 'Plataforma de Aprendizaje',
    subtitle: 'Sistema de gestión de aprendizaje líder mundial',
    description: 'LMS completo para instituciones educativas. Cursos, tareas, evaluaciones, videoconferencia y app móvil. Usado por miles de universidades.',
    category: 'especializado',
    categoryLabel: 'Especializado',
    icon: '🎓',
    color: '#6366F1',
    demoUrl: 'https://educacion.garfenter.com',
    status: 'active',
    features: [
      { title: 'Gestión de Cursos', description: 'Contenido organizado en módulos', icon: '📚' },
      { title: 'Tareas y Evaluaciones', description: 'Entregas y calificaciones', icon: '✍️' },
      { title: 'Videoconferencia', description: 'Clases en vivo integradas', icon: '📹' },
      { title: 'App Móvil', description: 'Acceso desde cualquier lugar', icon: '📱' },
      { title: 'Foros de Discusión', description: 'Interacción estudiantes', icon: '💬' },
      { title: 'Reportes', description: 'Progreso y desempeño', icon: '📊' }
    ],
    benefits: [
      { number: '5000+', label: 'Instituciones mundiales' },
      { number: '1000+', label: 'Integraciones' },
      { number: '33%', label: 'Mercado LMS en USA' }
    ],
    useCases: ['Universidades', 'Colegios', 'Institutos técnicos', 'Capacitación corporativa'],
    basedOn: 'Canvas LMS',
    techStack: ['Ruby on Rails', 'React', 'PostgreSQL', 'Redis']
  },
  {
    id: 'mercado',
    name: 'Mercado',
    title: 'Marketplace Multi-vendedor',
    subtitle: 'Crea tu propio mercado digital',
    description: 'Plataforma para crear marketplaces con múltiples vendedores. Panel de administración, gestión de vendedores y pagos integrados.',
    category: 'comercio',
    categoryLabel: 'Comercio',
    icon: '🏪',
    color: '#14B8A6',
    demoUrl: '#',
    status: 'coming-soon',
    features: [
      { title: 'Multi-vendedor', description: 'Múltiples tiendas en uno', icon: '👥' },
      { title: 'Panel Vendedores', description: 'Cada vendedor gestiona lo suyo', icon: '📊' },
      { title: 'Gestión de Órdenes', description: 'Sub-órdenes automáticas', icon: '📦' },
      { title: 'Comisiones', description: 'Sistema de comisiones flexible', icon: '💰' },
      { title: 'Pagos Split', description: 'División automática de pagos', icon: '💳' },
      { title: 'API Headless', description: 'Frontend personalizable', icon: '🔌' }
    ],
    benefits: [
      { number: '100%', label: 'Personalizable' },
      { number: '0', label: 'Comisiones plataforma' },
      { number: '∞', label: 'Vendedores' }
    ],
    useCases: ['Marketplaces de productos', 'Plataformas artesanales', 'Distribuidoras', 'Centros comerciales virtuales'],
    basedOn: 'Spurt Commerce',
    techStack: ['Node.js', 'Express', 'Angular', 'MySQL']
  },
  {
    id: 'erp',
    name: 'ERP',
    title: 'ERP Empresarial Completo',
    subtitle: 'Gestión integral de tu empresa',
    description: 'Sistema ERP completo con módulos para ventas, compras, inventario, contabilidad, recursos humanos y más. Todo en una sola plataforma.',
    category: 'empresa',
    categoryLabel: 'Empresa',
    icon: '🏭',
    color: '#7C3AED',
    demoUrl: '#',
    status: 'coming-soon',
    features: [
      { title: 'Ventas y CRM', description: 'Gestión comercial completa', icon: '💼' },
      { title: 'Compras', description: 'Proveedores y órdenes', icon: '📝' },
      { title: 'Inventario', description: 'Almacenes y logística', icon: '📦' },
      { title: 'Contabilidad', description: 'Finanzas integradas', icon: '💰' },
      { title: 'Recursos Humanos', description: 'Nómina y empleados', icon: '👥' },
      { title: 'Manufactura', description: 'Producción y MRP', icon: '🏭' }
    ],
    benefits: [
      { number: '30K+', label: 'Apps disponibles' },
      { number: '80+', label: 'Partners Guatemala' },
      { number: '12M+', label: 'Usuarios mundiales' }
    ],
    useCases: ['Empresas medianas', 'Manufactura', 'Distribución', 'Servicios profesionales'],
    basedOn: 'Odoo',
    techStack: ['Python', 'PostgreSQL', 'JavaScript', 'XML']
  }
];

export const categories = [
  { id: 'comercio', label: 'Comercio', icon: '🛒', description: 'Vende más, mejor' },
  { id: 'empresa', label: 'Empresa', icon: '💼', description: 'Gestiona tu negocio' },
  { id: 'servicios', label: 'Servicios', icon: '🏠', description: 'Servicios especializados' },
  { id: 'especializado', label: 'Especializado', icon: '🏥', description: 'Industrias específicas' }
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getActiveProducts(): Product[] {
  return products.filter(p => p.status === 'active');
}

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
