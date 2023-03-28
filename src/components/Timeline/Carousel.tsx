import Carousel from 'react-bootstrap/Carousel';
import image1 from '/src/assets/imagem.png'

import "/src/components/Timeline/Carousel.css"

function UncontrolledExample() {
  const items = [
    {
      imagem: image1,
      title: "Card1",
      desc:"Noticias sobre disciplina",
    },
    {
      imagem: image1,
      title: "Card2",
      desc: "Noticias sobre disciplina",
    },
    {
      imagem: image1,
      title: "Card3",
      desc: "Noticias sobre disciplina",
    },
  ]
  return (
    <Carousel className="rounded" style={{maxWidth:"96%" }}>
      {
        items.map(item =>
          <Carousel.Item style={{ width: "auto", padding: 0, margin: 0 }}>
            <img
              className="d-block w-100"
              src={item.imagem}
            />
            <Carousel.Caption className='text-center'>
              <div className='fs-2 text-center md-4'>{item.title}</div>
              <p>
                {item.desc}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default UncontrolledExample;