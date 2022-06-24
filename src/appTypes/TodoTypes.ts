export interface ITodo {
    id : number
    name : string,
    type : string,
    dateCreated : string
}
export type typeTodos = "all" | "done" | "process"
export type typeModalTodos = "add" | "change"