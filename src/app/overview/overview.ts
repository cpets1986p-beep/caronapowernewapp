import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview {
constructor(private meta: Meta, private title: Title, @Inject(PLATFORM_ID) private platformId: Object) {
   
    this.title.setTitle('High Voltage Impulse Generator Service & Spares Support - Carona Power Electrical Test Systems');
    this.meta.updateTag({ name: 'description', content: 'High Voltage Impulse Generator Service page' });
  }
}
