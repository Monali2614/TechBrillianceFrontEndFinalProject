import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  Instructors = [
    {
    Name:'Bharat Chavhan',
    Title:'Senior Java Instructor',
    Experience:'7+ years of Java development.',
    Companies:'Lead Developer at Infosys',
    Expertise:'Java SE, Java EE, Spring Boot, Hibernate.',
    Certification:'Oracle Certified Java Programmer (OCPJP)',
    Education:'Master’s in Computer Science',
    Achievements:'Trained hundreds of developers over 3 years.',
    Approach:'Focus on hands-on learning with real-world projects.'
  },
  {
    Name: 'Rajesh Patale',
    Title: 'Senior Java Instructor',
    Experience: '6+ years of Java development.',
    Companies: 'DEF Solutions, GHI Systems',
    Expertise: 'Core Java, Microservices, Spring Cloud.',
    Certification: 'AWS Certified Developer',
    Education: 'Bachelor’s in Information Technology',
    Achievements: 'Mentoring students in modern Java practices and frameworks.',
    Approach: 'Focuses on practical insights and theoretical depth.'
  },
  {
    Name: 'Swapnil Tali',
    Title: 'Senior Testing Instructor',
    Experience: '7+ years in software testing.',
    Companies: 'JKL Technologies, MNO Innovations',
    Expertise: 'Selenium, TestNG, JUnit, JMeter, LoadRunner',
    Certification: 'ISTQB Certified',
    Education: '',
    Achievements: 'Expert in manual and automated testing.',
    Approach: 'Hands-on approach with real-world scenarios.'
  },
  {
    Name: 'Monali Gawargur',
    Title: 'Senior Front-End Instructor',
    Experience: '5+ years in front-end development.',
    Companies: 'LMN Digital Solutions, OPQ Innovations',
    Expertise: 'HTML5, CSS3, JavaScript, Angular, React.',
    Certification: 'Certified Web Development Professional',
    Education: 'Bachelor’s in Information Technology',
    Achievements: 'Focusing on responsive design and UX.',
    Approach: 'Combines theory with hands-on practice.'
  },
  {
    Name: 'Shubham Umratkar',
    Title: 'Senior Angular Instructor',
    Experience: '6+ years in front-end development.',
    Companies: 'XYZ Solutions, DEF Innovations',
    Expertise: 'Angular, NgRx, RESTful APIs, Responsiveness.',
    Certification: 'Google’s Mobile Web Specialist',
    Education: 'Bachelor’s in Computer Engineering',
    Achievements: 'In-depth knowledge of Angular features.',
    Approach: 'Hands-on methodology for real-world challenges.'
  },
  {
    Name: 'Shwetal Gadge',
    Title: 'Senior Testing Instructor',
    Experience: '6.5+ years in quality assurance.',
    Companies: 'PQR Software Solutions, STU Tech',
    Expertise: 'API testing, Mobile testing (Android & iOS).',
    Certification: 'ISTQB, Certified Agile Tester (CAT)',
    Education: '',
    Achievements: 'Expert in automation tools like Cypress and Cucumber.',
    Approach: 'Interactive teaching style with practical tools.'
  }
];
}