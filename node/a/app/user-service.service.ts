import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = []; // You can store your courses in an array.

  constructor() { 
    this.users = [
      {
        name:"abcd",
        course:['Java',"Pyton"]
      },
      {
        name:"raju",
        course: ['UI','Data Science']
      }]
  }

  addCourseToUsers(userName:string,course:string) {
    if(this.users.filter(user=>user.name == userName)) {
        this.users.forEach( (user) =>{
          if(user.name == userName)
          {
            user.course.push(course);
          }
        })
    }
      else {
        const user = {name:userName,course:[course]};
        this.users.push(user);
      }
  }

  getUsersWithCourses(userName:string) {
      return this.users.filter(user=>user.name == userName);
  }

  getAllUsersCOurses() {
    return this.users;
}


}
