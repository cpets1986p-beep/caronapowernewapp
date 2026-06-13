import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';

@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
constructor(private seo: SeoService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.seo.setMeta({
      title: 'Overview - Carona Power Electrical Test Systems',
      description: 'Overview of services and capabilities at Carona Power including HV impulse testing, PD rooms and lab planning.',
      keywords: 'HV, overview, PD rooms, lab planning'
    });
  }
}
