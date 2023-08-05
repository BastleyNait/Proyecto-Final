const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

//Login - Register
var userFullName = '';
var userKey = ''; 

window.addEventListener('load', showLogin);
function showLogin(){
  let html = "<link rel='stylesheet' href='./css/style.css' />\n"+
  "<form>\n"+
  "<p class='cuenta-gratis'>¿Aun no tienes una cuenta?</p>\n"+
  "<input type='text' id='userID' placeholder='Usuario'>\n"+
  "<input type='password' id='pwd' placeholder='Contraseña'>\n"+
  "<input type='button' value='Login' onclick='doLogin()'</input>\n";

document.getElementById('main').innerHTML = html;
}

function doLogin(){
  let user = document.getElementById("userID").value;
  let pwd = document.getElementById("pwd").value;
  let url = "cgi-bin/login.pl?user="+user+"&password="+pwd;
  let promise = fetch(url);
  promise.then(response => response.text())
    .then(data =>{
      var xml = (new window.DOMParser()).parseFromString(data, "text/xml");
      loginResponse(xml);
    }).catch(error => {
      console.log("Error: ", error);
    });
}

function loginResponse(xml){
  if(xml.getElementsByTagName("owner")[0] == undefined){
    document.getElementById("userID").value = "";
    document.getElementById("pwd").value = "";
    let textoAux = document.getElementById("main").innerHTML;
    console.log(textoAux);
    document.getElementById("main").innerHTML = textoAux + "<br><p>Datos del usuario no coinciden</p>";
  }
  else{
    doProducts();
  }
}


window.addEventListener('load', showCreateAccount);
function showCreateAccount(){
  let html= "<link rel='stylesheet' href='./css/style.css' />\n"+ 
  "<form>\n"+
            "<br><input type='text' id='firstNameUser' placeholder='Nombre'>\n"+
            "<input type='text' id='lastNameUser' placeholder='Apellido'>\n"+
            "<input type='text' id='userID' placeholder='Usuario'>\n"+
            "<input type='password' id='pwd' placeholder='Contraseña'>\n"+
            "<input type='button' value='Register' onclick='doCreateAccount()'>\n";
  document.getElementById('main2').innerHTML = html;
}

function doCreateAccount(){
  let user = document.getElementById("userID").value;
  let pwd = document.getElementById("pwd").value;
  let fnUser = document.getElementById("firstNameUser").value;
  let lnUser = document.getElementById("lastNameUser").value;

  let url = "cgi-bin/register.pl?userName="+user+"&password="+pwd+"&firstName="+fnUser+"&lastName="+lnUser;
  let promise = fetch(url);
  promise.then(response => response.text())
    .then(data =>{
      var xml = (new window.DOMParser()).parseFromString(data, "text/xml");
      loginResponse2(xml);
    }).catch(error => {
      console.log("Error: ", error);
    });
}
function loginResponse2(xml){
  if(xml.getElementsByTagName("owner")[0] == undefined){
    document.getElementById("userID").value = "";
    document.getElementById("pwd").value = "";
    let textoAux = document.getElementById("main2").innerHTML;
    console.log(textoAux);
    document.getElementById("main2").innerHTML = textoAux + "<br><p>Datos del usuario no coinciden</p>";
  }
  else{
    doProducts();
  }
}

function doProducts(){
  location.href="index.html";
}