/*
//Creo un numero casuale per assegnarlo alle coordinate del immagine dello zombie
Random Z1 = new Random(DateTime.Now.Second * DateTime.Now.Millisecond);
 //Assegno le coordinate aggiornate all'immagine
pbxZombie.Left = Z1.Next(1, 1000 - pbxZombie.Width);
//pbxZombie.Top = Z1.Next(1, 300 - pbxZombie.Height);
//Sposto contemporaneamente anche l'azione del sangue alle nuove coordinate
pbxSangue.Left = pbxZombie.Left;
//pbxSangue.Top = pbxZombie.Top;
//Visualizzo lo zombie alle nuove coordinate
pbxZombie.Visible = true;
*/




var interval = setInterval(function()
{
	var d = new Date();
    document.getElementById('s1').innerHTML = d;
}, 1000);
 
document.getElementById('btn-stop').onclick = function(){
 
                 clearInterval(interval);
};

function scrivi (){
 
var d = new Date();
 
document.getElementById('s1').innerHTML = d;
 
}
 
var interval = setInterval(scrivi, 1000);
 
document.getElementById('btn-stop').onclick = function(){
 
                 clearInterval(interval);
             };


var timeout;
 
function start() {
 
   timeout = setTimeout(function () {
 
   alert("Ciao, sono passati 5 secondi");
 
    }, 5000);
}
 
 
function stop() {
    clearTimeout(timeout);
}
 
document.getElementById('btn-start').onclick = function() { start() };
document.getElementById('btn-stop').onclick = function() { stop() };
 