import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main'
import Skills from './components/Skills'

function App() {
  const myLinks = ["Home", "About", "Skills", "Projects", "Contact"]
  const skillsTitle = "Skills"
  const skills = [
    {
      title: "HTML",
      description: "I am proficient in writing clean and semantic HTML code. I have experience in using HTML5 features and understanding the importance of accessibility."
    },
    {
      title: "CSS",
      description: "I am proficient in writing clean and semantic HTML code. I have experience in using HTML5 features and understanding the importance of accessibility."
    },
    {
      title: "JS",
      description: "I am proficient in writing clean and semantic HTML code. I have experience in using HTML5 features and understanding the importance of accessibility."
    },
    {
      title: "REACT",
      description: "I am proficient in writing clean and semantic HTML code. I have experience in using HTML5 features and understanding the importance of accessibility."
    },
  ]

  return (
    <>
      <Header myLinks={myLinks} bgColor="#333" className="dark-header"/>
      <Main/>
      <Skills title={skillsTitle} skills={skills}/>
    </>
  )
}

export default App
