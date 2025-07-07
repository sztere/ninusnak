document.addEventListener('DOMContentLoaded', () => {
    const mainMessageContainer = document.querySelector('.main-message-container');
    const orbsContainer = document.querySelector('.orbs-container');
    const particlesContainer = document.querySelector('.particles-container');
    const quoteModal = document.querySelector('.quote-modal');
    const quoteText = document.getElementById('quote-text');
    const closeModalBtn = document.querySelector('.close-modal-btn');

    // Még több idézet!
    const quotes = [
        "Minden szívdobbanásom Téged rejt, Ninusom. Te vagy a legédesebb gondolat a fejemben.",
        "Te vagy az a csillag, ami beragyogja az éjszakáimat, és elűzi a sötétséget.",
        "A szerelmed a legszebb dallam, ami a lelkemben szól, örökké zenél bennem.",
        "Velem vagy, és a világ egy csoda, egy mesebeli álom, amiből sosem akarok felébredni.",
        "Örökké a Tiéd, ahogy a hajnal a napé, elválaszthatatlanul, egy szívként.",
        "A mosolyod a legfényesebb napsugár az életemben, ami elűzi a felhőket.",
        "Minden pillanat veled egy örökkévalóság, tele boldogsággal és szerelemmel.",
        "Te vagy a hiányzó darab, ami teljessé tesz, az a plusz, ami nélkül nem vagyok én.",
        "Ahol Te vagy, ott van az otthonom, a béke szigete, a szívem menedéke.",
        "A szemeidben látom a jövőmet, egy tündérmesét, amit együtt írunk.",
        "Nélküled a világ üres, veled tele van színekkel és csodákkal.",
        "A neved suttogom a szélnek, hogy eljuttassa hozzád minden szeretetem.",
        "Minden reggel a te arcoddal ébredek, még az álmomban is ott vagy.",
        "Te vagy az én múzsám, inspirációm, a szívverésem oka.",
        "Amikor megfogod a kezem, tudom, hogy minden rendben lesz.",
        "A pillangók a gyomromban táncolnak, valahányszor rád gondolok.",
        "Soha nem hittem a tündérmesékben, amíg meg nem ismertelek Téged.",
        "A lelkem felismerte a Tiedet, mintha már ezer éve ismernénk egymást.",
        "Köszönöm, hogy vagy, hogy a fényeddel megvilágítod az életem.",
        "A legszebb álmom is valóság veled, Ninusom."
    ];

    // Gömbök generálása dinamikusan
    const numberOfOrbs = 30; // Ennyi gömb lesz az oldalon
    const orbDesigns = ['design-1', 'design-2', 'design-3']; // Különböző dizájn osztályok

    for (let i = 0; i < numberOfOrbs; i++) {
        const orb = document.createElement('div');
        orb.classList.add('orb');
        
        // Véletlenszerű dizájn kiválasztása
        const randomDesign = orbDesigns[Math.floor(Math.random() * orbDesigns.length)];
        orb.classList.add(randomDesign);

        // Véletlenszerű méret és elhelyezkedés
        const size = Math.random() * 50 + 50; // 50px és 100px között
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.top = `${Math.random() * 90 + 5}%`; // 5% és 95% között
        orb.style.left = `${Math.random() * 90 + 5}%`; // 5% és 95% között

        // Véletlenszerű animációs késleltetés és időtartam
        orb.style.animationDelay = `${Math.random() * 10}s`; // Max 10 másodperc késleltetés
        orb.style.animationDuration = `${Math.random() * 8 + 10}s`; // 10-18 másodperc lebegés
        orb.style.animationName = `orb-pulse, orb-float${Math.random() > 0.5 ? '2' : ''}`; // Esetleg más float animáció

        // Idézet hozzárendelése
        orb.dataset.quoteId = Math.floor(Math.random() * quotes.length);

        orbsContainer.appendChild(orb);

        // Gömb kattintás eseménykezelője
        orb.addEventListener('click', () => {
            const quoteId = parseInt(orb.dataset.quoteId);
            if (quotes[quoteId]) {
                quoteText.textContent = quotes[quoteId];
                quoteModal.classList.add('visible');
                quoteModal.classList.remove('hidden');
                // Ha a fő üzenet aktív, tüntessük el ideiglenesen
                mainMessageContainer.style.opacity = '0';
                mainMessageContainer.style.pointerEvents = 'none'; // Ne lehessen rákattintani amíg modal nyitva
            }
        });
    }

    // Részecskék generálása dinamikusan
    const numberOfParticles = 50; // Ennyi részecske lesz
    const particleTypes = ['', 'type-star', 'type-square']; // Üres string az alap körnek

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Véletlenszerű típus
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        if (randomType) {
            particle.classList.add(randomType);
        }

        // Véletlenszerű méret és elhelyezkedés
        const size = Math.random() * 40 + 10; // 10px és 50px között
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        // Véletlenszerű animációs késleltetés és időtartam
        particle.style.animationDelay = `${Math.random() * 20}s`; // Max 20 másodperc késleltetés
        particle.style.animationDuration = `${Math.random() * 15 + 15}s`; // 15-30 másodperc animáció

        // Kezdeti opacity animáció a megjelenéshez
        setTimeout(() => {
            particle.style.opacity = `${Math.random() * 0.5 + 0.3}`; // 0.3-0.8 átlátszóság
        }, Math.random() * 2000); // Késleltetett megjelenés

        particlesContainer.appendChild(particle);
    }


    // Idézet ablak bezárása
    closeModalBtn.addEventListener('click', () => {
        quoteModal.classList.remove('visible');
        setTimeout(() => {
            quoteModal.classList.add('hidden');
            // Miután bezártuk az ablakot, a fő üzenet újra látható legyen
            mainMessageContainer.style.opacity = '1';
            mainMessageContainer.style.pointerEvents = 'auto';
        }, 500);
    });

    // Ha a modal háttérre kattintanak, az is bezárja
    quoteModal.addEventListener('click', (e) => {
        if (e.target === quoteModal) {
            quoteModal.classList.remove('visible');
            setTimeout(() => {
                quoteModal.classList.add('hidden');
                mainMessageContainer.style.opacity = '1';
                mainMessageContainer.style.pointerEvents = 'auto';
            }, 500);
        }
    });
});