/* Open when someone clicks on the span element */
function openNav() {
    if(document.getElementById("myNav").style.width == "10%"){
      document.getElementById("myNav").style.width = "0%";
    }
    else{
      document.getElementById("myNav").style.width = "10%";
    }
    
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }