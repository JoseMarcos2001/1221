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
var clienteFormDB = firebase.database().ref("clienteForm");

document.getElementById("orcamentoForm").addEventListener("submit", submitForm);



function submitForm(e) {
  e.preventDefault();
  
  
  var name1 = getElementVal("name1");
  var qtd1 = getElementVal("qtd1");
  var larg1 = getElementVal("larg1");
  var comp1 = getElementVal("comp1");

 

  saveMessages(name1,qtd1,larg1,comp1);
  

  alert("foi!");
document.getElementById("orcamentoForm").reset();
}

function calculo(){
  const largura = parseFloat($('#larg1').val());
  const comprimento = parseFloat($('#comp1').val());
  const quantidade = parseFloat($('#qtd1').val());
  const area = largura * comprimento;
  console.log(area);

  const valorMetroQuadrado = 10;
  const valorTotal = (area / valorMetroQuadrado)*quantidade;
  console.log(valorTotal);

  
}

const saveMessages = (name1,qtd1,larg1,comp1) => {
  firebase
    .database()
    .ref("orcamentoForm/clienteForm/" + name1)
    .set({
      name1: name1,
      qtd1: qtd1,
      larg1: larg1,
      comp1: comp1,
    
  });
};



const getElementVal = (id) => {
  return document.getElementById(id).value;
};

var numV, nameV, phoneV,emailV,enderecoV;

function readFom() {
  numV = document.getElementById("numID").value.match(/\d/g).join("");//LIMPA MASCARA;;;
  nameV = document.getElementById("name").value;
  phoneV = document.getElementById("phone").value;
  emailV = document.getElementById("emailid").value;
  enderecoV = document.getElementById("enderecoid").value;
  console.log(numV, nameV, phoneV,emailV,enderecoV);
}

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("clienteForm/" + numV)
    .on("value", function (snap) {
      document.getElementById("numID").value = snap.val().CPF;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("phone").value = snap.val().phone;
      document.getElementById("emailid").value = snap.val().emailid;
      document.getElementById("enderecoid").value = snap.val().enderecoid;
    });
};


