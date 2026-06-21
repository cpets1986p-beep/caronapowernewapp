import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA,NgModule  } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SeoService } from '../shared/seo.service';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './home-hv-engineering.html',
  styleUrls: ['./home-hv-engineering.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Home {
  constructor(private seo: SeoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.seo.setMeta({
      title: 'High Voltage Impulse Generator Service & Spares Support - Carona Power Electrical Test Systems',
      description: 'Carona Power provides service, repair, refurbishment and spares support for high voltage impulse generators.',
      ogTitle: 'Carona Power | HV Impulse Generator Service & Spares',
      ogDescription: 'High voltage impulse generator service, repair, refurbishment, and spares support from Carona Power.',
      image: '/assets/images/hvimpulse.jfif',
      url: '/home',
      keywords: 'high voltage impulse generator service, impulse generator repair, impulse generator spares, HV testing support, high voltage lab service',
      canonical: '/home'
    });
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }
   
  images = [
    {
      ID: 1,
      Src:'/assets/images/impGenCloseUp.png',
      alt:'Impulse Generator Close Up'
    } 
    ,
     {
      ID: 2,
      Src:'/assets/images/hvResistors.png',
      alt:'HV Resistors'
    }  ,
     {
      ID: 3,
      Src:'/assets/images/tapResistor.png',
      alt:'Tap Resistor'
    } 

  ];

   
   
  products = [
    { name: 'Impulse Resistors', image: '/assets/images/impr1.jfif' },
    { name: 'Impulse Inductors', image: '/assets/images/ind1.jfif' },
    { name: 'Impulse Generator Spares', image: '/assets/images/impg.jfif' },
    { name: 'PD Rooms', image: '/assets/images/pdroom.jfif' }
  ];

  serivces = [
    {name:'HV System Maintenance',image: '/assets/images/hvm.jfif'},
    { name: 'Troubleshooting & Repair', image: '/assets/images/trr.jfif' },
    { name: 'HV Laboratory Planning', image: '/assets/images/HV1.jfif' },
    { name: 'HV Laboratory Grounding System Design', image: '/assets/images/grd.jfif' },
    
  ];
}
