import { Component } from '@angular/core';
import { ContactApi } from './contact.api/contact.api';

@Component({
  selector: 'app-contact',
  imports: [ContactApi],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
