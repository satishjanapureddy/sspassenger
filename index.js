//let count-el=document.getElementById("count-el")
let s1=document.getElementById("save-el")

let cl=document.getElementById("count-el")


let count=0;
function increment(){
    count=count+1;
    cl.textContent=count;
    
    
}

function save(){

    let countStr=count + " - "
    s1.textContent=s1.innerText+countStr;
    count=0;


}

