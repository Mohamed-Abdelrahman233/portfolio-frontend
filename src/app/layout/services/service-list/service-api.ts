import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IServices } from '../../../core/models/service.model';
import { Services } from '../../../core/services/services/services';
import { ServiceDetials } from './service-details/service-detials';

@Component({
  selector: 'app-service-api',
  imports: [ServiceDetials],
  templateUrl: './service-api.html',
  styleUrl: './service-api.css',
})
export class ServiceApi implements OnInit {
  servicesList!: IServices[];
  constructor(
    private _Services: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._Services.getService().subscribe((data) => {
      this.servicesList = data;
      this._cdr.detectChanges();
    });
  }
}
