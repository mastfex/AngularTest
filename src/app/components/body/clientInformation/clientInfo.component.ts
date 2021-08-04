import{Component} from '@angular/core'
import{Cliente}from './Client/Cliente'

@Component({
  selector :'app-clie-info',
  templateUrl: './clientInfo.component.html',
  styleUrls: ['./clientInfo.component.css']
})

export class ClientInformationTemplate{
  private listaClientes=new Array<Cliente>();

  constructor(){
    this.listaClientes=[
      new Cliente('17315306-6','Felipe','Rubin','32','02-03-1990')
    ,
      new Cliente('18315306-7','Felipe','Rubin','32','02-03-1990')
    ];

  }

  public listarRut(){
      var comboBox= (document.getElementById('optionlist')as HTMLSelectElement);
      for(var i=0; i<this.getListaClientes().length ; i++){
        var opcion = document.createElement('option');
        opcion.innerHTML=this.getListaClientes()[i].getRut();
        opcion.value=this.getListaClientes()[i].getRut();
        comboBox.appendChild(opcion);
      }
  }

  public verInfoCliente(){

    var seleccion = (document.getElementById('optionlist')as HTMLSelectElement).value;
    var div = (document.getElementById('infoPersona')as HTMLSelectElement);
    var h3= document.createElement('h3');
    var ul= (document.getElementById('info')as HTMLSelectElement);

    for(var x=0; x<this.getListaClientes().length ; x++){
        console.log(seleccion);
        if(this.getListaClientes()[x].getRut()==seleccion){
            h3.textContent="Detalle Persona";
            div.appendChild(h3);
            var li= document.createElement('li');
            li.innerHTML= "Nombre: "+this.getListaClientes()[x].getNombre();
            var li2= document.createElement('li');
            li2.innerHTML= "Apellido: "+this.getListaClientes()[x].getApellido();
            var li3= document.createElement('li');
            li3.innerHTML= "Edad: "+this.getListaClientes()[x].getEdad();
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
        }
    }
    div.appendChild(ul);

  }

  public getListaClientes(){
    return this.listaClientes;
  }
}
