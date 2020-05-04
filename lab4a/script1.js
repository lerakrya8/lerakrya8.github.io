var firebaseConfig = {
    apiKey: "AIzaSyCcdQA8ZvjZptvmbQ_M1I7Seb_As_dvtHQ",
    authDomain: "jslab4-d3c19.firebaseapp.com",
    databaseURL: "https://jslab4-d3c19.firebaseio.com",
    projectId: "jslab4-d3c19",
    storageBucket: "jslab4-d3c19.appspot.com",
    messagingSenderId: "651120145792",
    appId: "1:651120145792:web:93e4b8e827b9e1827bbd65",
    measurementId: "G-B4QEKFJDP6"
  };
 
  firebase.initializeApp(firebaseConfig);

  function GetDate() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var message = document.getElementById('description').value;

    PutDateOnFirebase(name, email, telephone, message);    
  }

  function PutDateOnFirebase (name, email, telephone, message) {
      var NewfirebaseSet = firebase.database().ref().push();
      NewfirebaseSet.set({
          name: name,
          email: email,
          telephone: telephone,
          message: message
      }, function (error) {
          if (error) {
            alert("Ошибка отправки данных! Повторите попытку!");
          }
          else{
            alert("Поздравляем! Данные отправлены!");
          }
      });
  }
