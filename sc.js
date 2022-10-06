 swal =require('sweetalert');

function functionload (){
    swal("Page chargée ");
}
  function recommencer() {
    window.location.reload();
  }



function validQCM (){
  console.log("hi");
 
   var result=0;
    var elements = document.getElementsByClassName('liste-reponse');
    for(j = 0; j < elements.length; j++){
     var int = elements[j].getElementsByTagName('li');
     var num=0;
     console.log('11');
     for(i = 0; i < int.length; i++){
       var allElems =elements[j].getElementsByTagName('input');
       console.log('12');
       if (allElems[i].type == 'radio' && allElems[i].checked === true) {
          console.log('1');
          if(allElems[i].className==="vrai"){
            console.log('2');
            int[i].style.color = 'green';
            result=result+1;
      
          }else{
            console.log('3');
            int[i].style.color = 'red';}
           
        }

        if(allElems[i].type == 'checkbox' && allElems[i].checked === true){
          if(allElems[i].className==="vrai"){
            console.log('2');
            int[i].style.color = 'green';
            num=num+1;
      
          }else{
            console.log('3');
            int[i].style.color = 'red';
            num=num-1;
          }
         
        }

        if(allElems[i].checked === false){ int[i].style.color = 'black';}

       
      } 
      
      if(num==2){result=result+1;}  
    }  
    if( result <=2){
    swal("opps!","Votre note est" +result +"/5","error");}
    else{swal("Good job!","Votre note est" +result +"/5", "success");}
  }
  


 // document.getElementById('summer').checked


