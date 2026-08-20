import { useState, useEffect } from 'react'
import adicionar from '../assets/icons/adicionar.png'
import lapis from '../assets/icons/lapis.png'

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
    <div className="form-card">
      <h2>{doceEmEdicao ? 'Editar Doce' : 'Novo Doce'}</h2>

      <form className="form-doce" onSubmit={handleSubmit}>
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

        <div className="form-botoes">
          <button type="submit" className="btn-salvar">
            <img src={doceEmEdicao ? lapis : adicionar} alt="" className="btn-icon-inline" />
            {doceEmEdicao ? 'Salvar' : 'Cadastrar'}
          </button>
          {doceEmEdicao && (
            <button type="button" className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default FormDoce