import React, { useState } from 'react';

function Cards() {
  const [nro, setNro] = useState("");
  const [calculador, setCalculador] = useState("");

  const operacion = (event) => {
    setNro(event.target.value);
    console.log(event.target.value);
  };

  const valores = (event) => {
    const valor = event.target.innerText;
    setNro((previoNro) => previoNro + valor);
    console.log(`Botón presionado: ${valor}`);
  };

  const esExpresionValida = (expresion) => {
    const regex = /^[0-9+\-*/%X\s]+$/;
    return regex.test(expresion);
  };

  const calcular = () => {
    if (esExpresionValida(nro)) {
      const expresion = nro.replace('X', '*'); 
      const resultado = eval(expresion); 
      setCalculador(resultado);
      console.log(`Resultado: ${resultado}`);
    } else {
      setCalculador("Expresión inválida");
      console.error("La expresión contiene caracteres no permitidos.");
    }
  };

  return (
    <>
      <input type="text"value={nro}onChange={operacion}placeholder="Solo numeros"
      />
      <div className="contenedorDeBotones">
        {[, 1, 2, 3, 4, 5, 6, 7, 8,9, "-", "+", "X", "%"].map((item, index) => (
          <button key={index} className="botonDelCalculador"  onClick={valores}>
            {item}
          </button>
        ))}
      </div>
      <button onClick={calcular}>Apretar para resultado</button>
      <div>Resultado: {calculador}</div>
    </>
  );
}

export default Cards;
