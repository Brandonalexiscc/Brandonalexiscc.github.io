function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')


function iteraciones(){
    let error =  100;
    let n = 0;
    let cf = input('ingresar funcion')
    let f = inline(cf);
    let x0 = input('ingresar primer valor: ')
    let tolerancia =  parseFloat(document.getElementById('valor6').value);
    let Xi = parseFloat(document.getElementById('valor1').value);
    let Xi1= parseFloat(document.getElementById('valor2').value);
    let Fxi= parseFloat(document.getElementById('valor3').value);
    let Fx1= parseFloat(document.getElementById('valor4').value);
    printf('    n   x0  x1  x2  error\n');
    printf('    %1   %f  %f  x2  %f\n');

    while(error <= tolerancia ){
        let xr = Xi1 - Xi;
        let xr2 = Fxi * xr;
        let xr3 = Fx1 - Fxi;
        let xr4 = xr2 / xr3;
        let Xr = Xi - xr4;
        n = n++;

        let x2 = Xr;
         x0 = x1;
         x1 = x2;

        error = Math.abs(x2);

    }

    document.getElementById('el-resultado').innerHTML = toString();
    console.log(res);
}
function orden(X0, X1){

}
