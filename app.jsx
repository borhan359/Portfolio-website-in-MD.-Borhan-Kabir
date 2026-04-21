/* global React, ReactDOM */

const useState = React.useState;
const useEffect = React.useEffect;

// --- Translations ---
const translations = {
    en: {
        nav: { home: "Home", about: "About", skills: "Skills", services: "Services", contact: "Contact" },
        hero: {
            greeting: "Hi, I am",
            name: "Md. Borhan",
            surname: "Kabir",
            subtitle: "Computer Science Student & Aspiring Programmer",
            desc: "Currently pursuing my Diploma in Computer Science and Technology at Satkhira Polytechnic Institute. I am a passionate learner dedicated to mastering the art of programming and building innovative digital solutions.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch"
        },
        about: {
            title: "About",
            titleHighlight: "Me",
            p1: "I am a tech enthusiast with a strong foundation in Computer Science. My journey started at Satkhira Polytechnic Institute, where I began exploring the world of technology.",
            p2: "I love solving problems through code and am always eager to learn new languages and frameworks. Beyond coding, I have a keen interest in digital trends and productivity.",
            eduLabel: "Education",
            eduValue: "Diploma in CST",
            locLabel: "Location",
            locValue: "Satkhira, Bangladesh"
        },
        skills: {
            title: "My",
            titleHighlight: "Skills",
            items: [
                { title: "Programming (Learning Phase)", desc: "Actively learning and building projects using C, Python, JavaScript and React.", icon: "fa-solid fa-code", color: "text-blue-400" },
                { title: "Social Media Marketing", desc: "Experienced in managing online presence, branding, and engagement strategies.", icon: "fa-solid fa-bullhorn", color: "text-purple-400" },
                { title: "Outsourcing", desc: "Skilled in handling various freelance tasks and providing high-quality digital services.", icon: "fa-solid fa-globe", color: "text-green-400" },
                { title: "Multitasking", desc: "Ability to manage multiple projects efficiently while maintaining high standards of work.", icon: "fa-solid fa-layer-group", color: "text-yellow-400" }
            ]
        },
        services: {
            title: "What I",
            titleHighlight: "Do",
            items: [
                { title: "Programming & Logic", desc: "Developing small-scale applications and solving logical problems efficiently.", icon: "fa-solid fa-laptop-code" },
                { title: "Social Media Management", desc: "Helping brands grow their audience and improve visibility online through strategic planning.", icon: "fa-solid fa-hashtag" },
                { title: "Digital Solutions & Outsourcing", desc: "Providing versatile freelance services tailored to client needs and business goals.", icon: "fa-solid fa-handshake" }
            ]
        },
        contact: {
            title: "Let's Work",
            titleHighlight: "Together",
            desc: "Have a project in mind or just want to say hi? Connect with me directly on WhatsApp, Telegram, or Facebook!",
            whatsapp: "WhatsApp Me",
            telegram: "Telegram Me"
        },
        footer: {
            quote: "Learning Today, Leading Tomorrow.",
            quickLinks: "Quick Links",
            connect: "Connect",
            rights: "All Rights Reserved.",
            builtWith: "Built with React & Tailwind CSS"
        }
    },
    bn: {
        nav: { home: "হোম", about: "সম্পর্কে", skills: "দক্ষতা", services: "সার্ভিস", contact: "যোগাযোগ" },
        hero: {
            greeting: "হাই, আমি",
            name: "মোঃ বোরহান",
            surname: "কবির",
            subtitle: "কম্পিউটার সায়েন্স স্টুডেন্ট এবং একজন প্রোগ্রামার হতে আগ্রহী",
            desc: "বর্তমানে সাতক্ষীরা পলিটেকনিক ইনস্টিটিউটে কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজিতে ডিপ্লোমা করছি। আমি একজন আগ্রহী শিক্ষার্থী এবং নতুন নতুন ডিজিটাল সলিউশন তৈরির জন্য প্রোগ্রামিং শিখছি।",
            viewWork: "আমার কাজ দেখুন",
            getInTouch: "যোগাযোগ করুন"
        },
        about: {
            title: "আমার",
            titleHighlight: "সম্পর্কে",
            p1: "আমি একজন প্রযুক্তিপ্রেমী এবং কম্পিউটার সায়েন্সে আমার ভালো ভিত্তি রয়েছে। সাতক্ষীরা পলিটেকনিক ইনস্টিটিউট থেকেই আমার এই প্রযুক্তির দুনিয়ায় যাত্রা শুরু।",
            p2: "আমি কোডিংয়ের মাধ্যমে সমস্যার সমাধান করতে ভালোবাসি এবং সব সময় নতুন নতুন ল্যাঙ্গুয়েজ ও ফ্রেমওয়ার্ক শিখতে আগ্রহী। কোডিংয়ের বাইরেও ডিজিটাল ট্রেন্ড ও প্রোডাক্টিভিটি নিয়ে আমার বেশ আগ্রহ আছে।",
            eduLabel: "শিক্ষা",
            eduValue: "ডিপ্লোমা ইন সিএসটি",
            locLabel: "অবস্থান",
            locValue: "সাতক্ষীরা, বাংলাদেশ"
        },
        skills: {
            title: "আমার",
            titleHighlight: "দক্ষতা",
            items: [
                { title: "প্রোগ্রামিং (শিখছি)", desc: "সি, পাইথন, জাভাস্ক্রিপ্ট এবং রিঅ্যাক্ট ব্যবহার করে নতুন নতুন প্রজেক্ট তৈরি করছি।", icon: "fa-solid fa-code", color: "text-blue-400" },
                { title: "সোশ্যাল মিডিয়া মার্কেটিং", desc: "অনলাইন উপস্থিতি, ব্র্যান্ডিং এবং এনগেজমেন্ট স্ট্র্যাটেজি ম্যানেজ করার অভিজ্ঞতা রয়েছে।", icon: "fa-solid fa-bullhorn", color: "text-purple-400" },
                { title: "আউটসোর্সিং", desc: "বিভিন্ন ফ্রিল্যান্সিং কাজ এবং মানসম্মত ডিজিটাল সার্ভিস প্রদানে দক্ষ।", icon: "fa-solid fa-globe", color: "text-green-400" },
                { title: "মাল্টিটাস্কিং", desc: "একসাথে একাধিক প্রজেক্ট দক্ষতার সাথে ম্যানেজ করার ক্ষমতা।", icon: "fa-solid fa-layer-group", color: "text-yellow-400" }
            ]
        },
        services: {
            title: "আমি যা",
            titleHighlight: "করি",
            items: [
                { title: "প্রোগ্রামিং ও লজিক", desc: "ছোটখাটো অ্যাপ্লিকেশন তৈরি এবং দক্ষতার সাথে লজিক্যাল সমস্যার সমাধান করা।", icon: "fa-solid fa-laptop-code" },
                { title: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট", desc: "ব্র্যান্ডের দর্শক বৃদ্ধি এবং অনলাইনের উপস্থিতি উন্নত করতে সাহায্য করি।", icon: "fa-solid fa-hashtag" },
                { title: "ডিজিটাল সলিউশন ও আউটসোর্সিং", desc: "ক্লায়েন্টের প্রয়োজন অনুযায়ী বিভিন্ন ধরণের ফ্রিল্যান্স সার্ভিস প্রদান করি।", icon: "fa-solid fa-handshake" }
            ]
        },
        contact: {
            title: "চলুন একসাথে",
            titleHighlight: "কাজ করি",
            desc: "আপনার কি কোনো প্রজেক্ট আছে বা হাই বলতে চান? সরাসরি হোয়াটসঅ্যাপ, টেলিগ্রাম বা ফেসবুকে আমার সাথে যোগাযোগ করুন!",
            whatsapp: "হোয়াটসঅ্যাপ",
            telegram: "টেলিগ্রাম"
        },
        footer: {
            quote: "আজ শিখছি, আগামীকাল নেতৃত্ব দেব।",
            quickLinks: "কুইক লিঙ্কস",
            connect: "যোগাযোগ",
            rights: "সর্বস্বত্ব সংরক্ষিত।",
            builtWith: "রিঅ্যাক্ট এবং টেলউইন্ড সিএসএস দিয়ে তৈরি"
        }
    }
};

// --- Components ---

const LanguageToggle = ({ language, setLanguage }) => (
    <div className="fixed top-5 left-5 z-[70] animate-fade-in">
        <button 
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="group relative px-2.5 py-1 bg-dark/60 backdrop-blur-md border border-white/10 rounded-lg text-white text-[10px] font-black hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-2xl overflow-hidden border-b-2 border-b-primary/30"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 tracking-tighter">{language === 'en' ? 'BN' : 'EN'}</span>
        </button>
    </div>
);

const FloatingLogo = ({ t }) => (
    <div className="fixed top-4 right-4 md:right-28 md:top-4 z-50 animate-fade-in group">
        <a href="#home" className="flex items-center gap-3 relative px-3 py-1.5 md:px-6 md:py-3 bg-dark/40 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src="footer-logo-v2.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-lg relative z-10" style={{ mixBlendMode: 'screen', filter: 'contrast(1.2) brightness(1.1)' }} />
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white relative z-10">
                {t.hero.name} <span className="text-primary">{t.hero.surname}</span>
            </span>
        </a>
    </div>
);

const FloatingNavbar = ({ t }) => {
    const navLinks = [
        { name: t.nav.home, href: '#home', icon: 'fa-solid fa-house' },
        { name: t.nav.about, href: '#about', icon: 'fa-solid fa-user' },
        { name: t.nav.skills, href: '#skills', icon: 'fa-solid fa-code' },
        { name: t.nav.services, href: '#services', icon: 'fa-solid fa-briefcase' },
        { name: t.nav.contact, href: '#contact', icon: 'fa-solid fa-paper-plane' },
    ];

    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:top-[40%] md:left-6 md:right-auto md:-translate-x-0 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-2 md:gap-4">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="w-10 h-10 md:w-12 md:h-12 bg-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-xl md:rounded-2xl text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/20 md:hover:translate-x-1 hover:-translate-y-1 md:hover:-translate-y-0 transition-all duration-300 group shadow-lg"
                >
                    <i className={`${link.icon} text-lg md:text-xl`}></i>
                    <span className="hidden md:flex absolute left-16 bg-dark/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10 font-medium shadow-xl">
                        {link.name}
                    </span>
                </a>
            ))}
        </nav>
    );
};

const Hero = ({ t }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="hero-glow"></div>
            
            <div className="container mx-auto px-4 sm:px-6 md:pl-28 md:pr-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="w-full md:w-3/5 text-center md:text-left z-10 animate-fade-in mt-6 md:mt-0">
                    <p className="text-primary font-medium tracking-widest uppercase mb-2 md:mb-4 text-xs md:text-sm">{t.hero.greeting}</p>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500">{t.hero.name}</span> <span className="text-gradient">{t.hero.surname}</span>
                    </h1>
                    <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-4 md:mb-6 font-light">
                        {t.hero.subtitle}
                    </h2>
                    <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
                        {t.hero.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a href="#services" className="px-8 py-3.5 bg-primary hover:bg-sky-400 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-1 duration-300">
                            {t.hero.viewWork}
                        </a>
                        <a href="#contact" className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-white font-semibold rounded-full transition-all hover:bg-white/5">
                            {t.hero.getInTouch}
                        </a>
                    </div>
                </div>
                
                <div className="w-full md:w-2/5 flex justify-center z-10 animate-fade-in delay-200">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 glass-card flex items-center justify-center border-white/5">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-darker relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay z-10"></div>
                            <img 
                                src="Borhan photo.jpeg" 
                                alt="Md. Borhan Kabir" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://ui-avatars.com/api/?name=Borhan+Kabir&size=500&background=0ea5e9&color=fff";
                                }}
                            />
                        </div>
                        <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 glass w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg text-xl md:text-2xl text-blue-400 animate-bounce">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div className="absolute top-1/2 -left-4 md:-left-8 glass w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg text-lg md:text-xl text-yellow-400" style={{ animation: 'bounce 3s infinite 1s' }}>
                            <i className="fa-brands fa-js"></i>
                        </div>
                        <div className="absolute -bottom-2 right-6 md:right-10 glass w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg text-xl md:text-2xl text-orange-500" style={{ animation: 'bounce 2.5s infinite 0.5s' }}>
                            <i className="fa-brands fa-html5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = ({ t }) => {
    return (
        <section id="about" className="py-16 md:py-24 bg-dark relative">
            <div className="container mx-auto px-4 sm:px-6 md:pl-28 md:pr-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.about.title} <span className="text-primary">{t.about.titleHighlight}</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>
                    
                    <div className="glass-card p-6 md:p-12 rounded-2xl text-left relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10">
                            {t.about.p1}
                        </p>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 relative z-10">
                            {t.about.p2}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8 relative z-10">
                            <div className="flex items-center gap-3 bg-darker px-4 py-2 rounded-lg border border-white/5">
                                <i className="fa-solid fa-graduation-cap text-secondary text-xl"></i>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.about.eduLabel}</p>
                                    <p className="text-sm text-gray-200 font-medium">{t.about.eduValue}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-darker px-4 py-2 rounded-lg border border-white/5">
                                <i className="fa-solid fa-location-dot text-primary text-xl"></i>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{t.about.locLabel}</p>
                                    <p className="text-sm text-gray-200 font-medium">{t.about.locValue}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skills = ({ t }) => {
    return (
        <section id="skills" className="py-16 md:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 md:pl-28 md:pr-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.skills.title} <span className="text-secondary">{t.skills.titleHighlight}</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto relative z-10">
                    {t.skills.items.map((skill, index) => (
                        <div key={index} className="glass-card p-3 md:p-6 rounded-xl flex gap-3 md:gap-6 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-8 h-8 md:w-14 md:h-14 shrink-0 rounded-full bg-dark flex items-center justify-center text-lg md:text-2xl ${skill.color} border border-white/5`}>
                                <i className={skill.icon}></i>
                            </div>
                            <div>
                                <h3 className="text-base md:text-xl font-semibold text-white mb-0.5 md:mb-2">{skill.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-[10px] md:text-sm">{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = ({ t }) => {
    return (
        <section id="services" className="py-24 bg-dark relative">
            <div className="container mx-auto px-6 md:pl-28 md:pr-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.title} <span className="text-primary">{t.services.titleHighlight}</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.services.items.map((service, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl text-center group hover:border-primary/30 transition-colors duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-20 h-20 mx-auto bg-darker rounded-2xl flex items-center justify-center text-4xl text-primary mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <i className={service.icon}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = ({ t }) => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:pl-28 md:pr-12">
                <div className="glass-card max-w-4xl mx-auto rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.contact.title} <span className="text-secondary">{t.contact.titleHighlight}</span></h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        {t.contact.desc}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://wa.me/8801888343078" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1">
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            {t.contact.whatsapp}
                        </a>
                        <a href="https://t.me/borhankabir8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1">
                            <i className="fa-brands fa-telegram text-xl"></i>
                            {t.contact.telegram}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = ({ t }) => {
    return (
        <footer className="bg-darker pt-16 pb-24 md:pb-8 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 md:pl-28 md:pr-12 pb-16 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    <div>
                        <a href="#home" className="text-2xl font-bold tracking-tighter text-white flex items-center justify-center md:justify-start gap-3 mb-4">
                            <img src="footer-logo-v2.png" alt="Logo" className="h-8 w-auto rounded-lg" style={{ mixBlendMode: 'screen', filter: 'contrast(1.2) brightness(1.1)' }} />
                            <span>{t.hero.name} <span className="text-primary">{t.hero.surname}</span></span>
                        </a>
                        <p className="text-gray-400 italic">"{t.footer.quote}"</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.footer.quickLinks}</h4>
                        <div className="flex gap-4">
                            <a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.nav.home}</a>
                            <span className="text-gray-600">|</span>
                            <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.nav.about}</a>
                            <span className="text-gray-600">|</span>
                            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.nav.skills}</a>
                            <span className="text-gray-600">|</span>
                            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">{t.nav.contact}</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.footer.connect}</h4>
                        <div className="flex gap-3 flex-wrap justify-center md:justify-end max-w-xs">
                            <a href="https://www.facebook.com/share/17BuWPrmag/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all border border-transparent" title="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/8801888343078" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all border border-transparent" title="WhatsApp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="https://t.me/borhankabir8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all border border-transparent" title="Telegram">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://github.com/borhan359/Portfolio-Md-Borhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-all border border-transparent" title="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/md.borhan.kabir?igsh=MTlvOGV4YjBudXQxOQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all border border-transparent" title="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@devil.boy459?_r=1&_t=ZS-95gK0FbOgFR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-all border border-transparent" title="TikTok">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2024 Md. Borhan Kabir | {t.footer.rights}
                    </p>
                    <p className="text-gray-600 text-xs flex items-center gap-2">
                        {t.footer.builtWith} <i className="fa-brands fa-react text-blue-400"></i>
                    </p>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    const [language, setLanguage] = useState('en');
    const t = translations[language];

    return (
        <div>
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <FloatingLogo t={t} />
            <FloatingNavbar t={t} />
            <main>
                <Hero t={t} />
                <About t={t} />
                <Skills t={t} />
                <Services t={t} />
                <Contact t={t} />
            </main>
            <Footer t={t} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
