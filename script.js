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
            announcement_text: "<strong>Minecraft Server Opening:</strong> Saturday, May 16th at 7:30 PM (Algeria Time) 🚀",
            countdown_title: "Minecraft Server Opening In:",
            cd_days: "Days",
            cd_hours: "Hours",
            cd_minutes: "Minutes",
            cd_seconds: "Seconds",
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
            news_1_date: "May 16, 2026",
            news_1_title: "Minecraft Server Grand Opening! 🚀",
            news_1_desc: "Join us for the official opening of our Minecraft Server! Saturday, May 16th at 7:30 PM (Algeria Time).",
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
            announcement_text: "<strong>افتتاح سيرفر ماين كرافت:</strong> يوم السبت 16 ماي على الساعة 7:30 مساءً بتوقيت الجزائر 🚀",
            countdown_title: "افتتاح سيرفر ماين كرافت بعد:",
            cd_days: "أيام",
            cd_hours: "ساعات",
            cd_minutes: "دقائق",
            cd_seconds: "ثواني",
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
            game_mc_status: "اضغط لرؤية الحالة 🌐",
            mc_server_title: "حالة سيرفر ماينكرافت",
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
            news_1_date: "16 ماي 2026",
            news_1_title: "افتتاح سيرفر ماين كرافت! 🚀",
            news_1_desc: "انضموا إلينا في الافتتاح الرسمي لسيرفر ماين كرافت! يوم السبت 16 ماي على الساعة 7:30 مساءً بتوقيت الجزائر.",
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

    let mcStatusInterval = null;

    // Minecraft Modal Logic
    function openMCModal() {
        const modal = document.getElementById('mc-modal');
        modal.classList.add('active');
        
        const now = new Date().getTime();
        const distance = countdownTarget - now;
        
        if (distance > 0) {
            // Display countdown instead of fetching status
            renderModalCountdown();
        } else {
            // Fetch immediately without auto-refresh flag
            fetchMCStatus(false);
            
            // Auto refresh every 5 seconds
            if (mcStatusInterval) clearInterval(mcStatusInterval);
            mcStatusInterval = setInterval(() => {
                fetchMCStatus(true); // Fetch with auto-refresh flag to prevent loading spinner flicker
            }, 5000);
        }
    }

    function renderModalCountdown() {
        const container = document.getElementById('mc-status-container');
        const isArabic = document.documentElement.lang === 'ar';
        
        const tDays = isArabic ? 'أيام' : 'Days';
        const tHours = isArabic ? 'ساعات' : 'Hours';
        const tMins = isArabic ? 'دقائق' : 'Minutes';
        const tSecs = isArabic ? 'ثواني' : 'Seconds';
        const tTitle = isArabic ? 'افتتاح سيرفر ماين كرافت بعد:' : 'Minecraft Server Opening In:';
        
        container.innerHTML = `
            <div style="padding: 30px; text-align: center;">
                <div class="countdown-banner" style="margin: 0 auto; display: inline-flex;">
                    <div class="countdown-header"><i class="fa-solid fa-clock"></i> <span>${tTitle}</span></div>
                    <div class="countdown-timer" id="modal-countdown">
                        <div class="time-box"><span id="mcd-days">00</span><small>${tDays}</small></div>
                        <div class="time-box"><span id="mcd-hours">00</span><small>${tHours}</small></div>
                        <div class="time-box"><span id="mcd-minutes">00</span><small>${tMins}</small></div>
                        <div class="time-box"><span id="mcd-seconds">00</span><small>${tSecs}</small></div>
                    </div>
                </div>
            </div>
        `;
        
        updateCountdown();
    }

    function closeMCModal() {
        const modal = document.getElementById('mc-modal');
        modal.classList.remove('active');
        
        // Stop auto-refresh when modal is closed
        if (mcStatusInterval) {
            clearInterval(mcStatusInterval);
            mcStatusInterval = null;
        }
        
        // Clear modal content
        const container = document.getElementById('mc-status-container');
        if (container) container.innerHTML = '';
    }

    function fetchMCStatus(isAutoRefresh = false) {
        const container = document.getElementById('mc-status-container');
        const isArabic = document.documentElement.lang === 'ar';
        
        // Only show the loading spinner if this is the first load, not an auto-refresh
        if (!isAutoRefresh) {
            container.innerHTML = isArabic ? '<div style="padding:40px;"><i class="fa-solid fa-circle-notch fa-spin fa-3x" style="color:var(--primary)"></i><p style="margin-top:20px;">جاري تحميل إحصائيات السيرفر...</p></div>' : '<div style="padding:40px;"><i class="fa-solid fa-circle-notch fa-spin fa-3x" style="color:var(--primary)"></i><p style="margin-top:20px;">Loading advanced server stats...</p></div>';
        }
        
        const startTime = Date.now();
        fetch('https://api.mcsrvstat.us/3/mc.prime-hosting.de:25684')
            .then(response => response.json())
            .then(data => {
                const ping = Date.now() - startTime;
                if (data.online) {
                    let playersHtml = '';
                    if (data.players && data.players.list && data.players.list.length > 0) {
                        const playerList = data.players.list.map(p => `<span style="background: rgba(0,180,216,0.15); border: 1px solid var(--primary); color: var(--white); box-shadow: 0 0 5px rgba(0,180,216,0.3); padding: 3px 8px; border-radius: 4px; margin: 2px; display: inline-block;">${p.name}</span>`).join('');
                        playersHtml = `
                            <div class="mc-players-list" style="background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 12px; padding: 15px; margin-top: 15px; text-align: ${isArabic ? 'right' : 'left'}; max-height: 150px; overflow-y: auto;">
                                <strong style="color: var(--primary-light); font-size: 1.05rem;"><i class="fa-solid fa-user-check"></i> ${isArabic ? 'اللاعبين المتصلين حالياً:' : 'Currently Online Players:'}</strong><br>
                                <div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px;">${playerList}</div>
                            </div>
                        `;
                    }

                    const faviconHtml = data.icon ? `<img src="${data.icon}" alt="Server Icon" class="mc-favicon" style="border: 2px solid #23a559; box-shadow: 0 0 15px rgba(35, 165, 89, 0.4); width: 64px; height: 64px; border-radius: 12px;">` : `<div class="mc-favicon" style="display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.5); font-size:2rem; color:#23a559; border: 2px solid #23a559; box-shadow: 0 0 15px rgba(35, 165, 89, 0.4); width: 64px; height: 64px; border-radius: 12px;"><i class="fa-solid fa-server"></i></div>`;
                    
                    // Use HTML MOTD for colored text, fallback to clean
                    const motdHtml = (data.motd && data.motd.html) ? data.motd.html.join('<br>') : ((data.motd && data.motd.clean) ? data.motd.clean.join(' ') : 'A Minecraft Server');
                    const serverVersion = data.version || 'Unknown';
                    const serverSoftware = data.software || 'Vanilla';
                    const serverIP = data.ip || 'N/A';
                    const serverHostname = data.hostname || 'mc.prime-hosting.de';
                    const protocolVer = (data.protocol && data.protocol.version) ? data.protocol.version : 'N/A';
                    const statStyle = 'background: linear-gradient(to bottom, rgba(10,18,40,0.8), rgba(0,0,0,0.9)); padding: 15px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px; border: 1px solid var(--glass-border); box-shadow: inset 0 0 10px rgba(0,0,0,0.5); transition: transform 0.3s ease, box-shadow 0.3s ease;';
                    
                    container.innerHTML = `
                        <div class="mc-status-card online" style="padding: 25px; background: linear-gradient(135deg, rgba(35, 165, 89, 0.05), rgba(0,0,0,0.6)); border: 1px solid rgba(35, 165, 89, 0.3); margin-top:0; border-radius: 20px; box-shadow: inset 0 0 20px rgba(35, 165, 89, 0.1), 0 10px 30px rgba(0,0,0,0.6); position: relative; overflow: hidden;">
                            <div style="position:absolute; top:-50px; right:-50px; width:150px; height:150px; background:#23a559; filter:blur(100px); opacity:0.3; pointer-events:none;"></div>
                            
                            <div class="mc-modal-header" style="position:relative; z-index:1; border-bottom: 1px dashed rgba(35, 165, 89, 0.3); display: flex; align-items: center; gap: 15px; padding-bottom: 15px; margin-bottom: 20px;">
                                ${faviconHtml}
                                <div class="mc-header-info" style="text-align: ${isArabic ? 'right' : 'left'};">
                                    <h3 style="text-shadow: 0 0 10px rgba(0,180,216,0.5); font-size: 1.8rem; margin: 0; color: var(--primary-light); text-transform: uppercase;">Aloria Network</h3>
                                    <span style="color: #23a559; font-weight: bold; font-size: 1rem; display:inline-flex; align-items:center; gap:8px; margin-top:5px; background: rgba(35, 165, 89, 0.1); padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(35, 165, 89, 0.3);">
                                        <span style="display:inline-block; width:12px; height:12px; background:#23a559; border-radius:50%; box-shadow: 0 0 10px #23a559, 0 0 20px #23a559; animation: pulse 1.5s infinite;"></span>
                                        ${isArabic ? 'السيرفر متصل ويعمل بشكل ممتاز' : 'Server is Online & Operational'}
                                    </span>
                                </div>
                            </div>
                            
                            <div class="mc-motd" style="font-size: 1.05rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8); background: rgba(0,0,0,0.5); border: 1px solid var(--glass-border); box-shadow: inset 0 0 10px rgba(0,0,0,0.8); padding: 12px; border-radius: 8px; text-align: center; margin-bottom: 25px; white-space: pre-line; line-height: 1.4; font-family: 'Courier New', Courier, monospace;">
                                ${motdHtml}
                            </div>
                            
                            <div class="mc-stats-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 25px;">
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-users" style="color: #00b4d8; text-shadow: 0 0 10px #00b4d8; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'اللاعبين' : 'Players'}</span>
                                    <strong style="color: #fff; font-size: 1.1rem;">${data.players.online} / ${data.players.max}</strong>
                                </div>
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-wifi" style="color: #23a559; text-shadow: 0 0 10px #23a559; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'البنج' : 'Latency'}</span>
                                    <strong style="color: #23a559; font-size: 1.1rem;">${ping}ms</strong>
                                </div>
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-code-branch" style="color: #f0b232; text-shadow: 0 0 10px #f0b232; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'الإصدار' : 'Version'}</span>
                                    <strong style="color: #fff; font-size: 1.1rem;">${serverVersion}</strong>
                                </div>
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-microchip" style="color: #e056a0; text-shadow: 0 0 10px #e056a0; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'المحرك' : 'Software'}</span>
                                    <strong style="color: #fff; font-size: 1.1rem;">${serverSoftware}</strong>
                                </div>
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-network-wired" style="color: #90e0ef; text-shadow: 0 0 10px #90e0ef; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'البروتوكول' : 'Protocol'}</span>
                                    <strong style="color: #fff; font-size: 1.1rem;">v${protocolVer}</strong>
                                </div>
                                <div class="mc-stat-item" style="${statStyle}">
                                    <i class="fa-solid fa-server" style="color: #7c8cf8; text-shadow: 0 0 10px #7c8cf8; font-size: 1.6rem;"></i>
                                    <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600; letter-spacing: 1px;">${isArabic ? 'الهوست' : 'Host'}</span>
                                    <strong style="color: #fff; font-size: 0.85rem;">${serverHostname}</strong>
                                </div>
                            </div>
                            
                            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                                <div style="flex:1; background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                    <i class="fa-solid fa-globe" style="color: #00b4d8; font-size: 1.2rem;"></i>
                                    <div>
                                        <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">${isArabic ? 'عنوان الآي بي' : 'Server IP'}</span>
                                        <p style="margin:0; color: #fff; font-family: 'Courier New', monospace; font-size: 0.9rem;">${serverIP}:${data.port || 25684}</p>
                                    </div>
                                </div>
                                <div style="flex:1; background: rgba(0,0,0,0.4); border: 1px solid var(--glass-border); border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; gap: 10px;">
                                    <i class="fa-solid fa-shield-halved" style="color: #23a559; font-size: 1.2rem;"></i>
                                    <div>
                                        <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">${isArabic ? 'حالة EULA' : 'EULA Status'}</span>
                                        <p style="margin:0; color: ${data.eula_blocked ? '#f04747' : '#23a559'}; font-size: 0.9rem; font-weight: 600;">${data.eula_blocked ? (isArabic ? 'محظور ❌' : 'Blocked ❌') : (isArabic ? 'سليم ✅' : 'Clean ✅')}</p>
                                    </div>
                                </div>
                            </div>

                            ${playersHtml}
                            
                            <div style="margin-top: 30px; text-align: center; position: relative; z-index: 1;">
                                <p style="margin-bottom: 12px; font-size: 1rem; color: var(--white); font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                                    <i class="fa-solid fa-gamepad" style="color: var(--primary-light);"></i> ${isArabic ? 'انسخ الأيبي وابدأ اللعب الآن' : 'Copy IP and start playing now'}
                                </p>
                                <div class="mc-copy-box" onclick="copyMCIP()" style="background: linear-gradient(90deg, rgba(0, 180, 216, 0.2), rgba(0, 119, 182, 0.3)); border: 2px solid var(--primary); box-shadow: 0 0 15px rgba(0, 180, 216, 0.4); padding: 18px 25px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: space-between;" onmouseover="this.style.transform='scale(1.02)'; this.style.boxShadow='0 0 25px rgba(0, 180, 216, 0.6)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 15px rgba(0, 180, 216, 0.4)';">
                                    <span style="font-size: 1.2rem; font-family: 'Courier New', monospace; letter-spacing: 0px; text-shadow: 0 0 8px rgba(255,255,255,0.4); font-weight: 800; color: var(--white);">mc.prime-hosting.de:25684</span>
                                    <i class="fa-solid fa-copy" style="font-size: 1.4rem; color: var(--primary-light); filter: drop-shadow(0 0 5px var(--primary-light));"></i>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    container.innerHTML = `
                        <div class="mc-status-card offline" style="padding: 30px; background: linear-gradient(135deg, rgba(240, 71, 71, 0.05), rgba(0,0,0,0.6)); border: 1px solid rgba(240, 71, 71, 0.3); border-radius: 20px; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(240, 71, 71, 0.1), 0 10px 30px rgba(0,0,0,0.6);">
                            <div style="position:absolute; top:-50px; left:-50px; width:150px; height:150px; background:#f04747; filter:blur(100px); opacity:0.2; pointer-events:none;"></div>
                            
                            <div class="mc-status-icon" style="font-size: 4rem; color: #f04747; filter: drop-shadow(0 0 15px rgba(240, 71, 71, 0.6)); margin-bottom: 15px;">
                                <i class="fa-solid fa-times-circle"></i>
                            </div>
                            <h3 style="color: #f04747; margin-bottom:10px; font-size: 2rem; text-shadow: 0 0 10px rgba(240, 71, 71, 0.4); text-transform: uppercase;">${isArabic ? 'غير متصل' : 'Offline'}</h3>
                            <p style="color: var(--text-muted); margin-bottom:25px; font-size: 1.1rem;">${isArabic ? 'السيرفر يخضع للصيانة أو غير متصل حالياً.' : 'The server is currently under maintenance or offline.'}</p>
                            
                            <div style="text-align: center; background: rgba(0,0,0,0.4); padding: 20px; border-radius: 15px; border: 1px solid var(--glass-border);">
                                <p style="margin-bottom: 12px; font-size: 1rem; color: var(--white); font-weight: bold; text-transform: uppercase;">
                                    ${isArabic ? 'الأيبي الخاص بالسيرفر:' : 'Server IP:'}
                                </p>
                                <div class="mc-copy-box" onclick="copyMCIP()" style="background: rgba(240, 71, 71, 0.1); border: 2px dashed rgba(240, 71, 71, 0.5); display: flex; align-items: center; justify-content: center; gap: 15px; padding: 15px 20px; border-radius: 12px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(240, 71, 71, 0.2)';" onmouseout="this.style.background='rgba(240, 71, 71, 0.1)';">
                                    <span style="color: #ff7676; font-family: 'Courier New', monospace; font-size: 1.2rem; font-weight: 800; letter-spacing: 1px;">mc.prime-hosting.de:25684</span>
                                    <i class="fa-solid fa-copy" style="color: #ff7676; font-size: 1.2rem;"></i>
                                </div>
                            </div>
                        </div>
                    `;
                }
            })
            .catch(err => {
                console.error(err);
                if (!isAutoRefresh) {
                    container.innerHTML = isArabic ? '<p>فشل تحميل حالة السيرفر.</p>' : '<p>Failed to load server status.</p>';
                }
            });
    }

    function copyMCIP() {
        navigator.clipboard.writeText("mc.prime-hosting.de:25684").then(() => {
            const isArabic = document.documentElement.lang === 'ar';
            alert(isArabic ? 'تم نسخ أيبي السيرفر بنجاح!' : "Server IP copied to clipboard!");
        });
    }

    // Sleek Loading Screen
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 600);
        }
    });

    // Konami Code Easter Egg
    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let inputSequence = [];
    document.addEventListener('keydown', (e) => {
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        inputSequence.push(key);
        inputSequence = inputSequence.slice(-secretCode.length);
        if (JSON.stringify(inputSequence) === JSON.stringify(secretCode)) {
            window.open('https://www.youtube.com/watch?v=qthxa7m_B4E', '_blank');
            inputSequence = [];
        }
    });

    // Countdown Timer Logic
    const countdownTarget = new Date("May 16, 2026 19:30:00 GMT+0100").getTime();
    let countdownInterval;

    function getCountdownValues(distance) {
        if (distance < 0) return null;
        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownTarget - now;
        const isArabic = document.documentElement.lang === 'ar';
        const finishedHTML = `<div style="font-size: 1.8rem; color: var(--primary-light); font-weight: bold; text-shadow: 0 0 15px rgba(0, 180, 216, 0.8);">${isArabic ? 'تم افتتاح سيرفر ماين كرافت! 🎉' : 'Minecraft Server is Now Open! 🎉'}</div>`;
        const pad = (n) => n < 10 ? "0" + n : n;
        
        // Update Hero Countdown
        const timerElement = document.getElementById("mc-countdown");
        if (timerElement) {
            if (distance < 0) {
                timerElement.innerHTML = finishedHTML;
            } else {
                const values = getCountdownValues(distance);
                const elDays = document.getElementById("cd-days");
                const elHours = document.getElementById("cd-hours");
                const elMinutes = document.getElementById("cd-minutes");
                const elSeconds = document.getElementById("cd-seconds");
                
                if (elDays) elDays.innerText = pad(values.days);
                if (elHours) elHours.innerText = pad(values.hours);
                if (elMinutes) elMinutes.innerText = pad(values.minutes);
                if (elSeconds) elSeconds.innerText = pad(values.seconds);
            }
        }
        
        // Update Modal Countdown
        const modalTimer = document.getElementById("modal-countdown");
        if (modalTimer) {
            if (distance < 0) {
                const container = document.getElementById('mc-status-container');
                if (container) {
                    container.innerHTML = '';
                    fetchMCStatus(false);
                }
            } else {
                const values = getCountdownValues(distance);
                const mDays = document.getElementById("mcd-days");
                const mHours = document.getElementById("mcd-hours");
                const mMinutes = document.getElementById("mcd-minutes");
                const mSeconds = document.getElementById("mcd-seconds");
                
                if (mDays) mDays.innerText = pad(values.days);
                if (mHours) mHours.innerText = pad(values.hours);
                if (mMinutes) mMinutes.innerText = pad(values.minutes);
                if (mSeconds) mSeconds.innerText = pad(values.seconds);
            }
        }
        
        if (distance < 0 && !document.getElementById("modal-countdown")) {
            if (countdownInterval) clearInterval(countdownInterval);
        }
    }
    
    countdownInterval = setInterval(updateCountdown, 1000);
    // Call once to define variables
    updateCountdown();
