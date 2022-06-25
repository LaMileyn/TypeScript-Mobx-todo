import { makeAutoObservable } from "mobx";
import {ITodo, ITodoStore, typeModalTodos, typeTodos, typeTodosFilter} from "../../appTypes/TodoTypes";


class TodoStore implements ITodoStore{

    // общий массив всех todo
    todos : Array<ITodo> = [
        { id : 1, type : "In Process", dateCreated : new Date().getDate().toString(3), name : "Постирать пыльцу"},
        { id : 2, type : "In Process", dateCreated : new Date().getDate().toString(3), name : "Постирать машину"},
        { id : 3, type : "In Process", dateCreated : new Date().getDate().toString(3), name : "Постирать мама"},
        { id : 4, type : "In Process", dateCreated : new Date().getDate().toString(3), name : "Постирать папа"},
    ]
    constructor() {
        makeAutoObservable(this)
    }

    get currentTodos(): Array<ITodo> {
        if ( this.currentTypeTodos == "All" ) return this.todos
        return this.todos.filter( todo => todo.type === this.currentTypeTodos )
    }

    // тип выводимых todo в компоненте
    currentTypeTodos : typeTodosFilter = "All"
    // тип модального окна при добавленнии / изменении todo
    modalTodoType : typeModalTodos = "add"
    // opened / close modal
    modal : boolean = false
    // change modal
    changeModal( to : boolean){
        this.modal = to
    }
    // добавление todo в массив [todos] и в [localStorage]
    addTodo(text : string){
        const [ year, month, day ] = [ new Date().getFullYear(), new Date().getMonth(), new Date().getDay() ]
        const new_todo : ITodo = {
             id : Math.random() * ( new Date().getSeconds() ),
             name : text,
             type : "In Process",
             dateCreated : `${year}.${month}.${day}`
        }
        this.todos.push(new_todo)
    }
    // изменение тип модального окна
    changeModalType( type : typeModalTodos ){
        this.modalTodoType = type
    }
    // удаление todo из массива [todos] и из [localStorage]
    removeTodo(id : number){
        this.todos = this.todos.filter( todo => todo.id !== id )
    }
    // изменение todo в массиве [todos]
    changeTodo( text : string, id : number){
        this.todos = this.todos.map( todo => todo.id === id ? {...todo, name : text } : todo)
    }
    // process ... active...
    changeTodoType( id : number, type : typeTodos ){
        this.todos = this.todos.map( todo => todo.id === id ? {...todo, type : type } : todo)
    }
    // изменение типа выводимых todo в компоненте
    changeCurrentTypeTodos( type : typeTodosFilter ){
        this.currentTypeTodos = type
    }
}

export default new TodoStore();