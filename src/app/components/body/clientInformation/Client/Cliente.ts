export class Cliente{

  private nombre:string;
  private apellido:string;
  private edad:string;
  private fechaNacimiento:string;

  constructor(nombre:string,apellido:string,edad:string,nacimiento:string){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.fechaNacimiento=nacimiento;
  }

  public getNombre(){
    return this.nombre;
  }

  public setNombre(nombre:string){
    this.nombre=nombre;
  }

  public getApellido(){
    return this.apellido;
  }

  public setApellido(apellido:string){
    this.apellido=apellido;
  }

  public getEdad(){
    return this.edad;
  }

  public setEdad(edad:string){
    this.edad=edad;
  }

  public getFechaNacimiento(){
    return this.fechaNacimiento;
  }

  public setFechaNacimiento(nacimiento:string){
    this.fechaNacimiento=nacimiento;
  }

}
