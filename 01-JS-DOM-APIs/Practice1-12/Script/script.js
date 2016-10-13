function createMatrix(matrix) {
  let tablecontent = document.createElement("table");
  document.getElementById("container").appendChild(tablecontent);
  for (var rowcount = 0; rowcount < matrix.length; rowcount++) {
    let rownew = document.createElement("tr");
    tablecontent.appendChild(rownew);
    for(var columncount = 0; columncount < matrix[rowcount].length; columncount++ ){
      let columnnew = document.createElement("td");
      let textNode = document.createTextNode(matrix[rowcount][columncount]);
      columnnew.appendChild(textNode);
      rownew.appendChild(columnnew);
    }
  }


}

function actionbutton(){
/* from a friend, its not my table*/
let matrix = [["Hi", 51, 52], [60, "Bye", 62], ["The", 21, 12]];

createMatrix(matrix);
}
