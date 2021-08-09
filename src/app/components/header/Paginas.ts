 export class Paginas{
  private nombre:string;
  private url:string;

  constructor(nom:string,link:string){
    this.nombre=nom;
    this.url=link;
  }

  public getNombre(){
    return this.nombre;
  }

  public setNombre(nombre:string){
    this.nombre=nombre;
  }

  public getLink(){
    return this.url;
  }

  public setLink(url:string){
    this.url=url;
  }
}
