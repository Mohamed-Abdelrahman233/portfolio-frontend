import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { Services } from '../../../core/services/services/services';
import { IServices } from '../../../core/models/service.model';
import { ServiceDelete } from '../service-delete/service-delete';

@Component({
  selector: 'app-service-list',
  imports: [SlicePipe, ServiceDelete],
  templateUrl: './service-list.html',
  styleUrl: './service-list.css',
})
export class ServiceList implements OnInit {
  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<IServices>();
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  services: IServices[] = [];
  imgBaseUrl = 'http://localhost:3000/api/imgs/';

  constructor(
    private _serviceService: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices() {
    this._serviceService.getService().subscribe((data) => {
      this.services = data || [];
      this._cdr.detectChanges();
    });
  }

  refresh() {
    this.loadServices();
  }
}
