(function(){


    //let counter = document.querySelector('#counter');

    let buttons = document.querySelectorAll('.counterbtn');

    

    let count = 0;

    buttons.forEach(function(button){
        button.onclick = function(e){
            if(e.target.classList.contains('lower')){  
                count--;
    
            }
            else if(e.target.classList.contains('add')){
                count++;    
            }

            const counter = document.querySelector('#counter');

            counter.textContent = count;

            if(count<0){

                counter.style.color = 'red';


            }

            if(count>0){

                counter.style.color = 'green';

            }

        }

    })

    






})()

    






