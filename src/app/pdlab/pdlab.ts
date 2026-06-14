import { Component } from '@angular/core';
import { SeoService } from '../shared/seo.service';
@Component({
  selector: 'app-pdlab',
  imports: [],
  templateUrl: './pdlab.html',
  styleUrl: './pdlab.css',
})
export class Pdlab {

  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: 'PD Rooms & Partial Discharge - Carona Power',
      description: 'Design and construction of PD rooms and partial discharge measurement services.',
      ogTitle: 'PD Rooms & Partial Discharge Services | Carona Power',
      ogDescription: 'PD room construction and partial discharge testing services for high voltage laboratories.',
      image: '/assets/images/pdroom.jfif',
      url: '/pdlab',
      keywords: 'PD room design, partial discharge testing, high voltage laboratory planning, PD room construction, HV lab consulting',
      canonical: '/pdlab'
    });
  }
}
