import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Profile } from '../../../core/services/profile/profile';

@Component({
  selector: 'app-contact-update',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-update.html',
  styleUrl: './contact-update.css',
})
export class ContactUpdate implements OnInit {
constructor(private _profileService: Profile, private _cdr: ChangeDetectorRef) {}

  profileId: string | null = null;
  isLoading = false;
  message = '';

  contactForm = new FormGroup({
    contactHeading: new FormControl(''),
    contactSubtext: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    whatsapp: new FormControl(''),
    linkedin: new FormControl('', [Validators.required]),
    github: new FormControl('', [Validators.required]),
    location: new FormControl(''),
  });


  ngOnInit(): void {
    this._profileService.getProfile().subscribe((data) => {
      if (data && data._id) {
        this.profileId = data._id;
        this.contactForm.patchValue({
          contactHeading: data.contactHeading || '',
          contactSubtext: data.contactSubtext || '',
          email: data.email || '',
          phone: data.phone || '',
          whatsapp: data.whatsapp || '',
          linkedin: data.linkedin || '',
          github: data.github || '',
          location: data.location || '',
        });
        this._cdr.detectChanges();
      }
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.isLoading = true;
    this.message = '';

    const myData = new FormData();
    myData.append('contactHeading', this.contactForm.get('contactHeading')!.value || '');
    myData.append('contactSubtext', this.contactForm.get('contactSubtext')!.value || '');
    myData.append('email', this.contactForm.get('email')!.value || 'admin@example.com');
    myData.append('phone', this.contactForm.get('phone')!.value || '');
    myData.append('whatsapp', this.contactForm.get('whatsapp')!.value || '');
    myData.append('linkedin', this.contactForm.get('linkedin')!.value || 'https://linkedin.com/in/username');
    myData.append('github', this.contactForm.get('github')!.value || 'https://github.com/username');
    myData.append('location', this.contactForm.get('location')!.value || 'Cairo, Egypt');
    myData.append('name', 'MOHAMED DABAH');
    myData.append('jobTitle', 'Full Stack Developer');
    myData.append('heroTagline', 'Passionate developer building modern web applications');
    myData.append('aboutText', 'A passionate developer focused on building clean, modern, and responsive web applications. Always learning new technologies.');
    myData.append('cvUrl', '#');
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
