import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ISkill } from '../../../core/models/skills.model';

@Component({
  selector: 'app-skill-form',
  imports: [ReactiveFormsModule],
  templateUrl: './skill-form.html',
  styleUrl: './skill-form.css',
})
export class SkillForm implements OnChanges {
  @Input() skill: ISkill | null = null;
  @Input() isLoading = false;
  @Output() submitted = new EventEmitter<FormData>();
  @Output() cancelled = new EventEmitter<void>();

  skillForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skill']) {
      if (this.skill) {
        this.skillForm.patchValue({
          name: this.skill.name,
          category: this.skill.category,
          image: null,
        });
      } else {
        this.skillForm.reset();
      }
    }
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.skillForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.skillForm.invalid) return;

    const myData = new FormData();
    myData.append('name', this.skillForm.get('name')!.value as string);
    myData.append('category', this.skillForm.get('category')!.value as string);

    if (this.skillForm.get('image')!.value != null) {
      myData.append('image', this.skillForm.get('image')!.value as File);
    } else if (this.skill) {
      myData.append('iconImg', this.skill.iconImg || '');
    }

    this.submitted.emit(myData);
  }
}
