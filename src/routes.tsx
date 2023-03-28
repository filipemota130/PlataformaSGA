import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { DisciplinaList } from "./pages/DisciplinaList/DisciplinaList";
import { Timeline } from "./pages/Timeline";
import { Aluno } from "./pages/perfil/Aluno"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Timeline/>
            },
        ]
    },
    {
        path: 'Disciplinas',
        element: <DisciplinaList />,
    },
    {
        path: 'Disciplina',
        element: <Disciplina/>,
    },
    {
        path: '/profile',
        element: <Aluno/>,
    }
    
])