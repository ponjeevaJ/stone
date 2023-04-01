// const a=document.querySelector('.but1');
// const b=document.querySelector('.but2');
// const c=document.querySelector('.but3');
const d=document.querySelector('.use');
const ee=document.querySelector('.sys');
const btnContainer=document.querySelector('.holl');
let arr=[" ","stone","papper","scissor"]
let user=0;
let com=0;
btnContainer.addEventListener('click',function(e)
{
   
    const val= Math.trunc(Math.random()*3)+1;
    e.preventDefault();
    const clicked=e.target.closest('.but');
    let n=clicked.dataset.roll;
    d.textContent=`${arr[n]}`;
    ee.textContent=`${arr[val]}`;
   if(n==val) return;
   if(val===1&&n===2)
   {
       user++;
   }
   else{
    if(com>0)
    {
        com--;
    }
   }

})
