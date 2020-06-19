const video = [
    {
        title: "The youngest Beatles tribute band",
        frameborder: 0,
        accelerometer: true,
        encryptedMedia: true,
        gyroscope: true,
        pictureInPicture: true,
        fullscreen: true,
    },
    {
        title: "Teen Millionaires - successful businesses run by teens",
        frameborder: 0,
        accelerometer: true,
        encryptedMedia: true,
        gyroscope: true,
        pictureInPicture: true,
        fullscreen: true,
    },
]

let source = ["https://www.youtube.com/embed/Uq-FOOQ1TpE", "https://www.youtube.com/embed/93mctUlDofw", "https://www.youtube.com/embed/1YCGM7FiCGg", "https://www.youtube.com/embed/vPukHebsQeQ", "https://www.youtube.com/embed/h11u3vtcpaY"]

function displayVideos (video) {
    for (let i=0; i<video.length; i++ )
    let videoEl = document.getElementById("video");
    video.src = url;
    let videoEl = document.createElement("div");
    source.setAttribute('src', source[i]);

videoEl.appendChild(source);
video.play();
video.innerHTML = `
      <p> <h3><b>${video.title}</b></h3></p>
      <p> <img src='${video.src}><p>
      <p> <b>Brand:</b> ${product.brand}</p>
      <p> <b>Price:</b> ${product.price} Eur</p>
      <p> Sold by a <b>gT partner</b> called ${product.seller}.</p>
      <p> This ${product.name} is suitable for teenagers on ${product.level} level.</p>
      <p> ${getRatings(product.rating)} </p>
      `
}

function rateVideos (rating) {
    const medalEl = document.getElementById("medal"),
    const pooEl = document.getElementById("poo"),
 
};



