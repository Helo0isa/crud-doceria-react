import { useState } from 'react'

function FormDoce({aoAdicionar}) {
  const [nome, setNome] = useState('')
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const novoDoce = {
        id: Date.now(),
        nome: nome,
        sabor: sabor,
        preco: Number(preco),
        quantidade: Number(quantidade)

    }

    aoAdicionar(novoDoce)
  }


  return (
    <form onSubmit={handleSubmit}>
        <input //Nome do doce
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      
        <input //Sabor do doce
          type="text"
          placeholder="Sabor"
          value={sabor}
          onChange={(e) => setSabor(e.target.value)}
        />
      
        <input //Preço do doce
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
    
        <input //Quantidade do doce
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
    </form>
  )
}

export default FormDoce