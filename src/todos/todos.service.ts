import { Injectable } from '@nestjs/common';
import {TodosInterface} from "../interface/Todos.interface";

@Injectable()
export class TodosService {
    todos=[{
        id:1,
        title:'todo app',
        description:'test'
    },{
        id:1,
        title:'todo app',
        description:'test'
    },{
        id:2,
        title:'todo app',
        description:'test'
    },{
        id:3,
        title:'todo app',
        description:'test'
    }]

    addTodo(todo:TodosInterface){
        this.todos=[...this.todos, todo]
    }
}
