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


//   E-mail //

 function emailValidate(){
    if(!emailRegex.test(campos[0].value))
    {
      setError(0);
    }
    else 
    {
      removeError(0);
    }
  }


//  Botão //

  function enviar() {
    alert('Bem vindo!')
  }