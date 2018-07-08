// Sidebar
var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

// Miscs filter
function toggleConf() { toggleGeneric("conf"); }
function toggleGemf() { toggleGeneric("gemf"); }
function toggleSyst() { toggleGeneric("syst"); }
function toggleGeneric(element) {
  var e, n = document.getElementsByClassName(element);
  if (!0 === document.getElementById(element).checked)
    for (e = 0; e < n.length; e++) n[e].style.display = "block";
      else
        for (e = 0; e < n.length; e++) n[e].style.display = "none";
      }

// Rendertime
var renderStart = new Date().getTime();
window.onload=function() {
  var elapsed = new Date().getTime()-renderStart;
  document.getElementById("speed").innerHTML = elapsed;
};

