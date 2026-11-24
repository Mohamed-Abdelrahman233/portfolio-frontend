import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IServices } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-form',
  imports: [ReactiveFormsModule],
  templateUrl: './service-form.html',
  styleUrl: './service-form.css',
})
export class ServiceForm implements OnChanges {
  @Input() service: IServices | null = null;
  @Input() isLoading = false;
  @Output() submitted = new EventEmitter<FormData>();
  @Output() cancelled = new EventEmitter<void>();

  serviceForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['service']) {
      if (this.service) {
        this.serviceForm.patchValue({
          title: this.service.title,
          description: this.service.description,
          image: null,
        });
      } else {
        this.serviceForm.reset();
      }
    }
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.serviceForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.serviceForm.invalid) return;

    const myData = new FormData();
    myData.append('title', this.serviceForm.get('title')!.value as string);
    myData.append('description', this.serviceForm.get('description')!.value as string);

    if (this.serviceForm.get('image')!.value != null) {
      myData.append('image', this.serviceForm.get('image')!.value as File);
    } else if (this.service) {
      myData.append('iconImg', this.service.iconImg || '');
    }

    this.submitted.emit(myData);
  }
}
