import { Component } from '@angular/core';
import { ContactUpdate } from './contact-update/contact-update';

@Component({
  selector: 'app-contact',
  imports: [ContactUpdate],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
