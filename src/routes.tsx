import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { DisciplinaList } from "./pages/DisciplinaList/DisciplinaList";
import { ProfessorList } from "./pages/ProfessorList/ProfessorList";
import { Timeline } from "./pages/Timeline/Timeline";
import { Login } from "./pages/Login/Login";

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
        path: 'Login',
        element: <Login/>,
    },
])