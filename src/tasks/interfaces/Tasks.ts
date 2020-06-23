//Esto es para usarlo internamente en mi codigo, no me sirve DTO aunque sean parecidos
//Este si puede tener un ID por que es donde voy a revisar los obj dentro de mi code
export interface Task {
    id?: number,
    title: string;
    description: string;
    done: boolean;
}