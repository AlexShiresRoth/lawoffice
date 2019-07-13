(() => {
  //about section wp fadein
  const aboutWaypoint = new Waypoint({
    element: document.getElementById("js-wp-about"),
    handler: function(direction) {
      let aboutSection = document.querySelector(".section-about");
      aboutSection.classList.add("section-about--transition");
    },
    offset: "40%"
  });

  const phraseWaypoint = new Waypoint({
    element: document.getElementById("js-wp-phrase"),
    handler: function(direction) {
      let phraseSection = document.querySelector(".section-phrase-p-break");
      phraseSection.classList.add("section-phrase-transition");
    },
    offset: "40%"
  });

  const practicesWaypoint = new Waypoint({
    element: document.getElementById("js-wp-practices"),
    handler: function(direction) {
      let practicesSection = document.querySelectorAll(
        ".section-practices .box"
      );
      console.log(practicesSection);
      setTimeout(() => {
        practicesSection[0].classList.add("section-practices-box-animation");
      }, 300);
      setTimeout(() => {
        practicesSection[1].classList.add("section-practices-box-animation");
      }, 600);
      setTimeout(() => {
        practicesSection[2].classList.add("section-practices-box-animation");
      }, 900);
      setTimeout(() => {
        practicesSection[3].classList.add("section-practices-box-animation");
      }, 1200);
    },
    offset: "40%"
  });
})();
