const Closbtn=document.getElementsByClassName('Closebtn');
const List=document.getElementById('UL');
function OpenNow(){
List.style.display='flex';
List.style.flexDirection='column';
List.style.position='fixed';
List.style.left='2px';
List.style.top='5px';
List.style.justifyContent='space-evenly';
List.style.height='100vh';
List.style.width='20vh';
List.style.backgroundColor='black';
console.log('clicked');
}

function Closenow(){
    List.style.display='none';
    console.log('Menu Closed');
}