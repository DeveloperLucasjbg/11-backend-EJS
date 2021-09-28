class metodos {
  constructor(id, req, productos) {
    this.idToSearch = id;
    this.productos = productos
    this.newReq = req;
  }

  listar() {
    if (this.productos.length == 0) {
      return "no hay productos";
    } else {
      return this.productos;
    }
  }

  listarPorId() {
    let thisProduct = productos.find(
      (productos) => productos.id == this.idToSearch
    );
    return thisProduct || "nose encontro producto";
  }
  guardar() {
    console.log(this.newReq)
    const newPropducts = {
      ...this.newReq,
      id: this.productos.length + 1,
    };
    this.productos.push(newPropducts);
    console.log(this.productos)
    return 'si'
  }
  actualizar() {
    console.log(this.newReq)
    const newPropducts = {
      ...this.newReq,
      id: this.productos.length + 1,
    };
    this.productos.push(newPropducts);
    console.log(this.productos)
    return 'si'
  }
  borrar() {
    console.log(this.newReq)
    const newPropducts = {
      ...this.newReq,
      id: this.productos.length + 1,
    };
    this.productos.push(newPropducts);
    console.log(this.productos)
    return 'si'
  }
}
module.exports = metodos;
