import './Card.css'
function Card(props) {
    //  {
    //     cardTitle: 'Primera card',
    //     cardDescription: 'Descripcion de la primera card',
    //     btnText: 'Haz click aqui'
    //  } 
    let { cardTitle, cardDescription, btnText, srcImage } = props
    return (
        <div className="card">
            <img src={srcImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardDescription}</p>
                <a href="#" className="btn btn-primary">{btnText}</a>
            </div>
        </div>
    )
}
export default Card



