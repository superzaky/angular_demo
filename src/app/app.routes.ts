import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
export const routes: Routes = [
    { path: 'user', component: UserComponent },
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/:id', component: TodoDetailComponent },
    { path: '', redirectTo: '/user', pathMatch: 'full' }
];
