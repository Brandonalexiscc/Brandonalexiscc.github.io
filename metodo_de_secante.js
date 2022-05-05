function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')


function iteraciones(){
    let factorDeParo= parseFloat(document.getElementById('valor5').value);
    let Xi = parseFloat(document.getElementById('valor1').value);
    let Xi1= parseFloat(document.getElementById('valor2').value);
    let Fxi= parseFloat(document.getElementById('valor3').value);
    let Fx1= parseFloat(document.getElementById('valor4').value);
    
    for(let i = 0; i <= factorDeParo; i++){
    let resultado = new Array (resultado1);
    let xr = Xi1 - Xi;
    let xr2 = Fxi * xr;
    let xr3 = Fx1 - Fxi;
    let xr4 = xr2 / xr3;
    let resultado1 = Xi - xr4;
    }

    document.getElementById('el-resultado').innerHTML = iteraciones.toString();
    console.log(res);
}
