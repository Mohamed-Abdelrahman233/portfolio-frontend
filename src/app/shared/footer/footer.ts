import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IProfile } from '../../core/models/profile. model';
import { Profile } from '../../core/services/profile/profile';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  myProfile?: IProfile;

  constructor(
    private _profileData: Profile,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._profileData.getProfile().subscribe((data) => {
      this.myProfile = data;
      this._cdr.detectChanges();
    });
  }
}
