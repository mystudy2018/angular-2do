import { Component } from '@angular/core';


const todos = [
    {title: 'Изучить Javascript', completed: true},
    {title: 'Изучить Angular 2', completed: false},
    {title: 'Написать приложение', completed: false},
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular 2Do'
    todos = todos;
}