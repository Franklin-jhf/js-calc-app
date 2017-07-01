document.addEventListener('DOMContentLoaded', function() {
    var out = document.getElementById("screen-output");
    var prevValue = "";

  document.getElementById("num0").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "0";
  });
  document.getElementById("num1").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 1;
  });
  document.getElementById("num2").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 2;
  });
  document.getElementById("num3").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 3;
  });
  document.getElementById("num4").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 4;
  });
  document.getElementById("num5").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 5;
  });
  document.getElementById("num6").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 6;
  });
  document.getElementById("num7").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 7;
  });
  document.getElementById("num8").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 8;
  });
  document.getElementById("num9").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += 9;
  });
  
  document.getElementById("AC").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML = "";
  });
  document.getElementById("CE").addEventListener("click", function() {
    out.innerHTML = prevValue;
  });
  document.getElementById("oMod").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "%";
  });
  document.getElementById("oDiv").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "/";
  });
  document.getElementById("oMult").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "*";
  });
  document.getElementById("oSub").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "-";
  });
  document.getElementById("oPlu").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += "+";
  });
  document.getElementById("numDot").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML += ".";
  });
  document.getElementById("oEqu").addEventListener("click", function() {
    prevValue = out.innerHTML;
    out.innerHTML = eval(out.innerHTML);
    
  });
  
  
});