import './App.css'
import Bienvenido from './components/Bienvenido'
import Caracteristicas from './components/Caracteristicas'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoCards from './components/InfoCards'
import Modulos from './components/Modulos'
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <InfoCards />
      <Bienvenido />
      <Caracteristicas />
      <Modulos />
    </div>
  )
}

export default App
