/**
 * Focus all document that has a value
 */
var inputs = document.getElementsByClassName("ui-input");
for ( let i=0; i < inputs.length; i++) {
   changeInput(inputs[i])
    inputs[i].onblur = changeInput
}

function changeInput(item) {
    var elem
    if (item.target)
        elem = this;
    else
        elem = item
    // console.log ('treating el', item, elem);
     if (elem.value){
        elem.classList.add("has-value");
    }
    else {
        elem.classList.remove("has-value");
    } 
}

