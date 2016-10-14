function load () {
  console.log('load'); //Only to know the page is loaded
  let changeElement = document.getElementById("changeclass");
  changeElement.style.transition = "all 3s ease-in-out";
  changeElement.style.opacity = 1;
}

function configAjax (methodHttp, url, asyncronic){
  var ajaxConfig = {};
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

function connect(inpText){
    let objconfig = new configAjax("GET", "https://api.github.com/search/repositories?q="+inpText, true);
    request(objconfig).then(function(response) {
      resp = JSON.parse(response);
      var columnNode;
      var textNode;
      var listElement =document.getElementById("list");
      for (var key = 0; key < resp.items.length; key++){
        columnNode = document.createElement("li");
        textNode = document.createTextNode(resp.items[key].full_name);
        columnNode.appendChild(textNode);
        listElement.appendChild(columnNode);
        }
      }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found";
     document.getElementById("changeclass").style.color = "red";
     });
 }
