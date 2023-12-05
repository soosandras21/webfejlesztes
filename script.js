document.getElementById("check").addEventListener("click", pontszamolas);

function pontszamolas()
{ 
let pontszam = 0;

let a = document.getElementById("1/1").checked;
let b = document.getElementById("1/2").checked;
let c = document.getElementById("1/3").checked;

document.getElementById("1jo3").style.color = "green";
document.getElementById("1jo3").style.fontWeight = "bold";
if (c==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("1rossz1").style.color = "red";
document.getElementById("1rossz1").style.textDecoration = "line-through";};

if (b==1)
{document.getElementById("1rossz2").style.color = "red";
document.getElementById("1rossz2").style.textDecoration = "line-through";};

 a = document.getElementById("2/1").checked;
 b = document.getElementById("2/2").checked;
 c = document.getElementById("2/3").checked;

document.getElementById("2jo2").style.color = "green";
document.getElementById("2jo2").style.fontWeight = "bold";
if (b==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("2rossz1").style.color = "red";
document.getElementById("2rossz1").style.textDecoration = "line-through";};

if (c==1)
{document.getElementById("2rossz3").style.color = "red";
document.getElementById("2rossz3").style.textDecoration = "line-through";};

 a = document.getElementById("3/1").checked;
 b = document.getElementById("3/2").checked;
 c = document.getElementById("3/3").checked;
document.getElementById("3jo3").style.color = "green";
document.getElementById("3jo3").style.fontWeight = "bold";
if (c==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("3rossz1").style.color = "red";
document.getElementById("3rossz1").style.textDecoration = "line-through";};

if (b==1)
{document.getElementById("3rossz2").style.color = "red";
document.getElementById("3rossz2").style.textDecoration = "line-through";};

 a = document.getElementById("4/1").checked;
 b = document.getElementById("4/2").checked;
 c = document.getElementById("4/3").checked;
document.getElementById("4jo2").style.color = "green";
document.getElementById("4jo2").style.fontWeight = "bold";
if (b==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("4rossz1").style.color = "red";
document.getElementById("4rossz1").style.textDecoration = "line-through";};

if (c==1)
{document.getElementById("4rossz3").style.color = "red";
document.getElementById("4rossz3").style.textDecoration = "line-through";};

 a= document.getElementById("5/1").checked;
 b = document.getElementById("5/2").checked;
c = document.getElementById("5/3").checked;

document.getElementById("5jo3").style.color = "green";
document.getElementById("5jo3").style.fontWeight = "bold";
if (c==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("5rossz1").style.color = "red";
document.getElementById("5rossz1").style.textDecoration = "line-through";};

if (b==1)
{document.getElementById("5rossz2").style.color = "red";
document.getElementById("5rossz2").style.textDecoration = "line-through";};

 a = document.getElementById("6/1").checked;
 b = document.getElementById("6/2").checked;
 c = document.getElementById("6/3").checked;

document.getElementById("6jo1").style.color = "green";
document.getElementById("6jo1").style.fontWeight = "bold";
if (a==1)
{pontszam = pontszam+1;};

if (b==1)
{document.getElementById("6rossz2").style.color = "red";
document.getElementById("6rossz2").style.textDecoration = "line-through";};

if (c==1)
{document.getElementById("6rossz3").style.color = "red";
document.getElementById("6rossz3").style.textDecoration = "line-through";};

 a = document.getElementById("7/1").checked;
 b = document.getElementById("7/2").checked;
 c = document.getElementById("7/3").checked;
document.getElementById("7jo2").style.color = "green";
document.getElementById("7jo2").style.fontWeight = "bold";
if (b==1)
{pontszam = pontszam+1;};

if (a==1)
{document.getElementById("7rossz1").style.color = "red";
document.getElementById("7rossz1").style.textDecoration = "line-through";};

if (c==1)
{document.getElementById("7rossz3").style.color = "red";
document.getElementById("7rossz3").style.textDecoration = "line-through";};


if (pontszam < 4) {
    document.getElementById("pontszam1").innerText = "A pontszámod: " + String(pontszam) + ", olvasgasd még az oldalt!";
}
else{
    document.getElementById("pontszam1").innerText = "A pontszámod: " + String(pontszam);  
}}



/*webshophoz*/
document.getElementById("kosarba").addEventListener("click", szamolas);

function szamolas()
{

let mezdarabszam = Number(document.getElementById("mezdb").value);
let labdadarabszam = Number(document.getElementById("labdadb").value);

let vege = 0;
vege = (12000*mezdarabszam + 6000*labdadarabszam);

document.getElementById("vegosszeg").innerText ="Vegösszeg: " +String(vege)+" Ft";
document.getElementById("vegosszeg").innerText ="Vegösszeg: " +String(vege)+" Ft";

}