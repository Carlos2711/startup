function load () {
  console.log('load'); //Only to know the page is loaded
  document.getElementById("changeclass").style.transition = "all 3s ease-in-out";
  document.getElementById("changeclass").style.opacity = 1;
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
 reject(Error("Network Error"));
  };
   req.send(null);
  });
}

function joke(){
   let configJokes = new configAjax("GET", "http://api.icndb.com/jokes/random", true);
   request(configJokes).then(function(response) {
     document.getElementById("changeclass").innerHTML = response.slice(
      response.search("joke") + 7,
      response.search("categories") - 3);
     }, function(error) {
     document.getElementById("changeclass").innerHTML = "404 not found"
     document.getElementById("changeclass").innerHTML.fontcolor("red");
     });
 }
