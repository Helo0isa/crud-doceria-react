import { useState } from 'react'
import docesIniciais from './data/doces.json'
import ListaDoces from './components/ListaDoces.jsx'
import FormDoce from './components/FormDoce.jsx'
import divisor from './assets/icons/divisorvermelho.png'
import './App.css'

function App() {
  const [doces, setDoces] = useState(docesIniciais)
  const [doceEmEdicao, setDoceEmEdicao] = useState(null)

  function adicionarDoce(novoDoce) {
    setDoces([...doces, novoDoce])
  }

  function excluirDoce(id) {
    setDoces(doces.filter((doce) => doce.id !== id))
  }

  function iniciarEdicao(doce) {
    setDoceEmEdicao(doce)
  }

  function atualizarDoce(doceAtualizado) {
    setDoces(doces.map((doce) =>
      doce.id === doceAtualizado.id ? doceAtualizado : doce
    ))
    setDoceEmEdicao(null)
  }

  function cancelarEdicao() {
    setDoceEmEdicao(null)
  }

  return (
    <div>
      <h1>Doceria</h1>
      <FormDoce aoAdicionar={adicionarDoce} doceEmEdicao={doceEmEdicao} aoAtualizar={atualizarDoce} aoCancelar={cancelarEdicao}/>
      <img src={divisor} alt="" className="divisor" />
      <ListaDoces doces={doces} aoExcluir={excluirDoce} aoEditar={iniciarEdicao}/>
    </div>  
  )
}

export default App