import './App.css'

function Section({item}) {
  return (
    <>
      <div className={`sections ${item.color}`}>
        <div className='imagesDiv'>
          <img className='logoItem' src={`./images/${item.image}.png`} alt={item.image} />
          <div className='textImagesDiv'>
            <img className='textImage' src={`./images/${item.image}text.png`} />
            <img className='textImage' src={`./images/${item.image}textfilled.png`} />
            <img className='textImage' src={`./images/${item.image}text.png`} />
          </div>
        </div>
        <h2 className='priceText'>${item.price}</h2>
        <p className='dexriptionText'>{item.description}</p>
        <button className='shopNow'>Shop Now</button>
      </div>
    </>
  )
}

export default Section
