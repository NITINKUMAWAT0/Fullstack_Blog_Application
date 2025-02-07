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
import { Loading, Navbar } from "./components";
import useStore from "./store";

function Layout() {
  return (
    <div className="w-full flex flex-col min-h-screen px-4 md:px-10 2xl:px-28">
      {/* navbar */}
      <Navbar/>
      <div>
        <Outlet className="flex-1" />
      </div>
      {/* footer */}
    </div>
  );
}

function App() {
  const { theme, isLoading } = useStore();

  return (
    <main className={theme}>
      <div className="w-full min-h-screen relative bg-white dark:bg-gradient-to-b md:dark:bg-gradient-to-r from-black via-[#2c2c2c] to-black px-6 md:px-10 lg:px-20">
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

        {isLoading && <Loading />}
      </div>
    </main>
  );
}

export default App;
