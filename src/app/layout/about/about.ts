import { Component } from '@angular/core';
import { ExprienceApi } from './exprience-api/exprience-api';
import { AboutApi } from './about-api/about-api';

@Component({
  selector: 'app-about',
  imports: [ExprienceApi, AboutApi],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
