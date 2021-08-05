function myFunction(){
  var div=document.getElementById("myModal");
  div.style.display="block";
}

    function myFunction1(){
      var span=document.getElementsByClassName("close");
      myModal.style.display="none";
   }

 function myFunction2(){
   var modal=document.getElementById("myModal1");
   modal.style.display="block";
 }
   function myFunction3(){

     myModal1.style.display="none";
   }
function sign(){
  register.style.display="block"
}
function signout(){
  register.style.display="none"
}
var modal=document.getElementById('register');
window.onclick=function(event)
{
  if(
    event.target==modal){
      modal.style.display="none";
    }
  
}