window.onload = start;

function start(){
	document.getElementById("menu-hamburger").addEventListener('click',showMbMenu,false);
}

function showMbMenu(){
	if(document.getElementById("menu-hamburger").getAttribute("class") == "hamburger-icon"){
		document.getElementById("menu-hamburger").setAttribute("class","close-icon");
		document.getElementById("menu-mobile").style.display = "flex";
	}else{
		document.getElementById("menu-hamburger").setAttribute("class","hamburger-icon");
		document.getElementById("menu-mobile").style.display = "none";
	}
}