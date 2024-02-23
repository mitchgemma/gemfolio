import styles from '@/styles/pages/Work.module.scss';
import Image from 'next/image';

const Project = ({ projectName, description, tech, thumbnail, link, index }) => {
    return (
        <div className={`${styles.container} ${index % 2 ? styles.switch : ''}`}>
            <div className={styles.left}>
                <h1 className={styles.projectHeader}>{projectName}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.technology}>Tech: {tech}</p>
            </div>
            <div className={styles.right}>
                <a href={link}>
                    <Image
                        className={styles.thumbnail}
                        src={thumbnail}
                        width={500}
                        height={300}
                    />
                </a>
            </div>
        </div>
    );
};

export default Project;
