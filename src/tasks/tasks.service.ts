import { Injectable } from '@nestjs/common';
//Importo la interface
import { Task } from "./interfaces/Tasks";



//Describe lo que yo puedo empezar a reutilizar en otras partes de mi codigo
//Por ejem func o metodo que consulte la base de datos para traer tareas
//Este servicio tiene un arreglo que sera un arreglo de tareas,, (para simular nuestra bd)
@Injectable()
export class TasksService {
    tasks: Task[] = [   
    {
        id: 1,
        title: "Testing",
        description: "testing description",
        done: true

    },
    {
        id: 2,
        title: "Production",
        description: "production description",
        done: true

    },
    {
        id: 3,
        title: "Qa",
        description: "Qa description",
        done: true

    },
    ];
    //Metodos
    //Esto devuelve todas las tareas
    getTasks(): Task[]{
        return this.tasks
    }
    //Esto devuelve 1 tarea si encuentra ese id que le estan pasando
    
    getTask(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }
}
