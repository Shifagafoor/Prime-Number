const input = document.querySelector(".input_iteam")
const clear =document.querySelector(".clear")
const check = document.querySelector(".check")
const result = document.querySelector(".result_top")

check.addEventListener("click", () => {
    console.log(prime(input.value))
   let resu=prime(input.value)
    if(resu==true){
        result.innerText='Its prime'
    }else{
        result.innerText='Its not prime'
    }

    result.classList.add('showResult');
},100)

result.classList.remove('showResult'); 

function prime(num) {
    if(num <=1 ) return false;
    for(i = 2; i < num ; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

clear.addEventListener('click', () => {
    input.value = '';
    result.innerText = ''; 
    result.classList.remove('showResult'); 

});


