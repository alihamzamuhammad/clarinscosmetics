// Perfume Product Section Start
// Card 1 Start
document.querySelector(".view-more1body").addEventListener("click", function() {
    document.getElementById("modal1body").style.display = "block";
  });
  
  document.querySelector(".close1body").addEventListener("click", function() {
    document.getElementById("modal1body").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("modal1body")) {
      document.getElementById("modal1body").style.display = "none";
    }
  });
  // Card 1 End