import { BoxProps } from "../../lib/types"
import { Box } from "../../lib/box"

type LayoutProps={
 children?:BoxProps["children"]   
}
export const Layout = (props: LayoutProps) => {
return Box({
    element:"div",
    children:props.children,
    attr:{
       className:" container max-w-lg mx-auto px-3"
    }
})
}