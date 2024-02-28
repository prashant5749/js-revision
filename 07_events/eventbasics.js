//Events is javascript usually run sequencially 
    //Some exceptions are there , discussed below
    // document.getElementById('beautiful_eyes').onclick = function(){
    //     alert('Uff, What a beautiful eyes')
    // } -> Not Recommended as this gives you less features
    //attchEvent() -> Early approach for eventlistener
    //jquery -> on 


    //Recommended approach
    // document.getElementById('lady').addEventListener('click', function(){
    //     alert('Clicked on the lady')
    // })

    // document.getElementById('lady').addEventListener('click', function(e){
    //     console.log(e);
    // }, false) //ususally false is default thats why we dont write it

    //Important Things to learn about are :- Types, timestamp, defaultPrevented
    //target, toElement, srcElement
    //clientX, clientY, screenX, screenY
    //altkey, ctrlkey, shiftkey, keyCode


    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("inside images clicked");
    // }, false) //when false or nothing there it worked as a eventBubbling , goes from inside to outside


    // document.getElementById('lady').addEventListener('click', function(e){
    //     console.log("Lady Clicked so hard");
    //     e.stopPropagation()
    // }, false) //When true then it worked as a eventCapturing, goes from outside to inside

    // document.getElementById('google').addEventListener('click', function(e){
    //     e.preventDefault()
    // })

    document.querySelector('#images').addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){
            
            let removeIt = e.target.parentNode
            removeIt.parentNode.removeChild(removeIt)
        }
        // removeIt.remove() or below method
    }, false)