var arrayDatos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }]
  
  var html = "";
  for (var i =0; i<arrayDatos.length;i++){
  var datos = arrayDatos[i];
  var salida = 

    "<li>" +  datos.title + "</li> " /*+ " <button>" +"Eliminar"+ "</button>"*/;
  html += salida;
 }
document.getElementById("toDoList").innerHTML+= html;

//Crear el boton elminar 

var miLista = document.getElementsByTagName("li");
for (var i = 0; i < miLista.length; i++) {
  var boton = document.createElement("button");
  var nombreBoton = document.createTextNode("x");
  boton.className = "close";
  boton.appendChild(nombreBoton);
  miLista[i].appendChild(boton);
}

//cerrar tareas
var cerrar = document.getElementsByClassName("close");
for (var i = 0; i < cerrar.length; i++) {
  //expression
  cerrar[i].onclick = function() 

  { var cerrar2 = this.parentElement;
    //parentElement devuelve null si el nodo padre no es un nodo de elemento
    //para ocultar cada click
    cerrar2.style.textDecoration = "line-through";
    //cerra2.style.display="none";
  }
}

function ListaDeTareas(){
	//Creamos el nodo tipo elemento
  var list = document.createElement("li");
  var startList = document.getElementById("add").value;
  var contenido = document.createTextNode(startList);
  //Añade el nodo text como hijo del nodo Element
  list.appendChild(contenido);
  if (startList === '') {
    alert("Necesitas añadir una tarea");
  } else {
    document.getElementById("toDoList").appendChild(list);
  }
  document.getElementById("add").value = "";



  
}
function limpiar(){

//document.getElementById("toDoList").innerHTML="";
var listaFinal = document.getElementById("toDoList");
listaFinal.parentNode.removeChild(listaFinal);


}

   /*var addList = document.getElementById("add").value;
    document.getElementById("toDoList").innerHTML+= "<li>" + addList+ "</li>"
*/

 /* function seleccionar() {
var editarElemento = document.getElementById("editable").value;
}*/

/*
function redirect(event){



    
    var arrayD=(event.target.textContent);
    var mostrando=document.getElementById("toDoList");
    mostrando.innerHTML=list.splice(i,1);
   
}*/

 //contenteditable="true"