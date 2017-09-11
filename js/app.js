//----------------CALCULADORA-----------------
var Calculadora = (function(){

  var digitos; //Los dígitos mostrados actualmente en la pantalla

  return {
    pulsaTeclaOn : function(){

    },
    pulsaTeclaOperacion : function(operacion){

    },
    pulsaTeclaNumero : function(numero){

    },
    pulsaTeclaSigno : function(){

    },
    pulsaTeclaPunto : function(){

    },
    pulsaTeclaIgual : function(){

    }
  }
})();
//--------------------------------------------
//------------------TECLAS--------------------
var teclaOn = document.getElementById("on");
var teclaSuma = document.getElementById("mas");
var teclaResta = document.getElementById("menos");
var teclaMultiplica = document.getElementById("por");
var teclaDivide = document.getElementById("dividido");
var teclaRaiz = document.getElementById("raiz")
var teclaSigno = document.getElementById("sign");
var teclaPunto = document.getElementById("punto");
var teclaIgual = document.getElementById("igual");

var teclasNumero = [];
for(var i = 0; i <= 9; i++){
  teclasNumero[i] = document.getElementById(i.toString());
}

var listaTeclas = [teclaOn, teclaSuma, teclaResta, teclaMultiplica, teclaDivide,
                    teclaRaiz, teclaSigno, teclaPunto, teclaIgual, teclasNumero[0],
                    teclasNumero[1], teclasNumero[2], teclasNumero[3],
                    teclasNumero[4], teclasNumero[5], teclasNumero[6],
                    teclasNumero[7], teclasNumero[8], teclasNumero[9]];
//--------------------------------------------
//--------FUNCIONES ANIMACIÓN TECLAS----------
//Pulsar tecla
function achicarTecla(tecla){
  tecla.style.transform = "scale(0.95, 0.92)";
}
//Soltar tecla. (recuperar tamaño)
//Eliminar el estilo inline la devuelve al estilo de la hoja CSS
function soltarTecla(tecla){
  tecla.style.transform = "";
}
//--------------------------------------------
//------------------EVENTOS-------------------

//Eventos mousedown


teclaOn.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOn();
  achicarTecla(e.target);
});
teclaSuma.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOperacion("suma");
  achicarTecla(e.target);
});
teclaResta.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOperacion("resta");
  achicarTecla(e.target);
});
teclaMultiplica.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOperacion("multiplica");
  achicarTecla(e.target);
});
teclaDivide.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOperacion("divide");
  achicarTecla(e.target);
});
teclaRaiz.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaOperacion("raiz");
  achicarTecla(e.target);
});
teclaSigno.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaSigno();
  achicarTecla(e.target);
});
teclaPunto.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaPunto();
  achicarTecla(e.target);
});
teclaIgual.addEventListener("mousedown", function(e){
  Calculadora.pulsaTeclaIgual();
  achicarTecla(e.target);
});

for(var i = 0; i <= 9; i++){
  teclasNumero[i].addEventListener("mousedown", function(e){
    Calculadora.pulsaTeclaNumero(i);
    achicarTecla(e.target);
  })
}

//Eventos mouseup y mouseout
for(var i = 0; i < listaTeclas.length; i++){
  listaTeclas[i].addEventListener("mouseup", function(e){
    soltarTecla(e.target);
  });
  listaTeclas[i].addEventListener("mouseout", function(e){
    soltarTecla(e.target);
  });
}

//--------------------------------------------
