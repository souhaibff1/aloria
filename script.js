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
        game_mc_status: "Click to View Status 🌐",
        mc_server_title: "Minecraft Server Status",
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
    }
};

// Language logic
function setLang(lang) {
    document.documentElement.lang = lang;
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

        particlesContainer.appendChild(particle);
    }
}

// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section-reveal').forEach(el => {
    revealObserver.observe(el);
});

// Parallax
document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.parallax').forEach(el => {
        const speed = el.dataset.speed;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Counters
let animated = false;
function animateCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
        const target = +counter.dataset.target;
        let current = 0;

        const update = () => {
            current += target / 120;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                counter.innerText = target + '+';
            }
        };
        update();
    });
}

const hero = document.querySelector('.hero');
if (hero) {
    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !animated) {
            animateCounters();
            animated = true;
        }
    }).observe(hero);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
    });
});

// Copy FF ID
function copyFreeFireID() {
    navigator.clipboard.writeText("3096348635");
    alert("Copied!");
}

// =========================
// Minecraft MODIFIED IP
// =========================
const MC_IP = "de.prime-hosting.de:25582";

function openMCModal() {
    document.getElementById('mc-modal').classList.add('active');
    fetchMCStatus();
}

function closeMCModal() {
    document.getElementById('mc-modal').classList.remove('active');
}

function fetchMCStatus() {
    const container = document.getElementById('mc-status-container');

    fetch(`https://mcapi.us/server/status?ip=${MC_IP}`)
        .then(res => res.json())
        .then(data => {
            if (!data.online) {
                container.innerHTML = `<p>Server Offline</p>`;
                return;
            }

            container.innerHTML = `
                <h3>Minecraft Server</h3>
                <p><strong>IP:</strong> ${MC_IP}</p>
                <p><strong>Players:</strong> ${data.players.now}/${data.players.max}</p>
            `;
        })
        .catch(() => {
            container.innerHTML = `<p>Error loading server status</p>`;
        });
}

function copyMCIP() {
    navigator.clipboard.writeText(MC_IP);
    alert("IP Copied!");
}

// Loader
window.addEventListener('load', () => {
    document.getElementById('loader')?.classList.add('hidden');
});
