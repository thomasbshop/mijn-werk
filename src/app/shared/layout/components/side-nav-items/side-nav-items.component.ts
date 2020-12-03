import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { ChannelService } from 'src/app/features/chat/services/channel.service';

@Component({
  selector: 'app-side-nav-items',
  templateUrl: './side-nav-items.component.html',
  styleUrls: ['./side-nav-items.component.scss']
})
export class SideNavItemsComponent implements OnInit {
  @Input() menuOptions? = [];

  validateForm: FormGroup;
  isVisible = false;
  isAddLoading = false;


  constructor(
    private fb: FormBuilder,
    private channelService: ChannelService ) {
    this.validateForm = this.fb.group({
      channel: ['', [Validators.required], [this.channelNameAsyncValidator]],
      description: ['', [Validators.required]]
    });
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  addChannel(): void {
    this.isVisible = true;
  }

  submitForm(value: { channel: string; description: string }, e: MouseEvent): void {
    this.isAddLoading = true;
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    this.channelService.addChannel(value);
    this.isVisible = false;
    this.isAddLoading = false;
    this.resetForm(e)
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  // checks if the channel exists.
  channelNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        const nameExists = this.menuOptions?.find( ({ name }) => name === control.value );
        if (nameExists) {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 500);
  });

  ngOnInit(): void {
  }

}
