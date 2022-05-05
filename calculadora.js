function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')

// btnRes.addEventListener('click')

function interpolacionDePrimerGrado(){
    let X = parseFloat(document.getElementById('valor1').value);
    let X0 = parseFloat(document.getElementById('valor3').value);
    let X1 = parseFloat(document.getElementById('valor4').value);
    let FX0 = parseFloat(document.getElementById('valor5').value);
    let FX1 = parseFloat(document.getElementById('valor6').value);

    let FX  =  FX0  +  (  ( FX1  -  FX0 )  /  ( X1  -  X0 ) )  *  ( X  -  X0 );

    document.getElementById('el-resultado').innerHTML = FX.toString() ;
    console.log(res);
}

function errorCulo(aprox, verdad) {
    let error1 = verdad - aprox;
    let error2 = (error1 / verdad) * 100;
    return error2;
}

function error(){
    let X = parseFloat(document.getElementById('valor1').value);
    let X0 = parseFloat(document.getElementById('valor3').value);
    let X1 = parseFloat(document.getElementById('valor4').value);
    let FX0 = parseFloat(document.getElementById('valor5').value);
    let FX1 = parseFloat(document.getElementById('valor6').value);
    let FX = parseFloat(document.getElementById('valor2').value);

    let res  =  FX0  +  (  ( FX1  -  FX0 )  /  ( X1  -  X0 ) )  *  ( X  -  X0 );
    let resultado = (FX / X) * 100;

    document.getElementById('el-resultado2').innerHTML = errorCulo(res, FX).toString()+'%' ;
    console.log(res);
}

