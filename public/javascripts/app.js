function toggleConf() {
  document.getElementById("conf").onchange = function() {
    var x = document.getElementsByClassName("conf");
    if (document.getElementById("conf").checked === true) {
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    } else for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
  };
}

function toggleGemf() {
  document.getElementById("gemf").onchange = function() {
    var x = document.getElementsByClassName("gemf");
    if (document.getElementById("gemf").checked === true) {
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    } else for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
  };
}

function toggleSyst() {
  document.getElementById("syst").onchange = function() {
    var x = document.getElementsByClassName("syst");
    if (document.getElementById("syst").checked === true) {
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
    } else for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
  };
}
