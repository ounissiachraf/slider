'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var figure=document.getElementsByClassName("slider-figure")
console.log(figure)




var cmpt=0
var next=document.getElementById('next')
var prev=document.getElementById('prev')
var playp=document.getElementById("play-pause")
var random=document.getElementById("random")
/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function clicknext() {

    figure[cmpt].classList.remove("active")
    
    cmpt++

    if(cmpt>=figure.length)
        cmpt=0
   
    figure[cmpt].classList.add("active")

}
function clickprev() {
    figure[cmpt].classList.remove("active")
    
    cmpt--

    if(cmpt<=0)
        cmpt=figure.length-1
   
    figure[cmpt].classList.add("active")
}
function playpause() {
   let timer= setInterval(clicknext,1000)   
}
function rdm() {
    let index=getRandomInteger(0,figure.length)
    active.classList.remove("active")
    figure[index].classList.add("active")
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
next.addEventListener("click",clicknext)
prev.addEventListener("click",clickprev)
playp.addEventListener("click",playpause)
random.addEventListener("click",rdm)
//clearInterval(timer)