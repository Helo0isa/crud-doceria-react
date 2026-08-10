import { useState } from 'react'
import docesIniciais from './data/doces.json'
import ListaDoces from './components/ListaDoces.jsx'
import FormDoce from './components/FormDoce.jsx'

function App() {
  const [doces, setDoces] = useState(docesIniciais)

  function adicionarDoce(novoDoce) {
    setDoces([...doces, novoDoce])
  }

  return (
    <div>
      <h1>Doceria</h1>
      <ListaDoces doces={doces} />
      <FormDoce aoAdicionar={adicionarDoce} />
    </div>
  )
}



export default App