import { Routes, Route, Outlet } from "react-router-dom";
import {
  BlogDetails,
  CategoriesPage,
  Home,
  LoginPage,
  NotFound,
  SignupPage,
  WriterPage,
} from "./pages";
import { Loading } from "./components";

function Layout() {
  return (
    <div className="w-full flex flex-col min-h-screen px-4 md:px-10 2xl:px-29=8">
      {/* navbar */}
      <div>
        <Outlet className="flex-1" />
      </div>
      {/* footer */}
    </div>
  );
}

function App() {
  const theme = "light"
  const isLoading= false;
  return (
    <main classname={theme}>
      <div classname="w-full min-h-screen relative bg-white dark:bg-[#020b19]">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoriesPage />} />
            <Route path="/:slug/:id" element={<BlogDetails />} />
            <Route path="/writer/:id" element={<WriterPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="sign-up" element={<SignupPage />} />
          <Route path="sign-in" element={<LoginPage />} />
        </Routes>

        {isLoading && <Loading/>}
      </div>
    </main>
  );
}

export default App;
