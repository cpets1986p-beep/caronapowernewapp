import { Component,ViewChild,ElementRef  } from '@angular/core';
import {  CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../shared/seo.service';
declare const bootstrap: any;


@Component({
  selector: 'app-contact',
  imports: [ CommonModule,FormsModule
],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: 'Contact Us - Carona Power',
      description: 'Get in touch with Carona Power for HV impulse generator service, repair and spares support.',
      ogTitle: 'Contact Carona Power | HV Impulse Service & Spares',
      ogDescription: 'Reach out to Carona Power for high voltage impulse generator service, repair, and spare parts support.',
      image: '/assets/images/Carona_Logo_Trans.png',
      url: '/contact',
      keywords: 'contact Carona Power, HV impulse support inquiry, impulse generator service request, high voltage testing consultation',
      canonical: '/contact'
    });
  }
   @ViewChild('toastRef', { static: false }) toastRef!: ElementRef;

 sendEmail(form: NgForm) {
    if (form.invalid) return;

    const formData = form.value;

    const templateParams = {
      user_name: formData.fname + formData.lname ,
      user_email: formData.email,
      message: formData.subject
    };
    console.log(templateParams);
    emailjs.send(
      'service_tdbv10d',
      'template_7ht19v9',
      templateParams,
      { publicKey: 'La044h23layKjOObp' }
    ).then(
      () => {
       const toast = new bootstrap.Toast(this.toastRef.nativeElement);
      toast.show();
      form.reset();

      },
      (error) => {
        alert('Failed to send message: ' + error.text);
      }
    );
  }


}
