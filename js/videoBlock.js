const ytVideoIDs = [
    'mRmMGeyruB0',
    'Unx9Y_Wy5pI',
    'sDnNpL2eF98'
]

function videoEl(videoId) {
    const videoWrapperEl = document.createElement('div');
    videoWrapperEl.innerHTML = `
    <iframe
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://localhost"
        frameborder="0"
    ></iframe>`;
    return videoWrapperEl;
}

const videoListEl = document.querySelector('.gridVideo');

ytVideoIDs.forEach(videoId => {
    videoListEl.appendChild(videoEl(videoId));
})