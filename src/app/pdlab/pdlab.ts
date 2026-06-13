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
      keywords: 'PD room, partial discharge, HV labs'
    });
  }
}
