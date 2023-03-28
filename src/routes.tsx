import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { DisciplinaList } from "./pages/DisciplinaList/DisciplinaList";
import { ProfessorList } from "./pages/ProfessorList/ProfessorList";
import { Timeline } from "./pages/Timeline/Timeline";
import { Login } from "./pages/Login/Login";
import { CadastroProf } from "./pages/CadastroProf/CadastroProf";
import { DisciplinaForm } from "./pages/DisciplinaForm/DisciplinaForm"
import { Grade } from "./pages/Grade/Grade";
import { Aluno } from "./pages/perfil/Aluno"
import { Sobre } from "./pages/Sobre/Sobre"
import { Cadastro } from "./pages/Cadastro-Al/Cadastroal";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },
        ]
    },
    {
        path: 'Disciplinas',
        element: <DisciplinaList />,
    },
    {
        path: 'Professores',
        element: <ProfessorList />,
    },
    {
        path: 'Disciplina',
        element: <Disciplina/>,
    },
    {
        path: 'profile',
        element: <Aluno/>,
    },
    {
        path: 'sobre',
        element: <Sobre/>,
    },
    {
        path: 'DisciplinaForm',
        element: <DisciplinaForm />,
    },
    {
        path: 'Grade',
        element: <Grade />,
    },
    {
        path: 'cadastro-aluno',
        element: <Cadastro />,
    }
])