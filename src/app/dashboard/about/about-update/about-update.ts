import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../../core/services/profile/profile';

@Component({
  selector: 'app-about-update',
  imports: [ReactiveFormsModule],
  templateUrl: './about-update.html',
  styleUrl: './about-update.css',
})
export class AboutUpdate implements OnInit {
  profileId: string | null = null;
  isLoading = false;
  message = '';

  aboutForm = new FormGroup({
    aboutText: new FormControl('', [Validators.required]),
    jobTitle: new FormControl(''),
    location: new FormControl(''),
  });

  constructor(private _profileService: Profile, private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((data) => {
      if (data && data._id) {
        this.profileId = data._id;
        this.aboutForm.patchValue({
          aboutText: data.aboutText,
          jobTitle: data.jobTitle || '',
          location: data.location || '',
        });
        this._cdr.detectChanges();
      }
    });
  }

  onSubmit() {
    if (this.aboutForm.invalid) return;
    this.isLoading = true;
    this.message = '';

    const myData = new FormData();
    myData.append(
      'aboutText',
      this.aboutForm.get('aboutText')!.value ||
        'A passionate developer focused on building clean, modern, and responsive web applications. Always learning new technologies.',
    );
    myData.append('jobTitle', this.aboutForm.get('jobTitle')!.value || 'Full Stack Developer');
    myData.append('location', this.aboutForm.get('location')!.value || 'Cairo, Egypt');

    // الحقول المطلوبة في السكيمة — defaults عشان أول create لو الداتابيز فاضية
    myData.append('name', 'MOHAMED DABAH');
    myData.append('heroTagline', 'Passionate developer building modern web applications');
    myData.append('cvUrl', '#');
    myData.append('email', 'admin@example.com');
    myData.append('linkedin', 'https://linkedin.com/in/username');
    myData.append('github', 'https://github.com/username');
    myData.append('image', 'default.png');

    const request$ = this.profileId
      ? this._profileService.updateProfile(this.profileId, myData)
      : this._profileService.addProfile(myData);

    request$.subscribe({
      next: () => {
        this.isLoading = false;
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
