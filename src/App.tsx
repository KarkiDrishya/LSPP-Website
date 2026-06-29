import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutProgram from './components/AboutProgram'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar will go here */}
      <Navbar />
      <div className="w-full h-2px bg-gray-200">
        <div className="w-20 h-full bg-orange-400"></div>
    </div>
      <main>
        {/* Hero Section will go here */}
        <h1 className="font-Learn text-4xl font-bold text-center mt-20 text-emerald-700">
          Leapfrog Student Partnership Program
        </h1>
        <Hero />
        <AboutProgram />
      </main>

      {/* Footer will go here */}
    </div>
  )
}

export default App
