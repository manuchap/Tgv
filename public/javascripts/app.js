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