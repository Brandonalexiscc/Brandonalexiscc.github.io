function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')

// btnRes.addEventListener('click')

function cuadratica(){
    let X = parseFloat(document.getElementById('valor1').value);
    let X0 = parseFloat(document.getElementById('valor3').value);
    let X1 = parseFloat(document.getElementById('valor4').value);
    let FX0 = parseFloat(document.getElementById('valor5').value);
    let FX1 = parseFloat(document.getElementById('valor6').value);
    let X2 = parseFloat(document.getElementById('valor9').value);
    let FX2 = parseFloat(document.getElementById('valor11').value);

    let b0 = FX0;
    let b1 = (FX1 - FX0) / (X1 - X0);
    let b2 = (((FX2 - FX1) / (X2 - X1)) - ((FX1 - FX0) / (X1 - X0))) / (X2 - X0);

    let FX = b0 + b1 * (X - X0) + b2 * (X - X0) * (X - X1); 

    document.getElementById('el-resultado').innerHTML = FX.toString() ;
    console.log(res);
}

