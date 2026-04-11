topBar.style.height=size+"%";
let openNavigationBar = document.getElementsByClassName("openNavigationBar");
let topBar = document.getElementsByClassName("topBar");
let closeNavigationBar = document.getElementsByClassName("closeNavigationBar")
let eidoHome = document.getElementsByClassName("eidoHome")
openNavigationBar.addEventListener("mouseover", event => {
    if (size != 0 & size == 8) {
     topBar.style.z-index= 19;
     eidoHome.style.z-index= 19;
    }
});

closeNavigationBar.addEventListener("mouseover", event => {
    if (size == 0 & size != 8) {
     topBar.style.z-index= -9;
     eidoHome.style.z-index = "-9";
    };
});
