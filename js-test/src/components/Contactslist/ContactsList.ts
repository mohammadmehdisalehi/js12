
import { ContactsDataType } from "../../types"
import { Box } from "../../lib/box"
export const ContactsList = ( props:{contactsData:ContactsDataType})=> {
return Box({
element:"ul",
attr:{
id:"ul-list",
class:"border-t border-slate-400 rounded-sm min-h-screen p-2"
},
children:[
    ...props.contactsData?.map((item) => {
    return Box({
    element: "li",
    attr: { 
    class: "border-b border-slate-300 py-1", 
    }, 
    children: [ 
    Box({
    element: "h3",
    children: item?.contactName, 
}),
    Box({ element: "p", children: item?.phoneNumber, 
}), 
],
    });
}),
    ],
    })
}
    











// children:[
//     ...props.contactsData?.map((item:any))=> {
//         return Box ({
//             element:"li",
//             attr:{
//             class:" border-b border-slate-300 py-1 "
//         },
//         Box({
//           element:"h3",
//           children: item?.contactName,
//         }),
//         Box({
//             element:"p",
//             children: item?.phoneNumber,
//           }),
//     ]
// })
// },
// ],

// });
// };