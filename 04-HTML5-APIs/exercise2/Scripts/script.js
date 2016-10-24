function saveText ( text ) {
  //using localStorage
  let variable;
  // method for save text
  localStorage.setItem("text", text);
  // method for get a item for the table
  variable = localStorage.getItem("text");
  console.log(variable);

  //usign IDB
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
  }

  let open = indexedDB.open("MyIndexedDatabase", 1);
  open.onupgradeneeded = function() {
    let db = open.result;
    let store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    let index = store.createIndex("NameIndex", ["string"]);
  };
  open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    store.put({id: 1 , string: text});
    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
  }

}

function erasedData(){
  //clear localStorage
  localStorage.removeItem("text");
  //clear IDB
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
  }

  let open = indexedDB.open("MyIndexedDatabase", 1);
  open.onupgradeneeded = function() {
    let db = open.result;
    let store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    let index = store.createIndex("NameIndex", ["string"]);
  };
  open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite").objectStore("MyObjectStore").clear();
    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
  }

}
