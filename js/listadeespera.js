const form = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    function setError(index){
      campos[index].style.border = '2px solid #e63636';
      spans[index].style.display = 'block';
    }

    function removeError(index){
      campos[index].style.border = '';
      spans[index].style.display = 'none';
    }

// Nome //
    function nameValidate(){
      if(campos[0].value.length < 3)
      {
        setError(0);
      }
      else
      {
        removeError(0);
      }
    }


// E-mail //

    function emailValidate(){
      if(!emailRegex.test(campos[1].value))
      {
        setError(1);
      }
      else 
      {
        removeError(1);
      }
    }


// Validação de senhas //

function mainPasswordValidade(){
  if(campos[2].value.length < 8)
  {
    setError(2);
  }
  else 
  {
    removeError(2);
    comparePassword();
  }
}

function comparePassword() {
  if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
  {
    removeError(3);
  }
  else 
  {
    setError(3);
  }
}



// Validação do cep //

$(document).ready(function () {
  function limpa_formulário_cep() {
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
  }

$("#cep").blur(function () {
  var cep = $(this).val().replace(/\D/g, "");
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");

        $.getJSON(
          "https://viacep.com.br/ws/" + cep + "/json/?callback=?",
    function (dados) {
    if (!("erro" in dados)) {
        $("#rua").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
        $("#uf").val(dados.uf);
        } else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        );
      } else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } else {
      limpa_formulário_cep();
    }
  });
});

// Botão//

function enviar (){
    alert('Cadastro realizado com sucesso!')
  }
   
