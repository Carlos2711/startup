class Actor {
  constructor ( nname, nedad) {
    this.name = nname;
    this.edad = nedad;
  }

  getName(){
    return this.name;
  }

  getEdad(){
    return this.edad;
  }

  setName(value){
    this.name = value;
  }

  setEdad(value){
    this.edad = value;
  }

}

export {Actor}
