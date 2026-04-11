topBar.style.height=size+"%";
let openNavigationBar = document.getElementsByClassName("openNavigationBar");
let topBar = document.getElementsByClassName("topBar");
let closeNavigationBar = document.getElementsByClassName("closeNavigationBar")
let eidoHome = document.getElementsByClassName("eidoHome")
topBar = Array.from[topBar];
eidoHome = Array.from[eidoHome];

openNavigationBar.addEventListener("mouseover", event => {
     topBar.style.z-index = '19';
     eidoHome.style.z-index = '19';
     console.log("open");
});

closeNavigationBar.addEventListener("mouseover", event => {
    topBar.style.z-index = '-9';
    eidoHome.style.z-index = '-9';
    console.log("closed");
});
