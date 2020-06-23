//Voy a crear el dato que voy a estar recibiendo desde el cliente
//DTO es solo para los datos que se tranfieren entre las aplicaciones
export class CreateTaskDto {
    title: string;
    descrition: string;
    done: boolean;
}