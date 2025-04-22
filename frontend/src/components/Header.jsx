const Header = (props) => {
    console.log('Cargando el header');
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

export default Header;