import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})



export class TodolistComponent implements OnInit {
  taskArray=[{"taskName": "Wake Up", "isCompleted": false}];

  ngOnInit(): void {
    const data = localStorage.getItem('tasks');
    if(data) this.taskArray = JSON.parse(data);
    else this.taskArray = [{"taskName": "Wake Up", "isCompleted": false}]
  }

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
    form.reset();
  }

  onDelete(i: number) {
    this.taskArray.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

  onCheck(i: number) {
    this.taskArray[i].isCompleted = !this.taskArray[i].isCompleted;
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }
}
