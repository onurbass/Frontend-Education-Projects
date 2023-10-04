import React from 'react'

const Skills = ({title, skills}) => {
  return (
    <section>
        <h2>{title}</h2>
        <ul>
            {skills.map( skill => <li>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
            </li> )}
        </ul>
    </section>
  )
}

export default Skills