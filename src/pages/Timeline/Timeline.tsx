import './Timeline.css'
import { Header } from '../../components/Header/Header';
import Container from 'react-bootstrap/esm/Container';
import UncontrolledExample from '../../components/Timeline/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '/src/assets/imagem.png'

export function Timeline() {
  const aluno = {
    nome: "",
    email: "",
    sexo: "",
    peso: 10.2
  }

  const best_stars = [
    {
      name: "Calculos Loucos",
      link:"disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#c72d2d"
    },
    {
      name: "Calculos Loucos",
      link: "disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#6219a1"
    },
    {
      name: "Calculos Loucos",
      link: "disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#309e17"
    },
  ]
  const more_acess = [
          {
      name: "Calculos Loucos",
      link: "disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#d75509"
    },
    {
      name: "Calculos Loucos",
      link: "disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#1bbb4b"
    },
    {
      name: "Calculos Loucos",
      link: "disciplina",
      imgURL: image1,
      classification: 9.4,
      prof: "Professorson",
      Dias: ["Seg", "Ter"],
      carga: 123,
      cor: "#0d64c7"
    },
  ]
  return (
    <Container className="ms-5">
      <div>
        <div className="header-c mb-4" >
          <Header />
        </div>
        <div className=''>
          <UncontrolledExample />
        </div>
      </div>
      <div className="cards m-5" style={{ maxHeight: "600px", scrollBehavior: "smooth", overflowY: "scroll" }}>
        <div className='text-white fs-2 my-5'>Disciplinas mais bem avaliadas</div>
        <CardGroup style={{ display: "flex" }}>
          {
            best_stars.map((item) =>
              <Card className="mx-3 rounded fundo2 text-white">
                <Card.Header className="border-0 rounded" style={{ backgroundColor: item.cor, width:"auto", height:"150px" }} />
                <Card.Title className='mx-3 mt-2'>
                  <div style={{ fontSize: 20 }}><a href={item.link} style={{ textDecoration: "none", marginRight: "50px" }}>{item.name}</a><img src='src\assets\estrela.png' width="25" height="25" className='ms-5' />&nbsp;&nbsp;{item.classification}/10</div>
                </Card.Title>
                <Card.Footer className="text-white border-0">
                  {
                    item.Dias.map((d, i) => {
                      return <span>
                        {d} {i < item.Dias.length - 1 ? "/ " : null}
                      </span>
                    })
                  }
                </Card.Footer>
                <Card.Footer className='border-0'>
                  <small className="text-white me-5">{item.prof}</small>
                  <small className="text-white" style={{ marginLeft: "170px" }}>{item.carga}hrs</small>
                </Card.Footer>
              </Card>
            )
          }
        </CardGroup>
        <div className='text-white fs-2 my-5'>Disciplinas mais Acessadas</div>
        <CardGroup style={{ display: "flex" }}>
          {
            more_acess.map((item) =>
              <Card className="mx-3 rounded border-0 fundo2 text-white">
                <Card.Header className="border-0 rounded" style={{ backgroundColor: item.cor, width: "auto", height: "150px" }} />
                <Card.Title className='mx-3 mt-2'>
                  <div style={{ fontSize: 20 }}><a href={item.link} style={{ textDecoration: "none", marginRight: "50px" }}>{item.name}</a><img src='src\assets\estrela.png' width="25" height="25" className='ms-5'/>&nbsp;&nbsp;{item.classification}/10</div>
                </Card.Title>
                <Card.Footer className="text-white border-0">
                  {
                    item.Dias.map((d, i) => {
                      return <span>
                        {d} {i < item.Dias.length - 1 ? "/ " : null}
                      </span>
                    })
                  }
                </Card.Footer>
                <Card.Footer className='border-0'>
                  <small className="text-white me-5">{item.prof}</small>
                  <small className="text-white" style={{ marginLeft: "170px" }}>{item.carga}hrs</small>
                </Card.Footer>
              </Card>
            )
          }
        </CardGroup>
      </div>
    </Container>
  );
}

