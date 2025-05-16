import { useState } from "react";
import "./App.css";
import { DollarSignIcon } from "lucide-react";
import { v4 } from "uuid";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [movimentacoes, setMovimentacoes] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    type === name ? setType("") : setType(name);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  function onAddMovimentacao() {
    const movimentacao = {
      id: v4(),
      title: title,
      description: description,
      value: value,
      type: type,
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
              <input
                type="checkbox"
                name="entrada"
                checked={type === "entrada"}
                onChange={handleCheckboxChange}
              />
              <span>Entrada</span>
            </div>
            <div className="gap-2 flex items-center">
              <input
                type="checkbox"
                name="saida"
                checked={type === "saida"}
                onChange={handleCheckboxChange}
              />
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
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            onClick={onAddMovimentacao}
            className="border-2 cursor-pointer"
          >
            Adicionar
          </button>
        </div>
      </div>

      <div className="w-1/2 p-4 mt-10 flex flex-col gap-4 mx-auto">
        <ul>
          <header className="flex justify-between gap-2 bg-gray-800 text-white">
            <span>Título</span>
            <span>Valor</span>
          </header>
          {movimentacoes.map((movimentacao) => (
            <li
              key={movimentacao.id}
              className={`flex gap-2 justify-between ${
                movimentacao.type === "entrada" ? "bg-green-200" : "bg-red-400"
              } text-gray-800`}
            >
              <span>{movimentacao.title}</span>
              <span>{formatCurrency(movimentacao.value)}</span>
            </li>
          ))}
          {movimentacoes.length === 0 && (
            <span className="flex justify-center mt-10">
              Nenhum movimento registrado.
            </span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
