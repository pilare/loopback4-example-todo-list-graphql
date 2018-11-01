import { Todo, TodoList } from '../src/models';
/**
 * Generate a complete Todo object for use with tests.
 * @param todo A partial (or complete) Todo object.
 */
export declare function givenTodo(todo?: Partial<Todo>): Todo;
/**
 * Generate a complete TodoList object for use with tests
 * @param todoList A partial (or complete) TodoList object.
 */
export declare function givenTodoList(todoList?: Partial<TodoList>): TodoList;
