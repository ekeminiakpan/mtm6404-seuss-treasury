import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Quotes from './components/Quotes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className='nav'>
          <h1>Dr. Seuss</h1>
          <nav className="nav-links">
            <Link to="/">Books</Link>
            <Link to="/quotes">Quotes</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App 