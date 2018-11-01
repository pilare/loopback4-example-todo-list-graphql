import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Todo, TodoList } from '../models';
import { TodoRepository } from './todo.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id> {
    protected todoRepositoryGetter: Getter<TodoRepository>;
    readonly todos: HasManyRepositoryFactory<Todo, typeof TodoList.prototype.id>;
    constructor(dataSource: juggler.DataSource, todoRepositoryGetter: Getter<TodoRepository>);
    findByTitle(title: string): Promise<TodoList | null>;
}
