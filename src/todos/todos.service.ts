import {Injectable} from '@nestjs/common';
import {TodoDTO} from "../dto/todoDTO";

@Injectable()
export class TodosService {
    todos = [{
        id: 1,
        title: 'todo app',
        description: 'test'
    }, {
        id: 1,
        title: 'todo app',
        description: 'test'
    }, {
        id: 2,
        title: 'todo app',
        description: 'test'
    }, {
        id: 3,
        title: 'todo app',
        description: 'test'
    }]

    addTodo(todo: TodoDTO) {
        this.todos = [...this.todos, todo as TodoDTO]
    }

    findOne(id: number) {
        return this.todos.find(value => value.id === Number(id));
    }


}
