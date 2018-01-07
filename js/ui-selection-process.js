/**
 * Setting variable
 */

 var stepInProcess = 1


 var input1= document.getElementById('input-step-1')
 var input2= document.getElementById('input-step-2')
 var input3= document.getElementById('input-step-3')


 input1.onkeypress= checkEnter;
 input2.onkeypress= checkEnter;
 input3.onkeypress= checkEnter;
 

    function saveStep (id) {

        if (id<4) {
        var el = document.getElementById('input-step-'+id.toString())
        console.log (el.value)
        document.getElementById('type-'+id.toString()).innerText = el.value;
        var arrow = document.getElementById('arrow-'+id.toString())

        el.style.display = 'none';
        arrow.style.display = ''
        
            stepInProcess++;

        }
        if (stepInProcess<4) {
            el = document.getElementById('input-step-'+stepInProcess.toString())
            el.style.display = '';
        }
    }

    function checkEnter (evt) {
        evt = evt || window.event;
        var charCode = evt.keyCode || evt.which;
        if (charCode == 13)
            saveStep(stepInProcess);
    };