import { Component } from '@angular/core';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-impulse-inductor',
  imports: [],
  templateUrl: './impulse-inductor.html',
  styleUrl: './impulse-inductor.css',
})
export class ImpulseInductor {
  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: 'Impulse Inductors - Carona Power',
      description: 'Impulse inductor products and specifications for HV testing.',
      ogTitle: 'Impulse Inductors | Carona Power HV Components',
      ogDescription: 'Impulse inductors designed for high voltage impulse systems and laboratory applications.',
      image: '/assets/images/ind1.jfif',
      url: '/impulse-inductor',
      keywords: 'impulse inductor, high voltage inductor, surge inductor, waveform shaping inductor, impulse test inductor',
      canonical: '/impulse-inductor'
    });
  }
img=[
    '/assets/images/resistor.jpg'
  ]
  imgr=[
    '/assets/images/ind3.jfif'
  ]
  images=[
    '/assets/images/prd1.jfif',
    '/assets/images/prd2.jfif',
    '/assets/images/prd3.jfif',
    '/assets/images/prd4.jfif',
    '/assets/images/prd5.jfif',
    '/assets/images/prd6.jfif',
    '/assets/images/prd7.jfif',
    '/assets/images/prd8.jfif',
    '/assets/images/prd9.jfif',
    '/assets/images/prd10.jfif'
  ]
}
