function load () {
  console.log('load'); //Only to know the page is loaded
  let change = document.getElementById("changeclass");
  change.style.transition = "all 3s ease-in-out";
  change.style.opacity = 1;
}


function configAjax (methodHttp, url, asyncronic){
  this.methodHttp = methodHttp;
  this.url = url;
  this.asyncronic = asyncronic;
}

function request(configAjax) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open(configAjax.methodHttp, configAjax.url, configAjax.asyncronic);
    req.onload = function() {
     if (req.status == 200) {
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
