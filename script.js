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
    { title: "Last Date For Registration", date: "10 June 2026" }
];

const SPEAKERS = [
    {
        name: "Mr. Pramodkumar Karunalayam",
        designation: "Digital Transformation Evangelist, AI Strategist, Philip Morris, Japan",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker10.jpeg"
    },
    {
        name: "Dr. Rubell Marion Lincy G.",
        designation: "HOD, Dept. of Computer Science & Engineering, IIIT Kottayam, India",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker2.jpeg"
    },
    {
        name: "Prof. D. Sakthi Kumar",
        designation: "Graduate School of Interdisciplinary New Science, Toyo University, Japan",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker3.jpg"
    },
    {
        name: "Dr. Padmakumar Nair",
        designation: "Vice Chancellor, Thapar Institute of Engineering and Technology, Punjab, India",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker4.png"
    },
    {
        name: "Dr. Sreekanth K. J.",
        designation: "Research Scientist, Kuwait Institute for Scientific Research, Kuwait",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker1.jpeg"
    },
    {
        name: "Dr. Toby Cumberbatch",
        designation: "Chair IEEE Smart Village Education Committee, USA",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker9.jpg"
    },
    {
        name: "Dr. Anna Charly",
        designation: "Faculty of Science and Engineering, University of Liverpool, U.K.",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker8.jpeg"
    },
    {
        name: "Dr. Achuthsankar S. Nair",
        designation: "Former Professor & HOD of Bioinformatics,University of Kerala, India",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker6.png"
    },
    {
        name: "Dr. Soman K. P.",
        designation: "Dean, School of Artificial Intelligence,Amrita Viswa Vidyapeetham, Coimbatore, India",
        topic: "Topic: Will be updated soon",
        image: "assets/speakers/speaker10.jpg",
    },
];

const PATRONS = [
    { name: "Mr. Gireesh Kumar Malattiri", role: "Chairman", institution: "VICT" },
    { name: "Mr. Manu Reghurajan", role: "Secretary", institution: "VICT" },
    { name: "Dr. Shalij P. R.", role: "Academic Director", institution: "VICT" },
    { name: "Mr. Suresh Lal", role: "Executive Director", institution: "VICT" },
    { name: "Mr. P. N. Unnirajan, IPS", role: "Administrative Director", institution: "VICT" },
];

const ORGANIZING_COMMITTEE = [
    { name: "Dr. Sunitha C.", role: "Organising Chair, Principal", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Jeeva K. A.", role: "HoD, AIML (Coordinator)", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Reji C. Joy", role: "HoD, MCA (Coordinator)", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Sajay K. R.", role: "HoD, CSE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Rakesh Hari", role: "HoD, ME ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. S. Swapna Kumar", role: "HoD, ECE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Mary P. Varghese", role: "HoD, EEE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Abhilasha P. S.", role: "HoD, CE ", institution: "Vidya Academy of Science & Technology" },

    { name: "Dr. Anjali P Sasidharan", role: "Assoc. Professor, CE", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Sanaj M. S.", role: "Professor, CSE", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Shameem S.", role: "Assoc. Professor, CSE", institution: "Vidya Academy of Science & Technology" },
    { name: "Ms. Riya Roy", role: "Asst. Professor, AI & ML", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Latha Dinesh", role: "Professor, EEE", institution: "Vidya Academy of Science & Technology" },
    { name: "Ms. Remya K. R.", role: "Asst. Professor, ECE", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Sooraj K. Prabha", role: "Professor, ME", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Siju K. C.", role: "Assoc. Professor, AS & H", institution: "Vidya Academy of Science & Technology" },
    { name: "Mr. Paul J. Chakola ", role: "Placement Director", institution: "Vidya Academy of Science & Technology" },
    { name: "Mr. Ramesh K. V.", role: "Asso. Professor, Phy. Edu.", institution: "Vidya Academy of Science & Technology" },
    { name: "Mr. Girish Kumar P.C.", role: "Librarian", institution: "Vidya Academy of Science & Technology" },
    { name: "Mr. Surendran V. K.", role: "Manager, General Administration ", institution: "Vidya Academy of Science & Technology" },
    { name: "Mr. Manesh D.", role: "Asst. Professor, MCA ", institution: "Vidya Academy of Science & Technology" },
];

const TECHNICAL_COMMITTEE = [
    { name: "Dr. Sreekanth K. J.", role: "Research Scientist", institution: "Kuwait Institute for Scientific Research, Kuwait" },
    { name: "Dr. Anna Charly", role: "Faculty of Science and Engineering", institution: "University of Liverpool, U.K." },
    { name: "Dr. Harigovindan V. P.", role: "Professor & Dean", institution: "NIT Puducherry, India" },
    { name: "Dr. Sudha Balagopalan", role: "Professor, EEE, Director (Outreach & Professional Development)", institution: "Christ College of Engineering" },
    { name: "Dr. Sachin Kumar S.", role: "Asst. Professor and Research Head", institution: "Amrita School of Artificial Intelligence, Coimbatore, India" },
    { name: "Dr. Nithin Padmanabhan", role: "Senior Research Engineer", institution: "Electric Power Research Institute (EPRI), Canada" },
    { name: "Dr. Sooraj K. Prabha", role: "Professor, Department of Mechanical Engineering", institution: "Vidya Academy of Science and Technology, Thrissur" },
    { name: "Dr. Jeeva K. A.", role: "HoD, AI & ML ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Reji C. Joy", role: "HoD, MCA ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Sajay K. R.", role: "HoD, CSE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Rakesh Hari", role: "HoD, ME ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. S. Swapna Kumar", role: "HoD, ECE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Mary P. Varghese", role: "HoD, EEE ", institution: "Vidya Academy of Science & Technology" },
    { name: "Dr. Abhilasha P. S.", role: "HoD, CE ", institution: "Vidya Academy of Science & Technology" },
];

const ADVISORY_COMMITTEE = [
    { name: "Prof. D. Sakthi Kumar", role: "Graduate School of Interdisciplinary New Science", institution: "Toyo University, Japan" },
    { name: "Dr. Toby Cumberbatch", role: "Chair, IEEE Smart Village Education Committee", institution: "" },
    { name: "Dr. Padmakumar Nair", role: "Vice Chancellor", institution: "Thapar Institute of Engineering and Technology, Punjab, India" },
    { name: "Dr. Shashi Nambisan", role: "Director, Transportation Research Center; Professor of Civil Engineering", institution: "University of Nevada–Las Vegas, USA" },
    { name: "Mr. Pramodkumar Karunalayam", role: "Digital Transformation Evangelist, AI Strategist", institution: "Philip Morris, Japan" },
    { name: "Dr. Digvijay S. Pawar", role: "Associate Professor", institution: "IIT Hyderabad" },
    { name: "Dr. Achuthsankar S. Nair", role: "Former Professor and Head, Dept. of Bioinformatics", institution: "University of Kerala, India" },
    { name: "Dr. Gayathri Bharathan", role: "Assistant Professor, Optics and Photonics Centre", institution: "IIT Delhi" },
    { name: "Dr. P. Pratapachandran Nair", role: "Former Principal & Professor Emeritus", institution: "VAST" },
    { name: "Dr. A. Jaya", role: "Professor & Director (CDOE)", institution: "BSAR Crescent Institute of Science and Technology, Chennai" },
    { name: "Mr. Laj Lal", role: "Build Engineer", institution: "Apple, Japan" },
    { name: "Dr. Shailesh Sivan", role: "Principal AI Architect", institution: "University of Madras" },
    { name: "Dr. V. N. Krishnachandran", role: "Professor Emeritus", institution: "Sreepathy Institute of Management and Technology, Palakkad" },
    { name: "Dr. Soman K. P.", role: "Dean, School of Artificial Intelligence", institution: "Amrita Viswa Vidyapeetham, Coimbatore" },
    { name: "Dr. Harigovindan V. P.", role: "Professor & Dean", institution: "NIT Puducherry" },
    { name: "Mr. Zaher Abdulrahman", role: "Electronics Lead Engineer", institution: "Jaguar Land Rover Ltd., Germany" },
];

const EDITORIAL_BOARD = [
    { name: "Dr. Sreekanth K. J.", role: "Research Scientist", institution: "Kuwait Institute for Scientific Research, Kuwait" },
    { name: "Dr. Sooraj K. Prabha", role: "Professor, Department of Mechanical Engineering", institution: "Vidya Academy of Science and Technology, Thrissur" },
    { name: "Dr. Siju K. C", role: "Professor, Department of Applied Science", institution: "Vidya Academy of Science and Technology, Thrissur" }
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
    const map = {
        organizing: { id: 'organizing-grid', data: ORGANIZING_COMMITTEE },
        technical: { id: 'technical-grid', data: TECHNICAL_COMMITTEE },
        advisory: { id: 'advisory-grid', data: ADVISORY_COMMITTEE },
        editorial: { id: 'editorial-grid', data: EDITORIAL_BOARD },
        patrons: { id: 'patrons-grid', data: PATRONS },
    };

    const config = map[type];
    if (!config) return;

    const container = document.getElementById(config.id);
    if (!container) return;

    container.innerHTML = config.data.map(member => `
        <div class="flex items-center gap-4 p-4 bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                ${member.name.charAt(0)}
            </div>
            <div>
                <h5 class="font-semibold text-sm sm:text-base">${member.name}</h5>
                <p class="text-[11px] sm:text-xs opacity-70 mt-1">${[member.role, member.institution].filter(Boolean).join(', ')}</p>
            </div>
        </div>
    `).join('');
}

function setupCommitteeTabs() {
    const tabs = document.querySelectorAll('.committee-tab');
    const panels = document.querySelectorAll('.committee-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            if (!targetId) return;

            // Active tab styling
            tabs.forEach(t => {
                t.classList.remove('active', 'bg-primary', 'text-white', 'shadow-sm');
                t.classList.add('bg-white', 'dark:bg-transparent', 'text-slate-700', 'dark:text-slate-200');
            });
            tab.classList.add('active', 'bg-primary', 'text-white', 'shadow-sm');
            tab.classList.remove('bg-white', 'dark:bg-transparent', 'text-slate-700', 'dark:text-slate-200');

            // Panels visibility
            panels.forEach(panel => {
                if (panel.id === targetId) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
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
        if (el) el.textContent = String(Math.max(0, [days, hours, minutes, seconds][i])).padStart(2, '0');
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

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
});


// ========================================
// 4. INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Content
    renderDates();
    renderSpeakers();
    renderCommittee('organizing');
    renderCommittee('technical');
    renderCommittee('advisory');
    renderCommittee('editorial');
    renderCommittee('patrons');

    // Logic
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupScheduleTabs();
    setupCommitteeTabs();

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

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking backdrop
    if (backdrop) {
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
