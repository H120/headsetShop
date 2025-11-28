import './App.css'
import Section from './Section'

function App() {
  const items = [
    {
      id: 1,
      name: "Sony",
      price: 549,
      color: "sky",
      image: "sony",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 2,
      name: "Beats",
      price: 549,
      color: "pink",
      image: "beats",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 3,
      name: "Razer",
      price: 549,
      color: "green",
      image: "razer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
      id: 4,
      name: "Apple",
      price: 549,
      color: "gray",
      image: "apple",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
  ];

  return (
    <>
      <div className='sectionsContainer'>
        {items.map((item, index) => (
          <Section key={index} item={item} />
        ))}
      </div>
      <span className='createdText'>Created by <a href='https://github.com/h120'>@H120</a></span>
    </>
  )
}

export default App
