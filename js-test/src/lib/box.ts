import { BoxProps } from "./types";
export const Box = (props: BoxProps) => { 
    const el = document.createElement(props.element); 
    if (props.attr) {
        Object.keys(props.attr).forEach(( key: string) => {
        if (key.startsWith("on")) {
            el.addEventListener(key.slice(2).toLocaleLowerCase(),props.attr[key]);
            return null;
        }
        const keyOverWrite= key === "ClassName" ? "Class" : key;
        el.setAttribute(keyOverWrite,props.attr[key]);
   }); 
    }
 
    if (!Array.isArray(props.children)) el.append(props.children! ?? '' );
    else {
        const validChildren= props.children.filter((i) => !!i);
        el.append(...validChildren);
    } 
    return el ;
};