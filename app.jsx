/* global React, ReactDOM */

const useState = React.useState;
const useEffect = React.useEffect;

// --- Components ---

const FloatingLogo = () => (
    <div className="fixed top-2 right-6 md:right-12 z-50 animate-fade-in group">
        <a href="#home" className="block relative px-6 py-3 bg-dark/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300 overflow-hidden hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-white relative z-10 flex items-center gap-2">
                <i className="fa-solid fa-code text-primary"></i> Md. Borhan <span className="text-primary">Kabir</span>
            </span>
        </a>
    </div>
);

const FloatingNavbar = () => {
    const navLinks = [
        { name: 'Home', href: '#home', icon: 'fa-solid fa-house' },
        { name: 'About', href: '#about', icon: 'fa-solid fa-user' },
        { name: 'Skills', href: '#skills', icon: 'fa-solid fa-code' },
        { name: 'Services', href: '#services', icon: 'fa-solid fa-briefcase' },
        { name: 'Contact', href: '#contact', icon: 'fa-solid fa-paper-plane' },
    ];

    return (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 md:bottom-auto md:top-[40%] md:left-6 md:right-auto md:-translate-x-0 md:-translate-y-1/2 z-50 flex flex-row md:flex-col gap-3 md:gap-4">
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    className="w-12 h-12 bg-dark/40 backdrop-blur-md border border-white/10 flex items-center justify-center rounded-2xl text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/20 md:hover:translate-x-1 hover:-translate-y-1 md:hover:-translate-y-0 transition-all duration-300 group shadow-lg"
                >
                    <i className={`${link.icon} text-xl`}></i>
                    {/* Tooltip for desktop */}
                    <span className="hidden md:flex absolute left-16 bg-dark/90 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10 font-medium shadow-xl">
                        {link.name}
                    </span>
                </a>
            ))}
        </nav>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="hero-glow"></div>
            
            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-3/5 text-center md:text-left z-10 animate-fade-in mt-10 md:mt-0">
                    <p className="text-primary font-medium tracking-widest uppercase mb-4">Hi, I am</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Md. Borhan <span className="text-gradient">Kabir</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Computer Science Student & Aspiring Programmer
                    </h2>
                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed">
                        Currently pursuing my Diploma in Computer Science and Technology at Satkhira Polytechnic Institute. I am a passionate learner dedicated to mastering the art of programming and building innovative digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                        <a href="#services" className="px-8 py-3.5 bg-primary hover:bg-sky-400 text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:-translate-y-1 duration-300">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/50 text-white font-semibold rounded-full transition-all hover:bg-white/5">
                            Get In Touch
                        </a>
                    </div>
                </div>
                
                <div className="w-full md:w-2/5 flex justify-center z-10 animate-fade-in delay-200">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 glass-card flex items-center justify-center border-white/5">
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
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 glass w-16 h-16 rounded-full flex items-center justify-center shadow-lg text-2xl text-blue-400 animate-bounce">
                            <i className="fa-brands fa-react"></i>
                        </div>
                        <div className="absolute top-1/2 -left-8 glass w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-xl text-yellow-400" style={{ animation: 'bounce 3s infinite 1s' }}>
                            <i className="fa-brands fa-js"></i>
                        </div>
                        <div className="absolute -bottom-2 right-10 glass w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-2xl text-orange-500" style={{ animation: 'bounce 2.5s infinite 0.5s' }}>
                            <i className="fa-brands fa-html5"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    return (
        <section id="about" className="py-24 bg-dark relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>
                    
                    <div className="glass-card p-8 md:p-12 rounded-2xl text-left relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                            I am a tech enthusiast with a strong foundation in Computer Science. My journey started at Satkhira Polytechnic Institute, where I began exploring the world of technology.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                            I love solving problems through code and am always eager to learn new languages and frameworks. Beyond coding, I have a keen interest in digital trends and productivity.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8 relative z-10">
                            <div className="flex items-center gap-3 bg-darker px-4 py-2 rounded-lg border border-white/5">
                                <i className="fa-solid fa-graduation-cap text-secondary text-xl"></i>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Education</p>
                                    <p className="text-sm text-gray-200 font-medium">Diploma in CST</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-darker px-4 py-2 rounded-lg border border-white/5">
                                <i className="fa-solid fa-location-dot text-primary text-xl"></i>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                                    <p className="text-sm text-gray-200 font-medium">Satkhira, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const skillsList = [
        { 
            title: "Programming (Learning Phase)", 
            desc: "Actively learning and building projects using C, Python, JavaScript and React.", 
            icon: "fa-solid fa-code",
            color: "text-blue-400"
        },
        { 
            title: "Social Media Marketing", 
            desc: "Experienced in managing online presence, branding, and engagement strategies.", 
            icon: "fa-solid fa-bullhorn",
            color: "text-purple-400"
        },
        { 
            title: "Outsourcing", 
            desc: "Skilled in handling various freelance tasks and providing high-quality digital services.", 
            icon: "fa-solid fa-globe",
            color: "text-green-400"
        },
        { 
            title: "Multitasking", 
            desc: "Ability to manage multiple projects efficiently while maintaining high standards of work.", 
            icon: "fa-solid fa-layer-group",
            color: "text-yellow-400"
        }
    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-secondary">Skills</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
                    {skillsList.map((skill, index) => (
                        <div key={index} className="glass-card p-6 rounded-xl flex gap-6 hover:-translate-y-2 transition-transform duration-300">
                            <div className={`w-14 h-14 shrink-0 rounded-full bg-dark flex items-center justify-center text-2xl ${skill.color} border border-white/5`}>
                                <i className={skill.icon}></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{skill.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const servicesList = [
        {
            title: "Programming & Logic",
            desc: "Developing small-scale applications and solving logical problems efficiently.",
            icon: "fa-solid fa-laptop-code"
        },
        {
            title: "Social Media Management",
            desc: "Helping brands grow their audience and improve visibility online through strategic planning.",
            icon: "fa-solid fa-hashtag"
        },
        {
            title: "Digital Solutions & Outsourcing",
            desc: "Providing versatile freelance services tailored to client needs and business goals.",
            icon: "fa-solid fa-handshake"
        }
    ];

    return (
        <section id="services" className="py-24 bg-dark relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I <span className="text-primary">Do</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesList.map((service, index) => (
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

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="glass-card max-w-4xl mx-auto rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Work <span className="text-secondary">Together</span></h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                        Have a project in mind or just want to say hi? Connect with me directly on WhatsApp, Telegram, or Facebook!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://wa.me/qr/QVRIYITDQI7OM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1">
                            <i className="fa-brands fa-whatsapp text-xl"></i>
                            WhatsApp Me
                        </a>
                        <a href="https://t.me/borhankabir8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1">
                            <i className="fa-brands fa-telegram text-xl"></i>
                            Telegram Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-darker pt-16 pb-8 border-t border-white/5 relative z-10">
            {/* Removed padding as we now use TopHeader */}
            <div className="container mx-auto px-6 md:px-12 pb-16 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="text-2xl font-bold tracking-tighter text-white inline-block mb-4">
                            Md. Borhan <span className="text-primary">Kabir</span>
                        </a>
                        <p className="text-gray-400 italic">"Learning Today, Leading Tomorrow."</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
                        <div className="flex gap-4">
                            <a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a>
                            <span className="text-gray-600">|</span>
                            <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About</a>
                            <span className="text-gray-600">|</span>
                            <a href="#skills" className="text-gray-400 hover:text-primary transition-colors text-sm">Skills</a>
                            <span className="text-gray-600">|</span>
                            <a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</a>
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h4>
                        <div className="flex gap-3 flex-wrap justify-center md:justify-end max-w-xs">
                            <a href="https://www.facebook.com/share/17BuWPrmag/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all border border-transparent" title="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="https://wa.me/qr/QVRIYITDQI7OM" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all border border-transparent" title="WhatsApp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                            <a href="https://t.me/borhankabir8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all border border-transparent" title="Telegram">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://github.com/borhan359/Portfolio-Md-Borhan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-all border border-transparent" title="GitHub">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            {/* Instagram & TikTok Buttons */}
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
                        &copy; 2024 Md. Borhan Kabir | All Rights Reserved.
                    </p>
                    <p className="text-gray-600 text-xs flex items-center gap-2">
                        Built with React <i className="fa-brands fa-react text-blue-400"></i> & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <div>
            <FloatingLogo />
            <FloatingNavbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
