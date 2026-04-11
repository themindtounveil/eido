topBar.style.height=size+"%";
let openNavigationBar = document.getElementsByClassName("openNavigationBar");
let topBar = document.getElementsByClassName("topBar");
let closeNavigationBar = document.getElementsByClassName("closeNavigationBar")
let eidoHome = document.getElementsByClassName("eidoHome")
topBar = Array.from[topBar];
eidoHome = Array.from[eidoHome];

openNavigationBar.addEventListener("mouseover", event => {
     event.topBar.style.z-index = '19';
     event.eidoHome.style.z-index = '19';
     event.console.log("open");
});

closeNavigationBar.addEventListener("mouseover", event => {
    event.topBar.style.z-index = '-9';
    event.eidoHome.style.z-index = '-9';
    event.console.log("closed");
});
