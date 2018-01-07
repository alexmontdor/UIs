/**
 *  variable definition
 */
var magnifier = document.getElementById('magnifier');
var searchButton = document.getElementById('search-button');
var inputZone = document.getElementById('input-zone');
var uiSearch = document.getElementById('ui-search');
var transitionEvent = whichTransitionEvent();
/**
 *  Display the Menu
 */

function toggleAppearance () {
    if (uiSearch.classList.contains('open')){
        uiSearch.classList.remove('open')

    }
    else {
        var fnc = uiSearch.classList.add('open');
        // Action to avoid the animation to go outside the screen
        uiSearch.style.left = ""; 
        uiSearch.addEventListener(transitionEvent, checkScreenOverflow,false)

    }
}

/**
 *  Launch the search
 *  result : display the search code
 */

searchButton.onclick= searchFor

magnifier.onclick = toggleAppearance;
document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    if (charCode == 13)
        searchFor ();
};

function searchFor() {
    console.log ('You are looking for',inputZone.value )
    // resetting screen
    toggleAppearance();
    inputZone.value ="";
}

/**
 * If search area Screen Overflow
 * result: repositionned
 */
function checkScreenOverflow () {
    uiSearch.removeEventListener(transitionEvent, checkScreenOverflow)
    if (uiSearch.offsetLeft < 0) {
        uiSearch.style.left = "0px"; 
    }
    else {
        uiSearch.style.left = ""; 
    }
}

/**
 * Determine the type of transition
 * Code from https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/
 */

function whichTransitionEvent(){
    var t
  
    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }
  
    for (t in transitions){
      if (uiSearch.style[t] !== undefined){
        return transitions[t];
      }
    }
  }
