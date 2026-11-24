import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../../core/services/profile/profile';
import { IProfile } from '../../../core/models/profile. model';

@Component({
  selector: 'app-home-update',
  imports: [ReactiveFormsModule],
  templateUrl: './home-update.html',
  styleUrl: './home-update.css',
})
export class HomeUpdate implements OnInit {
  profileId: string | null = null;
  currentImageUrl = '';
  imgBaseUrl = 'http://localhost:3000/api/imgs/';
  isLoading = false;
  message = '';

  homeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    jobTitle: new FormControl('', [Validators.required]),
    heroTagline: new FormControl('', [Validators.required]),
    isAvailable: new FormControl(true),
    availabilityText: new FormControl(''),
    aboutText: new FormControl(
      'A passionate developer focused on building clean, modern, and responsive web applications. Always learning new technologies and improving skills.',
    ),
    cvUrl: new FormControl('#'),
    email: new FormControl('admin@example.com'),
    linkedin: new FormControl('https://linkedin.com/in/username'),
    github: new FormControl('https://github.com/username'),
    image: new FormControl<File | null>(null),
  });

  constructor(private _profileService: Profile, private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((data) => {
      if (data && data._id) {
        this.profileId = data._id;
        this.currentImageUrl = data.image ? this.imgBaseUrl + data.image : '';
        this.homeForm.patchValue({
          name: data.name,
          jobTitle: data.jobTitle,
          heroTagline: data.heroTagline,
          isAvailable: data.isAvailable ?? true,
          availabilityText: data.availabilityText || '',
          aboutText: data.aboutText || '',
          cvUrl: data.cvUrl || '',
          email: data.email || '',
          linkedin: data.linkedin || '',
          github: data.github || '',
        });
        this._cdr.detectChanges();
      }
    });
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.homeForm.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.homeForm.invalid) return;
    this.isLoading = true;
    this.message = '';

    const myData = new FormData();
    myData.append('name', this.homeForm.get('name')!.value as string);
    myData.append('jobTitle', this.homeForm.get('jobTitle')!.value as string);
    myData.append('heroTagline', this.homeForm.get('heroTagline')!.value as string);
    myData.append('isAvailable', String(this.homeForm.get('isAvailable')!.value));
    myData.append('availabilityText', this.homeForm.get('availabilityText')!.value || '');
    myData.append(
      'aboutText',
      this.homeForm.get('aboutText')!.value ||
        'A passionate developer focused on building clean, modern, and responsive web applications. Always learning new technologies.',
    );
    myData.append('cvUrl', this.homeForm.get('cvUrl')!.value || '');
    myData.append('email', this.homeForm.get('email')!.value || '');
    myData.append('linkedin', this.homeForm.get('linkedin')!.value || '');
    myData.append('github', this.homeForm.get('github')!.value || '');
    if (this.homeForm.get('image')!.value != null) {
      myData.append('image', this.homeForm.get('image')!.value as File);
    }

    const request$ = this.profileId
      ? this._profileService.updateProfile(this.profileId, myData)
      : this._profileService.addProfile(myData);

    request$.subscribe({
      next: (res: IProfile) => {
        this.isLoading = false;
        this.profileId = res._id || this.profileId;
        if (res.image) {
          this.currentImageUrl = this.imgBaseUrl + res.image;
        }
        this.message = 'تم الحفظ بنجاح!';
        this._cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.message = 'حصل خطأ أثناء الحفظ';
        this._cdr.detectChanges();
      },
    });
  }
}
