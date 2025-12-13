import { ResumeData } from './types';

export const mockResumeData: ResumeData = {
  personalInfo: {
    name: "Jorge Agustín Rosales Salas",
    title: "PhD en Sistemas de Ingeniería | Investigador",
    tagline: "Especialista en uso, valor y pobreza del tiempo, políticas públicas y optimización.",
    location: "Santiago, Chile",
    email: "jorge@jorgerosales.cl",
    phone: "+56984106372",
    about: "Doctor en Sistemas de Ingeniería por la Universidad de Chile con trayectoria consolidada en investigación interdisciplinaria. Mi foco está en la economía, políticas públicas y análisis cuantitativo. He liderado centros de investigación y programas académicos innovadores como los Proyectos VIP. Me apasiona modelar cómo las personas valoran y utilizan su recurso más escaso: el tiempo.",
    avatarUrl: "https://i.postimg.cc/KjjC6Y6K/1704991759135.jpg", 
    cvUrl: "https://drive.google.com/file/d/1zVoyHbTdPAPnRWV6nXHSpd3NgiS4GtQW/view?usp=sharing",
    linkedinUrl: "https://www.linkedin.com/in/jorge-rosales-salas-58817020/",
    xUrl: "https://x.com/jrosalessalas"
  },
  stats: {
    yearsExperience: 18, 
    papersPublished: 25, 
    thesesSupervised: 15, 
    awardsWon: 21, 
  },
  highlightBook: {
    title: "Sistema Nacional de Ocio para Chile",
    subtitle: "Doctor Tiempo",
    description: "Una obra transformadora que explora la importancia del tiempo libre, el bienestar y la calidad de vida en nuestra sociedad. Este libro propone un Sistema Nacional de Ocio fundamentado en experiencias internacionales para garantizar el acceso equitativo a los beneficios del tiempo libre, especialmente relevante ante la reducción de la jornada laboral.",
    downloadUrl: "https://drive.google.com/file/d/1kePTX-loIPK7SNK4-JSDOtaEuNYM_qK1/view?usp=sharing",
    coverUrl: "https://i.postimg.cc/NFLfdBb4/image.png"
  },
  highlightManual: {
    title: "Manual de Planificación Estratégica para Instituciones de Salud",
    subtitle: "Editores: Jorge Rosales Salas, PhD & Dr. Sebastián Pizarro",
    description: "Una guía integral diseñada para equipos directivos y profesionales de la salud que busca transformar la planificación en una práctica viva. Ofrece herramientas rigurosas para diseñar, implementar y evaluar procesos estratégicos orientados a resultados clínicos, organizacionales y sociales en entornos de alta incertidumbre.",
    downloadUrl: "https://drive.google.com/file/d/1AOQBldDyOxo5IdhwIFbBZpGv-X496w7S/view?usp=sharing",
    webUrl: "https://manualestrategicodesalud.cl/",
    coverUrl: "https://i.postimg.cc/W1rpQ8ZY/image.png"
  },
  skills: [
    { name: "Microeconomía & Macroeconomía", level: 95, category: "core" },
    { name: "Políticas Públicas", level: 90, category: "core" },
    { name: "Modelación de Uso del Tiempo", level: 100, category: "core" },
    { name: "Data Mining / Análisis Cuantitativo", level: 85, category: "methodology" },
    { name: "Diseño Curricular", level: 90, category: "methodology" },
    { name: "Liderazgo Académico", level: 85, category: "soft" },
    { name: "Docencia Universitaria", level: 95, category: "soft" },
  ],
  education: [
    {
      id: "edu-1",
      degree: "PhD en Sistemas de Ingeniería",
      institution: "Universidad de Chile",
      year: "2015",
      details: ["Ranking 1 de egreso", "Tesis: Modelación y valoración del uso del tiempo: hacia un enfoque integrado."]
    },
    {
      id: "edu-2",
      degree: "Magíster en Ciencias de la Administración, mención Finanzas",
      institution: "Universidad del Desarrollo",
      year: "2009",
      details: ["Distinción máxima y ranking 1 de egreso"]
    },
    {
      id: "edu-3",
      degree: "Ingeniero Civil Industrial",
      institution: "Universidad del Desarrollo",
      year: "2007",
      details: ["Distinción máxima y ranking 1 de egreso"]
    },
    {
      id: "edu-4",
      degree: "Minor en Ciencias Políticas",
      institution: "Universidad del Desarrollo",
      year: "2007",
      details: ["Facultad de Gobierno"]
    }
  ],
  honors: [
    { id: "h-1", title: "Global Young Academy membership", institution: "Global Young Academy", year: "2023" },
    { id: "h-2", title: "Luksic Scholar", institution: "Sciences Po, París", year: "2022" },
    { id: "h-3", title: "Best Paper Award", institution: "WCTRS", year: "2022" },
    { id: "h-4", title: "Premio Reconocimiento a la Investigación", institution: "Universidad Mayor", year: "2021" },
    { id: "h-5", title: "Runner up '8th way to think like a 21th century economist'", institution: "Global Contest", year: "2020" },
    { id: "h-6", title: "Profesor Mejor Evaluado Postgrado", institution: "Universidad Mayor", year: "2019" },
    { id: "h-7", title: "Beca Iberoamérica Jóvenes Profesores e Investigadores", institution: "Santander Universidades", year: "2018" },
    { id: "h-8", title: "Beca Postdoctorado", institution: "FONDECYT", year: "2016" },
    { id: "h-9", title: "Tesis Doctoral Destacada", institution: "SOCHITRAN", year: "2015" },
    { id: "h-10", title: "Ranking 1° de egreso Doctorado", institution: "Universidad de Chile", year: "2015" },
    { id: "h-11", title: "Travel Grant", institution: "Kuhmo Nectarn Conference", year: "2014" },
    { id: "h-12", title: "Becas Chile - Pasantía Doctoral", institution: "CONICYT (Bélgica)", year: "2012" },
    { id: "h-13", title: "Beca CONICYT Doctorado Nacional", institution: "Gobierno de Chile", year: "2011" },
    { id: "h-14", title: "Distinción Máxima Magíster en Finanzas", institution: "Universidad del Desarrollo", year: "2009" },
    { id: "h-15", title: "Ranking 1° Egreso Magíster", institution: "Universidad del Desarrollo", year: "2009" },
    { id: "h-16", title: "Premio Colegio de Ingenieros de Chile", institution: "Mejor Titulado Promoción", year: "2008" },
    { id: "h-17", title: "Premio al Mejor Alumno Ingeniería Civil Industrial", institution: "Universidad del Desarrollo", year: "2007" },
    { id: "h-18", title: "Beca de Excelencia Académica", institution: "Universidad del Desarrollo", year: "2006" },
    { id: "h-19", title: "Matrícula de Honor", institution: "Universidad del Desarrollo", year: "2005" },
    { id: "h-20", title: "Matrícula de Honor", institution: "Universidad del Desarrollo", year: "2004" },
    { id: "h-21", title: "Beca Talento Académico", institution: "Universidad del Desarrollo", year: "2003" }
  ],
  experience: [
    {
      id: "job-1",
      role: "Director del Centro de Innovación y Desarrollo en Ingeniería Aplicada (CIDIA)",
      company: "Universidad Finis Terrae",
      period: "2025 – Presente",
      description: "Liderazgo estratégico del centro de investigación, fomentando el desarrollo científico y tecnológico en ingeniería.",
      achievements: ["Gestión de investigación aplicada.", "Desarrollo de proyectos interdisciplinarios."],
      type: "management"
    },
    {
      id: "job-2",
      role: "Académico Investigador",
      company: "Universidad Finis Terrae",
      period: "2025 – Presente",
      description: "Investigación en Ingeniería Civil Industrial y docencia de pregrado.",
      achievements: [],
      type: "academic"
    },
    {
      id: "job-3",
      role: "Director de Proyectos Verticalmente Integrados (VIP)",
      company: "Universidad Mayor",
      period: "2020 – 2024",
      description: "Director del programa internacional de docencia investigativa e innovación educativa.",
      achievements: ["Implementación de estrategias para fortalecer la investigación interdisciplinaria.", "Coordinación Facultad de Estudios Interdisciplinarios."],
      type: "management"
    },
    {
      id: "job-4",
      role: "Profesor Asistente e Investigador",
      company: "Universidad Mayor (Centro de Economía y Políticas Sociales)",
      period: "2017 – 2024",
      description: "Investigación académica y docencia en el área de economía y políticas sociales.",
      achievements: ["Encuesta de Uso de Tiempo Académicos (2023)", "Proyectos InES Género"],
      type: "academic"
    },
    {
      id: "job-5",
      role: "Director de Investigación",
      company: "Universidad Bernardo O'Higgins (Escuela Ingeniería Comercial)",
      period: "2017",
      description: "Dirección de investigación y fomento de productividad científica.",
      achievements: [],
      type: "management"
    },
    {
      id: "job-6",
      role: "Investigador Postdoctoral",
      company: "Universidad de los Andes",
      period: "2015 – 2017",
      description: "Investigación en Facultad de Ingeniería y Ciencias Aplicadas.",
      achievements: [],
      type: "academic"
    }
  ],
  researchProjects: [
    {
      id: "res-1",
      title: "TIME USE IN CHILE: NEW MODELING FRAMEWORKS AND SURVEY APPLICATION",
      role: "Investigador Responsable",
      source: "FONDECYT INICIACION",
      year: "2018 – 2021"
    },
    {
      id: "res-2",
      title: "TIME USE VALUATION USING DATA MINING TECHNIQUES",
      role: "Investigador Responsable",
      source: "FONDECYT POSTDOCTORADO",
      year: "2015 – 2017"
    },
    {
      id: "res-3",
      title: "ENCUESTA NACIONAL DE USO DE TIEMPO Y BIENESTAR PARA LA COMUNIDAD LGBTQIANB+ EN CHILE",
      role: "Investigador Principal",
      source: "Red Diversa / OTD",
      year: "2022"
    }
  ],
  publications: [
    {
      id: "pub-book",
      title: "Sistema Nacional de Ocio para Chile",
      type: "book",
      year: "2023",
      authors: "Rosales-Salas, J.",
      link: "ISBN 978-956-9852-23-7"
    },
    {
      id: "pub-1",
      title: "The job of public transport, ride-hailing and delivery drivers: Conditions during COVID-19",
      type: "paper",
      journal: "Travel Behaviour and Society",
      year: "2023",
      authors: "Fielbaum, A., Ruiz, F., Boccardo, G., Rubio, D., Tirachini, A., Rosales-Salas, J."
    },
    {
      id: "pub-2",
      title: "Pobreza de tiempo, género y vivienda social en Santiago de Chile",
      type: "paper",
      journal: "Revista EURE",
      year: "2022",
      authors: "Castillo, M., Sanhueza, C., Rosales-Salas, J., & Sandoval, D."
    },
    {
      id: "pub-3",
      title: "Vertically Integrated Project Programs in South America",
      type: "paper",
      journal: "IEEE World Engineering Education Conference",
      year: "2022",
      authors: "Sonnenberg-Klein, J., Rosales-Salas, J., et al."
    },
    {
      id: "pub-4",
      title: "Time use and mental health during the pandemic in Chile",
      type: "paper",
      journal: "Public Health",
      year: "2021",
      authors: "Rosales-Salas, J., et al."
    },
    {
      id: "pub-5",
      title: "Time use: The role of sleep",
      type: "paper",
      journal: "Transportation Research Part A: Policy and Practice",
      year: "2020",
      authors: "Jara-Díaz, S., and Rosales-Salas, J."
    },
    {
      id: "pub-6",
      title: "Understanding Time Poverty: A Case Study in Chile",
      type: "paper",
      journal: "Social Indicators Research",
      year: "2019",
      authors: "Rosales-Salas, J."
    },
    {
      id: "pub-7",
      title: "Valuation of Leisure: An Integrated Approach",
      type: "paper",
      journal: "Journal of Transport Economics and Policy",
      year: "2018",
      authors: "Jara-Díaz, S., Rosales-Salas, J., et al."
    },
    {
      id: "pub-8",
      title: "Modeling time use in developing countries",
      type: "paper",
      journal: "Transportation",
      year: "2017",
      authors: "Rosales-Salas, J., Banister, D."
    },
    {
      id: "pub-9",
      title: "Measuring time poverty thresholds in urban households",
      type: "paper",
      journal: "Applied Economics Letters",
      year: "2017",
      authors: "Rosales-Salas, J."
    },
    {
      id: "pub-10",
      title: "El impacto del transporte en la calidad de vida urbana",
      type: "paper",
      journal: "Revista de Ingeniería de Sistemas",
      year: "2016",
      authors: "Rosales-Salas, J."
    },
    {
      id: "pub-11",
      title: "Gender differences in time allocation in Santiago",
      type: "paper",
      journal: "Time & Society",
      year: "2015",
      authors: "Rosales-Salas, J., Jara-Díaz, S."
    },
    {
      id: "pub-12",
      title: "Subjective well-being and time use allocation",
      type: "paper",
      journal: "Journal of Happiness Studies",
      year: "2014",
      authors: "Rosales-Salas, J."
    },
    {
      id: "pub-13",
      title: "Income inequality and time allocation in Latin American cities",
      type: "paper",
      journal: "Development Policy Review",
      year: "2013",
      authors: "Rosales-Salas, J., et al."
    },
    {
      id: "pub-14",
      title: "The economic value of waiting time in public transport",
      type: "paper",
      journal: "Transport Policy",
      year: "2012",
      authors: "Rosales-Salas, J."
    },
    {
      id: "pub-15",
      title: "Urban structure and social exclusion in Santiago",
      type: "paper",
      journal: "Latin American Urban Studies",
      year: "2011",
      authors: "Rosales-Salas, J."
    }
  ],
  conferences: [
    {
      id: "conf-4",
      title: "Economía del Ocio y Bienestar",
      event: "Encuentro Sociedad de Economía de Chile",
      location: "Viña del Mar, Chile",
      year: "2021"
    },
    {
      id: "conf-2",
      title: "Desigualdad en el uso del tiempo: Una mirada desde la ingeniería",
      event: "Congreso Chileno de Ingeniería de Transporte",
      location: "Concepción, Chile",
      year: "2019"
    },
    {
      id: "conf-3",
      title: "Políticas de transporte y equidad social",
      event: "PANAM Transportation Research",
      location: "Río de Janeiro, Brasil",
      year: "2018"
    },
    {
      id: "conf-5",
      title: "Optimización de recursos en sistemas de salud",
      event: "Simposio Latinoamericano de Investigación de Operaciones",
      location: "São Paulo, Brasil",
      year: "2016"
    },
    {
      id: "conf-1",
      title: "Microeconomic Modeling of Time Use",
      event: "Thredbo International Conference",
      location: "Santiago, Chile",
      year: "2015"
    }
  ],
  personalProjects: [
    {
      id: "pp-1",
      title: "TimeAllocator AI",
      description: "Herramienta basada en Python y TensorFlow para optimizar agendas personales utilizando algoritmos de uso del tiempo derivados de mi investigación doctoral.",
      techStack: ["Python", "TensorFlow", "React", "FastAPI"],
      githubUrl: "https://github.com/jorgerosales/time-allocator"
    },
    {
      id: "pp-2",
      title: "Santiago Transit Viz",
      description: "Visualización interactiva de patrones de movilidad en Santiago post-pandemia utilizando D3.js y datos públicos de transporte.",
      techStack: ["JavaScript", "D3.js", "Mapbox GL"],
      githubUrl: "https://github.com/jorgerosales/santiago-transit"
    },
    {
      id: "pp-3",
      title: "Academic Paper Parser",
      description: "Utilidad de procesamiento de lenguaje natural (NLP) para extraer y resumir automáticamente hallazgos clave de papers académicos en formato PDF.",
      techStack: ["Python", "NLTK", "OpenAI API"],
      githubUrl: "https://github.com/jorgerosales/paper-parser"
    }
  ]
};