import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  registerForm: FormGroup;
 
  constructor( private fb: FormBuilder, private userInfoService: UserinfoService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
 
  ngOnInit(): void {
  }
 
 
 
 
  submitForm() {
    if (this.registerForm.valid) {
      this.userInfoService.saveUserInfo(this.registerForm.value).subscribe(
        response => {
          console.error('Error:', response);
          alert('There was an error saving the user information.');
        },
        error => {
 
          alert('User information saved successfully!');
          this.registerForm.reset();
        }
      );
    }
 
}
 
isCollapsed = false;
toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
}
 
}