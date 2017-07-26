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

    "<li>" +  datos.title + "</li>";
  html += salida;
 }
document.getElementById("lista").innerHTML+= html;

function ListaDeTareas(){
	
  var list = document.createElement("li");
  var startList = document.getElementById("add").value;
  var t = document.createTextNode(startList);
  list.appendChild(t);
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


 