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

  var plataformas = [];

  var fondo;

  var teclado = [];

  function crearPlataformas()
  {
    plataformas.push(
    {
      x: (canvas.width / 2) - 160,
      y: canvas.height / 2,
      ancho: 320,
      alto: 16
    });

    plataformas.push(
    {
      x: 0,
      y: 160,
      ancho: 320,
      alto: 16
    });

    plataformas.push(
    {
      x: (canvas.width) - 320,
      y: 160,
      ancho: 320,
      alto: 16
    });

    plataformas.push(
    {
      x: 0,
      y: (canvas.height / 2) + 30,
      ancho: 112,
      alto: 16
    });

    plataformas.push(
    {
      x: canvas.width - 112,
      y: (canvas.height / 2) + 30,
      ancho: 112,
      alto: 16
    });

    plataformas.push(
    {
      x: 0,
      y: canvas.height - 150,
      ancho: 304,
      alto: 16
    });

    plataformas.push(
    {
      x: canvas.width - 272,
      y: canvas.height - 150,
      ancho: 272,
      alto: 16
    });
  }

  crearPlataformas();

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

  function dibujarPlataformas()
  {
    for(var i in plataformas)
    {
      ctx.save();
      ctx.fillStyle = "#2a69c7";
      ctx.fillRect(plataformas[i].x, plataformas[i].y, plataformas[i].ancho, plataformas[i].alto);
      ctx.restore();
    }
  }

  function main()
  {
    dibujarFondo();
    dibujarSuelo();
    dibujarPlataformas();
    dibujarJugador();
  }

  agregarEventosTeclado();
  loadMedia();

})();
