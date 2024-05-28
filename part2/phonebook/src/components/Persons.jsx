import Name from './Name'

const Persons = ({persons, searchName, handleDelete}) => {
    return (
        <div>
        <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
            {persons.map(person =>
            <Name
                key={person.id}
                person={person} 
                searchName={searchName}
                handleDelete={handleDelete}/>
            )}
        </ul>
        </div>
    )
}

export default Persons