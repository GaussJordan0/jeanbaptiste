const videos = document.querySelectorAll('.video-trailer')
let currentModal = null;

videos.forEach((video) => {
  video.addEventListener('click', () => {

    if (currentModal) {
      currentModal.remove();
      currentModal = null;
    }

    // Create new modal
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="video-modal fixed flex w-full h-[100vh] inset-0 z-50 backdrop-blur-lg bg-black bg-opacity-95 items-center justify-center">
        <div class="relative w-full md:w-[80%] mx-auto">
          <div class="bg-black rounded-lg overflow-hidden aspect-video">
            <iframe
              loading="lazy"
              class="w-full h-full"
              src="${video.dataset.src}?autoplay=1" 
              allowfullscreen
              allow="autoplay; encrypted-media"
            ></iframe>
      </div>
    `;

    const modal = template.content.firstElementChild;
    document.body.appendChild(modal);
    currentModal = modal;

    const closeModal = () => {
      modal.remove();
      currentModal = null;
    };
    modal.addEventListener('click', (e) => {
        closeModal();
    });

    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    });
  });
});
