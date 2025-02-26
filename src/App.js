import "./styles.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Index from "./components/Index/Index";
import NovaPostIndex from "./components/NovaPost/NovaPostIndex/NovaPostIndex";
import NovaPostFooter from "./components/NovaPost/NovaPostFooter/NovaPostFooter";
import NovaPostNavbar from "./components/NovaPost/NovaPostNavbar/NovaPostNavbar";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <NovaPostNavbar />
        <Outlet />
        <NovaPostFooter />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <NovaPostIndex />,
        },
        // {
        //   path: "/",
        //   element: <NovaPostIndex />,
        // },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
