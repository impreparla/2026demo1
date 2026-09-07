
/* control menu lateral */	 
const botonMenu= document.getElementById('boton-menu');
const menuLateral= document.getElementById('menu-lateral');
const botonCerrar= document.getElementById('boton-cerrar');

botonMenu.addEventListener('click', function(){
	menuLateral.classList.add('visible');
});

botonCerrar.addEventListener('click', function(){
	menuLateral.classList.remove('visible');
})
	 