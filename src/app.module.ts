import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodosModule} from './todos/todos.module';
import {ConnectionModule} from './connection/connection.module';
import {categorieModule} from "./categorie/Categorie.module";
import {ActionModule} from "./action/Action.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Yxrhyrup1990!!',
            database: 'crud_nest',
            entities: ['dist/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        TodosModule,
        ConnectionModule,
        categorieModule,
        ActionModule

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
    }
}
