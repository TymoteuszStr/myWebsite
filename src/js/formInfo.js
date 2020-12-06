import {btn}  from './domSelector';

export const formInfo = () => {
    btn.addEventListener('click', () =>{
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET","http://twebdev.pl/sendMail.php");
        xhttp.onload = function() {
           
            console.log( xhttp.response);
        }
        xhttp.send();
    });
}
