import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TodosModule} from './todos/todos.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DataSource} from "typeorm";
import {Todo} from "./entity/todo.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'crud_nest',
            entities: [Todo],
            synchronize: true,
        }),
        , TodosModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {
    }
}
