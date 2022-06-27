export const getFullDate = () =>{
    let date = new Date;
    let year : number | string = date.getFullYear()
    let month : number | string = date.getMonth()
    let day : number | string = date.getDate()

    if ( month < 10) month = "0" + String(month)
    if ( day < 10 ) day = "0" + String(date)

    return `${year}.${month}.${day}`
}
export const getUnicId = () =>{
    return Math.random() * ( new Date().getSeconds() )
}