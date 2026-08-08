function ListaDoces({ doces }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sabor</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {doces.map((doce) => (
          <tr key={doce.id}>
            <td>{doce.nome}</td>
            <td>{doce.sabor}</td>
            <td>R$ {doce.preco.toFixed(2)}</td>
            <td>{doce.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListaDoces;