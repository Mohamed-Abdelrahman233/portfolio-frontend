import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProfile } from '../../core/models/profile. model';
import { Profile } from '../../core/services/profile/profile';
import { SectionProfile } from './section-profile/section-profile';
import { SectionServices } from './section-services/section-services';
import { SectionProjects } from './section-projects/section-projects';
import { SectionSkills } from './section-skills/section-skills';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SectionProfile, SectionServices, SectionProjects, SectionSkills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
