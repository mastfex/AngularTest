 export class Paginas{
  private nombre:string;
  private link:string;

  constructor(nom:string,link:string){
    this.nombre=nom;
    this.link=link;
  }

  public getNombre(){
    return this.nombre;
  }

  public setNombre(nombre:string){
    this.nombre=nombre;
  }

  public getLink(){
    return this.link;
  }

  public setLink(link:string){
    this.link=link;
  }
}
