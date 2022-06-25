export interface ITodo {
    id : number,
    name : string,
    type : "Done" | "In Process",
    dateCreated : string
}

export interface ITodoStore {

    get currentTodos() : Array<ITodo>
    // общий массив всех todo
    todos : Array<ITodo>,
    // тип выводимых todo в компоненте
    currentTypeTodos : typeTodosFilter,
    // тип модального окна при добавленнии / изменении todo
    modalTodoType : typeModalTodos,
    // добавление todo в массив [todos]
    addTodo : ( text : string) => void,
    // изменение todo в массиве [todos]
    changeTodo : ( text : string, id : number) => void,
    // изменения типа todo --> done , in proccess ....
    changeTodoType : (id : number, type : typeTodos) => void
    // удаление todo в массиве [todos]
    removeTodo : (id : number) => void,
    // изменение тип модального окна
    changeModalType : ( type : typeModalTodos ) => void,
    // opened / close modal
    modal : boolean,
    // change modal / closed \ opened
    changeModal : ( to : boolean ) => void
    // изменение типа выводимых todo в компоненте
    changeCurrentTypeTodos : ( type : typeTodosFilter ) => void
}


export type typeTodos =  "Done" | "In Process"
export type typeTodosFilter = "All" | "Done" | "In Process"
export type typeModalTodos = "add" | "change"