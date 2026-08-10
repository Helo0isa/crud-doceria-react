function ListaDoces({ doces, aoExcluir }) {
  return (
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
        {doces.map((doce) => (
          <tr key={doce.id}>
            <td>{doce.nome}</td>
            <td>{doce.sabor}</td>
            <td>R$ {doce.preco.toFixed(2)}</td>
            <td>{doce.quantidade}</td>
            <td>
                <button onClick={() => aoExcluir(doce.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaDoces;