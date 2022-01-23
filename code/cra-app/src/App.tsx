import './App.css'
import { useState } from 'react'
import { __allowUnsafeValue } from './tt-policy'

function App() {
  const [safe, toggleSafe] = useState(false)
  const [unsafe, toggleUnsafe] = useState(false)

  return (
    <div className="App">
      <h1>Trusted Types are enabled in this site</h1>
      <button onClick={() => toggleSafe(!safe)}>Toggle safe</button>
      {safe && <div dangerouslySetInnerHTML={{ __html: __allowUnsafeValue('<p>hi<p/>') as any }}></div>}
      <button onClick={() => toggleUnsafe(!unsafe)}>Toggle unsafe</button>
      {unsafe && <div dangerouslySetInnerHTML={{ __html: '<p>hi<p/>' }}></div>}
    </div>
  )
}

export default App
