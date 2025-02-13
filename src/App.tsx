import { useState } from 'react'
import reactLogo from './assets/react.png'
import './App.css'
import ConnectButton from './component/ConnectButton'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>

                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Front STARKNET</h1>
            <div className="card">
                <ConnectButton />
                <br />
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>

                </p>
            </div>
            <p className="read-the-docs">
            </p>
        </>
    )
}

export default App
