import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports : [ FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(response => {
      this.todos = response;
      console.log('Todos loaded:', this.todos);
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(response => {
      this.loadTodos();
      console.log('Todo deleted:', response);
    });
  }
}

