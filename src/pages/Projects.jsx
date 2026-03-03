import {Link} from 'react-router-dom';
import projects from '../data/projects.js';

function Projects() {
    return (
        <>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2><a href={project.url} target="_blank">{project.name}</a></h2>
                        <img src={project.image} alt={project.name} />
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Projects;