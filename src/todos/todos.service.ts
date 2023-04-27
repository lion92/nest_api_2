import { Injectable } from '@nestjs/common';

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
}
