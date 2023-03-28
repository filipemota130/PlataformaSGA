import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { DisciplinaList } from "./pages/DisciplinaList/DisciplinaList";
import { ProfessorList } from "./pages/ProfessorList/ProfessorList";
import { Timeline } from "./pages/Timeline/Timeline";
import { Login } from "./pages/Login/Login";
import { SobreNos } from "./pages/SobreNos/SobreNos"
import { CadastroProf } from "./pages/CadastroProf/CadastroProf";
import { DisciplinaForm } from "./pages/DisciplinaForm/DisciplinaForm"
import { Grade } from "./pages/Grade/Grade";
import { Aluno } from "./pages/perfil/Aluno"
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
        element: <Disciplina />,
    },
    {
        path: 'Login',
        element: <Login />,
    },
    {
        path: 'SobreNos',
        element: <SobreNos />,
    },
    {
        path: 'profile',
        element: <Aluno/>,
    },
    {
        path: 'DisciplinaForm',
        element: <DisciplinaForm />,
    },
    {
        path: 'CadastroProf',
        element: <CadastroProf />,
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