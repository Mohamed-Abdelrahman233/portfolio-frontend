import { ChangeDetectorRef, Component } from '@angular/core';
import { Profile } from '../../../core/services/profile/profile';
import { IProfile } from '../../../core/models/profile. model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-api',
  imports: [CommonModule],
  templateUrl: './contact.api.html',
  styleUrl: './contact.api.css',
})
export class ContactApi {
  contactList!: IProfile;
  constructor(
    private _contcacData: Profile,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._contcacData.getProfile().subscribe((data) => {
      this.contactList = data;
      this._cdr.detectChanges();
    });
  }
}
