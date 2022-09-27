//Aula JS 
let campo = document.querySelector('input[type=tel]'); 
let lista = document.querySelectorAll('input[type=button]');


// Percorrendo 
lista: for(i=0;i<12;i++){ let tecla = lista[i]; tecla.onclick = function(){ campo.value = campo.value + tecla.value; } } 

// Limpando Campos 
let limpa = document.querySelector('input[type=reset]');
