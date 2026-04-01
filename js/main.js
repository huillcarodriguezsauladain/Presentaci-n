// =============================================
// DATOS DEL EQUIPO — Los Malditos de Diseño de Software
// Universidad Continental, Sede Cusco
// =============================================

const studentsData = {
    saul: {
        name: "Saul Adain Huillca Rodriguez",
        role: "Ing. Informática",
        colorClass: "cyan",
        img: "assets/img/saul.jpg",
        fallbackImg: "https://i.pravatar.cc/150?u=saul",
        github: "https://github.com/huillcarodriguezsauladain",
        bio: "Estudiante de Ingeniería Informática en la Universidad Continental sede Cusco. Enfocado en la creación y diseño de software estructurado, buscando siempre soluciones eficientes a problemas complejos.",
        skills: [
            { name: "Diseño de Software",              level: "85%" },
            { name: "Programación Orientada a Objetos", level: "80%" },
            { name: "Trabajo en Equipo",               level: "90%" }
        ]
    },
    eduardo: {
        name: "Eduardo Luna Lezano",
        role: "Ing. Informática",
        colorClass: "emerald",
        img: "assets/img/eduardo.jpg",
        fallbackImg: "https://i.pravatar.cc/150?u=eduardo",
        github: "https://github.com/EduardoLunaLezano",
        bio: "Estudiante de Ingeniería Informática en la Universidad Continental sede Cusco. Interesado en metodologías de desarrollo y arquitectura tecnológica, con enfoque en análisis de sistemas.",
        skills: [
            { name: "Análisis de Sistemas",   level: "85%" },
            { name: "Desarrollo de Software", level: "80%" },
            { name: "Resolución de Problemas", level: "85%" }
        ]
    },
    gari: {
        name: "Gari Joel Chavez Huanca",
        role: "Ing. Informática",
        colorClass: "purple",
        img: "assets/img/gari.jpg",
        fallbackImg: "https://i.pravatar.cc/150?u=gari",
        github: "https://github.com/joelchavezhuanca",
        bio: "Estudiante de Ingeniería Informática en la Universidad Continental sede Cusco. Apasionado por la tecnología y la optimización de procesos mediante el desarrollo de software.",
        skills: [
            { name: "Lógica de Programación", level: "85%" },
            { name: "Bases de Datos",         level: "75%" },
            { name: "Metodologías Ágiles",    level: "80%" }
        ]
    },
    cuarto: {
        name: "Cuarto Integrante",
        role: "Ing. Informática",
        colorClass: "orange",
        img: "assets/img/cuarto.jpg",
        fallbackImg: "https://i.pravatar.cc/150?u=cuarto",
        github: "https://github.com/",
        bio: "Estudiante de Ingeniería Informática en la Universidad Continental sede Cusco. (Perfil pendiente de ser actualizado con la información del cuarto miembro del equipo).",
        skills: [
            { name: "Habilidad 1", level: "70%" },
            { name: "Habilidad 2", level: "70%" },
            { name: "Habilidad 3", level: "70%" }
        ]
    }
};

// Paleta de colores por integrante
const themeColors = {
    cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500',    border: 'border-cyan-500/50',    gradient: 'from-cyan-500/20 to-transparent'    },
    emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500/50', gradient: 'from-emerald-500/20 to-transparent' },
    purple:  { text: 'text-purple-400',  bg: 'bg-purple-500',  border: 'border-purple-500/50',  gradient: 'from-purple-500/20 to-transparent'  },
    orange:  { text: 'text-orange-400',  bg: 'bg-orange-500',  border: 'border-orange-500/50',  gradient: 'from-orange-500/20 to-transparent'  }
};

const modal     = document.getElementById('profileModal');
const modalCard = document.getElementById('modalCard');

// Abrir modal con los datos del integrante
function openModal(studentId) {
    const data  = studentsData[studentId];
    const theme = themeColors[data.colorClass];

    // Imagen con fallback automático
    const modalImg = document.getElementById('modalImg');
    modalImg.src = data.img;
    modalImg.onerror = function () {
        this.onerror = null;
        this.src = data.fallbackImg;
    };
    modalImg.className = `w-32 h-32 rounded-full border-4 object-cover shadow-xl relative z-10 mb-4 bg-slate-800 ${theme.border}`;

    document.getElementById('modalName').textContent  = data.name;
    document.getElementById('modalRole').textContent  = data.role;
    document.getElementById('modalRole').className    = `text-xs font-bold uppercase tracking-wider mb-6 relative z-10 text-center ${theme.text}`;
    document.getElementById('modalBio').textContent   = data.bio;
    document.getElementById('modalGithub').href       = data.github;
    document.getElementById('modalBg').className      = `absolute inset-0 bg-gradient-to-b ${theme.gradient} opacity-40`;

    // Inyectar barras de habilidades
    const skillsContainer = document.getElementById('modalSkills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div>
                <div class="flex justify-between text-xs mb-1">
                    <span class="text-slate-300 font-medium">${skill.name}</span>
                    <span class="text-slate-400">${skill.level}</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                    <div class="${theme.bg} h-2 rounded-full animate-fill" style="width: ${skill.level}"></div>
                </div>
            </div>`;
    });

    // Mostrar modal con animación
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalCard.classList.remove('scale-95');
        modalCard.classList.add('scale-100');
    }, 10);

    document.body.classList.add('no-scroll');
}

// Cerrar modal
function closeModal() {
    modal.classList.add('opacity-0');
    modalCard.classList.remove('scale-100');
    modalCard.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }, 300);
}

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});