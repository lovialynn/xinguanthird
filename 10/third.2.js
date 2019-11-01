   window.onload = function() {
    const items = document.getElementsByClassName('item');
    const week = ['!_!', '@_@', '#_#', '$_$', '^_^']
    var week2=['1','2','3','4','5'];
    for(let i = 0; i < items.length; i++){
   
        items[i].onmouseover = function (){  
           items[i].innerHTML=week[i]
           items[i].style.color = 'black';
        }  
        items[i].onmouseout=function (){
           items[i].innerHTML=week2[i]
           items[i].style.color='aqua'
        }
    }
}
