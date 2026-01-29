// Tailwind Config
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#5048e5", // Teal/Blue for Tech
                "background-light": "#f8fafc",
                "background-dark": "#0f172a",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
        },
    },
};

// ========================================
// 1. DATA CONFIGURATION (EDIT HERE)
// ========================================

const BANNER_MESSAGE = "  Call For Papers Open  ";

const IMPORTANT_DATES = [
    { title: "Call for Papers", date: "16 March 2026" },
    // { title: "Draft Submission Extended", date: "22 January 2026" },
    { title: "Notification of Acceptance", date: "25 May 2026" },
    { title: "Final Paper Submission", date: "25 April 2026" },
    // { title: "Early Bird Registration", date: "24 February 2026" },
    { title: "Conference Dates", date: "June 26-27, 2026" },
    { title: "Late Date For Registration", date: "10 June 2026" }
];

const SPEAKERS = [
    {
        name: "Sri. Laj Lal",
        designation: "Build Engineer, Apple, Japan",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker5.jpeg"
    },
    {
        name: "Dr Rubell Marion Lincy",
        designation: "HOD, Dept. of Computer Science & Engineering,IIIT Kottayam",
        topic: "Quantum Computing",
        image: "assets/speakers/speaker2.jpeg"
    },
    {
        name: "Prof. D. Sakthi Kumar",
        designation: "Graduate School of Interdisciplinary New Science, Toyo University, Japan",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker3.jpg"
    },
    {
        name: "Dr. Padmakumar Nair",
        designation: "Vice Chancellor, Thapar Institute of Engineering and Technology, Punjab",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker4.png"
    },
     {
        name: "Dr. Sreekanth K. J",
        designation: "Research Scientist, Kuwait Institute for Scientific Research",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker1.jpeg" 
    },
    {
        name: "Dr. Toby Cumberbatch",
        designation: "Chair IEEE Smart Village Education Committee",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker9.jpg" 
    },
    {
        name: "Dr. Anna Charly",
        designation: "Faculty of Science and Engineering, University of Liverpool, U.K.",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker8.jpeg" 
    },
    {
        name: "Dr. Achuthsankar S Nair",
        designation: "Former Professor & HOD of Bioinformatics,University of Kerala",
        topic: "xxxxxxxxxxxxxx",
        image: "assets/speakers/speaker6.png" 
    },
];

const PATRONS = [
    { name: "Mr. Gireesh Kumar Malattiri", role: "Chairman", institution: "VICT" },
    { name: "Mr. Manu Reghurajan", role: "Secretary", institution: "VICT" },
];

const ORGANIZING_COMMITTEE = [
    { name: "Dr. Sunitha C", role: "Organising Chair, Principal", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Jeeva K. A", role: "HoD, AIML (Coordinator)", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Reji C Joy", role: "HoD, MCA (Coordinator)", institution: "Vidya Academy of Science & Technology" },
];

const ADVISORY_COMMITTEE = [
    { name: "Prof. D. Sakthi Kumar", role: "Graduate School of Interdisciplinary New Science", institution: "Toyo University, Japan" },
    { name: "Dr. Sreekanth K. J", role: "Research Scientist", institution: "Kuwait Institute for Scientific Research, Kuwait" },
    { name: "Dr. Toby Cumberbatch", role: "", institution: "" },
    { name: "Dr. Padmakumar Nair", role: "Vice Chancellor", institution: "Thapar Institute of Engineering and Technology, Punjab" },
    { name: "Dr. Anna Charly", role: "Faculty of Science and Engineering", institution: "University of Liverpool, U.K." },
    { name: "Sri. Shashi Nambisan", role: "Director; Transportation Research Center; Professor of Civil Engineering", institution: "University of Nevada–Las Vegas, USA" },
    { name: "Pramodkumar Karunalayam", role: "Digital Transformation Evangelist, AI Strategist", institution: "Philip Morris, Japan" },
    { name: "Dr. Digvijay S. Pawar", role: "Associate Professor", institution: "IIT Hyderabad" },
    { name: "Dr. Achuthsankar S. Nair", role: "Former Professor and Head, Dept. of Bioinformatics", institution: "University of Kerala" },
    { name: "Prof. Gayathri Bharathan", role: "Assistant Professor, Optics and Photonics Centre", institution: "IIIT Delhi" },
    { name: "Sri. Laj Lal", role: "Build Engineer", institution: "Apple, Japan" },
    { name: "Dr. A. Jaya", role: "Professor & Director (CDOE)", institution: "BSAR Crescent Institute of Science and Technology, Chennai" },
    { name: "Dr. V. N. Krishnachandran", role: "", institution: "" },
    { name: "Dr. Sudha Balagopalan", role: "Professor, EEE", institution: "Kerala" },
    { name: "Dr. Harigovindan V. P", role: "Professor & Dean", institution: "NIT Puducherry" },
    { name: "Sri. Zaher Abdulrahman", role: "Electronics Lead Engineer", institution: "Jaguar Land Rover Ltd., Germany" },
    { name: "Dr. Shailesh Sivan", role: "Principal AI Architect", institution: "University of Madras" },
    { name: "Dr. Shalij P. R", role: "Academic Director", institution: "Vidya Academy of Science and Technology" },
];

// ========================================
// 2. RENDERING FUNCTIONS
// ========================================

function renderDates() {
    const container = document.getElementById('dates-container');
    if (!container) return;
    
    container.innerHTML = IMPORTANT_DATES.map(item => `
        <div class="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-primary transition-colors group">
            <div class="text-xs font-bold uppercase tracking-wider text-primary mb-2 opacity-60 group-hover:opacity-100">${item.title}</div>
            <div class="text-xl font-bold">${item.date}</div>
        </div>
    `).join('');
}

function renderSpeakers() {
    const container = document.getElementById('speakers-grid');
    if (!container) return;

    container.innerHTML = SPEAKERS.map(speaker => `
        <div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 shadow-lg border border-slate-200 dark:border-white/10">
            <div class="aspect-square overflow-hidden bg-slate-200">
                <img src="${speaker.image}" alt="${speaker.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-6 relative">
                <h4 class="text-lg font-bold mb-1">${speaker.name}</h4>
                <p class="text-xs uppercase font-bold text-primary mb-2 opacity-80">${speaker.designation}</p>
                <div class="h-px w-full bg-slate-200 dark:bg-white/10 my-3"></div>
                <p class="text-sm opacity-70 italic">"${speaker.topic}"</p>
            </div>
        </div>
    `).join('');
}

function renderCommittee(type) {
    const id =
        type === 'organizing' ? 'organizing-grid' :
        type === 'advisory' ? 'advisory-grid' :
        'patrons-grid';

    const container = document.getElementById(id);

    const data =
        type === 'organizing' ? ORGANIZING_COMMITTEE :
        type === 'advisory' ? ADVISORY_COMMITTEE :
        PATRONS;

    if (!container) return;

    container.innerHTML = data.map(member => `
        <div class="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                ${member.name.charAt(0)}
            </div>
            <div>
                <h5 class="font-bold text-sm">${member.name}</h5>
                <p class="text-xs opacity-60">${[member.role, member.institution].filter(Boolean).join(', ')}</p>
            </div>
        </div>
    `).join('');
}

window.switchCommittee = function(type) {
    const orgGrid = document.getElementById('organizing-grid');
    const advGrid = document.getElementById('advisory-grid');
    const patronsGrid = document.getElementById('patrons-grid');
    
    // Ensure the selected tab has content rendered
    renderCommittee(type);

    if(type === 'organizing') {
        orgGrid.classList.remove('hidden');
        advGrid.classList.add('hidden');
        patronsGrid?.classList.add('hidden');
    } else {
        orgGrid.classList.add('hidden');
        advGrid.classList.add('hidden');
        patronsGrid?.classList.add('hidden');

        if (type === 'advisory') advGrid.classList.remove('hidden');
        if (type === 'patrons') patronsGrid?.classList.remove('hidden');
    }

    const btns = document.querySelectorAll('.committee-tab');
    btns.forEach(btn => {
        if(btn.getAttribute('data-type') === type) {
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('bg-slate-100', 'dark:bg-white/5');
        } else {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-slate-100', 'dark:bg-white/5');
        }
    });
}

// ========================================
// 3. CORE FUNCTIONS (Countdown, Tabs)
// ========================================
const TARGET_DATE = 'June 26, 2026 09:00:00';

function updateCountdown() {
    const eventDate = new Date(TARGET_DATE).getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => {
        const el = document.getElementById(id);
        if(el) el.textContent = String(Math.max(0, [days,hours,minutes,seconds][i])).padStart(2, '0');
    });
}

function setupScheduleTabs() {
    const buttons = document.querySelectorAll('.schedule-btn');
    const contents = document.querySelectorAll('.schedule-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const day = button.getAttribute('data-day');
            buttons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white');
                btn.classList.add('bg-slate-100', 'dark:bg-white/5');
            });
            button.classList.add('active', 'bg-primary', 'text-white');
            button.classList.remove('bg-slate-100', 'dark:bg-white/5');
            contents.forEach(content => content.classList.add('hidden'));
            const targetContent = document.getElementById(`schedule-day-${day}`);
            if (targetContent) targetContent.classList.remove('hidden');
        });
    });
}

// ========================================
// 4. INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Content
    renderDates();
    renderSpeakers();
    renderCommittee('organizing');
    renderCommittee('advisory');
    renderCommittee('patrons');

    // Logic
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupScheduleTabs();
    
    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    
    function toggleMobileMenu() {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            backdrop?.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            backdrop?.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    if(menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking backdrop
    if(backdrop) {
        backdrop.addEventListener('click', toggleMobileMenu);
    }
    
    // Close menu when clicking menu links
    const menuLinks = menu?.querySelectorAll('a');
    menuLinks?.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1280) { // Only close on mobile
                toggleMobileMenu();
            }
        });
    });

    // Deadline banner text (editable via BANNER_MESSAGE)
    const bannerEl = document.getElementById('deadline-banner-text');
    if (bannerEl && BANNER_MESSAGE) {
        // Repeat message with separators so it feels continuous
        const repeated = Array(6).fill(BANNER_MESSAGE).join("   ✦   ");
        bannerEl.textContent = repeated;
    }
});