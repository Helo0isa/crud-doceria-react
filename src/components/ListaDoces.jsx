import {useState} from 'react'
import lupa from '../assets/icons/lupa.png'
import lapis from '../assets/icons/lapis.png'
import excluir from '../assets/icons/excluir.png'
import balinhas from '../assets/icons/balinhas.png'

function ListaDoces({ doces, aoExcluir, aoEditar }) {
  const [busca, setBusca] = useState('');

  const docesFiltrados = doces.filter((doce) =>
    doce.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="lista-container">
      <div className="busca-wrapper">
        <img src={lupa} alt="Buscar" className="icon-busca" />
        <input
          className="input-busca"
          type="text"
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
        

      <div className="doces-lista">
        {docesFiltrados.map((doce) => (
          <div className="doce-card" key={doce.id}>
            <img src={balinhas} alt="Doce" className="doce-imagem" />

            <div className="doce-nome-sabor">
              <span className="doce-nome">{doce.nome}</span>
              <span className="doce-sabor">Sabor: {doce.sabor}</span>
            </div>
            
            <div className="doce-valores">
              <span className="pilula">Preço: R$ {doce.preco.toFixed(2)}</span>
              <span className="pilula">Quantidade: {doce.quantidade}</span>
            </div>

            <div className="doce-acoes">
              <button className="btn-editar" onClick={() => aoEditar(doce)} title="Editar">
                <img src={lapis} alt="Editar" className="icon-acao" />
              </button>
              <button className="btn-excluir" onClick={() => aoExcluir(doce.id)} title="Excluir">
                <img src={excluir} alt="Excluir" className="icon-acao" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListaDoces;  