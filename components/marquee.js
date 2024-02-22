import { marquee } from '@/constants';
import { code } from '@/assets';
import styles from '@/styles/components/Marquee.module.scss';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = ({ text, position, link, speed }) => {
    return link ? (
        <a
            className={`${styles.marqueeContainer} ${styles[position]}`}
            href={link}
            target="_blank"
        >
            <Marquee autoFill>
                {text.map((text, index) => (
                    <div key={index} className={styles.flex}>
                        <p>{text.toUpperCase()}</p>
                        <img src={code.src} className={styles.code} />
                    </div>
                ))}
            </Marquee>
        </a>
    ) : (
        <div
            className={`${styles.marqueeContainer} ${styles[position]}`}
            href={link}
        >
            <Marquee autoFill className={styles.marqueeContainer} speed={speed}>
                {text.map((text, index) => (
                    <div key={index} className={styles.flex}>
                        <p>{text.toUpperCase()}</p>
                        <img src={code.src} className={styles.code} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
