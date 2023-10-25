import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private courses: Course[] = []; // You can store your courses in an array.

  constructor() { 
    this.courses = [
      {
        courseName: 'UI',
        category: 'Web Development',
        duration: '8 weeks',
        level: 'Intermediate',
        language: 'English',
        cost: '$99.99',
        rating: '4.5',
      },
      {
        courseName: 'Java',
        category: 'Prgramming Development',
        duration: '8 weeks',
        level: 'Intermediate',
        language: 'English',
        cost: '$99.99',
        rating: '4.5',
      },
      {
        courseName: 'Data Science',
        category: 'Data Science',
        duration: '10 weeks',
        level: 'Advanced',
        language: 'English',
        cost: '$149.99',
        rating: '4.8',
      }]
  }

  addCourse(course: Course): void {
    console.log("addded course")
    this.courses.push(course);
  }

  getCourses(): Course[] {
    return this.courses;
  }
}
