import { ChangeDetectorRef, Component } from '@angular/core';
import { IProfile } from '../../../core/models/profile. model';
import { Profile } from '../../../core/services/profile/profile';

@Component({
  selector: 'app-about-api',
  imports: [],
  templateUrl: './about-api.html',
  styleUrl: './about-api.css',
})
export class AboutApi {
  myProfile!: IProfile;
  constructor(
    private _AboutDate: Profile,
    private _cdf: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._AboutDate.getProfile().subscribe((data) => {
      console.log(data);
      this.myProfile = data;
      this._cdf.detectChanges();
    });
  }
}
