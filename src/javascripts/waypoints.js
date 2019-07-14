(() => {

  const elements = [...document.querySelectorAll(".section-practices__container--service-bubble")];

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
      return elements.forEach(service => {
        return service.classList.add("fadeIn")
      })
    },
    offset: "40%"
  })
})();
