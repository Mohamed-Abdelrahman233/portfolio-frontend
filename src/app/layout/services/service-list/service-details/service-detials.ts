import { Component, Input } from '@angular/core';
import { IServices } from '../../../../core/models/service.model';

@Component({
  selector: 'app-service-detials',
  imports: [],
  templateUrl: './service-detials.html',
  styleUrl: './service-detials.css',
})
export class ServiceDetials {
  @Input() services_List!: IServices;
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';
}
