import {lazy, Suspense, useState} from "react";
import {Link} from "react-router-dom";

import {
    EXAMPLE_TASKS,
    EYEBROW,
    GET_STARTED,
    HERO_DESCRIPTION,
    HERO_TITLE,
    LEARN_MORE,
    NEW_VERSION,
} from "../../services/constants/landing/heroSection.js";
import {toSignUpURL} from "../../services/constants/routes/urls.js";

// three.js + react-three are only needed here; load them as a separate chunk so the
// rest of the app (sign-in, tasks) doesn't download them. The .character box has a fixed
// size, so nothing shifts when the scene arrives.
const LandingExperience = lazy(() => import("../../scenes/experience/LandingExperience.jsx"))


const ExampleList = () => {
    // Local-only demo: ticking here never touches the API.
    const [tasks, setTasks] = useState(EXAMPLE_TASKS)
    const toggle = (id) => setTasks(tasks.map(t => t.id === id ? {...t, done: !t.done} : t))

    return (
        <figure className={"notebook"}>
            <figcaption>
                <span className={"notebook-title"}>Today</span>
                <span className={"notebook-tag"}>Example</span>
            </figcaption>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.done ? "done" : ""}>
                        <label>
                            <input type={"checkbox"} checked={task.done} onChange={() => toggle(task.id)}/>
                            <span className={"task-text"}>{task.title}</span>
                        </label>
                        <span className={"due"}>{task.due}</span>
                    </li>
                ))}
            </ul>
        </figure>
    )
}


const HeroSection = () => {
    return (
        <section className={"landing-hero"} aria-labelledby={"hero-title"}>
            <div className={"hero-copy"}>
                <p className={"eyebrow"}>
                    <span className={"version"}>{NEW_VERSION}</span>
                    {EYEBROW}
                </p>
                <h1 id={"hero-title"}>{HERO_TITLE}</h1>
                <p className={"lede"}>{HERO_DESCRIPTION}</p>
                <div className={"actions"}>
                    <Link to={`/${toSignUpURL}`} className={"dd-btn"}>{GET_STARTED}</Link>
                    <a href="#feature" className={"text-link"}>
                        {LEARN_MORE} <i className="bi bi-arrow-down" aria-hidden="true"/>
                    </a>
                </div>
            </div>

            <div className={"hero-visual"}>
                <ExampleList/>
                <div className={"character"} aria-hidden="true">
                    <Suspense fallback={null}>
                        <LandingExperience/>
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
