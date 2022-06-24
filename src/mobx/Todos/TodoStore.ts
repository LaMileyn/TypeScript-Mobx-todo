import { makeAutoObservable } from "mobx";
import {ITodo, typeModalTodos, typeTodos} from "../../appTypes/TodoTypes";

class TodoStore {

    // общий массив всех todo
    todos : Array<ITodo> = localStorage.getItem('todosData')? JSON.parse(localStorage.getItem('todosData')!) : []

    // тип выводимых todo в компоненте
    currentTypeTodos : typeTodos = "all"

    // тип модального окна при добавленнии / изменении todo
    modalTodoType : typeModalTodos = "add"

    constructor() {
        makeAutoObservable(this)
    }

    // добавление todo в массив [todos] и в [localStorage]
    addTodo(todo : ITodo){
        this.todos.push(todo)
        localStorage.setItem("todosData",JSON.stringify(this.todos))
    }
    // изменение тип модального окна
    changeModalType(type : typeModalTodos ){
        this.modalTodoType = type
    }
    // удаление todo из массива [todos] и из [localStorage]
    removeTodo(id : number){
        this.todos = this.todos.filter( todo => todo.id !== id )
        localStorage.setItem("todosData",JSON.stringify(this.todos))
    }
    // изменение типа выводимых todo в компоненте
    changeCurrentTypeTodos( type : typeTodos ){
        this.currentTypeTodos = type
    }
}

export default new TodoStore();