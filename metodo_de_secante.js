function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')


function iteraciones(){
    let error =  100;
    let tolerancia =  parseFloat(document.getElementById('valor6').value);
    let Xi = parseFloat(document.getElementById('valor1').value);
    let Xi1= parseFloat(document.getElementById('valor2').value);
    let Fxi= parseFloat(document.getElementById('valor3').value);
    let Fx1= parseFloat(document.getElementById('valor4').value);
    
    while(error <= tolerancia ){
        let xr = Xi1 - Xi;
        let xr2 = Fxi * xr;
        let xr3 = Fx1 - Fxi;
        let xr4 = xr2 / xr3;
        let Xr = Xi - xr4;

        let x2 = Xr;
        let x0 = x1;
        let x1 = x2;

        error = Math.abs( )

    }

    document.getElementById('el-resultado').innerHTML = toString();
    console.log(res);
}
