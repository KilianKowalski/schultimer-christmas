document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const colorBtn = document.getElementById('color-btn');
    const colorPicker = document.getElementById('color-picker');
    const fullscreenEventBtn = document.getElementById('fullscreen-event-btn');
    const eventColorBtn = document.getElementById('event-color-btn');
    const eventColorPicker = document.getElementById('event-color-picker');
    const schoolBell = document.getElementById('school-bell');

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('de-DE', { hour12: false });
        document.getElementById('clock').textContent = timeString;
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Nachrichtenticker bewegen
    const newsContent = document.getElementById('news-content');
    let newsPosition = newsContent.offsetWidth;

    function scrollNews() {
        newsPosition--;
        if (newsPosition < -newsContent.offsetWidth) {
            newsPosition = newsContent.offsetWidth;
        }
        newsContent.style.transform = `translateX(${newsPosition}px)`;
        requestAnimationFrame(scrollNews);
    }
    scrollNews();
});
