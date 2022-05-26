function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes');

function integralDefinida(){
    let Xi = parseFloat(document.getElementById('valor1').value); //a
    let Xi1= parseFloat(document.getElementById('valor2').value); //b
    
    let Fxi = fx(Xi);
    let Fx1 = fx(Xi1);

    Fxi = fx(Xi);
    Fx1 = fx(Xi1);

    let procedimiento1 = (-((Fxi ** 3) / 3) - ((Fxi ** 2 ) / 2));
    let procedimiento2 = (-((Fx1 ** 3) / 2 ) - ((Fx1 ** 2) / 2 ));

    let resta = procedimiento2 - procedimiento1;

    

    document.getElementById('el-resultado').innerHTML = resta.toString() ;
}

    function fx(x){
    return (Math.pow(x, 2) - x);
}

console.log(res);
