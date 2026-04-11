/*topBar.style.height=size+"%";
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
*/

// 1. Grab elements (Note: getElementsByClassName returns a collection)
const openBtn = document.querySelector(".openNavigationBar");
const closeBtn = document.querySelector(".closeNavigationBar");

// 2. Convert collections to Arrays so you can loop through them
const topBars = Array.from(document.getElementsByClassName("topBar"));
const eidoHomes = Array.from(document.getElementsByClassName("eidoHome"));

// 3. Add the Event Listeners
openBtn.addEventListener("mouseover", () => {
    // You must loop through arrays to change styles on each element
    topBars.forEach(el => el.style.zIndex = '19'); 
    eidoHomes.forEach(el => el.style.zIndex = '19');
    console.log("open");
});

closeBtn.addEventListener("mouseover", () => {
    topBars.forEach(el => el.style.zIndex = '-9');
    eidoHomes.forEach(el => el.style.zIndex = '-9');
    console.log("closed");
});
