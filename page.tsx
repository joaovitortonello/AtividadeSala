"use client";

import { useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [listaTextos, setListaTextos] = useState<string[]>([]);

  function handleClick() {
    if (texto.trim() === "") return;
    setListaTextos((prev) => [...prev, texto]);
    setTexto("");
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-10 max-w-lg mx-auto px-4">
      <h2 className="text-2xl font-semibold text-black">Cadastrar Texto</h2>

      <textarea
        className="w-full border text-black rounded p-2 h-24 resize-none"
        placeholder="Escreva algo aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
        onClick={handleClick}
      >
        Registrar texto
      </button>

      <div className="mt-6 w-full">
        <h3 className="text-xl font-semibold mb-3 text-[black]">Computadores Registrados</h3>
        {listaTextos.length === 0 ? (
          <p className="text-[gray-600]">Nenhum texto registrado ainda.</p>
        ) : (
          <ul className="list-decimal list-inside space-y-2">
            {listaTextos.map((item, index) => (
              <li
                key={index}
                className="border text-[black] rounded p-3 bg-gray-50 whitespace-pre-wrap"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
