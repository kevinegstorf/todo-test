import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoOverviewPageComponent } from './pages/todo-overview-page/todo-overview-page.component';
import { TodoDetailPageComponent } from './pages/todo-detail-page/todo-detail-page.component';
import { CreateTodoPageComponent } from './pages/create-todo-page/create-todo-page.component';

export const routes: Routes = [
    { path: 'overview', component: TodoOverviewPageComponent },
    { path: 'todo/:id', component: TodoDetailPageComponent },
    { path: 'create', component: CreateTodoPageComponent },
    // auth might be added later as it's an extra feature in the assignment
    { path: '', redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}