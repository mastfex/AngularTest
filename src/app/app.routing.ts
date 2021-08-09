import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router"
//Componentes
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from "./components/home/home.component";
import { ConsoleComponent } from "./components/console/console.component";

//Definir rutas

const appRoutes: Routes= [
  {path:"", component: HomeComponent},
  {path:"Clientes", component:ClientsComponent},
  {path:"Consolas", component:ConsoleComponent},
  {path:"**", component:HomeComponent}
];


export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

