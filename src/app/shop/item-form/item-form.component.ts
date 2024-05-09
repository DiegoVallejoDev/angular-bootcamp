import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
  ValidationErrors,
  ValidatorFn,
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
  @Output() onItemAdded = new EventEmitter<Item>();
  itemForm: FormGroup;
  photos: Array<string> = [];
  errorList: string[] = [];

  constructor(private fb: FormBuilder, private itemsService: ItemsService) {
    this.itemForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          this.validatorUniqueTitle('', this.itemsService.getItems()),
        ],
      ],
      prices: this.fb.group({
        usd: ['', Validators.required],
        eur: ['', Validators.required],
        gbp: ['', Validators.required],
      }),
      photos: this.fb.array([]),
      description: ['', Validators.required],
      offerDiscount: [
        null, // Optional field, starts empty
        Validators.pattern(/^(100|[1-9]?[0-9])$/), //regex 0-100,
      ],
    });
  }

  //custom validator for not repeated title
  validatorUniqueTitle(title: string, itemList: Item[]): ValidatorFn {
    return ((control: FormControl): ValidationErrors | null => {
      const titleValue = control.value;
      const item = itemList.find((item) => item.title === titleValue);
      if (item && item.title !== title) {
        return { uniqueTitle: { value: control.value } };
      }
      return null;
    }) as ValidatorFn;
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
      // Reset form
      this.itemForm.reset();
      this.photosArray.clear();
      this.showDialog = false;
      //send the event
      this.onItemAdded.emit(newItem);
    } else {
      this.errorList = this.getFormValidationErrors();
      alert('Please fill in all required fields with proper values');
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

  getFormValidationErrors() {
    const errorList: string[] = [];

    Object.keys(this.itemForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors | null | undefined =
        this.itemForm.get(key)?.errors;

      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          const errorMessage = `Error in ${key}: ${keyError}, Value: ${JSON.stringify(
            controlErrors[keyError]
          )}`;
          errorList.push(errorMessage);
        });
      }
    });

    return errorList;
  }
}
