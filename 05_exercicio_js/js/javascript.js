function limpar(){
	var opcao = window.confirm("Deseja realmente limpar o formulario ?");

	if(opcao){
		var forms = document.getElementById('formulario');
		forms.reset();
	}
}

function enviar(){
	var nome = document.getElementById('nome');
	var civil = document.getElementById('civil');
	var error_civil = document.getElementById('error');
	var objetivo = document.getElementById('objetivo');
	var telefone = document.getElementById('telefone');
	var email = document.getElementById('email');
	var ingles = document.getElementById('ingles');
	var espanhol = document.getElementById('espanhol');
	var check = document.getElementsByName('conhecimento');
	var contadora = 0;
	var erros = 0;

	email.setCustomValidity("");
	ingles.setCustomValidity("");
	espanhol.setCustomValidity("");

	if(nome.value.length < 3){
		alert("O campo nome deve conter mais de 3 caracteres!");
		nome.value = '';
		erros++;
	}
	else{
		nome.value = nome.value.toUpperCase();
	}

	if(civil.value.match('erro')){
			error_civil.innerHTML = "Selecione um estado civil válido!";
			erros++;
	}
	else{
		error_civil.innerHTML = "";
	}

	objetivo.value = objetivo.value.toLowerCase();

	if(telefone.value.length < 1 && (email.checkValidity() == false || email.value.length < 1)){
		email.setCustomValidity("Porfavor preencha esse campo !");
		erros++;
	}

	if(ingles.value.match('erro')){
		ingles.setCustomValidity("Porfavor preencha esse campo !");
		erros++;
	}

	if(espanhol.value.match('erro')){
		espanhol.setCustomValidity("Porfavor preencha esse campo !");
		erros++;
	}

	for(var i=0;i<check.length;i++){
		if(check[i].checked == true){
			contadora++;
		}
	}

	if(contadora == 0){
		var opcao = window.confirm("Você realmente quer enviar o formulario dessa forma ?");
	}
	else{
		opcao = true;
	}


	if(erros == 0 && opcao == true){
		alert("Enviado !");
		document.getElementById("formulario").submit();
	}

}

function erro_email(){
	email.setCustomValidity("");
}