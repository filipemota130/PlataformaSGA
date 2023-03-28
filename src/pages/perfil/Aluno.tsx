import './Aluno.css'

export function Aluno (){
    const Aluno1 = {
        nome: "Karolaine",
        matricula: 13154,
        email: "kartulle@hotmail.com",
        telefone: 82982347181,
        dn: "22/09/2001",
        sobre: "blabla",
        disciplinas: ["dale1", "dale2", "dale3"],
        mais: "mais info",
    }
    return(
        <main>
            <div className="main">

            <div className="container-central">
                <div className="container-foto">

                </div>
                <div className="container-dados">

                </div>
                <div className="container-sobre">

                </div>
                <div className="container-disc">

                </div>
                <div className="container-info">

                </div>
            </div>
            </div>
        </main>
    )
}
