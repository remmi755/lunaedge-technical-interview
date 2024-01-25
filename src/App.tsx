import "./index.css";
import Header from "./components/Header";
import SelectPokemons from "./components/SelectPokemons";
import ThemeSwitcher from "./components/ThemeSwitcher";
function App() {
  return (
    <div className="relative">
      <div className="flex absolute top-6 right-2 justify-end items-center mr-8 mb-2">
        <ThemeSwitcher />
      </div>
      <Header />
      <SelectPokemons />
    </div>
  );
}

export default App;
