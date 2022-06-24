import { makeAutoObservable } from "mobx";
import {ITodo, typeModalTodos, typeTodos} from "../../appTypes/TodoTypes";

class TodoStore {

    // общий массив всех todo
    todos : Array<ITodo> = localStorage.getItem('todosData')? JSON.parse(localStorage.getItem('todosData')!) : [
        { id : 1, type : "process", dateCreated : new Date().getDate(), name : "Постирать пыльцу"},
        { id : 2, type : "process", dateCreated : new Date().getDate(), name : "Постирать машину"},
        { id : 3, type : "process", dateCreated : new Date().getDate(), name : "Постирать мама"},
        { id : 4, type : "process", dateCreated : new Date().getDate(), name : "Постирать папа"},
    ]

    // тип выводимых todo в компоненте
    currentTypeTodos : typeTodos = "all"

    // тип модального окна при добавленнии / изменении todo
    modalTodoType : typeModalTodos = "add"

    modalIsOpened : boolean = false

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
    // open / close modal
    changeModal(to : boolean){
        this.modalIsOpened = to
    }
}

export default new TodoStore();