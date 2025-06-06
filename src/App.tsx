import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Documents from './components/Documents'
import Publications from './components/Publications'
import BlogPosts from './components/BlogPosts'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Projects />
        <Documents />
        <Publications />
        <BlogPosts />
      </main>
      <Footer />
    </>
  )
}

export default App
