import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  createStudent: FormGroup;
  createMentor: FormGroup;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.createStudent = new FormGroup({
      name: new FormControl("")
    });


    this.createMentor = new FormGroup({
      name: new FormControl("")
    });

  }

  createStudentFn() {
    this.http.post("https://student-mentor-02.herokuapp.com/addStudent", this.createStudent.value, { responseType: 'text' }).subscribe((data) => {
      console.log(data);
      this.toastr.success('Added Student!');
    }, (err) => { console.log(err.error) });
  }

  createMentorFn() {
    this.http.post("https://student-mentor-02.herokuapp.com/addMentor", this.createMentor.value, { responseType: 'text' }).subscribe((data) => {
      console.log(data);
      this.toastr.success('Added Mentor!');
    }, (err) => { console.log(err.error) });
  }


}