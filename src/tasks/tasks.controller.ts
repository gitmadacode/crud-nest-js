import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { CreateTaskDto } from "./dto/create-task.dto";
import { Task } from "./interfaces/Tasks";
//Voy a importar mi servicio
import { TasksService } from "./tasks.service";


@Controller('tasks')
export class TasksController {
//Voy a instanciarlo a travez de un constructor
    constructor(private taskService : TasksService){}

//Esta ruta funcionara con un metodo que voy a crear
    @Get()
    getTasks(): Task[] {
        return this.taskService.getTasks();
    }

    @Get(':taskId')
    getTask(@Param('taskId') taskId: string){
        //Con parseInt tranformo el string ID en  un entero
       return this.taskService.getTask(parseInt(taskId));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): string {
        console.log(task)
        return 'Creating a task'
    }

    @Delete(':id')
    deleteTask(@Param('id') id :string ): string {
        console.log(id)
        return `Deleting a task number: ${id}`
    }

    @Put(':id')
    updateTask(@Body() task:CreateTaskDto, @Param('id') id: string): string {
        console.log(task)
        console.log(id)
        return 'Updating a task'
    }
}
