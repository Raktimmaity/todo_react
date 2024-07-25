import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./components/Rules";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<> <Navbar/> <Content/></>
    },
    {
      path: '/rules',
      element:<> <Navbar/> <Rules/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
