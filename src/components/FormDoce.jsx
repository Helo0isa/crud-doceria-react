import { useState } from 'react'

function FormDoce() {
  const [nome, setNome] = useState('')
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  return (
    <form>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      
        <input
          type="text"
          placeholder="Sabor"
          value={sabor}
          onChange={(e) => setSabor(e.target.value)}
        />
      
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
    
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
    </form>
  )
}

export default FormDoce