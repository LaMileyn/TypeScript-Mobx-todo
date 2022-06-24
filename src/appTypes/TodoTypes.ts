export interface ITodo {
    id : number
    name : string,
    type : "done" | "process",
    dateCreated : string
}
export type typeTodos = "all" | "done" | "process"
export type typeModalTodos = "add" | "change"