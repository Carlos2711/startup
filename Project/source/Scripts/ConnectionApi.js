//read aboout Fetch in javascript

function configAjax (methodHttp, url, asyncronic) {
  let ajacConfig = {};
  ajaxConfig.methodHttp = methodHttp;
  ajaxConfig.url = url;
  ajaxConfig.asyncronic = asyncronic;
}

function request(objconfig) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(objconfig.methodHttp, objconfig.url);
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
        }
      else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('Network Error'));
    };
    request.send();
  });
}

function connect(inputText){
  let objconfig = new configAjax( "GET", "https://videogamesrating.p.mashape.com/get.php?game="+inputText, true);
  request(objconfig).then(function(response) {
    resp = JSON.parse(response);
    var columnNode;
    var textNode;
    var listElement = document.getElementById("list");
    for ( var key = 0; key < resp.items.lenght; key++ ) {
      columnNode = document.createElement("li");
      textNode = document.createTextNode( resp.items[key].title );
      columnNode.appendChild(textNode);
      listElement.appendChild(columnNode);
    }
  },
  function( error ) {
    document.getElementById("changeclass").innerHTML = "404 not found";
    document.getElementById("changeclass").style.color = "red";
  });
}

// fetch('/users.json')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })
