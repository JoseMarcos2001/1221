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
  
    var tipo = getElementVal("produtoid");
    if(!tipo){ 
      alert("Insira tipo e cor do produto");
    }else
  
    var metroquadrado = getElementVal("metroquadradoid");
    if(!metroquadrado){ 
      alert("insira a metragem quadrada");
    }else
  
    var valorbruto = getElementVal("valorbrutoid");
    if(!valorbruto){
      alert("insira o valor bruto da peça");
    }else

    var valorimposto = getElementVal("valorimpostoid");
    if(!valorimposto){
      alert("insira o valor do imposto");
    }else
  
    saveMessages(tipo,metroquadrado,valorbruto,valorimposto);
  
    //   enable alert

  
    //   reset the form
    alert("Produto cadastrado!");
   document.getElementById("produtosForm").reset();
   window.location.reload();
  }
  
  
  
  const saveMessages = (tipo, metroquadrado, valorbruto, valorimposto) => {
    firebase
      .database()
      .ref("produtosForm/" + tipo)
      .set({
        tipo: tipo,
      metroquadrado: metroquadrado,
      valorbruto: valorbruto,
      valorimposto: valorimposto,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  var tipoV,metroquadradoV,valorbrutoV,valorimpostoV;
  
  function readFom() {
    tipoV = document.getElementById("produtoid").value;
    metroquadradoV = document.getElementById("metroquadradoid").value;
    valorbrutoV = document.getElementById("valorbrutoid").value;
    valorimpostoV = document.getElementById("valorimpostoid").value;
    console.log(tipoV,metroquadradoV,valorbrutoV,valorimpostoV);
  }
  
  document.getElementById("read").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + tipoV)
      .on("value", function (snap) {
        document.getElementById("produtoid").value = snap.val().produtoid;
        document.getElementById("metroquadradoid").value = snap.val().metroquadrado;
        document.getElementById("valorbrutoid").value = snap.val().valorbruto;
        document.getElementById("valorimpostoid").value = snap.val().valorimposto;
      });
  };
  
  
  document.getElementById("update").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + tipoV)
      .update({
        produtoid: tipoV,
        metroquadradoid: metroquadradoV,
        valorbrutoid: valorbrutoV,
        valorimpostoid: valorimpostoV,
      });
    alert("Atualizado com sucesso!");
    document.getElementById("produtoid").value = "";
    document.getElementById("metroquadradoid").value = "";
    document.getElementById("valorbrutoid").value = "";
    document.getElementById("valorimpostoid").value = "";
    window.location.reload();
  };
  
  
  document.getElementById("delete").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("produtosForm/" + tipoV)
      .remove();
      alert("Deletado com sucesso!");
      document.getElementById("produtoid").value = "";
      document.getElementById("metroquadradoid").value = "";
      document.getElementById("valorbrutoid").value = "";
      document.getElementById("valorimpostoid").value = "";
  
    window.location.reload();
  };
  
  
  
  

  function inicial(){
    location.href = "../tela_inicial.html";
  }