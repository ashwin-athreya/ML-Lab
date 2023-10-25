import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../course';
import { CourseServiceService } from '../course-service.service';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  filteredCourses: Course[] = [];
  courses: Course[] = []; // Your course data array
  userCourses: User[] =[];
  filter: any = {};


  userName: string;
  constructor(private courseService:CourseServiceService,private userService:UserServiceService,private route: ActivatedRoute) {
    this.courses = courseService.getCourses();
    this.userCourses =  userService.getAllUsersCOurses();
    const userNameParam = this.route.snapshot.paramMap.get('userName');
    this.userName = userNameParam ? userNameParam : ''; // Default to an empty string if userNameParam is null
    console.log(this.userName)
   }

  ngOnInit(): void {
    this.filteredCourses = this.courses;
  }
  searchTerms = {
    category: '',
    cost:'',
    level:'',
    language:'',
    rating:''
      };

  filterTable() {
    let result:boolean = true;
    this.filteredCourses = this.courses.filter(course => {
      const category = course.courseName.toLowerCase().includes(this.searchTerms.category.toLowerCase());
      const costMatch = course.cost.toLowerCase().includes(this.searchTerms.cost.toLowerCase());
      const level = course.level.toLowerCase().includes(this.searchTerms.level.toLowerCase());
      const language = course.language.toLowerCase().includes(this.searchTerms.language.toLowerCase());
      const rating = course.rating.toLowerCase().includes(this.searchTerms.rating.toLowerCase());
      if(category != null )
        result = result && category;
      if(costMatch != null)
      result = result && costMatch;
      if(level != null)
      result = result && level;
      if(language != null)
      result = result && language;
      if(rating != null)
      result = result && rating;

      return result;

    });
  }

  isEnrolled(courseName:string) {
let i= 0;
    this.userCourses.forEach(users=> {
      if(users.name == this.userName) {
        console.log('entered');
          users.course.forEach(courses=>{
            if(courses == courseName) {
i++;            }
          });
      }
    });
    if(i==0)
    return false;
  else
  return true;
  }


  toggleEnrollment(courseName:string) {
    this.userService.addCourseToUsers(this.userName,courseName);

  }
}
