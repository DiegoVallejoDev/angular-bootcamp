import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { ItemsService } from '../items.service';
import { Item } from '../data';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent {
  protected showDialog = false;

  itemForm: FormGroup;
  photos: Array<string> = [];

  constructor(private fb: FormBuilder, private itemsService: ItemsService) {
    this.itemForm = this.fb.group({
      title: ['', Validators.required],
      prices: this.fb.group({
        usd: ['', Validators.required],
        eur: ['', Validators.required],
        gbp: ['', Validators.required],
      }),
      photos: this.fb.array([]),
      description: ['', Validators.required],
      offerDiscount: [''], // Optional field
    });
  }

  ngOnInit(): void {
    this.addPhoto();
  }

  get photosArray(): FormArray {
    return this.itemForm.get('photos') as FormArray;
  }

  addPhoto(): void {
    this.photosArray.push(new FormControl('', Validators.required));
  }

  removePhoto(index: number): void {
    this.photosArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      const newItem: Item = this.itemForm.value;
      console.log(newItem);
      // Process form submission
      this.itemsService.addItem(newItem);

      // Reset form
      this.itemForm.reset();
      this.photosArray.clear();
      this.showDialog = false;
    } else {
      alert('Please fill in all required fields');
    }
  }
  openDialog() {
    this.showDialog = true;
  }
  closeDialog() {
    this.showDialog = false;
    // Reset form
    this.itemForm.reset();
  }
}
