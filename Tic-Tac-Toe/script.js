let gameover= new Audio("Won.mp3")
let tap= new Audio("clickon.wav")
let end= false
let turn="X"

//function for change the turn
const changeturn = () =>{
    return turn=== "X"?"O":"X"
}
const Win = () =>{ 
    let bt=document.getElementsByClassName('btext');
    let wins =[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach (p=>{
        if((bt[p[0]].innerText === bt[p[1]].innerText) && (bt[p[2]].innerText === bt[p[1]].innerText) && (bt[p[0]].innerText!=='')){
            document.querySelector('.info').innerText= bt[p[0]].innerText +" Won"
            end=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.ltext').style.visibility = "visible";
            gameover.play()
            document.querySelector('.line').style.visibility = "visible";
            document.querySelector(".line").style.transform = `translate(${p[3]}vw, ${p[4]}vw) rotate(${p[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(parts =>{
    let boxtext =parts.querySelector(".btext");
    parts.addEventListener('click',()=>{

        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeturn();

            tap.play();
            Win();
            if(!end){
                document.getElementsByClassName("info")[0].innerText = "Turn For "+turn;
            }
        }
    })
})
reset.addEventListener('click' ,()=>{
    let bt =document.querySelectorAll(".btext");
    Array.from(bt).forEach(parts =>{
        parts.innerText = "";
        turn="X"
        end=false;
        if(!end){
            document.getElementsByClassName("info")[0].innerText = "Turn For "+turn;
        }
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector('.ltext').style.visibility = "hidden";
        document.querySelector(".line").style.width = "0vw";
        document.querySelector('.line').style.visibility = "hidden";
    });
})