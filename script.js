document.addEventListener('DOMContentLoaded', function() {
    // Ajout d'effets d'apparition sur les sections
    const videoSection = document.querySelector('.videos-section');
    const newsSection = document.querySelector('.news-section');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        const videoTop = videoSection.getBoundingClientRect().top;
        const newsTop = newsSection.getBoundingClientRect().top;

        if (videoTop < windowHeight - revealPoint) {
            videoSection.classList.add('visible');
        }
        if (newsTop < windowHeight - revealPoint) {
            newsSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check once on page load
});

document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        audio.addEventListener('play', () => {
            audioElements.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
