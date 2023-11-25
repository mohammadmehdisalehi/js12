export const render = (el: string, update: HTMLElement | string) =>{
 document.getElementById(el)!.innerHTML = "";
 document.getElementById(el)!.append(update); 
};