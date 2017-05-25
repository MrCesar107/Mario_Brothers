(function()
{
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var jugador =
  {
    x: canvas.width / 2,
    y: canvas.height - 94,
    ancho: 64,
    alto: 64,
    velocidad: 3,
    velY: 0,
    salto: false
  };

  var suelo =
  {
    x: 0,
    y: canvas.height - 30,
    ancho: canvas.width,
    alto: 30
  };

  var fondo;

  var teclado = [];

  function loadMedia()
  {
    fondo = new Image();
    fondo.src = "recursos/imagenes/fondo.jpg";

    fondo.onload = function()
    {
      window.setInterval(main, 1000/60);
    }
  }

  function agregarEventosTeclado()
  {
    agregarEventos(document, "keydown", function(e)
    {
      teclado[e.keyCode] = true;
    });

    agregarEventos(document, "keyup", function(e)
    {
      teclado[e.keyCode] = false;
    });

    function agregarEventos(elemento, nombreEvento, funcion)
    {
      if(elemento.addEventListener)
      {
        elemento.addEventListener(nombreEvento, funcion, false);
      }
      else if(elemento.attachEvent)
      {
        elemento.attachEvent(nombreEvento, funcion);
      }
    }
  }

  function dibujarFondo()
  {
    ctx.save();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  function dibujarJugador()
  {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);
    ctx.restore();
  }

  function dibujarSuelo()
  {
    ctx.save();
    ctx.fillStyle = "#88480c";
    ctx.fillRect(suelo.x, suelo.y, suelo.ancho, suelo.alto);
    ctx.restore();
  }

  function main()
  {
    dibujarFondo();
    dibujarSuelo();
    dibujarJugador();
  }

  agregarEventosTeclado();
  loadMedia();

})();
