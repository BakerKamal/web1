var esquina1 = [0,0];
var esquina2 = [350,0];
var esquina3 = [350,350];
var esquina4 = [0,350];
var posicion = [0,1,"esquina1"];
var seg=50;


var vehiculo = document.getElementById("vehiculo");

var tiempo = setInterval(mover, seg);
var col = 100000 ;

function aumentoVelocidad(){
	if(seg>=0){
		alert("soy lento? aumento de velocidad");
		seg -= 10;
		clearInterval(tiempo);
		tiempo = setInterval(mover, seg);
		col-=500;
		vehiculo.style.backgroundColor = "#E"+String(col);
		alert(para);
	}else{
		alert("no puedo mas");
		vehiculo.style.backgroundColor = "red";
	}
}


function stop(){

	clearInterval(tiempo);

}

function play(){
	tiempo = setInterval(mover, seg);
}

function fondo(){
	var colorFondo = document.getElementById("limites_del_campo");
	var color= document.getElementById("colorFondo").value;
	alert(color);
	colorFondo.style.backgroundColor=color;

}

function creadoPor(){
	alert("Creado por Baker Kamal al din Fernández");

}


function mover(){
	switch(posicion[2]){
		case "esquina1":
			posicion[0] += 2;
			vehiculo.style.left= posicion[0]+"px";
						
			if(posicion[0]==esquina2[0]){
				posicion[2]="esquina2";
				posicion[0]=esquina2[0];
				posicion[1]=esquina2[1];	
			}
			break;
		case "esquina2":
			posicion[1] +=2;
			vehiculo.style.top = posicion[1]+"px";
			
			if(posicion[1]==esquina3[1]){
				posicion[2]="esquina3";
				posicion[0]=esquina3[0];
				posicion[1]=esquina3[1];
			}
			break;
		case "esquina3":
			posicion[0] -=2;
			vehiculo.style.left = posicion[0]+"px";
			
			if(posicion[0]==esquina4[0]){
				posicion[2]="esquina4";
				posicion[0]=esquina4[0];
				posicion[1]=esquina4[1];
			}
			break;
		case "esquina4":
			posicion[1] -=2;
			vehiculo.style.top = posicion[1]+"px";
			
			if(posicion[1]==esquina1[1]){
				posicion[2]="esquina1";
				posicion[0]=esquina1[0];
				posicion[1]=esquina1[1];
			}
			break;
		default:
			alert(posicion[2]);
	}	
}