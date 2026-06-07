import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Header } from './header/header';
import { Overview} from './overview/overview';
import { Products } from './products/products';
import { ImpulseInductor } from './impulse-inductor/impulse-inductor';
import { ImpulseResistor } from './impulse-resistor/impulse-resistor';
import { ImpulseGeneratorSpares } from './impulse-generator-spares/impulse-generator-spares';
import { Notfound } from './notfound/notfound';
import { Pdlab } from './pdlab/pdlab';
export const routes: Routes = [ 
    { path: 'header',component: Header },
    { path: 'home', component: Home },
    { path:'overview',component:Overview},
    { path: 'contact', component: Contact },
    { path: 'pdlab', component: Pdlab },
    { path:'impulse-inductor',component:ImpulseInductor},
    { path:'impulse-generator-spares',component:ImpulseGeneratorSpares},
    { path:'impulse-resistor',component:ImpulseResistor},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Notfound }

];

// export const routes: Routes = [
//   { path: '', redirectTo: 'header', pathMatch: 'full' },

//   {
//     path: 'home',
//     component: Home,
//     children: [
//       { path: 'home', component: Home },
//       { path: 'contact', component: Contact },
//       { path: '', redirectTo: 'home', pathMatch: 'full' }
//     ]
//   },

//   { path: '**', redirectTo: '/home' } // Wildcard redirect
// ];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }