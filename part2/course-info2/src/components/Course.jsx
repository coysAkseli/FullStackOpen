const Header = ({course}) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({course}) => {
    console.log({course})
    return (
        <div>
        {course.parts.map((part, index) =>
            <Part key={index} name={part.name} exercises={part.exercises}/>
        )}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Total = ({course}) => {

    const total = course.parts.reduce((p, c) => p += c.exercises, 0)
    console.log(total)

    return (
        <b>
        Number of exercises {total}
        </b>
    )
}

const Course = ({courses}) => {
    return (
        courses.map(course => {
        return (
            <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
            </div>  
        )
        })
    )
}

export default Course