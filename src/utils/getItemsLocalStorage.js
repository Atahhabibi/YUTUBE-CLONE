



export const getItemFromStorage=(name)=>{
   return  JSON.parse(localStorage.getItem(name))||[]
}


export const setItemToStorage=(name,items)=>{
    localStorage.setItem(name,JSON.stringify(items))
}