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

    // Lógica para mostrar o botão de checkout no pitch exato (12:01 = 721 segundos)
    const delayInSeconds = 721;
    const ctaSection = document.getElementById('cta-section');

    if (ctaSection) {
        // Lógica inteligente sincronizada com o player da Vturb
        let attempts = 0;
        const maxAttempts = 20;
        
        const checkVideoTime = setInterval(() => {
            if (typeof smartplayer !== 'undefined' && smartplayer.instances && smartplayer.instances.length > 0) {
                const player = smartplayer.instances[0];
                
                // Se o vídeo já passou do pitch, mostra o botão
                if (player.video && player.video.currentTime >= delayInSeconds) {
                    ctaSection.style.display = 'flex';
                    ctaSection.classList.add('animate-fade-up');
                    clearInterval(checkVideoTime);
                }
            } else {
                attempts++;
                // Se não carregar o Vturb em 20 segs, usa fallback de timeout
                if (attempts >= maxAttempts) {
                    clearInterval(checkVideoTime);
                    setTimeout(() => {
                        ctaSection.style.display = 'flex';
                        ctaSection.classList.add('animate-fade-up');
                    }, delayInSeconds * 1000);
                }
            }
        }, 1000);
    }
});
