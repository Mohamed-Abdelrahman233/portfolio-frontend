import { ChangeDetectorRef, Component } from '@angular/core';
import { IExperience } from '../../../core/models/experiences.model';
import { Experience } from '../../../core/services/experiences/experience';

@Component({
  selector: 'app-exprience-api',
  imports: [],
  templateUrl: './exprience-api.html',
  styleUrl: './exprience-api.css',
})
export class ExprienceApi {
  experienceList!: IExperience[];
  constructor(
    private _experienceDate: Experience,
    private _cdf: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._experienceDate.getExperience().subscribe((data) => {
      console.log(data);
      this.experienceList = data;
      this._cdf.detectChanges();
    });
  }
}
