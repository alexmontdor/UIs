/**
 *  variable definition
 */
var magnifier = document.getElementById('magnifier');
var searchButton = document.getElementById('search-button');
var inputZone = document.getElementById('input-zone');
/**
 *  Display the Menu
 */

function toggleAppearance () {
    var uiSearch = document.getElementById('ui-search');
    if (uiSearch.classList.contains('open'))
        uiSearch.classList.remove('open');
    else
        uiSearch.classList.add('open');
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