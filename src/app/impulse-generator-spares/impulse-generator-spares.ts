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
      keywords: 'impulse generator spares, replacement parts'
    });
  }

}
