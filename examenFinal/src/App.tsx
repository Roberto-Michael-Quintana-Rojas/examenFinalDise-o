import './App.css'
import Bienvenido from './components/Bienvenido'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoCards from './components/InfoCards'
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <InfoCards />
      <Bienvenido />

    </div>
  )
}

export default App
