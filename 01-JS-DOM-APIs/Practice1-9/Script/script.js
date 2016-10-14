function load () {
  console.log('load'); //Only to know the page is loaded
  let changeElement = document.getElementById("changeclass");
  changeElement.style.transition = "all 3s ease-in-out";
  changeElement.style.opacity = 1;
}

function configAjax (methodHttp, url, asyncronic){
  let ajaxConfig = {};
  ajaxConfig.methodHttp = methodHttp;
  ajaxConfig.url = url;
  ajaxConfig.asyncronic = asyncronic;
}

function request(objconfig) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open(objconfig.methodHttp, objconfig.url);
    req.onload = function() {
     if (req.status === 200) {
      resolve(req.response);
     }
     else {
      reject(Error(req.statusText));
     }
    };
    req.onerror = function() {
      reject(Error('Network Error'));
    };
    req.send();
  });
}

function connect(){
    let objconfig = new configAjax("GET", "https://api.github.com/search/repositories?q=javascript", true);
    request(objconfig).then(function(response) {
     resp = JSON.parse(response);
     console.log(resp);
     for (var key = 0; key < resp.items.length; key++){
      var columnNode = document.createElement("li");
      var textNode = document.createTextNode(resp.items[key].full_name);
      columnNode.appendChild(textNode);
      document.getElementById("list").appendChild(columnNode);
      }
     }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found";
     document.getElementById("changeclass").style.color = "red";
     });
 }
