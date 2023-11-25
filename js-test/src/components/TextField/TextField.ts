import { Box } from "../../lib/box";
type TextFieldProps =
| {
label?: HTMLElement | string;
helperText?: HTMLElement | string;
icon?: string;
}
|any;

export const TextField = (
 props: TextFieldProps = { helperText: "", label:""}
) => {
const { helperText, label, icon, ...restProps }=props;
const id = crypto.randomUUID();
return Box({ 
    element: "div",
    children: [
         label &&
         Box({
         element: "label",
         children:label,
         attr:{for:id},
        }),
         Box({element: "div", attr: { class: " flex items-center focus-within:ring-1 pr-2 overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "},
children: [
     Box({ 
      element: "input",
      attr: { id, class: "w-full p-2.5 bg-transparent outline-none h-full ", ...restProps,},})
    ]
})]})}

// return Box({ 
// element: "div",
// children:[]
// })}

