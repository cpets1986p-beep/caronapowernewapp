import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { SeoService } from '../shared/seo.service';
@Component({
  selector: 'app-impulse-resistor',
  imports: [CommonModule],
  templateUrl: './impulse-resistor.html',
  styleUrl: './impulse-resistor.css',
})
export class ImpulseResistor {
  constructor(private seo: SeoService) {
    this.seo.setMeta({
      title: 'Impulse Resistors - Carona Power',
      description: 'Specifications and applications for high voltage impulse resistors.',
      keywords: 'impulse resistor, wave-shaping resistor, HV resistor'
    });
  }
  
img=[
    '/assets/images/resistor.jpg'
  ]
  imgr=[
    '/assets/images/pr12.jfif'
  ]
  imga=[
    '/assets/images/resapp.jfif'
  ]
  imgpr=[
    '/assets/images/impr.jfif'
  ]
  images=[
    '',
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


  tableData = [
  {
    type: 'Front Resistor',
    function: 'To control the front time of the impulse wave',
    resistance: '0.5Ω - 100kΩ',
    energy: '1kJ to 50kJ',
    voltage: '50kV to 250kV'
  },
  {
    type: 'Tail Resistor',
    function: 'To control the tail time of the impulse wave',
    resistance: '0.5Ω - 100kΩ',
    energy: '1kJ to 50kJ',
    voltage: '50kV to 250kV'
  },
  {
    type: 'Damping Resistor',
    function: 'Shapes impulse waveform by controlling oscillations',
    resistance: '10Ω - 1kΩ',
    energy: '5kJ to 300kJ',
    voltage: '50kV to 3MV'
  },
  {
    type: 'Charging Resistor',
    function: 'Limits charging current to energy storage capacitors',
    resistance: '500Ω - 100kΩ',
    energy: '1kJ to 50kJ',
    voltage: '50kV to 250kV'
  },
  {
    type: 'Protection Resistor',
    function: 'Used to discharge the whole energy stored in the multistage impulse generator during power failure',
    resistance: '100Ω - 5kΩ',
    energy: '10kJ to 500kJ',
    voltage: '50kV to 250kV'
  },
  {
    type: 'Divider Resistor',
    function: 'Used in Voltage dividers for measurement',
    resistance: '500Ω - 100kΩ',
    energy: '1kJ to 50kJ',
    voltage: '10kV to 1MV'
  },
  {
    type: 'Discharge Resistor',
    function: 'Used to safely discharge the energy stored in the capacitor',
    resistance: '500Ω to 10MΩ',
    energy: '5kJ to 100kJ',
    voltage: '10kV to 250kV'
  },
  {
    type: 'Grounding Resistor',
    function: 'Used to safely discharge the energy stored in the capacitor',
    resistance: '500Ω to 10MΩ',
    energy: '5kJ to 200kJ',
    voltage: '10kV to 1MV'
  }
];
}
