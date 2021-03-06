import { makeAutoObservable } from "mobx";
import {ITodo, ITodoStore, todoStates } from "../../appTypes/TodoTypes";
import {getFullDate, getUnicId} from "../../helpers/functions/getFullDate";


class TodoStore implements ITodoStore{

    // общий массив всех todo
    todos : Array<ITodo> = [
        { id : 1, currentState : "process", created : "2022.05.22", name : "Постирать пыльцу"},
        { id : 2, currentState : "process", created : "2022.05.22", name : "Постирать машину"},
        { id : 3, currentState : "process", created : "2022.05.22", name : "Постирать мама"},
        { id : 4, currentState : "process", created : "2022.05.22", name : "Постирать папа"},
    ]
    constructor() {
        makeAutoObservable(this)
    }

    // тип выводимых todo в компоненте
    currentStateTodos : string = "all"
    // взять текущие по состоянию todo
    get currentTodos(): Array<ITodo> {
        if ( this.currentStateTodos == "all" ) return this.todos
        return this.todos.filter( todo => todo.currentState === this.currentStateTodos )
    }

    // добавление todo в массив [todos] и в [localStorage]
    addTodo(text : string){
        const new_todo : ITodo = {
            id : getUnicId(),
            name : text,
            currentState : "process",
            created : getFullDate()
        }
        this.todos.push(new_todo)
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
    changeTodoState( id : number, state : todoStates ){
        let updated = this.todos.map( todo => todo.id === id ? {...todo, currentState : state } : todo)
        this.todos = updated
    }
    // изменение типа выводимых todo в компоненте
    changeCurrentStateTodos( state : string ){
        this.currentStateTodos = state
    }

}

export default new TodoStore();