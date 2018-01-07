/**
 * Setting variable
 */

 var stepInProcess = 1


 var input1= document.getElementById('input-step-1')
 var input2= document.getElementById('input-step-2')
 var input3= document.getElementById('input-step-3')

 var cancel1= document.getElementById('cancel-1')
 var cancel2= document.getElementById('cancel-2')
 var cancel3= document.getElementById('cancel-3')


input1.onkeypress= checkEnter;
input2.onkeypress= checkEnter;
input3.onkeypress= checkEnter;

cancel1.onclick = reset;
cancel2.onclick = reset;
cancel3.onclick = reset;

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

    function reset() {
        var el = this
        var id = el.id.slice(el.id.length-1, el.id.length)
        console.log (el.id, id)
        stepInProcess= parseInt(id)
        var arrow, el
        for (var i = stepInProcess; i <4; i++) {
            arrow = document.getElementById('arrow-'+i.toString())
            el = document.getElementById('input-step-'+i.toString())
            el.style.display = 'none';
            arrow.style.display = 'none';

        }
        
            initStep (stepInProcess) 

    }
    function initStep (i) {
        var el, arrow;
        
        el = document.getElementById('input-step-'+i.toString())
        if (stepInProcess == 1) {
            el.style.display = '';
        }
        if (stepInProcess >1) {
            arrow = document.getElementById('arrow-'+(i-1).toString())
            el.style.display = '';
            arrow.style.display = '';
        }

    }
