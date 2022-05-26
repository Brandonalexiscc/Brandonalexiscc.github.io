function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes');

function integralDefinida(){
    let Xi = parseFloat(document.getElementById('valor1').value); //a
    let Xi1= parseFloat(document.getElementById('valor2').value); //b
    
    let procedimiento1 = ((Xi ** 3) / 3) - ((Xi ** 2 ) / 2);
    let procedimiento2 = ((Xi1 ** 3) / 3 ) - ((Xi1 ** 2) / 2 );

    let resta = procedimiento2 - procedimiento1;

    let total = resta;


    document.getElementById('el-resultado').innerHTML = total.toString() ;
}


console.log(res);
