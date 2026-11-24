import { Component } from '@angular/core';
import { AboutUpdate } from './about-update/about-update';

@Component({
  selector: 'app-about',
  imports: [AboutUpdate],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
