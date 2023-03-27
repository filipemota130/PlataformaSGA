import Carousel from 'react-bootstrap/Carousel';
import image1 from '/src/assets/imagem.png'

function UncontrolledExample() {
  const items = [
    {
      imagem: image1,
      title: "Aaaaaaa",
      desc:"asdhausjhdiasuhduiashd",
    },
    {
      imagem: image1,
      title: "BBBBBB",
      desc: "cdcccdcdcdcdcdcdcd",
    },
    {
      imagem: image1,
      title: "CCCCCCC",
      desc: "ahsydhasyuhdauysdhua",
    },
  ]
  return (
    <Carousel className="rounded" style={{ width: "auto" }}>
      {
        items.map(item =>
          <Carousel.Item style={{ width: "auto", maxHeight: "400px", padding: 0, margin: 0 }}>
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