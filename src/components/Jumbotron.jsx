import './Jumbotron.css'

function Jumbotron(props) {
    return (
        <div className="jumbotron-container">
            <h1> Bienvenido a mi Pagina!</h1>
            <p>Mas abajo dejare los links para que sepas mas de mi</p>
            <a href='#card-container' className="btn btn-primary" > Quieres saber mas de MiiileChan?</a>
        </div>
    )
}
export default Jumbotron