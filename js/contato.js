const form = document.getElementById('form')
    const campos = document.querySelectorAll('.required')
    const spans = document.querySelectorAll('.span-required')
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


    /* Nome  */
    function setError(index){
      campos[index].style.border = '2px solid #e63636';
      spans[index].style.display = 'block';
    }

    function removeError(index){
      campos[index].style.border = '';
      spans[index].style.display = 'none';
    }

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


    /* E-mail */ 

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


    /* Botão */ 

    function enviar(){
      alert('Embreve entraremos em contato!')
    }