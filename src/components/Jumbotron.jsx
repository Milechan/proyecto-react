import './Jumbotron.css'

function Jumbotron(props) {
    return (
        <div className="jumbotron-container">
            <h1 className='primeraH'> Bienvenido a mi Pagina Web!</h1>
            <p className='primeraP'>Mas abajo dejare los links para que sepas mas de mi</p>
            <a href='https://miiilechan.carrd.co/' target="_blank"  className="btn btn-mile" > Quieres saber mas de MiiileChan?</a>
        </div>
    )
}
export default Jumbotron