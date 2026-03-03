import {Link} from 'react-router-dom';
import {studies, experiences} from '../data/resume.js';

function Resume() {
    return (
        <>
            <h1>Resume</h1>
            <h2>Studies</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                        <h3>{study.title}</h3>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </li>
                ))}
            </ul>
            <h2>Experiences</h2>
            <ul>
                {experiences.map(({id, title, company, date}) => (
                    <li key={id}>
                        <h3>{title}</h3>
                        <p>{company}</p>
                        <p>{date}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Resume;