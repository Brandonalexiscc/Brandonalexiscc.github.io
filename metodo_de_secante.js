function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')


function iteraciones(){
    let Xi = parseFloat(document.getElementById('valor1').value); //X0
    let Xi1= parseFloat(document.getElementById('valor2').value); // X1
    let Fxi= parseFloat(document.getElementById('valor3').value); //Fx0
    let Fx1= parseFloat(document.getElementById('valor4').value); //Fx1
    let factorDeParo = parseFloat(document.getElementById('valor5').value); //tolerancia para oteraciones

        
        let result = document.getElementById("Result"); //ITERACION IMPRESA
      result.textContent = "";
      let xa=0;
      let porcentualError = 0;
      let iteracion = 0;
    if (Xi.length == 0 || Xi1 == '' || Fxi == '' || Fx1 == '' || factorDeParo == '') {
      result.innerHTML ="<h1>NO HAY DATOS</h1>";
    } else {
      do {
        iteracion++;
        let xr = Xi1 - Xi;
        let xr2 = Fxi * xr;
        let xr3 = Fx1 - Fxi;
        let xr4 = xr2 / xr3;
        let Xr = Xi - xr4;
        porcentualError = Math.abs(((Xr - xa) / Xr) * 100);
        xa = Xr;
        
        //EVALUAR NUEVO INTERVALO PARA IMPRIMIRLO
        let nuevoIntervalo = 0;
        if (Math.sign(Fxi) === -1 && Math.sign(fXR) === 1) {
          nuevoIntervalo = `[${Xi}, ${xr}]`;
        }
        if (Math.sign(fXR) === -1 && Math.sign(fXU) === 1) {
          nuevoIntervalo = `[${xr}, ${Xr}]`;
        }
  
        result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br><br><b>Fxi(${xi}) = </b>${fXI}<br><b>Fxr(${xr}) = </b>${fXR}<br><b>Fxu(${xu}) = </b>${fXU}<br><br><b>Siguiente Intervalo = </b>${nuevoIntervalo}</p><br>`;
      } while (porcentualError >= error);
    }

    document.getElementById('el-resultado').innerHTML = Xr.toString();
    console.log(res);
}
