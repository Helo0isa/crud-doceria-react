import { useState, useEffect } from 'react'

function FormDoce({aoAdicionar, doceEmEdicao, aoAtualizar, aoCancelar}) {
  const [nome, setNome] = useState('')
  const [sabor, setSabor] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')

  useEffect(() => {
    if (doceEmEdicao) {
      setNome(doceEmEdicao.nome)
      setSabor(doceEmEdicao.sabor)
      setPreco(doceEmEdicao.preco)
      setQuantidade(doceEmEdicao.quantidade)
    }
  }, [doceEmEdicao])

  function handleSubmit(e) {
    e.preventDefault()

    const doce = {
      id: doceEmEdicao ? doceEmEdicao.id : Date.now(),
      nome: nome,
      sabor: sabor,
      preco: Number(preco),
      quantidade: Number(quantidade)
    }

    if (doceEmEdicao) {
      aoAtualizar(doce)
    } 
    else {
      aoAdicionar(doce)
    }

    setNome('')
    setSabor('')
    setPreco('')
    setQuantidade('')
  }

  function handleCancelar() {
    aoCancelar()
    setNome('')
    setSabor('')
    setPreco('')
    setQuantidade('')
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

        <button type="submit">{doceEmEdicao ? 'Salvar' : 'Cadastrar'}</button>

        {doceEmEdicao && (
          <button type="button" onClick={aoCancelar}>Cancelar</button>
        )}
    </form>
  )
}

export default FormDoce