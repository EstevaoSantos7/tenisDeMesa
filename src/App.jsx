import "./App.css";
import Categorias from "./components/Categorias";
import Header from "./components/Header/header";
import Hero from "./components/Hero";
import HeroVideo from "./components/HeroVideo";
import Rankings from "./components/Rankings";
function App() {
  return (
    <>
      <Header />
      <HeroVideo />
      <Categorias />
      <Rankings />
      <Hero />
    </>
  );
}

export default App;
