import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-careeruser',
  templateUrl: './careeruser.component.html',
  styleUrls: ['./careeruser.component.css']
})
export class CareeruserComponent implements OnInit {
  careerList: any[] = [];

  constructor(private careerService: CareerService) {}

  ngOnInit(): void {
    this.loadCareerDetails();
  }

  // Fetch the list of career applications
  loadCareerDetails(): void {
    this.careerService.getAllCareerDetails().subscribe(
      (data: any[]) => {
        this.careerList = data;
      },
      (error) => {
        console.error('Error fetching career details', error);
      }
    );
  }

  // Download the resume by career ID
  downloadResume(careerId: number, name: string): void {
    this.careerService.downloadResume(careerId).subscribe(
      (blob) => {
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `resume_${name}.pdf`;  // Naming the file with the user's name
        anchor.click();
        window.URL.revokeObjectURL(url); // Revoke object URL after the download
      },
      (error) => {
        console.error('Error downloading resume', error);
      }
    );
  }
}