import { Entity } from '@loopback/repository';
import { Todo } from './todo.model';
export declare class TodoList extends Entity {
    id?: number;
    title: string;
    color?: string;
    todos: Todo[];
    constructor(data?: Partial<TodoList>);
}
