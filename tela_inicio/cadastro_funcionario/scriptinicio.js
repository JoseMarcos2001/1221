function cadastrar_cliente(){
    location.href = "cadastro_cliente/index_cliente.html";

}
function cadastrar_funcionario(){
    location.href = "cadastro_funcionario/index.html";

}
function rascunho(){
    location.href = "rascunho/index_rascunho.html";
  }

  function orçamento(){
    location.href = "orcamento/index.html";
  }

  function senha(){
    location.href = "senha/index.html";
  }
  
  function inicio(){
    location.href = "../index.html";
  }

  function logout(){
    {
      var x;
      var r=confirm("Deseja realmente sair?");
      if (r==true)
        {    
        location.href = "../../index.html";
        }
      else
        {
          location.href = "../index.html";
        }
      document.getElementById("demo").innerHTML=x;
      }
  }