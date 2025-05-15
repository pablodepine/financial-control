import { useState } from "react";
import "./App.css";
import { DollarSignIcon } from "lucide-react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [movimentacoes, setMovimentacoes] = useState([{}]);

  function onAddMovimentacao() {
    const movimentacao = {
      title: "Água",
      description: "Conta de água",
      value: 100,
      type: "entrada",
    };

    setMovimentacoes((prev) => [...prev, movimentacao]);
  }

  return (
    <div>
      <div className="flex justify-center bg-gray-800 text-white p-4">
        <h1>Financial Control</h1>
        <DollarSignIcon />
      </div>

      <div className="border-2 border-gray-800 rounded-lg w-1/2 p-4 mt-10 flex flex-col gap-4 mx-auto">
        <h1>Movimentação</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="gap-2 flex items-center">
              <input type="checkbox" id="checkboxEntrada" />
              <span>Entrada</span>
            </div>
            <div className="gap-2 flex items-center">
              <input type="checkbox" id="checkboxSaida" />
              <span>Saída</span>
            </div>
          </div>
          <input
            className="border-2"
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            className="border-2"
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            className="border-2"
            type="text"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="border-2 cursor-pointer">Adicionar</button>
        </div>
      </div>

      <div className="w-1/2 p-4 mt-10 flex flex-col gap-4 mx-auto">
        <ul>
          <li className="flex justify-between gap-2 bg-gray-800 text-white">
            <span>Título</span>
            <span>Valor</span>
          </li>
          <li className="flex gap-2 justify-between bg-red-400 text-white">
            <span>Água</span>
            <span>R$100,00</span>
          </li>
          <li className="flex gap-2 justify-between bg-green-200 text-white">
            <span>Salário</span>
            <span>R$5.000,00</span>
          </li>
          <li className="flex gap-2 justify-between bg-red-400 text-white">
            <span>Ar Condicionado</span>
            <span>R$2.500,00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
