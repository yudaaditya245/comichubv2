import "./App.css";

function App() {
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, recusandae.
      {import.meta.env.VITE_BASE_URL}
      {console.log(import.meta.env.VITE_BASE_URL)}
    </div>
  );
}

export default App;
