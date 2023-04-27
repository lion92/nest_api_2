import {Body, Controller, Get, Post} from '@nestjs/common';
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

    @Post()
    create(@Body() newTodo:TodosInterface):void{
        console.log(newTodo)
       this.todos.addTodo(newTodo);
    }

}
