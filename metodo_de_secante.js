function limpiar(){
    document.getElementById('miFormulario').reset();
}

const btnRes = document.getElementById('btnRes')


function iteraciones(){
      let Xi = parseFloat(document.getElementById('valor1').value); //X0
      let Xi1= parseFloat(document.getElementById('valor2').value); // X1
      // let Fxi= parseFloat(document.getElementById('valor3').value); //Fx0
      // let Fx1= parseFloat(document.getElementById('valor4').value); //Fx1
      let Fxi = fx(Xi);
      let Fx1 = fx(Xi1);
      let factorDeParo = parseFloat(document.getElementById('error3').value); 
        
        let result = document.getElementById("Result"); 
        result.textContent = "";
        let xa = 1;
        let porcentualError = 0;
        let iteracion = 0;
        let i = 0;
      if (Xi.length == 0 || Xi1 == '' || Fxi == '' || Fx1 == '' || factorDeParo == '') {
      result.innerHTML ="<h1>SIIIIUUUU  HAY MI MADRE EL BICHO</h1>";
    } else {
      do {
          Fxi = fx(Xi)
          Fx1 = fx(Xi1)
          iteracion = iteracion + 1;
          let xr = Xi1 - Xi;
          let xr2 = Fxi * xr;
          let xr3 = Fx1 - Fxi;
          let xr4 = xr2 / xr3;
          let Xr = Xi - xr4;

          i++;
          if(i > 0){
          porcentualError = Math.abs(((Xr - xa) / Xr) * 100);
          xa = Xr;
          }
            result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b> ${Xr}<br><b>Error = </b>${porcentualError}%<br><br>`;
          Xi = Xi1
          Xi1 = Xr
      } while (factorDeParo < porcentualError);
    }

    console.log(res);
}

  function fx(x){
  return (Math.pow(x, 3) - x - 1);
}