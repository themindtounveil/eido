topBar.style.height=size+"%";
const openNavigationBar = document.getElementsByClassName("openNavigationBar");
const topBar = document.getElementsByClassName("topBar");
const closeNavigationBar = document.getElementsByClassName("closeNavigationBar")

openNavigationBar.addEventListener("mouseover", event => {
    if (size != 0 & size == 8) {
     topBar.style.height=0%;
    }
});

closeNavigationBar.addEventListener("mouseover", event => {
    if (size == 0 & size != 8) {
     topBar.style.height=8%;
    };
});
