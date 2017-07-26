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


   /*var addList = document.getElementById("add").value;
    document.getElementById("toDoList").innerHTML+= "<li>" + addList+ "</li>"
*/
}
 /* function seleccionar() {
var editarElemento = document.getElementById("editable").value;
}*/

/*function eliminar(){
  var eliminarT = document.getElementsByTagName('button');
for (var i = 0; i < arrayDatos.length; i++) {
    arrayDatos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    
    var arrayD=(event.target.textContent);
    var mostrando=document.getElementById("toDoList");
    mostrando.innerHTML=list.splice(i,1);
   
}*/
 function Delete(tarea){

  arrayDatos.splice(tarea,1);
  ListaDeTareas();
 }

 