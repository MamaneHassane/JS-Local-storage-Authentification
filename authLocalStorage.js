
const HASH = motDePasse =>
        motDePasse.split('').reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);

function saveDatas(event)
{
event.preventDefault();
let email,passw;
passw=document.getElementById("pwd").value;
if (passw == "") {
  document.getElementById("Paragraphe").innerHTML = "Spécifiez un mot de passe";    
  return ;
}
else if (passw.length < 8) {
  document.getElementById("Paragraphe").innerHTML = "Le mot de passe contient au moins 8 caractères";
  return ;
}
else if (passw.localeCompare("mot de passe")==0) {
  document.getElementById("Paragraphe").innerHTML = "Le mot de passe ne peut pas etre mot de passe";
  return ;
}
else{
email=document.getElementById("email").value;
const user ={
  useremail :email,
  passw : HASH(passw),
};
localStorage.setItem(user.useremail,JSON.stringify(user));
}
}
function checkDatas(event){
event.preventDefault();
let email = document.getElementById("email").value;
let passw = document.getElementById("pwd").value;
var user=localStorage.getItem(email);
var data=JSON.parse(user);
passw = HASH(passw);
if(data){
if(email==data.useremail && passw==data.passw){
document.getElementById("Paragraphe").innerHTML ="Connection réussie";
console.log(passw);
}
else document.getElementById("Paragraphe").innerHTML ="Données erronées";
}
else document.getElementById("Paragraphe").innerHTML ="Passez par l'inscription";
}


 


