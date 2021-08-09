import{Component} from '@angular/core'
import { Paginas } from './Paginas';
@Component({
  selector :'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  private paginas= new Array<Paginas>();
  public constructor(){

    this.paginas = [
                    new Paginas('Inicio',''),
                    new Paginas('Clientes','Clientes'),
                    new Paginas('Consolas','Consolas.html'),
                    new Paginas('Contacto','Contacto.html')
                    ];
  }

  public setPaginas(paginas:Array<Paginas>){
    this.paginas=paginas;
  }

  public getPaginas(){
     return this.paginas;
  }

}
