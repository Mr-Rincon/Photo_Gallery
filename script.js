
// ID displaying picture element.
const picDisplayed = document.getElementById('showingPictureID');

// Getting first picture.
var firstPicture = document.getElementsByClassName("picOption")[0].children[0].getAttribute('src');

// Getting src attribute from image on the reel.
function chosenImg(e) {
    const clikedPicture = e.getAttribute('src');
    changeImg(clikedPicture);
}

// Removing and replacing displayed picture.
function changeImg(newImage = firstPicture) {
    picDisplayed.removeAttribute('src');
    picDisplayed.setAttribute('src', newImage);
}window.onload = changeImg(); //Setting the first pic to display when page is loaded.