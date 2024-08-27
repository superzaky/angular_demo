import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  standalone: true,
  imports : [ FormsModule ],
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: any = {};

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTodoDetail(id);
  }

  loadTodoDetail(id: number) {
    this.todoService.getTodoById(id).subscribe(response => {
      this.todo = response;
      console.log('Todo loaded:', this.todo);
    });
  }

  updateTodo() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.updateTodo(id, this.todo).subscribe(response => {
      console.log('Todo updated:', response);
    });
  }
}

