// Function to launch confetti burst
function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        // launch a few confetti from the left edge
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#2B6CB0', '#63B3ED', '#FFFFFF']
        });
        // and a few from the right edge
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#2B6CB0', '#63B3ED', '#FFFFFF']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Automatically start a gentle continuous confetti background
function continuousConfetti() {
    setInterval(() => {
        confetti({
            particleCount: 3,
            angle: Math.random() * 360,
            spread: 360,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#BEE3F8', '#E2E8F0', '#90CDF4'], // Very soft blues and greys for background
            opacity: 0.5,
            disableForReducedMotion: true,
            ticks: 200,
            gravity: 0.5,
            scalar: 0.8
        });
    }, 250);
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Start continuous background confetti
    continuousConfetti();

    // Button click event
    const clickMeBtn = document.getElementById('clickMeBtn');

    if (clickMeBtn) {
        clickMeBtn.addEventListener('click', () => {
            // Launch big celebration confetti
            launchConfetti();
            
            // Add button click effect
            clickMeBtn.textContent = 'YAY!';
            clickMeBtn.style.backgroundColor = '#2B6CB0';
            clickMeBtn.style.color = '#FFFFFF';
            
            // Redirect to the new page after a short delay to let confetti show
            setTimeout(() => {
                window.location.href = 'gift.html';
            }, 2000);
        });
    }
});
