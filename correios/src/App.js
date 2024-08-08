import React, { useState } from 'react';
import './components/App.css';

const CepSearch = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const data = await response.json();
      setAddress(data);
      setError(null);
    } catch (err) {
      setAddress(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="left-img"></div>
      <div className="right-img"></div>
      <div className="container">
        <h2>Consulta de CEP</h2>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP"
        />
        <button onClick={handleSearch}>Buscar</button>

        {error && <p className="error">{error}</p>}

        {address && (
          <div className="result">
            <h3>Resultado:</h3>
            <p>CEP: {address.cep}</p>
            <p>Logradouro: {address.logradouro}</p>
            <p>Bairro: {address.bairro}</p>
            <p>Cidade: {address.localidade}</p>
            <p>Estado: {address.uf}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CepSearch;