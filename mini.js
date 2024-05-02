var x = 0 ;
function changeimg(){
    var image = document.getElementById('img');
    x++;
    if(x%2==0){
    image.src = 'cap2.jpg';}
    else if(x%3==0){
    image.src = 'cap3.jpg' ;}
    else{
        image.src = 'cap1.jpg'
    }
}
 function one(){
    
    let currentDateTime = new Date();
    let date = currentDateTime.toTimeString();
    let time = currentDateTime.toDateString();
    var t =  date + "and the time is " + time ; 

    alert("successfully signed In..." + t);

 }