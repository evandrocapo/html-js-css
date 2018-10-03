		var pokemon_lista = '[{"nome":"Pikachu", "foto":"../foto/pikachu.png"}, {"nome": "Bulbasaur", "foto":"../foto/bulbasaur.png"}, {"nome":"Charmander", "foto":"../foto/charmander.png"}, {"nome":"Squirtle", "foto":"../foto/squirtle.png"}, {"nome":"Mew", "foto":"../foto/mew.png"}, {"nome":"Jigglypuff", "foto":"../foto/jigglypuff.png"}, {"nome":"Abra", "foto":"../foto/abra.png"}]';
	var pokemon = JSON.parse(pokemon_lista);
	var texto = document.getElementById("displayText");
	var foto = document.getElementById("foto");
	var foto_vida1 = document.getElementById("vida1");
	var foto_vida2 = document.getElementById("vida2");
	var foto_vida3 = document.getElementById("vida3");
	var button = document.getElementById("button0");
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var button3 = document.getElementById("button3");
	var button4 = document.getElementById("button4");
	var pontostext = document.getElementById("pontos");
	var n_escolhidos = new Array(pokemon.length);
	var n_sorteado;
	var fase = 0;
	var button_escolhido;
	var pontos =0;
	var vida=3;

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
		button_escolhido = Math.floor(Math.random() * 4); // botão do pokemon escolhido

		for(var i=0; i < pokemon_escolhido.length - 1; i++){ //percorre os pokemons escolhidos pra nao repetir nenhum
			do{
				ok = 1;
				n_gerador = Math.floor(Math.random() * pokemon.length); // gera um numero aleatorio

				if(n_gerador === n_sorteado){ // verifica se não é o sorteado
					ok = 0;
				}
				else{
					for(var j = 0; j < pokemon_escolhido.length - 1; j++){
						if(n_gerador === pokemon_escolhido[j]){
						ok = 0;
						} // percorre todas as casas e vê se ja não tem um pokemon igual
					}
				}
			}while(ok === 0);
		pokemon_escolhido[i] = n_gerador;
		}
		pokemon_escolhido[3] = n_sorteado;	

		botoes[button_escolhido] = pokemon_escolhido[3];

		k=0;
		for(var i = 0; i < 4;i++){
			if(button_escolhido === i){
			}
			else{
				botoes[i] = pokemon_escolhido[k]; 
				k++;
			}
			
		}

		button1.value = pokemon[botoes[0]].nome;
		button2.value = pokemon[botoes[1]].nome;
		button3.value = pokemon[botoes[2]].nome;
		button4.value = pokemon[botoes[3]].nome;

		button0.remove();
		button1.style.visibility = "visible";
		button2.style.visibility = "visible";
		button3.style.visibility = "visible";
		button4.style.visibility = "visible";
	}

	function opcao(op){
        if(op === button_escolhido){
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
    	pontostext.innerHTML = "Pontos = " + pontos;
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
