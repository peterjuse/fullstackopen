const Content = (props) => {
    console.log('Cargando content');
    return (
        <div>
            <Part part={props.part[0]} exercise={props.exercise[0]}/>
            <Part part={props.part[1]} exercise={props.exercise[1]}/>
            <Part part={props.part[2]} exercise={props.exercise[2]}/>
        </div>
    )    
}


const Part = ({part, exercise}) => {
    console.log('Cargando part');
    return (
        <p>
            {part} {exercise}
        </p>
    )
}
export default Content