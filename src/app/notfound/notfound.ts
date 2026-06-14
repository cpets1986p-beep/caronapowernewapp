import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-notfound',
  imports: [CommonModule,RouterLink],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css',
})
export class Notfound {
  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: '404 Not Found - Carona Power',
      description: 'The requested page could not be found.',
      keywords: '404, not found',
      canonical: '/'
    });
  }

}
