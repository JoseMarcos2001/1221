var firebaseConfig = {
    apiKey: "AIzaSyCV2Eu8UdJX2_9FYVLFTV4aF_hLQJ4Edj8",
    authDomain: "marmore-9e301.firebaseapp.com",
    databaseURL: "https://marmore-9e301-default-rtdb.firebaseio.com",
    projectId: "marmore-9e301",
    storageBucket: "marmore-9e301.appspot.com",
    messagingSenderId: "213981622362",
    appId: "1:213981622362:web:2638b873284157c055e863"
  }
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()
  const dataContainer = document.querySelector('tbody')
  
  var fetchedData = database.ref('produtoForm/')
  fetchedData.on('value', (snapshot) => {
      var data = snapshot.val()
      var htmlData = ''
      for (var key in data){
          var value = data[key]
          htmlData += `
          <tr>
                  <td>${value.tipo}</td>
                  <td>${value.metro}</td>
                  <td>${value.valbruto}</td>
                  <td>${value.valimp}</td>
                  <td>${value.subtotal}</td>
                  <td>${value.total}</td>
                  
                  
              </tr>
  
          `;
      }
      dataContainer.innerHTML = htmlData
  })
  