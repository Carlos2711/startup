function load () {
  console.log('load'); //Only to know the page is loaded
  let change = document.getElementById("changeclass");
  change.style.transition = "all 3s ease-in-out";
  change.style.opacity = 1;
}


function configAjax (methodHttp, url, asyncronic){
  var ajaxConfig = {};
  ajaxConfig.methodHttp = methodHttp;
  ajaxConfig.url = url;
  ajaxConfig.asyncronic = asyncronic;

  return ajaxConfig;
}

function request(configAjax) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(configAjax.methodHttp, configAjax.url, configAjax.asyncronic);
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

function joke(){
   let configJokes = new configAjax("GET", "http://api.icndb.com/jokes/random", true);
   request(configJokes).then(function(response) {
     resp = JSON.parse(response);
     document.getElementById("changeclass").innerHTML = resp.value.joke;
     }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found"
     document.getElementById("changeclass").style.color = "red";
     });
 }
