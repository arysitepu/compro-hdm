let myVar;

function myFunction() {
myVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
hideLoaderOverlay();
AOS.refresh();
}
function hideLoaderOverlay(){
document.getElementById("loader-overlay").style.display = "none";
}

$(document).ready(function() {
    AOS.init();
    });