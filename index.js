var a = document.querySelectorAll("button") ;
var L = [] ;
var user_input = "" ;
for(let i = 0 ; i<a.length ; i++){
    a[i].addEventListener("click",function(){
        user_input =  user_input + a[i].innerHTML  ;
        user_input = hello(user_input);
        document.querySelector("h1").innerHTML = user_input ;
    });
}
// function does not works with % and expressions starting with additions do not work
function hello(b){
    if (b[b.length-1] === "C"){
        b = "" ;
        return b ;
    }
    else if(b[0]=== "+" || b[0]=== "-" || b[0]=== "*" || b[0]=== "/" || b[0]=== "%" || b[0]=== "=" || b[0]=== "."  ){
        b = "UNDEFINED INPUT PRESS AC" ;
        return b ;
    }
    else if(b[b.length-1] === "%"){
       b = b.slice(0,b.length - 1) + "*0.01" ;
       return b ; 

    }
    else if(b[b.length-1]==="L"){
        b = b.slice(0,b.length-4) ;
        return b ;
    }
    else if(b[b.length-1]==="="){
        for(let i = 0 ; i<b.length ; i++){
            L.push(b[i]);
            
        }
        return Math(L);
    }
    else {
        return b ;
    }
}

function Math(list){
    var solution = "" ;
    var eva = 0 ;
    for(let i = 0 ; i <list.length - 1 ; i++){
        solution = solution + list[i] ;
    }
    eva = eval(solution) ;
    L = [] ;
    return eva ;

}