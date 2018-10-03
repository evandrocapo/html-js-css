		var pokemon_lista = '[{"nome":"Pikachu", "foto":"../foto2/pikachu.png"}, {"nome": "Bulbasaur", "foto":"../foto2/bulbasaur.png"}, {"nome":"Charmander", "foto":"../foto2/charmander.png"}, {"nome":"Squirtle", "foto":"../foto2/squirtle.png"}, {"nome":"Mew", "foto":"../foto2/mew.png"}, {"nome":"Jigglypuff", "foto":"../foto2/jigglypuff.png"}, {"nome":"Abra", "foto":"../foto2/abra.png"}]';
	var pokemon = JSON.parse(pokemon_lista);
	var texto = document.getElementById("displayText");
	var foto = document.getElementById("foto");
	var foto_vida1 = document.getElementById("vida1");
	var foto_vida2 = document.getElementById("vida2");
	var foto_vida3 = document.getElementById("vida3");
	var button = document.getElementById("button0");
	var button1 = document.getElementById("button1");
	var pontostext = document.getElementById("pontos");
	var textfield = document.getElementById("textfield")
	var n_escolhidos = new Array(pokemon.length);
	var n_sorteado;
	var fase = 0;
	var button_escolhido;
	var pontos =0;
	var vida =3;

	function iniciarJogo(){
		var fim = 0;
		pontosatt();
		fim = escolherPoke();
		if(fim != 1){
			gerarPoke();
		}
		else{
			document.body.innerHTML = "Sua pontuação final foi de " + pontos + " pontos";
		}
	}

	function escolherPoke(){
		var ok;

		if(pokemon.length > fase){
			do{
				ok = 1;
				n_sorteado = Math.floor(Math.random() * pokemon.length);

				for(var i = 0; i<pokemon.length;i++){
					if(n_escolhidos[i] === n_sorteado) ok = 0;
				}
			}while(ok === 0);

			n_escolhidos[fase] = n_sorteado;
			fase += 1;
		}
		else{
			return 1;
		}
	}

	function gerarPoke(){
		var n_gerador;
		var pokemon_escolhido = new Array(4); // array com todos os pokemons - 1, a 4 posição é do sorteado
		var botoes = new Array(4);
		var ok;
		var j;
		var k=0;

		foto.src=pokemon[n_sorteado].foto; // foto pokemon escolhido
		

		
		
		
		button0.remove();
		textfield.style.visibility = "visible";
		button1.style.visibility = "visible";
		button1.value = "Enviar"

	}

	function opcao(){
		var pokeEscolhido = pokemon[n_sorteado].nome.toUpperCase();
		var pokeDigitado = document.getElementById("textfield").value.toUpperCase();
		
		
		
        if(pokeEscolhido.localeCompare(pokeDigitado)=== 0){
            pontos += 100;
			pontosatt();
            iniciarJogo();
			
        }
        else{
        	if(pontos > 0){
            	pontos -= 50;
				pontosatt();
				
        	}
			zeraVida();
			vida -= 1;
			if(vida<0)
			{
				document.body.innerHTML = "Sua pontuação final foi de " + pontos + " pontos";
			}
        	pontosatt();
        }
    }

    function pontosatt(){
    	pontostext.innerHTML = "Pontos = " + pontos ;
    }

	function zeraVida(){
		
		if(vida ===3)
		{
			foto_vida3.style.visibility ="hidden";
		}
		else{
			if(vida === 2)
			{
				foto_vida2.style.visibility ="hidden";
			}
			else{
				foto_vida1.style.visibility ="hidden";
			}
		}
		
	}

	textfield.addEventListener('keypress', function(e){
       if(e.which == 13){
          opcao();
       }
    }, false);

