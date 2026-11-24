import { Component } from '@angular/core';
import { ServiceApi } from './service-list/service-api';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-service',
  imports: [ServiceApi, Skills],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {}
