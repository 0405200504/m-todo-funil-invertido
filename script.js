document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.play-button');
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (playButton) {
        playButton.addEventListener('click', () => {
            alert('Aqui você deve inserir o link do seu vídeo no código HTML (index.html). Procure pelo comentário <!-- Placeholder para o vídeo -->.');
        });
    }

    // Efeito sutil de mouse follow no container de vídeo (Desabilitado para evitar conflito com Fullscreen)
    /*
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = videoContainer.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            videoContainer.style.transform = `translateY(-5px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
        });

        videoContainer.addEventListener('mouseleave', () => {
            videoContainer.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    }
    */

    // Lógica para mostrar o botão de checkout com delay (12:49 = 769 segundos)
    const delayInSeconds = 769;
    const ctaSection = document.getElementById('cta-section');

    if (ctaSection) {
        setTimeout(() => {
            ctaSection.style.display = 'flex';
            ctaSection.classList.add('animate-fade-up');
        }, delayInSeconds * 1000);
    }
});
