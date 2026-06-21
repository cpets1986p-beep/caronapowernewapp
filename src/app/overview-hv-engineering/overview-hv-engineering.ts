import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './overview-hv-engineering.html',
  styleUrls: ['./overview-hv-engineering.css'],
})
export class Overview {
constructor(private seo: SeoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.seo.setMeta({
      title: 'Overview - Carona Power Electrical Test Systems',
      description: 'Overview of services and capabilities at Carona Power including HV impulse testing, PD rooms and lab planning.',
      ogTitle: 'Carona Power Overview | HV Testing, PD Rooms, Lab Planning',
      ogDescription: 'Learn about Carona Power’s high voltage testing services, PD room construction, and lab planning expertise.',
      image: '/assets/images/HV1.jfif',
      url: '/overview',
      keywords: 'high voltage impulse testing, PD room planning, HV laboratory design, partial discharge measurement, impulse generator repair',
      canonical: '/overview'
    });
  }
}
