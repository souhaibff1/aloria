// script.js

// Language Data
const translations = {
    en: {
        nav_about: "About",
        nav_games: "Games",
        nav_features: "Features",
        nav_rules: "Rules",
        nav_staff: "Friends",
        nav_join: "Join Discord",
        hero_badge: "Welcome to the best server 🚀",
        hero_title: "Join the world of <span class='text-glow'>Aloria</span> now",
        hero_subtitle: "A fun gaming community for friends and players",
        stat_members: "Active Members",
        stat_voice: "Voice Channels",
        about_title: "About <span class='text-glow'>Aloria</span>",
        about_subtitle: "Small friendly gaming community, fun, simple, and active",
        about_1_title: "Friendly Vibe",
        about_1_desc: "We pride ourselves on maintaining a toxic-free, welcoming environment for everyone.",
        about_2_title: "Simple & Fast",
        about_2_desc: "No complicated rules or overloaded channels. Jump in and start playing immediately.",
        about_3_title: "Always Active",
        about_3_desc: "There's always someone online ready to team up or just chill in voice chat.",
        games_title: "Games We <span class='text-glow'>Play</span>",
        games_subtitle: "Find your squad and dominate the leaderboards",
        game_ff_status: "Clan Working ✅",
        game_ff_title: "Free Fire",
        game_ff_desc: "Clan: ＡＬＯＲＩＡ모 | ID: 3096348635 (Click to copy)",
        game_au_title: "Among Us",
        game_au_desc: "Find the impostor",
        game_mc_status: "Server Under Making 🚧",
        game_mc_title: "Minecraft",
        game_mc_desc: "Build, explore, survive",
        game_rl_title: "Rocket League",
        game_rl_desc: "Car soccer action",
        mock_msg_1: "Anyone up for some games? 🎮",
        mock_msg_2: "I'm down! Let's go! 🚀",
        mock_msg_3: "Joining voice channel now!",
        feat_title: "Why Join <span class='text-glow'>Our Server?</span>",
        feat_1_title: "Friendly Community",
        feat_1_desc: "Meet awesome people and make lasting friendships.",
        feat_2_title: "Active Players",
        feat_2_desc: "Never play alone again. LFG channels are always active.",
        feat_3_title: "Events & Giveaways",
        feat_3_desc: "Participate in server tournaments, movie nights, and nitro giveaways.",
        feat_4_title: "Clean Environment",
        feat_4_desc: "Well-organized channels, no clutter, and great moderation.",
        rules_title: "Server <span class='text-glow'>Rules</span>",
        rules_subtitle: "Keep it clean, keep it fun",
        rule_1: "<strong>Respect Everyone:</strong> No toxicity, racism, or hate speech will be tolerated.",
        rule_2: "<strong>No Spamming:</strong> Keep the chat clean. Do not spam messages or emojis.",
        rule_3: "<strong>No Self-Promotion:</strong> Please don't advertise other servers or links in general chat.",
        rule_4: "<strong>Keep it SFW:</strong> This is a safe environment. No NSFW content allowed.",
        staff_title: "Meet New <span class='text-glow'>Friends</span>",
        staff_subtitle: "The awesome people playing in Aloria",
        staff_owner: "Server Owner",
        staff_head_mod: "Head Mod",
        staff_mod: "Moderator",
        news_title: "Latest <span class='text-glow'>Updates</span>",
        news_subtitle: "What's happening in Aloria",
        news_1_date: "April 20, 2026",
        news_1_title: "Minecraft Server in Development! ⛏️",
        news_1_desc: "Our official SMP is currently under construction. Get ready for an amazing adventure soon!",
        news_2_date: "April 15, 2026",
        news_2_title: "Discord Server Update ✨",
        news_2_desc: "We've updated our channels and added new features to improve your experience!",
        join_title: "Ready to start your adventure?",
        join_subtitle: "Join thousands of gamers in Aloria and never play alone again!",
        footer_rights: "&copy; 2026 Aloria Gaming Community. All rights reserved."
    },
    ar: {
        nav_about: "حول السيرفر",
        nav_games: "الألعاب",
        nav_features: "المميزات",
        nav_rules: "القوانين",
        nav_staff: "الأصدقاء",
        nav_join: "انضم للديسكورد",
        hero_badge: "مرحباً بك في أفضل سيرفر 🚀",
        hero_title: "انضم إلى عالم <span class='text-glow'>Aloria</span> الآن",
        hero_subtitle: "مجتمع ألعاب ممتع للأصدقاء واللاعبين",
        stat_members: "عضو نشط",
        stat_voice: "غرف صوتية",
        about_title: "حول <span class='text-glow'>Aloria</span>",
        about_subtitle: "مجتمع ألعاب صغير وودود، ممتع، بسيط، ونشط",
        about_1_title: "أجواء ودية",
        about_1_desc: "نفتخر بالحفاظ على بيئة خالية من السلبية ومرحبة بالجميع.",
        about_2_title: "بسيط وسريع",
        about_2_desc: "لا توجد قوانين معقدة أو غرف مزدحمة. ادخل وابدأ اللعب فوراً.",
        about_3_title: "نشط دائماً",
        about_3_desc: "هناك دائماً شخص متصل مستعد للعب أو الدردشة الصوتية.",
        games_title: "الألعاب التي <span class='text-glow'>نلعبها</span>",
        games_subtitle: "اعثر على فريقك وتصدر قوائم المتصدرين",
        game_ff_status: "الكلان نشط ✅",
        game_ff_title: "فري فاير",
        game_ff_desc: "الكلان: ＡＬＯＲＩＡ모 | ID: 3096348635 (اضغط للنسخ)",
        game_au_title: "أمونج أس",
        game_au_desc: "ابحث عن المحتال",
        game_mc_status: "السيرفر قيد الإنشاء 🚧",
        game_mc_title: "ماينكرافت",
        game_mc_desc: "ابنِ، استكشف، وابق حياً",
        game_rl_title: "روكيت ليغ",
        game_rl_desc: "أكشن سيارات كرة القدم",
        mock_msg_1: "هل من أحد جاهز للعب؟ 🎮",
        mock_msg_2: "أنا جاهز! هيا بنا! 🚀",
        mock_msg_3: "سأنضم للروم الصوتي الآن!",
        feat_title: "لماذا تنضم <span class='text-glow'>لسيرفرنا؟</span>",
        feat_1_title: "مجتمع ودود",
        feat_1_desc: "قابل أشخاصاً رائعين وكوّن صداقات دائمة.",
        feat_2_title: "لاعبون نشطون",
        feat_2_desc: "لن تلعب وحيداً أبداً. غرف البحث عن لاعبين نشطة دائماً.",
        feat_3_title: "فعاليات وجوائز",
        feat_3_desc: "شارك في بطولات السيرفر، ليالي الأفلام، وسحوبات النيترو.",
        feat_4_title: "بيئة نظيفة",
        feat_4_desc: "غرف منظمة بشكل جيد، بدون فوضى، وإدارة ممتازة.",
        rules_title: "<span class='text-glow'>قوانين</span> السيرفر",
        rules_subtitle: "حافظ على النظافة والمرح",
        rule_1: "<strong>احترم الجميع:</strong> لا نسمح بالسلبية، العنصرية، أو خطاب الكراهية.",
        rule_2: "<strong>لا للسبام:</strong> حافظ على نظافة الشات. لا تكرر الرسائل أو السمايلات.",
        rule_3: "<strong>لا للترويج:</strong> يرجى عدم الإعلان عن سيرفرات أخرى أو روابط في الشات العام.",
        rule_4: "<strong>محتوى لائق:</strong> هذه بيئة آمنة. يمنع نشر محتوى غير لائق.",
        staff_title: "تعرف على <span class='text-glow'>أصدقاء جدد</span>",
        staff_subtitle: "الأشخاص الرائعون الذين يلعبون في Aloria",
        staff_owner: "مالك السيرفر",
        staff_head_mod: "كبير المشرفين",
        staff_mod: "مشرف",
        news_title: "آخر <span class='text-glow'>التحديثات</span>",
        news_subtitle: "ماذا يحدث في Aloria",
        news_1_date: "20 أبريل 2026",
        news_1_title: "جاري تطوير سيرفر ماينكرافت! ⛏️",
        news_1_desc: "سيرفر SMP الرسمي قيد الإنشاء حالياً. استعدوا لمغامرة مذهلة قريباً!",
        news_2_date: "15 أبريل 2026",
        news_2_title: "تحديث سيرفر الديسكورد ✨",
        news_2_desc: "قمنا بتحديث الغرف وإضافة مميزات جديدة لتحسين تجربتكم!",
        join_title: "مستعد لبدء مغامرتك؟",
        join_subtitle: "انضم لآلاف اللاعبين في Aloria ولن تلعب وحيداً أبداً!",
        footer_rights: "&copy; 2026 مجتمع Aloria للألعاب. جميع الحقوق محفوظة."
    }
};

// Language logic
function setLang(lang) {
    document.documentElement.lang = lang;
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update active button
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');
    
    // Replace text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Generate Particles
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

if(particlesContainer) {
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize properties
        const size = Math.random() * 5 + 2; // 2px to 7px
        const posX = Math.random() * 100; // 0% to 100%
        const delay = Math.random() * 15; // 0s to 15s
        const duration = Math.random() * 10 + 10; // 10s to 20s
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section-reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Reveal only once
        }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Parallax Effect for Hero Graphics
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        
        // Check for RTL to adjust X direction logic if necessary, though mostly visual
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Animated Counter for Stats
const counters = document.querySelectorAll('.counter');
let countersAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString() + '+';
            }
        };
        
        updateCounter();
    });
};

// Trigger counters when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersAnimated) {
        animateCounters();
        countersAnimated = true;
    }
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for navbar
                behavior: 'smooth'
            });
        }
    });
});

// Copy Free Fire ID
function copyFreeFireID() {
    navigator.clipboard.writeText("3096348635").then(() => {
        alert("Free Fire Clan ID (3096348635) copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy ID: ', err);
    });
}
