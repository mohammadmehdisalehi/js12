import { Form } from "./components/Form/Form"
import { Layout } from "./components/Layout/Layout"
import { ContactsDataType } from "./types"; 
import { ContactsList } from "./components/Contactslist/ContactsList";
export const App = () => {
    const contactsData: ContactsDataType = []; 
    return Layout({ 
        children: [Form ({contactsData}), ContactsList({contactsData})],
    }); 
}
