import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

//Es como un indice de todo lo que esta en la carpeta tasks
@Module({
    imports: [],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
