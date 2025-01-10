document.addEventListener("DOMContentLoaded", function() {
    var headerText = document.querySelector(".welcome-hero .header-text");
    if (headerText) {
        headerText.classList.add("animate");
    }

    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var sections = document.querySelectorAll(".section-fade-in");
    sections.forEach(function(section) {
        observer.observe(section);
    });

    var navbar = document.querySelector('.navbar');
    var worldmarkRow = document.querySelector('.worldmark-row');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Add or remove the 'scrolled' class to/from the navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 50) {
            worldmarkRow.classList.add('hidden');
        } 
        else if (scrollTop === 0) {
            worldmarkRow.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Add animated waves
    const waveContainer = document.querySelector('.wave-container');
    const waveCount = 3; // Number of wave layers

    for (let i = 1; i <= waveCount; i++) {
        const wave = document.createElement('div');
        wave.classList.add('wave');
        wave.classList.add(`wave${i}`);
        waveContainer.appendChild(wave);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const speakers = document.querySelectorAll('.single-speaker');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    speakers.forEach(speaker => {
        speaker.addEventListener('click', function() {
            const speakerId = this.getAttribute('data-speaker');
            document.getElementById(`modal-${speakerId}`).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});

