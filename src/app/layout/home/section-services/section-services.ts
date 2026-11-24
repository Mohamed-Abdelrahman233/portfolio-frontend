import { ChangeDetectorRef, Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IServices } from '../../../core/models/service.model';
import { Services } from '../../../core/services/services/services';

@Component({
  selector: 'app-section-services',
  imports: [SlicePipe, RouterLink],
  templateUrl: './section-services.html',
  styleUrl: './section-services.css',
})
export class SectionServices {
  servicesList!: IServices[];
  imgBaseUrl: string = 'http://localhost:3000/api/imgs/';
  constructor(
    private _Services: Services,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this._Services.getService().subscribe((data) => {
      this.servicesList = data;
      this._cdr.detectChanges();
    });
  }

  cleanTitle(title: string): string {
    return title.replace(/\s*\d+\s*$/, '').trim();
  }
}
