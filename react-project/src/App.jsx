import { useState } from "react"
import Search from "./components/Search"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className="pattern" />
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>Find <span className="text-gradient">Movies</span> You&apos;ll Enjoy without the Hassle </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h2 className="text-white">{searchTerm}</h2>
        </div>
    </main>
  )
}

export default App