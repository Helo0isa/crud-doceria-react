import {useState} from 'react'

function ListaDoces({ doces, aoExcluir, aoEditar }) {
  const [busca, setBusca] = useState('');

  const docesFiltrados = doces.filter((doce) =>
    doce.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="lista-container">
      <input
        className="input-busca"
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="doces-lista">
        {docesFiltrados.map((doce) => (
          <div className="doce-card" key={doce.id}>
            <span className="doce-emoji">🍬</span>

            <div className="doce-info">
              <div className="doce-linha">
                <span className="doce-nome">{doce.nome}</span>
                <span className="doce-sabor">Sabor: {doce.sabor}</span>
              </div>
              <div className="doce-linha">
                <span className="pilula">Preço: R$ {doce.preco.toFixed(2)}</span>
                <span className="pilula">Quantidade: {doce.quantidade}</span>
              </div>
            </div>

            <div className="doce-acoes">
              <button className="btn-editar" onClick={() => aoEditar(doce)}>Editar</button>
              <button className="btn-excluir" onClick={() => aoExcluir(doce.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaDoces;  