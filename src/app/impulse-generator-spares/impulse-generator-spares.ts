import { Component } from '@angular/core';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-impulse-generator-spares',
  imports: [],
  templateUrl: './impulse-generator-spares.html',
  styleUrl: './impulse-generator-spares.css',
})
export class ImpulseGeneratorSpares {
  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: 'Impulse Generator Spares - Carona Power',
      description: 'Spares and consumables for impulse generators and HV test systems.',
      ogTitle: 'Impulse Generator Spares | Carona Power',
      ogDescription: 'High voltage impulse generator spare parts, consumables, and support components from Carona Power.',
      image: '/assets/images/impGenSpares.png',
      url: '/impulse-generator-spares',
      keywords: 'impulse generator spares, high voltage test spares, impulse generator replacement parts, HV component support',
      canonical: '/impulse-generator-spares'
    });
  }

}
