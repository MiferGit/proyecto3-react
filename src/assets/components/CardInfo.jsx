import './Styles/CardInfo.css'

function CardInfo({location}) {
  return (
   
    <div className="cardInfo">
      <h2 className='cardInfo__title'>{location?.name}</h2>
      <div className="cardInfo__container">
      <div className="cardInfo__item">
          <h3 className="cardInfo__item-title">Type</h3>
          <span className="cardInfo__item-data">{location?.type}</span>
        </div>
        <div className="cardInfo__item">
          <h3 className="cardInfo__item-title">Dimension</h3>
          <span className="cardInfo__item-data">{location?.dimension}</span>
        </div>
        <div className="cardInfo__item">
          <h3 className="cardInfo__item-title">Population</h3>
          <span className="cardInfo__item-data">{location?.residents?.length}</span>
        </div>
      </div> 
    </div>
    
  )
}

export default CardInfo