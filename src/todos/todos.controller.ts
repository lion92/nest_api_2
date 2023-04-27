import {Controller, Get} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {TodosInterface} from "../interface/Todos.interface";

@Controller('todos')
export class TodosController {
    constructor(private readonly todos: TodosService) {
    }

    @Get()
    findAll(): TodosInterface[] {
        return this.todos.todos;
    }
}
