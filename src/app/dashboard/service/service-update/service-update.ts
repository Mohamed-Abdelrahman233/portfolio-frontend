import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Services } from '../../../core/services/services/services';
import { IServices } from '../../../core/models/service.model';
import { ServiceForm } from '../service-form/service-form';

@Component({
  selector: 'app-service-update',
  imports: [ServiceForm],
  templateUrl: './service-update.html',
  styleUrl: './service-update.css',
})
export class ServiceUpdate {
  @Input() service!: IServices;
  @Output() updated = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _serviceService: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._serviceService.updateService(this.service._id!, formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.updated.emit();
      },
      error: () => {
        this.isLoading = false;
        this.failed.emit('حصل خطأ أثناء الحفظ');
        this._cdr.detectChanges();
      },
    });
  }
}
