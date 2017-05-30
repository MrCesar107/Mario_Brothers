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
    salto: false,
    colisionIzquierdaSuelo: false,
    colisionDerechaSuelo: false,
    colisionInferiorSuelo: false,
    colisionSuperiorSuelo: false,
    colisionIzquierdaPlataforma0: false,
    colisionDerechaPlataforma0: false,
    colisionSuperiorPlataforma0: false,
    colisionInferiorPlataforma0: false,
    colisionIzquierdaPlataforma1: false,
    colisionDerechaPlataforma1: false,
    colisionSuperiorPlataforma1: false,
    colisionInferiorPlataforma1: false,
    colisionIzquierdaPlataforma2: false,
    colisionDerechaPlataforma2: false,
    colisionSuperiorPlataforma2: false,
    colisionInferiorrPlataforma2: false,
    colisionIzquierdaPlataforma3: false,
    colisionDerechaPlataforma3: false,
    colisionSuperiorPlataforma3: false,
    colisionInferiorPlataforma3: false,
    colisionIzquierdaPlataforma4: false,
    colisionDerechaPlataforma4: false,
    colisionSuperiorPlataforma4: false,
    colisionInferiorPlataforma4: false,
    colisionIzquierdaPLataforma5: false,
    colisionDerechaPlataforma5: false,
    colisionSuperiorPlataforma5: false,
    colisionInferiorPlataforma5: false,
    colisionIzquierdaPLataforma6: false,
    colisionDerechaPLataforma6: false,
    colisionInferiorPlataforma6: false,
    colisionInferiorPlataforma6: false
  };

  var rectangulosJugador =
  {
    rectanguloSuperiorJugador: {
      x: jugador.x,
      y: jugador.y,
      ancho: jugador.ancho,
      alto: 5
    },

    rectanguloInferiorJugador: {
      x: jugador.x,
      y: jugador.y + jugador.alto,
      ancho: jugador.ancho,
      alto: 5
    },

    rectanguloIzquierdoJugador: {
      x: jugador.x,
      y: jugador.y,
      ancho: 5,
      alto: jugador.alto
    },

    rectanguloDerechoJugador: {
      x: jugador.x + jugador.ancho,
      y: jugador.y,
      ancho: 5,
      alto: jugador.alto
    }
  };

  var suelo =
  {
    x: 0,
    y: canvas.height - 30,
    ancho: canvas.width,
    alto: 30
  };

  var rectangulosSuelo =
  {
    rectanguloSuperiorSuelo: {
      x: suelo.x,
      y: suelo.y,
      ancho: suelo.ancho,
      alto: 5
    }
  };

  var plataformas = [];

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

  var rectangulosPlataformas =
  {
    rectanguloSuperiorPlataforma0: {
      x: plataformas[0].x,
      y: plataformas[0].y,
      ancho: plataformas[0].ancho,
      alto: 3
    },

    rectanguloInferiorPlataforma0: {
      x: plataformas[0].x,
      y: plataformas[0].y + plataformas[0].alto,
      ancho: plataformas[0].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma0: {
      x: plataformas[0].x,
      y: plataformas[0].y,
      ancho: 3,
      alto: plataformas[0].alto
    },

    rectanguloDerechaPlataforma0: {
      x: plataformas[0].x + plataformas[0].ancho,
      y: plataformas[0].y,
      ancho: 3,
      alto: plataformas[0].alto
    },

    rectanguloSuperiorPlataforma1: {
      x: plataformas[1].x,
      y: plataformas[1].y,
      ancho: plataformas[1].ancho,
      alto: 3
    },

    rectanguloInferiorPlataforma1: {
      x: plataformas[1].x,
      y: plataformas[1].y + plataformas[1].alto,
      ancho: plataformas[1].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma1: {
      x: plataformas[1].x,
      y: plataformas[1].y,
      ancho: 3,
      alto: plataformas[1].alto
    },

    rectanguloDerechaPlataforma1: {
      x: plataformas[1].x + plataformas[1].ancho,
      y: plataformas[1].y,
      ancho: 3,
      alto: plataformas[1].alto
    },

    rectanguloSuperiorPlataforma2: {
      x: plataformas[2].x,
      y: plataformas[2].y,
      ancho: plataformas[2].ancho,
      alto: 3
    },

    rectanguloInferiorPlataforma2: {
      x: plataformas[2].x,
      y: plataformas[2].y + plataformas[2].alto,
      ancho: plataformas[2].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma2: {
      x: plataformas[2].x,
      y: plataformas[2].y,
      ancho: 3,
      alto: plataformas[2].alto
    },

    rectanguloDerechaPlataforma2: {
      x: plataformas[2].x + plataformas[2].ancho,
      y: plataformas[2].y,
      ancho: 3,
      alto: plataformas[2].alto
    },

    rectanguloSuperiorPlataforma3: {
      x: plataformas[3].x,
      y: plataformas[3].y,
      ancho: plataformas[3].ancho,
      alto: 3
    },

    rectanguloInferiorPlataforma3: {
      x: plataformas[3].x,
      y: plataformas[3].y + plataformas[3].alto,
      ancho: plataformas[3].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma3: {
      x: plataformas[3].x,
      y: plataformas[3].y,
      ancho: 3,
      alto: plataformas[3].alto
    },

    rectanguloDerechaPlataforma3: {
      x: plataformas[3].x + plataformas[3].ancho,
      y: plataformas[3].y,
      ancho: 3,
      alto: plataformas[3].alto
    },

    rectanguloSuperiorPlataforma4: {
      x: plataformas[4].x,
      y: plataformas[4].y,
      ancho: plataformas[4].ancho,
      alto: 3
    },

    rectanguloInferiorPlataforma4: {
      x: plataformas[4].x,
      y: plataformas[4].y + plataformas[4].alto,
      ancho: plataformas[4].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma4: {
      x: plataformas[4].x,
      y: plataformas[4].y,
      ancho: 3,
      alto: plataformas[4].alto
    },

    rectanguloDerechaPlataforma4: {
      x: plataformas[4].x + plataformas[4].ancho,
      y: plataformas[4].y,
      ancho: 3,
      alto: plataformas[4].alto
    },

    rectanguloSuperiorPlataforma5: {
      x: plataformas[5].x,
      y: plataformas[5].y,
      ancho: plataformas[5].ancho,
      alto: 3,
    },

    rectanguloInferiorPlataforma5: {
      x: plataformas[5].x,
      y: plataformas[5].y + plataformas[5].alto,
      ancho: plataformas[5].ancho,
      alto: 3,
    },

    rectanguloIzquierdaPlataforma5: {
      x: plataformas[5].x,
      y: plataformas[5].y,
      ancho: 3,
      alto: plataformas[5].alto
    },

    rectanguloDerechaPlataforma5: {
      x: plataformas[5].x + plataformas[5].ancho,
      y: plataformas[5].y,
      ancho: 3,
      alto: plataformas[5].alto
    },

    rectanguloSuperiorPlataforma6: {
      x: plataformas[6].x,
      y: plataformas[6].y,
      ancho: plataformas[6].ancho,
      alto: 3,
    },

    rectanguloInferiorPlataforma6: {
      x: plataformas[6].x,
      y: plataformas[6].y + plataformas[6].alto,
      ancho: plataformas[6].ancho,
      alto: 3
    },

    rectanguloIzquierdaPlataforma6: {
      x: plataformas[6].x,
      y: plataformas[6].y,
      ancho: 3,
      alto: plataformas[6].alto
    },

    rectanguloDerechaPlataforma6: {
      x: plataformas[6].x + plataformas[6].ancho,
      y: plataformas[6].y,
      ancho: 3,
      alto: plataformas[6].alto
    }
  };

  var fondo;

  var teclado = [];
  var friction = 0.8;
  var gravity = 0.3;

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
				elemento.addEventListener(nombreEvento,  funcion, false);
			}
			else if(elemento.attachEvent)
			{
				elemento.attachEvent(nombreEvento, funcion);
			}
		}
	}

  function actualizarRectangulosJugador()
  {
    rectangulosJugador.rectanguloSuperiorJugador.x = jugador.x;
    rectangulosJugador.rectanguloSuperiorJugador.y = jugador.y;
    rectangulosJugador.rectanguloInferiorJugador.x = jugador.x;
    rectangulosJugador.rectanguloInferiorJugador.y = jugador.y + jugador.alto;
    rectangulosJugador.rectanguloIzquierdoJugador.x = jugador.x;
    rectangulosJugador.rectanguloIzquierdoJugador.y = jugador.y;
    rectangulosJugador.rectanguloDerechoJugador.x = jugador.x + jugador.ancho;
    rectangulosJugador.rectanguloDerechoJugador.y = jugador.y;
  }

  function colisionInferiorJugadorSuelo()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosSuelo.rectanguloSuperiorSuelo.y)
      jugador.colisionInferiorSuelo = true;
    else
      jugador.colisionInferiorSuelo = false;
  }

  function colisionesJugadorSuelo()
  {
    colisionInferiorJugadorSuelo();
  }

  function colisionInferiorJugadorPlataforma0()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma0.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma0.x + rectangulosPlataformas.rectanguloSuperiorPlataforma0.ancho)
      jugador.colisionInferiorPlataforma0 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma0.x)
      jugador.colisionInferiorPlataforma0 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma0.x + rectangulosPlataformas.rectanguloSuperiorPlataforma0.ancho)
      jugador.colisionInferiorPlataforma0 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma0.y + rectangulosPlataformas.rectanguloSuperiorPlataforma0.alto)
      jugador.colisionInferiorPlataforma0 = false;
  }

  function colisionSuperiorJugadorPlataforma0()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma0.y + rectangulosPlataformas.rectanguloInferiorPlataforma0.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma0.x + rectangulosPlataformas.rectanguloInferiorPlataforma0.ancho)
      jugador.colisionSuperiorPlataforma0 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma0.x)
      jugador.colisionSuperiorPlataforma0 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma0.x + rectangulosPlataformas.rectanguloInferiorPlataforma0.ancho)
      jugador.colisionSuperiorPlataforma0 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma0.y + rectangulosPlataformas.rectanguloInferiorPlataforma0.alto)
      jugador.colisionSuperiorPlataforma0 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma0.y)
      jugador.colisionSuperiorPlataforma0 = false;
  }

  function colisionInferiorJugadorPlataforma1()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma1.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma1.x + rectangulosPlataformas.rectanguloSuperiorPlataforma1.ancho)
      jugador.colisionInferiorPlataforma1 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma1.x)
      jugador.colisionInferiorPlataforma1 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma1.x + rectangulosPlataformas.rectanguloSuperiorPlataforma1.ancho)
      jugador.colisionInferiorPlataforma1 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma1.y + rectangulosPlataformas.rectanguloSuperiorPlataforma1.alto)
      jugador.colisionInferiorPlataforma1 = false;
  }

  function colisionSuperiorJugadorPlataforma1()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma1.y + rectangulosPlataformas.rectanguloInferiorPlataforma1.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma1.x + rectangulosPlataformas.rectanguloInferiorPlataforma1.ancho)
      jugador.colisionSuperiorPlataforma1 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma1.x)
      jugador.colisionSuperiorPlataforma1 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma1.x + rectangulosPlataformas.rectanguloInferiorPlataforma1.ancho)
      jugador.colisionSuperiorPlataforma1 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma1.y + rectangulosPlataformas.rectanguloInferiorPlataforma1.alto)
      jugador.colisionSuperiorPlataforma1 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma1.y)
      jugador.colisionSuperiorPlataforma1 = false;
  }

  function colisionInferiorJugadorPlataforma2()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma2.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma2.x + rectangulosPlataformas.rectanguloSuperiorPlataforma2.ancho)
      jugador.colisionInferiorPlataforma2 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma2.x)
      jugador.colisionInferiorPlataforma2 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma2.x + rectangulosPlataformas.rectanguloSuperiorPlataforma2.ancho)
      jugador.colisionInferiorPlataforma2 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma2.y + rectangulosPlataformas.rectanguloSuperiorPlataforma2.alto)
      jugador.colisionInferiorPlataforma2 = false;
  }

  function colisionSuperiorJugadorPlataforma2()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma2.y + rectangulosPlataformas.rectanguloInferiorPlataforma2.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma2.x + rectangulosPlataformas.rectanguloInferiorPlataforma2.ancho)
      jugador.colisionSuperiorPlataforma2 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma2.x)
      jugador.colisionSuperiorPlataforma2 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma2.x + rectangulosPlataformas.rectanguloInferiorPlataforma2.ancho)
      jugador.colisionSuperiorPlataforma2 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma2.y + rectangulosPlataformas.rectanguloInferiorPlataforma2.alto)
      jugador.colisionSuperiorPlataforma2 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma2.y)
      jugador.colisionSuperiorPlataforma2 = false;
  }

  function colisionInferiorJugadorPlataforma3()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma3.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma3.x + rectangulosPlataformas.rectanguloSuperiorPlataforma3.ancho)
      jugador.colisionInferiorPlataforma3 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma3.x)
      jugador.colisionInferiorPlataforma3 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma3.x + rectangulosPlataformas.rectanguloSuperiorPlataforma3.ancho)
      jugador.colisionInferiorPlataforma3 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma3.y + rectangulosPlataformas.rectanguloSuperiorPlataforma3.alto)
      jugador.colisionInferiorPlataforma3 = false;
  }

  function colisionSuperiorJugadorPlataforma3()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma3.y + rectangulosPlataformas.rectanguloInferiorPlataforma3.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma3.x + rectangulosPlataformas.rectanguloInferiorPlataforma3.ancho)
      jugador.colisionSuperiorPlataforma3 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma3.x)
      jugador.colisionSuperiorPlataforma3 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma3.x + rectangulosPlataformas.rectanguloInferiorPlataforma3.ancho)
      jugador.colisionSuperiorPlataforma3 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma3.y + rectangulosPlataformas.rectanguloInferiorPlataforma3.alto)
      jugador.colisionSuperiorPlataforma3 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma3.y)
      jugador.colisionSuperiorPlataforma3 = false;
  }

  function colisionInferiorJugadorPlataforma4()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma4.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma4.x + rectangulosPlataformas.rectanguloSuperiorPlataforma4.ancho)
      jugador.colisionInferiorPlataforma4 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma4.x)
      jugador.colisionInferiorPlataforma4 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma4.x + rectangulosPlataformas.rectanguloSuperiorPlataforma4.ancho)
      jugador.colisionInferiorPlataforma4 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma4.y + rectangulosPlataformas.rectanguloSuperiorPlataforma4.alto)
      jugador.colisionInferiorPlataforma4 = false;
  }

  function colisionSuperiorJugadorPlataforma4()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma4.y + rectangulosPlataformas.rectanguloInferiorPlataforma4.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma4.x + rectangulosPlataformas.rectanguloInferiorPlataforma4.ancho)
      jugador.colisionSuperiorPlataforma4 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma4.x)
      jugador.colisionSuperiorPlataforma4 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma4.x + rectangulosPlataformas.rectanguloInferiorPlataforma4.ancho)
      jugador.colisionSuperiorPlataforma4 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma4.y + rectangulosPlataformas.rectanguloInferiorPlataforma4.alto)
      jugador.colisionSuperiorPlataforma4 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma4.y)
      jugador.colisionSuperiorPlataforma4 = false;
  }

  function colisionInferiorJugadorPlataforma5()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma5.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma5.x + rectangulosPlataformas.rectanguloSuperiorPlataforma5.ancho)
      jugador.colisionInferiorPlataforma5 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma5.x)
      jugador.colisionInferiorPlataforma5 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma5.x + rectangulosPlataformas.rectanguloSuperiorPlataforma5.ancho)
      jugador.colisionInferiorPlataforma5 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma5.y + rectangulosPlataformas.rectanguloSuperiorPlataforma5.alto)
      jugador.colisionInferiorPlataforma5 = false;
  }

  function colisionSuperiorJugadorPlataforma5()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma5.y + rectangulosPlataformas.rectanguloInferiorPlataforma5.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma5.x + rectangulosPlataformas.rectanguloInferiorPlataforma5.ancho)
      jugador.colisionSuperiorPlataforma5 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma5.x)
      jugador.colisionSuperiorPlataforma5 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma5.x + rectangulosPlataformas.rectanguloInferiorPlataforma5.ancho)
      jugador.colisionSuperiorPlataforma5 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma5.y + rectangulosPlataformas.rectanguloInferiorPlataforma5.alto)
      jugador.colisionSuperiorPlataforma5 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma5.y)
      jugador.colisionSuperiorPlataforma5 = false;
  }

  function colisionInferiorJugadorPlataforma6()
  {
    if(rectangulosJugador.rectanguloInferiorJugador.y + rectangulosJugador.rectanguloInferiorJugador.alto >= rectangulosPlataformas.rectanguloSuperiorPlataforma6.y
        && rectangulosJugador.rectanguloInferiorJugador.x <= rectangulosPlataformas.rectanguloSuperiorPlataforma6.x + rectangulosPlataformas.rectanguloSuperiorPlataforma6.ancho)
      jugador.colisionInferiorPlataforma6 = true;

    if(rectangulosJugador.rectanguloInferiorJugador.x + rectangulosJugador.rectanguloInferiorJugador.ancho < rectangulosPlataformas.rectanguloSuperiorPlataforma6.x)
      jugador.colisionInferiorPlataforma6 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.x > rectangulosPlataformas.rectanguloSuperiorPlataforma6.x + rectangulosPlataformas.rectanguloSuperiorPlataforma6.ancho)
      jugador.colisionInferiorPlataforma6 = false;

    if(rectangulosJugador.rectanguloInferiorJugador.y > rectangulosPlataformas.rectanguloSuperiorPlataforma6.y + rectangulosPlataformas.rectanguloSuperiorPlataforma6.alto)
      jugador.colisionInferiorPlataforma6 = false;
  }

  function colisionSuperiorJugadorPlataforma6()
  {
    if(rectangulosJugador.rectanguloSuperiorJugador.y <= rectangulosPlataformas.rectanguloInferiorPlataforma6.y + rectangulosPlataformas.rectanguloInferiorPlataforma6.alto
        && rectangulosJugador.rectanguloSuperiorJugador.x <= rectangulosPlataformas.rectanguloInferiorPlataforma6.x + rectangulosPlataformas.rectanguloInferiorPlataforma6.ancho)
      jugador.colisionSuperiorPlataforma6 = true;

    if(rectangulosJugador.rectanguloSuperiorJugador.x + rectangulosJugador.rectanguloSuperiorJugador.ancho < rectangulosPlataformas.rectanguloInferiorPlataforma6.x)
      jugador.colisionSuperiorPlataforma6 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.x > rectangulosPlataformas.rectanguloInferiorPlataforma6.x + rectangulosPlataformas.rectanguloInferiorPlataforma6.ancho)
      jugador.colisionSuperiorPlataforma6 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y > rectangulosPlataformas.rectanguloInferiorPlataforma6.y + rectangulosPlataformas.rectanguloInferiorPlataforma6.alto)
      jugador.colisionSuperiorPlataforma6 = false;

    if(rectangulosJugador.rectanguloSuperiorJugador.y + rectangulosJugador.rectanguloSuperiorJugador.alto < rectangulosPlataformas.rectanguloInferiorPlataforma6.y)
      jugador.colisionSuperiorPlataforma6 = false;
  }

  function colisionesJugadorPlataformas()
  {
    colisionInferiorJugadorPlataforma0();
    colisionSuperiorJugadorPlataforma0();
    colisionInferiorJugadorPlataforma1();
    colisionSuperiorJugadorPlataforma1();
    colisionInferiorJugadorPlataforma2();
    colisionSuperiorJugadorPlataforma2();
    colisionInferiorJugadorPlataforma3();
    colisionSuperiorJugadorPlataforma3();
    colisionInferiorJugadorPlataforma4();
    colisionSuperiorJugadorPlataforma4();
    colisionInferiorJugadorPlataforma5();
    colisionSuperiorJugadorPlataforma5();
    colisionInferiorJugadorPlataforma6();
    colisionSuperiorJugadorPlataforma6();
  }

  function moverPersonaje()
  {
    colisionesJugadorSuelo();
    colisionesJugadorPlataformas();

    if(jugador.colisionInferiorSuelo && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorSuelo = false;
    }

    if(jugador.colisionInferiorPlataforma0 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma0 = false;
    }

    if(jugador.colisionInferiorPlataforma1 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma1 = false;
    }

    if(jugador.colisionInferiorPlataforma2 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma2 = false;
    }

    if(jugador.colisionInferiorPlataforma3 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma3 = false;
    }

    if(jugador.colisionInferiorPlataforma4 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma4 = false;
    }

    if(jugador.colisionInferiorPlataforma5 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma5 = false;
    }

    if(jugador.colisionInferiorPlataforma6 && teclado[38])
    {
      jugador.velY = -jugador.velocidad * 4;
      jugador.colisionInferiorPlataforma6 = false;
    }

    if(teclado[39])
      jugador.x += jugador.velocidad;

    if(teclado[37])
      jugador.x -= jugador.velocidad;

    if(jugador.x + jugador.ancho < 0)
      jugador.x = canvas.width;

    if(jugador.x > canvas.width)
      jugador.x = -64;

    if(!jugador.colisionInferiorSuelo && !jugador.colisionInferiorPlataforma0 && !jugador.colisionInferiorPlataforma1
        && !jugador.colisionInferiorPlataforma2 && !jugador.colisionInferiorPlataforma3
        && !jugador.colisionInferiorPlataforma4 && !jugador.colisionInferiorPlataforma5
        && !jugador.colisionInferiorPlataforma6)
    {
      gravity = 0.3;
      jugador.velY += gravity;
    }

    if(jugador.colisionInferiorSuelo || jugador.colisionInferiorPlataforma1 || jugador.colisionInferiorPlataforma2
        || jugador.colisionInferiorPlataforma3 || jugador.colisionInferiorPlataforma4 || jugador.colisionInferiorPlataforma5
        || jugador.colisionInferiorPlataforma6)
    {
      gravity = 0;
      jugador.velY = gravity;
    }

    if(jugador.colisionSuperiorPlataforma0 || jugador.colisionSuperiorPlataforma1 || jugador.colisionSuperiorPlataforma2
        || jugador.colisionSuperiorPlataforma3 || jugador.colisionSuperiorPlataforma4 || jugador.colisionSuperiorPlataforma5
        || jugador.colisionSuperiorPlataforma6)
    {
      gravity = 0;
			jugador.velY = gravity;
			gravity = 0.4;
			jugador.velY += gravity;
    }

    jugador.y += jugador.velY;
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
    actualizarRectangulosJugador();
    moverPersonaje();
    dibujarFondo();
    dibujarSuelo();
    dibujarPlataformas();
    dibujarJugador();
  }

  agregarEventosTeclado();
  loadMedia();

})();
