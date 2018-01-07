/**
 * S
 */
var magnifier = document.getElementById('magnifier');
magnifier.onclick = toggleAppearance;

function toggleAppearance () {
    var uiSearch = document.getElementById('ui-search');
    if (uiSearch.classList.contains('open'))
        uiSearch.classList.remove('open');
    else
        uiSearch.classList.add('open');
}