import { Box } from "../../lib/box"
import { TextField } from "../TextField/TextField";
import { Button } from "../Button/Button";
import { ContactsDataType } from "../../types";
import { ContactsList } from "../Contactslist/ContactsList";
import { render } from "../render/render";
export  const Form = (props:{contactsData:ContactsDataType} ) => {
    const contactForm={
        contactName:"",
        phoneNumber:""
    }

const handleCreateContact = (event:Event)=> {
    event.preventDefault();
    props.contactsData.push(contactForm);
    render("ul-list", ContactsList({ contactsData: props.contactsData} ))

   }
    return Box({
        element:"form",
        attr:{class:"container w-1/2 flex flex-col gap-y-4",
        onSubmit: handleCreateContact,
        
    },
        children:[
            TextField({label:"ContactName",
        value:contactForm.contactName,
        onkeyup:(e:Event) => {
            contactForm.contactName =(e.target as HTMLInputElement).value ;
        }
    }),
            TextField({label:"PhoneNumber",
            value:contactForm.phoneNumber,
            onkeyup:(e:Event) => {
                contactForm.phoneNumber =(e.target as HTMLInputElement).value ;
            }
        }),
            Button({
                children:"submit",
                attr:{type:"submit"}
            },
            )
        ],
    });
};
