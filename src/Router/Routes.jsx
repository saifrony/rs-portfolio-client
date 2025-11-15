import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/HomePage/Home";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import AllProjects from "../Pages/AllProjects/AllProjects";
import ErrorPage from "../Shares/ErrorPage"
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/allProjects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/Projects/:id',
                element: <ProjectDetails />,
                loader: async ({ params }) => await fetch(`https://portfolio-server-kappa-ten.vercel.app/projects/${params?.id}`),
            }


        ]
    }
])