var controller = new ScrollMagic.Controller();
// build scenes
new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.6, // show, when scrolled 10% into view
        duration: "250%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
    .setClassToggle("#reveal1", "visible") // add class to reveal
    /*     .addIndicators() // add indicators (requires plugin)
     */
    .addTo(controller);