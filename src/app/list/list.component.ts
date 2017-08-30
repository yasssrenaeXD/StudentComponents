import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListComponent {
  StudentCollection: Array<object> =[];
  studentRecord: object;

  studNo: number;
  studFname: string;
  studLname: string;
  studProg: string;
  studYr: number;

  messages= '';
  printing=false;

  private checkPatterns(value:any, pattern: RegExp): boolean {
    if(pattern.test(value))
      return true;
    else
      return false;
  }

  addStudentEntry(): Boolean{
    this.printing = false;
    const stringPattern = /^[A-z\s]+$/;
    const studNumberPattern = /^[0-9]+$/;
    const stringYearPattern = /^[1-5]+$/;

    if(this.checkPatterns(this.studNo, studNumberPattern)&&
      this.checkPatterns(this.studFname, stringPattern)&&
      this.checkPatterns(this.studLname, stringPattern)&&
      this.checkPatterns(this.studProg, stringPattern)&&
      this.checkPatterns(this.studYr, stringYearPattern)){

      this.studentRecord={
        studNumber: this.studNo,
        studFirstName: this.studFname,
        studLastName: this.studLname,
        studProgram: this.studProg,
        studYear: this.studYr
      };
      this.StudentCollection.push(this.studentRecord);
      console.log(this.StudentCollection);
      this.messages=null;
      this.clearValues();
    } else{
      this.messages= 'Errors have been encountered and therefore cannot proceed';
      return false;
    }
  }

  listStudent():void{
    this.printing=true;
    console.log('Showing stored students');
  }

  clearValues():void{
    this.studNo=null;
    this.studFname=null;
    this.studLname=null;
    this.studProg=null;
    this.studYr=null;
  }

}
