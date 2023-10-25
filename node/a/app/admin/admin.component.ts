import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
import { Course } from '../course';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private courseService:CourseServiceService,private userService:UserServiceService) {
    this.allCourses= this.courseService.getCourses();
    this.allUSersCOurse =  this.userService.getAllUsersCOurses();
   }
   newCourse: Course = new Course();
   allCourses: Course[];
   allUSersCOurse: User[]; 


  ngOnInit(): void {
  }
  addCourse() {
    this.courseService.addCourse(this.newCourse);
    this.allCourses =this.courseService.getCourses();
  }
}
