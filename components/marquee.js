import { marquee } from '@/constants';
import styles from '@/styles/components/Marquee.module.scss';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = ({ text, position, link, speed }) => {
    return link ? (
        <a className={`${styles.marqueeContainer} ${styles[position]}`} href={link}>
            <Marquee autoFill>
                {text.map((text, index) => (
                    <p key={index}>{text.toUpperCase()}</p>
                ))}
            </Marquee>
        </a>
    ) : (
        <div className={`${styles.marqueeContainer} ${styles[position]}`} href={link}>
            <Marquee autoFill className={styles.marqueeContainer} speed={speed}>
                {text.map((text, index) => (
                    <p key={index}>{text.toUpperCase()}</p>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
