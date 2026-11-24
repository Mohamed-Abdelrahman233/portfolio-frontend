import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css',
})
export class ProjectForm implements OnChanges {
  @Input() project: IProject | null = null;
  @Input() isLoading = false;
  @Output() submitted = new EventEmitter<FormData>();
  @Output() cancelled = new EventEmitter<void>();

  projectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    tags: new FormControl(''),
    githubUrl: new FormControl('', [Validators.required]),
    liveUrl: new FormControl(''),
    isFeatured: new FormControl(false),
    image: new FormControl<File | null>(null),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project']) {
      if (this.project) {
        this.projectForm.patchValue({
          title: this.project.title,
          description: this.project.description,
          tags: (this.project.tags || []).join(', '),
          githubUrl: this.project.githubUrl,
          liveUrl: this.project.liveUrl || '',
          isFeatured: this.project.isFeatured ?? false,
          image: null,
        });
      } else {
        this.projectForm.reset({ isFeatured: false });
      }
    }
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.projectForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.projectForm.invalid) return;

    const myData = new FormData();
    myData.append('title', this.projectForm.get('title')!.value as string);
    myData.append('description', this.projectForm.get('description')!.value as string);
    (this.projectForm.get('tags')!.value || '')
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t)
      .forEach((tag) => myData.append('tags', tag));
    myData.append('githubUrl', this.projectForm.get('githubUrl')!.value as string);
    myData.append('liveUrl', this.projectForm.get('liveUrl')!.value || '');
    myData.append('isFeatured', String(this.projectForm.get('isFeatured')!.value));

    if (this.projectForm.get('image')!.value != null) {
      myData.append('image', this.projectForm.get('image')!.value as File);
    } else if (this.project) {
      myData.append('image', this.project.image || '');
    }

    this.submitted.emit(myData);
  }
}
