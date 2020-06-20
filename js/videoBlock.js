const videos = [
    {
        title: "The youngest Beatles tribute band",
        frameborder: 0,
        accelerometer: true,
        encryptedMedia: true,
        gyroscope: true,
        pictureInPicture: true,
        fullscreen: true,
        src: source[i],
        rating: 10,
    },
    {
        title: "Teen Millionaires - successful businesses run by teens",
        frameborder: 0,
        accelerometer: true,
        encryptedMedia: true,
        gyroscope: true,
        pictureInPicture: true,
        fullscreen: true,
        src: source[i],
        rating: 20,
    },
]

let source = ["https://www.youtube.com/embed/Uq-FOOQ1TpE", "https://www.youtube.com/embed/93mctUlDofw", "https://www.youtube.com/embed/1YCGM7FiCGg", "https://www.youtube.com/embed/vPukHebsQeQ", "https://www.youtube.com/embed/h11u3vtcpaY"]

function displayVideos(videos) {
    for (let i = 0; i < video.length; i++) {
        let videosEl = document.getElementById("video");
        videos.src = source[i].value;
        let videosEl = document.createElement("div");
        source.setAttribute('src', source[i]);
        videosEl.appendChild(source);
        videos.play();
        videos.innerHTML = `
      <p> <h3><b>${videos.title}</b></h3></p>
      <p> ${rateVideos(videos.rating)} </p>
      `
    }
}

displayVideos(videos);

function rateVideos(rating) {
    const medalEl = document.getElementById("medal"),
    const pooEl = document.getElementById("poo"),

};



