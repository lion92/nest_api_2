import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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
    @Get(':id')
    findOne(@Param('id')id):TodosInterface{
        return this.todos.findOne(id);
    }


    @Post()
    create(@Body() newTodo:TodosInterface):void{
        console.log(newTodo)
       this.todos.addTodo(newTodo);
    }

}
