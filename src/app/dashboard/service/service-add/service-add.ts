import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Services } from '../../../core/services/services/services';
import { ServiceForm } from '../service-form/service-form';

@Component({
  selector: 'app-service-add',
  imports: [ServiceForm],
  templateUrl: './service-add.html',
  styleUrl: './service-add.css',
})
export class ServiceAdd {
  @Output() added = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();
  @Output() cancelled = new EventEmitter<void>();

  isLoading = false;

  constructor(
    private _serviceService: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  onSubmit(formData: FormData) {
    this.isLoading = true;
    this._serviceService.addService(formData).subscribe({
      next: () => {
        this.isLoading = false;
        this.added.emit();
      },
      error: () => {
        this.isLoading = false;
        this.failed.emit('حصل خطأ أثناء الحفظ');
        this._cdr.detectChanges();
      },
    });
  }
}
