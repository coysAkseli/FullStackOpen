import phonebookService from "../services/phonebook";

const Name = ({person, searchName, handleDelete}) => {
    if (!searchName || person.name.toLowerCase().startsWith(searchName.toLowerCase())) {
        const onDelete = () => {
            console.log(`deleting person with id: ${person.id}`)
            handleDelete(person.id)
        }
        
        return (
            <li> 
                {person.name} {person.number}
                <button onClick={() => handleDelete(person.id)}>delete</button>
            </li>
        )
    }
}

export default Name