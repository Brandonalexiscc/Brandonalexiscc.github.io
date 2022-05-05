function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')

function biseccion(){
    let Xa = parseFloat(document.getElementById('valor1').value);
    let Xb = parseFloat(document.getElementById('valor2').value);
    let n = parseFloat(document.getElementById('valor3').value);
    let fx =  Xa**n;
    let fx1 = fx + Xa**n; 
    let fx2 = fx1 + n;

    let xr = Xa + Xb;
    let xr1 = xr / 2;

    document.getElementById('el-resultado').innerHTML = xr1 .toString() ;
    console.log(res);
}
