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
    linkedinUrl: "https://www.linkedin.com/in/jorge-rosales-salas-58817020/"
  },
  stats: {
    yearsExperience: 18, 
    papersPublished: 25, 
    thesesSupervised: 15, 
    awardsWon: 16, 
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
    }
  ],
  honors: [
    { id: "h-1", title: "Global Young Academy membership", institution: "Global Young Academy", year: "2023" },
    { id: "h-2", title: "Luksic Scholar", institution: "Sciences Po, París", year: "2022" },
    { id: "h-3", title: "Runner up en Concurso mundial '8th way to think like a 21th century economist'", institution: "", year: "2020" },
    { id: "h-4", title: "Beca Iberoamérica Jóvenes Profesores e Investigadores", institution: "Santander Universidades", year: "2018" },
    { id: "h-5", title: "Ranking 1° de egreso Doctorado", institution: "Universidad de Chile", year: "2015" },
    { id: "h-6", title: "Becas Chile - Pasantía Doctoral", institution: "CONICYT (Bélgica)", year: "2012" }
  ],
  experience: [
    {
      id: "job-1",
      role: "Director del Centro de Investigación y Desarrollo en Ingeniería (CIDI)",
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
      authors: "Rosales-Salas, Jorge",
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
      title: "Time use: The role of sleep",
      type: "paper",
      journal: "Transportation Research Part A: Policy and Practice",
      year: "2020",
      authors: "Jara-Díaz, S., and Rosales-Salas, J."
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