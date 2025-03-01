import "./styles.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Index from "./components/Index/Index";
import LogisticCompanyIndex from "./components/LogisticCompany/LogisticCompanyIndex/LogisticCompanyIndex";
import LogisticCompanyFooter from "./components/LogisticCompany/LogisticCompanyFooter/LogisticCompanyFooter";
import LogisticCompanyNavbar from "./components/LogisticCompany/LogisticCompanyNavbar/LogisticCompanyNavbar";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <LogisticCompanyNavbar />
        <Outlet />
        <LogisticCompanyFooter />
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
          element: <LogisticCompanyIndex />,
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
