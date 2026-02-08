const Menu=document.getElementById('iconStart');
const List=document.getElementById('UL');
const X_icon=document.getElementById('icon');
const contents=document.getElementsByClassName('Menu');
const container=document.getElementsByClassName('.container');
function ShowNow()  {
    console.log("button clicked");
    List.style.display='flex';
    List.style.flexDirection='column';
    List.style.justifyContent='space-evenly';
    List.style.position='fixed';
    List.style.left='3px';
    List.style.top='5px';
    List.style.height='100vh';
    List.style.width='20vw';
    List.style.backgroundColor='black';
    List.style.zIndex='999';
    X_icon.style.display='block';
    X_icon.style.width='100%';
    
for(i=0; i<=contents.length; i++){
  contents[i].style.width='100%';
  contents[i].style.Zindex='1000';
}
 }

function CloseNow(){
      console.log("button closed");
    List.style.display='none';
}