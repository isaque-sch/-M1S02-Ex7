var salario = 5000
var metaSalarial = 12000
var porcentagem = 1.10
var meses = 1

while (salario < metaSalarial){
    if (meses % 12 == 0) {
        var salario = salario * porcentagem
    }
 meses++;
}

console.log(meses)