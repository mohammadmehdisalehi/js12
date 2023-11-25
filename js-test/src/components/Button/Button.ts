import { Box } from "../../lib/box";
import { BoxProps} from "../../lib/types"
type ButtonProps = {
    children: BoxProps["children"]; 
    attr?:BoxProps["attr"]
}; 
export const Button = (props: ButtonProps) => {
 return Box({
 element: "button", attr:{class: "text-white rounded-md w-full bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2  font-bold py-2 px-4"},
 children: props.children })}; 
