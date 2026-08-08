import { useState } from 'react'
import docesIniciais from './data/doces.json'
import ListaDoces from './components/ListaDoces.jsx'

function App() {
  const [doces, setDoces] = useState(docesIniciais)

  return (
    <div>
      <h1>Doceria</h1>
      <ListaDoces doces={doces} />
    </div>
  )
}

export default App