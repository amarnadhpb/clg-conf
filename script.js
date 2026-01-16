// Tailwind Config
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#0ea5e9", // Teal/Blue for Tech
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

const IMPORTANT_DATES = [
    { title: "Call for Papers", date: "22 August 2025" },
    { title: "Draft Submission Extended", date: "22 January 2026" },
    { title: "Notification of Acceptance", date: "06 February 2026" },
    { title: "Final Paper Submission", date: "22 February 2026" },
    { title: "Early Bird Registration", date: "24 February 2026" },
    { title: "Conference Dates", date: "June 26-27, 2026" }
];

const SPEAKERS = [
    {
        name: "Dr. Jane Doe",
        designation: "Professor, Dept. of CS",
        topic: "Future of AI in Sustainability",
        image: "https://i.pravatar.cc/150?img=1" 
    },
    {
        name: "Dr. John Smith",
        designation: "Research Lead",
        topic: "Renewable Energy Systems",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "Prof. Alan Turing",
        designation: "Director of Research",
        topic: "Machine Learning Ethics",
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Dr. Grace Hopper",
        designation: "Senior Data Scientist",
        topic: "Big Data & Climate Change",
        image: "https://i.pravatar.cc/150?img=5"
    }
];

const ORGANIZING_COMMITTEE = [
    { name: "Dr. Saji C.B", role: "Principal", institution: "Vidya Academy" },
    { name: "Dr. Sunitha C", role: "HOD, CSE", institution: "Vidya Academy" },
    { name: "Dr. Sudha Balagopalan", role: "Dean Academics", institution: "Vidya Academy" },
    { name: "Mr. Paul Chacko", role: "Coordinator", institution: "Vidya Academy" },
    { name: "Ms. Divya K", role: "Co-Coordinator", institution: "Vidya Academy" }
];

const ADVISORY_COMMITTEE = [
    { name: "Dr. A. Scientist", role: "Professor", institution: "IIT Bombay" },
    { name: "Dr. B. Engineer", role: "Senior Researcher", institution: "NIT Calicut" },
    { name: "Dr. C. Innovator", role: "Director", institution: "CUSAT" },
    { name: "Dr. D. Scholar", role: "Professor", institution: "IIIT Hyderabad" }
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
    const container = document.getElementById(type === 'organizing' ? 'organizing-grid' : 'advisory-grid');
    const data = type === 'organizing' ? ORGANIZING_COMMITTEE : ADVISORY_COMMITTEE;
    if (!container) return;

    container.innerHTML = data.map(member => `
        <div class="flex items-center gap-4 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:shadow-md transition-shadow">
            <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                ${member.name.charAt(0)}
            </div>
            <div>
                <h5 class="font-bold text-sm">${member.name}</h5>
                <p class="text-xs opacity-60">${member.role}, ${member.institution}</p>
            </div>
        </div>
    `).join('');
}

window.switchCommittee = function(type) {
    const orgGrid = document.getElementById('organizing-grid');
    const advGrid = document.getElementById('advisory-grid');
    
    if(type === 'organizing') {
        orgGrid.classList.remove('hidden');
        advGrid.classList.add('hidden');
    } else {
        orgGrid.classList.add('hidden');
        advGrid.classList.remove('hidden');
    }

    const btns = document.querySelectorAll('.committee-tab');
    btns.forEach(btn => {
        if(btn.textContent.toLowerCase().includes(type.substring(0,4))) {
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

    // Logic
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupScheduleTabs();
    
    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
    }
});