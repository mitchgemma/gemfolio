import styles from '@/styles/pages/Work.module.scss';
import Project from '@/components/project';
import { projects } from '@/constants';

const Work = () => {
    const projectData = projects.map((project, index) => (
        <Project
            key={index}
            index={index}
            projectName={project.name}
            description={project.description}
            tech={String(project.tech)}
            thumbnail={String(project.thumbnail)}
            link={project.link}
        />
    ));

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Recent Work</h1>
            {projectData}
        </div>
    );
};

export default Work;
