export class Aplicacion {    
  public Nombre: string;
  public Email: string;
  public Telefono: string;
  public Cargo: string;
  public IdRequisicion: number;
  public Curriculum: File;
    
  constructor(nombre:string, email:string, telefono:string, cargo: string, idRequisicion:number, curriculum:File)
  {
    this.Nombre = nombre;
    this.Email = email;
    this.Telefono = telefono
    this.Cargo = cargo;
    this.IdRequisicion = idRequisicion;
    this.Curriculum = curriculum;
  }
}