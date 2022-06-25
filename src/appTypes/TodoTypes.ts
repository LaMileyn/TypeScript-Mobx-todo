
// возможные состояния todo
export type todoStates =  "done" | "process"
// состояния todo для фильтрации их на странице
export type todoStatesToFilter = "all" | "done" | "process"

export interface ITodo {
    id : number,
    name : string,
    currentState : todoStates,
    created : string
}

// Store
export interface ITodoStore {
    // взять текущие по состоянию todo
    get currentTodos() : Array<ITodo>
    // общий массив всех todo
    todos : Array<ITodo>,
    // тип выводимых todo в компоненте
    currentStateTodos : string,
    // добавление todo в массив [todos]
    addTodo : ( text : string) => void,
    // изменение todo в массиве [todos]
    changeTodo : ( text : string, id : number) => void,
    // изменения типа todo --> done , in proccess ....
    changeTodoState : (id : number, state : todoStates) => void
    // удаление todo в массиве [todos]
    removeTodo : (id : number) => void,
    // изменение типа выводимых todo в компоненте
    changeCurrentStateTodos : ( state : string ) => void
}
