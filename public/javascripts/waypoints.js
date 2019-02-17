(() => {
  //about section wp
  const aboutWaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        console.log('Scrolled to waypoint!')
        let aboutSection = document.querySelector('.section-about');
        aboutSection.classList.add('section-about--transition');
    },
    offset: "40%"
    
  });
    
    const phraseWaypoint = new Waypoint({
        element: document.getElementById('phrase'),
        handler: function(direction) {
        console.log('Scrolled to waypoint phrase!')
        let phraseSection = document.querySelector('.section-phrase-p-break');
        phraseSection.classList.add('section-phrase-transition')
        },
        offset: '40%'
    })
})()

