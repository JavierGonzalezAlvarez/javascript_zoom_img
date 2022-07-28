var images = document.getElementsByTagName("img");
function enlarge() {
    for (let i = 0; i < images.length; ++i) {
        images[i].width = 800;
        console.log("enlarge");
    }
}

function Rotation() {
    document.querySelector("#img").style.transform = "rotate(90deg)";
}


var br;
function Brightness() {
    br = document.getElementById("myRangeB").value;
    console.log(br);
    document.getElementById("img").style.filter = "brightness(" + br + "%)";
}

var cr;
function Contrast() {
    cr = document.getElementById("myRangeC").value;
    console.log(cr);
    document.getElementById("img").style.filter = "contrast(" + cr + "%)";
}

var sp;
function Sharpness() {
    sp = document.getElementById("myRangeS").value;
    console.log(sp);
    document.getElementById("img").style.filter = "blur(" + sp + "px)";
}


var r;
function jsRotate() {
    r = document.getElementById("myRangeR").value;
    console.log(r);
    document.getElementById("img").style.transform = "rotate(" + r + "deg)";
}

var zoom;
function Zoom() {
    zoom = document.getElementById("myRangeZoom").value;
    console.log(zoom);
    image = document.getElementById("img");
    //if no exist image.dataset.width store data, just one time
    //initial values
    if (!image.dataset.width) {
        image.dataset.width = img.width;
        image.dataset.height = img.height;
    }

    //next time it runs it adds values
    const width = +image.dataset.width;
    const height = +image.dataset.height;

    image.style.width = (width * zoom / 100 + width) + "px";
    image.style.height = (height * zoom / 100 + height) + "px";
}

Zoom();

