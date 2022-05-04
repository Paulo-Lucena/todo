// function escreve(nome, sobrenome) {
//     const a = sobrenome;
//     if  (a === null) {
//        console.log("a é null");
//        console.log("Valor de a", a,"\n");
//        console.log("Valor de sobrenome", sobrenome,"\n");
//     }

//     console.log(`${nome} ${sobrenome}`);

// }

// function soma(a, b) {
//     return Number(a) + Number(b);
// }

// escreve("Paulo");


// function howAreTheThiss() {
//     console.log(this === window);
// }

// function howAreTheThisStrict() {
//     "use strict";
//     console.log("strict");
//     console.log(this === window);
// }

// howAreTheThiss();
// howAreTheThisStrict();


// function Exibe2(){
//     this.a = 50;
// }

// const novoObjeto = new Exibe2();
// console.log(novoObjeto.a);

let empresa = this;
console.log("teste", empresa);

function globalObj(){
    return this;
}

document.write("globalObj(): " + globalObj() + "<br>");

