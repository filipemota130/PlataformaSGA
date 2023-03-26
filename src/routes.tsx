import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { Timeline } from "./pages/Timeline";

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
        path: 'Disciplina',
        element: <Disciplina/>,
    },
])