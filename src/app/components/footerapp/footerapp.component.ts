import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-footerapp',
  templateUrl: './footerapp.component.html',
  styleUrls: ['./footerapp.component.css']
})
export class FooterappComponent  {

  careerFormData = {
    name: '',
    email: '',
    contactNumber: '',
    workExperience: '',
    desiredDomain: '',
    resume: null as File | null // Explicitly declare type as File or null
  };

  constructor(private http: HttpClient,private careerService: CareerService) {}

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  validateContactNumber(contactNumber: string): boolean {
    const contactPattern = /^[0-9]{10}$/;
    return contactPattern.test(contactNumber);
  }

  validateWorkExperience(experience: string): boolean {
    const experienceNumber = Number(experience);
    return experienceNumber >= 0;
  }

  validateFileType(file: File | null): boolean {
    if (!file) return false;
    const allowedExtensions = /(\.pdf)$/i;
    return allowedExtensions.exec(file.name) !== null;
  }

  submitCareerDetails(form: NgForm) {
    if (form.valid) {
      if (!this.validateEmail(this.careerFormData.email)) {
        alert('Please enter a valid email address ending with .com');
        return;
      }
  
      if (!this.validateContactNumber(this.careerFormData.contactNumber)) {
        alert('Contact number must be a 10-digit number.');
        return;
      }
  
      if (!this.validateWorkExperience(this.careerFormData.workExperience)) {
        alert('Experience must be 0 or more years.');
        return;
      }
  
      if (!this.validateFileType(this.careerFormData.resume)) {
        alert('Please upload a PDF file for your resume.');
        return;
      }
  
      const formData = new FormData();
      formData.append('name', this.careerFormData.name);
      formData.append('email', this.careerFormData.email);
      formData.append('contactNumber', this.careerFormData.contactNumber);
      formData.append('workExperience', this.careerFormData.workExperience);
      formData.append('desiredDomain', this.careerFormData.desiredDomain);
  
      if (this.careerFormData.resume) {
        formData.append('resume', this.careerFormData.resume);
      }
  
      this.careerService.submitCareerDetails(formData).subscribe(
        response => {
          console.log('Career details submitted successfully', response);
          alert('Career details submitted successfully');
          form.reset();
          this.careerFormData.resume = null; // Clear the resume after submission
        },
        error => {
          console.error('Error submitting career details', error);
          alert('There was an error submitting your details. Please try again.');
        }
      );
    }
  }
  

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.careerFormData.resume = file || null; // Ensure we set it to null if no file is selected
  }
}