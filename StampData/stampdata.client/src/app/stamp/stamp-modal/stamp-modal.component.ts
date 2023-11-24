import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Stamp } from '../model/stamp';
import { CountryAutoFillService } from '../service/country-auto-fill.service';
import { OperatorFunction} from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { StampService } from '../service/stamp.service';

@Component({
  selector: 'app-stamp-modal',
  templateUrl: './stamp-modal.component.html',
  styleUrl: './stamp-modal.component.css',
})
export class StampModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private countryAutoFill: CountryAutoFillService, private stampService: StampService) { }    

  @Input() stamp: Stamp = new Stamp();
  model: any;

  search: OperatorFunction<string, readonly string[]> = this.countryAutoFill.search;

  isAdd: boolean = false;
  get form() {
    return this.StampForm.controls;
  }
  StampForm = new FormGroup({
    scottNumber: new FormControl(this.stamp?.scottNumber, [Validators.required]),
    country: new FormControl(this.stamp?.country, [Validators.required]),
    year: new FormControl(this.stamp?.year, [Validators.required, Validators.minLength(4)]),
    image: new FormControl(this.stamp?.image, [Validators.required]),
    description: new FormControl(this.stamp?.description)
  }, );

  ngOnInit(): void {
    if (this.stamp.id == null) {
      this.isAdd = true;
    }

    this.StampForm.patchValue({
      scottNumber: this.stamp.scottNumber,
      country: this.stamp.country,
      year: this.stamp.year,
      image: this.stamp.image,
      description: this.stamp.description
    });

  }

  onImagePicked(event: any) {    
    var file = event.target.files[0]; // Here we use only the first file (single file)
    this.StampForm.patchValue({ image: file });
  }

  onSubmit() {
    console.log('submit')
    if (this.StampForm.invalid || !this.StampForm.dirty) {
      return;
    }

    this.stamp.scottNumber = this.form?.scottNumber?.value ?? '';
    this.stamp.country = this.form?.country?.value ?? '';
    this.stamp.year = this.form?.year?.value ?? 0;
    this.stamp.image = this.form?.image?.value ?? '';
    this.stamp.description = this.form?.description?.value ?? '';
    this.stampService.updateOrAddStamp(this.stamp).subscribe((data) => this.activeModal.close());
    
  }
}
