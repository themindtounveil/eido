topBar.style.height=size+"%";
const openNavigationBar = document.getElementsByClassName("openNavigationBar");
const topBar = document.getElementsByClassName("topBar");
const closeNavigationBar = document.getElementsByClassName("closeNavigationBar")
const eidoHome = document.getElementsByClassName("eidoHome")
openNavigationBar.addEventListener("mouseover", event => {
    if (size != 0 & size == 8) {
     topBar.style.z-index= 19;
     eidoHome.style.z-index= 19;
    }
});

closeNavigationBar.addEventListener("mouseover", event => {
    if (size == 0 & size != 8) {
     topBar.style.z-index= 0;
     eidoHome.style.z-index= 0;
    };
});
