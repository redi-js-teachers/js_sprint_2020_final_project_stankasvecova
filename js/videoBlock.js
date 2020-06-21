const videos = [
    {
        title: "Miss Bee, a teen singer with a beautiful voice: High hopes",
        id: "LqYIKYEnX7Y"
    },
    {
        title: "16 yr old Riya Karumanchi, CEO of SmartCane",
        id: "UzPKgDmOqsg"
    },
    {
        title: "12 yr old Isabel Sieh codes since 10: Girls will code",
        id: "YQDXpu3t7Og"
    },
    {
        title: "12 yr old Thomas Suarez: teaching kids create apps",
        id: "Fkd9TWUtFm0"
    },
    {
        title: "Teen successful businesses: a documentary",
        id: "1YCGM7FiCGg"
    },
    {
        title: "Mo, 14 yr old CEO of bows making company",
        id: "6D5bUoRI720"
    },
    {
        title: "Santiago Gonzalez, the next Steve Jobs",
        id: "DBXZWB_dNsw"
    },
]

function videoEl(videos) {
    const videoWrapperEl = document.createElement('div');
    videoWrapperEl.innerHTML = `
    <div class="thumbnail">
    <div class="videosTitles">${videos.title}</div>
    <iframe
        type="text/html"
        width="220"
        height="160"
        src="https://www.youtube.com/embed/${videos.id}?autoplay=0&origin=http://localhost"
        frameborder="0"
    ></iframe>
    <div class="iconBlock">
        <button id="medalBtn" class="gridIcons" onClick="javascript:rateVideos()">
        <img class="gridIcons" id="medal" src="../docs/medal-first-place.gif"></button>
        <button id="pooBtn" class="gridIcons" onClick="javascript:rateVideos()">
        <img class="gridIcons" id="poo" src="../docs/poo.gif"></button>
    </div>
    </div>`;
    return videoWrapperEl;
}

const videoListEl = document.querySelector('.gridVideo');

videos.forEach(videos => {
    videoListEl.appendChild(videoEl(videos));
});