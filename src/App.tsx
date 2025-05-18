import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
        <h1 className="text-4xl font-bold text-blue-700">
          ¡Usando React + Tailwind!
        </h1>
        <button
          className="bg-sky-300 px-4 py-2 rounded hover:bg-sky-400"
          onClick={() => setCount(count + 1)}
        >
          Clicks: {count}
        </button>
      </main>
    </>
  );
}

export default App;
