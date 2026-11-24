import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Services } from '../../../core/services/services/services';

@Component({
  selector: 'app-service-delete',
  imports: [],
  templateUrl: './service-delete.html',
  styleUrl: './service-delete.css',
})
export class ServiceDelete {
  @Input() id: string | undefined;
  @Output() deleted = new EventEmitter<void>();
  @Output() failed = new EventEmitter<string>();

  constructor(
    private _serviceService: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  deleteService() {
    if (!this.id || !confirm('متأكد إنك عايز تمسح الخدمة دي؟')) return;
    this._serviceService.deleteService(this.id).subscribe({
      next: () => {
        this.deleted.emit();
      },
      error: () => {
        this.failed.emit('حصل خطأ أثناء المسح');
        this._cdr.detectChanges();
      },
    });
  }
}
