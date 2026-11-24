import { Component, ViewChild } from '@angular/core';
import { IServices } from '../../core/models/service.model';
import { ServiceList } from './service-list/service-list';
import { ServiceAdd } from './service-add/service-add';
import { ServiceUpdate } from './service-update/service-update';

@Component({
  selector: 'app-service',
  imports: [ServiceList, ServiceAdd, ServiceUpdate],
  templateUrl: './service.html',
  styleUrl: './service.css',
})
export class Service {
  @ViewChild(ServiceList) private serviceList?: ServiceList;

  showForm = false;
  editingId: string | null = null;
  selectedService: IServices | null = null;
  message = '';

  openAddForm() {
    this.editingId = null;
    this.selectedService = null;
    this.showForm = true;
  }

  openEditForm(service: IServices) {
    this.editingId = service._id || null;
    this.selectedService = service;
    this.showForm = true;
  }

  cancelForm() {
    this.showForm = false;
    this.editingId = null;
    this.selectedService = null;
  }

  onSaved() {
    this.message = 'تم الحفظ بنجاح!';
    this.cancelForm();
    this.serviceList?.refresh();
  }

  onDeleted() {
    this.message = 'Service deleted!';
    this.serviceList?.refresh();
  }

  onFailed(message: string) {
    this.message = message;
  }
}
