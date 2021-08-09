import{Component} from '@angular/core'
import { header } from './header';
@Component({
  selector :'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  private paginas= new Array<header>();
  public constructor(){

    this.paginas = [
                    new header('Inicio',''),
                    new header('Clientes','Clientes'),
                    new header('Consolas','Consolas'),
                    new header('Contacto','Contacto')
                    ];
  }

  public setPaginas(paginas:Array<header>){
    this.paginas=paginas;
  }

  public getPaginas(){
     return this.paginas;
  }

}
