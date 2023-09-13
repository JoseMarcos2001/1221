const firebaseConfig = {
    apiKey: "AIzaSyCV2Eu8UdJX2_9FYVLFTV4aF_hLQJ4Edj8",
    authDomain: "marmore-9e301.firebaseapp.com",
    databaseURL: "https://marmore-9e301-default-rtdb.firebaseio.com",
    projectId: "marmore-9e301",
    storageBucket: "marmore-9e301.appspot.com",
    messagingSenderId: "213981622362",
    appId: "1:213981622362:web:2638b873284157c055e863"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var produtosFormDB = firebase.database().ref("produtosForm");
  
  document.getElementById("produtosForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    
    window.location.reload();
  
    var tipo = getElementVal("tipo");
    if(!tipo){ 
      alert("Insira ");
    }else
  
    var metroquadrado = getElementVal("metroquadrado");
    if(!metroquadrado){ 
      alert("insira a metragem quadrada");
    }else
  
    var valorbruto = getElementVal("valorbruto");
    if(!valorbruto){
      alert("insira o valor bruto da peça");
    }else

    var valorimposto = getElementVal("valorimposto");
    if(!valorimposto){
      alert("insira o valor do imposto");
    }else
  
    saveMessages(codpedra,tipo,cor, metroquadrado, valorbruto, valorimposto );
  
    //   enable alert
    
  
    //   reset the form
    alert("Produto cadastrado!");
   document.getElementById("produtosForm").reset();
   window.location.reload();
  }
  
  
  
  const saveMessages = (codpedra,tipo,cor, metroquadrado, valorbruto, valorimposto) => {
    codpedra=codpedra.match(/\d/g).join("");//LIMPA MASCARA
    firebase
      .database()
      .ref("produtosForm/" + codpedra)
      .set({
        codpedra: codpedra,
        tipo: tipo,
      cor: cor,
      metroquadrado: metroquadrado,
      valorbruto: valorbruto,
      valorimposto: valorimposto,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  var numV, tipoV, corV,metroquadradoV,valorbrutoV,valorimpostoV;
  
  function readFom() {
    numV = document.getElementById("cod").value.match(/\d/g).join("");
    tipoV = document.getElementById("tipo").value;
    corV = document.getElementById("cor").value;
    metroquadradoV = document.getElementById("metroquadrado").value;
    valorbrutoV = document.getElementById("valorbruto").value;
    valorimpostoV = document.getElementById("valorimposto").value;
    console.log(numV, tipoV, corV,metroquadradoV,valorbrutoV,valorimpostoV);
  }
  
  document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + numV)
      .on("value", function (snap) {
        document.getElementById("cod").value = snap.val().codpedra;
        document.getElementById("tipo").value = snap.val().tipo;
        document.getElementById("cor").value = snap.val().cor;
        document.getElementById("metroquadrado").value = snap.val().metroquadrado;
        document.getElementById("valorbruto").value = snap.val().valorbruto;
        document.getElementById("valorimposto").value = snap.val().valorimposto;
      });
  };
  
  
  document.getElementById("update").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + numV)
      .update({
        codpedra: numV,
        tipo: tipoV,
        cor: corV,
        metroquadrado: metroquadradoV,
        valorbruto: valorbrutoV,
        valorimposto: valorimpostoV,
      });
    alert("Atualizado com sucesso!");
    document.getElementById("cod").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("metroquadrado").value = "";
    document.getElementById("valorbruto").value = "";
    document.getElementById("valorimposto").value = "";
    window.location.reload();
  };
  
  
  document.getElementById("delete").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + numV)
      .remove();
      alert("Deletado com sucesso!");
      document.getElementById("cod").value = "";
      document.getElementById("tipo").value = "";
      document.getElementById("cor").value = "";
      document.getElementById("metroquadrado").value = "";
      document.getElementById("valorbruto").value = "";
      document.getElementById("valorimposto").value = "";
  
    window.location.reload();
  };
  
  
  
  

  function inicial(){
    location.href = "../tela_inicial.html";
  }