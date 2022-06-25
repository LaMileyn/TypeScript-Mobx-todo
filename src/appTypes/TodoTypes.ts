export interface ITodo {
    id : number,
    name : string,
    type : "done" | "process",
    dateCreated : string
}

export interface ITodoStore {
    // общий массив всех todo
    todos : Array<ITodo>,
    // тип выводимых todo в компоненте
    currentTypeTodos : typeTodos,
    // тип модального окна при добавленнии / изменении todo
    modalTodoType : typeModalTodos,
    // добавление todo в массив [todos]
    addTodo : ( text : string) => void,
    // изменение todo в массиве [todos]
    changeTodo : ( text : string, id : number) => void,
    // удаление todo в массиве [todos]
    removeTodo : (id : number) => void,
    // изменение тип модального окна
    changeModalType : ( type : typeModalTodos ) => void,
    // opened / close modal
    modal : boolean,
    // изменение типа выводимых todo в компоненте
    changeCurrentTypeTodos : ( type : typeTodos ) => void
}


export type typeTodos = "all" | "done" | "process"
export type typeModalTodos = "add" | "change"