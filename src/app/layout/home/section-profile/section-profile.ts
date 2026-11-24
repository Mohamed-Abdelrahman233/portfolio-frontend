import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProfile } from '../../../core/models/profile. model';
import { Profile } from '../../../core/services/profile/profile';

@Component({
  selector: 'app-section-profile',
  imports: [RouterLink],
  templateUrl: './section-profile.html',
  styleUrl: './section-profile.css',
})
export class SectionProfile {
  myProfile!: IProfile;
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';
  constructor(
    private _profileDate: Profile,
    private _cdf: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._profileDate.getProfile().subscribe((data) => {
      console.log(data);
      this.myProfile = data;
      this._cdf.detectChanges();
    });
  }

  get cleanName(): string {
    return (this.myProfile?.name ?? '')
      .replace(/\d+/g, '')
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }
}
