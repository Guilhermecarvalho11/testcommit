let n1 = 20;
let n2 = 5;
let soma = n1 + n2;

function exercicio3(x){
    const example = x;
    console.log(example)

    if(typeof example === 'number'){
        console.log("é um numero")
    }else{
        console.log("é uma string")
    }
}

//exercicio3(8)

function exercicio4(i){
    const ex = i;

    if(typeof ex === 'string'){
        console.log("é um string");
    }else{
        console.log('não é string');
    }
}

// exercicio4(8)

function typeNumber(y){
    const pi = y;

    if(pi  % 2 === 0) {
        console.log("O número é par")
       } else {
        console.log("O número é ímpar")
    }
}

typeNumber(72)