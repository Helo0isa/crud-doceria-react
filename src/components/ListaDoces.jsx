import {useState} from 'react'

function ListaDoces({ doces, aoExcluir, aoEditar }) {
  const [busca, setBusca] = useState('');

  const docesFiltrados = doces.filter((doce) =>
    doce.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sabor</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {docesFiltrados.map((doce) => (
            <tr key={doce.id}>
              <td>{doce.nome}</td>
              <td>{doce.sabor}</td>
              <td>R$ {doce.preco.toFixed(2)}</td>
              <td>{doce.quantidade}</td>
              <td>
                <button onClick={() => aoEditar(doce)}>Editar</button>
                <button onClick={() => aoExcluir(doce.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default ListaDoces;