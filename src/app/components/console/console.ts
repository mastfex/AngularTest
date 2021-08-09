export class console{

  private codigo:string;
  private compañia:string;
  private modelo:string;
  private stock:number;
  private precio:string;

  constructor(codigo:string,compañia:string,modelo:string,stock:number, precio:string){
    this.codigo=codigo;
    this.compañia=compañia;
    this.modelo=modelo;
    this.stock=stock;
    this.precio=precio;
  }

  public getCodigo(){
    return this.codigo;
  }

  public setCodigo(codigo:string){
    this.codigo=codigo;
  }

  public getCompania(){
    return this.compañia;
  }

  public setCompania(compañia:string){
    this.compañia=compañia;
  }

  public getModelo(){
    return this.modelo;
  }

  public setModelo(modelo:string){
    this.modelo=modelo;
  }

  public getStock(){
    return this.stock;
  }

  public setStock(stock:number){
    this.stock=stock;
  }

  public getPrecio(){
    return this.precio;
  }

  public setPrecio(precio:string){
    this.precio=precio;
  }

}
