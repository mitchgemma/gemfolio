import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import Marquee from '@/components/marquee';
import { marquee, homePhotos } from '@/constants';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [hoveredElement, setHoveredElement] = useState(null);
    const [isCurrentlyHovered, setIsCurrentlyHovered] = useState(false);
    let [photoIndex, setPhotoIndex] = useState(0);
    let intervalId = useRef(null);

    const handleAnchorHover = (element, isHovered) => {
        setHoveredElement(element);
        setIsCurrentlyHovered(element);


        if (element === 'middleHovered') {
            intervalId.current = setInterval(() => {
                setPhotoIndex((prevIndex) => {
                    const arrayLength = homePhotos.length;
                    const newIndex = (prevIndex + 1) % arrayLength;

                    return newIndex;
                });
            }, 500);
        } else {
            clearInterval(intervalId.current);
        }
    };

    return (
        <>
            <Head>
                <title>Mitch's Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Marquee
                text={marquee.top.text}
                position={marquee.top.position}
                link={marquee.top.link}
            />
            <Marquee
                text={marquee.bottom.text}
                position={marquee.bottom.position}
                link={marquee.bottom.link}
            />
            <Marquee
                text={marquee.right.text}
                position={marquee.right.position}
                link={marquee.right.link}
                speed={1}
            />
            <Marquee
                text={marquee.left.text}
                position={marquee.left.position}
                link={marquee.left.link}
                speed={0.5}
            />
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.wrapper}>
                    <div
                        className={`${styles.middle} ${
                            hoveredElement === 'middleHovered'
                                ? styles.hovered
                                : ''
                        } ${
                            hoveredElement !== 'middleHovered' &&
                            isCurrentlyHovered
                                ? styles[hoveredElement]
                                : ''
                        }`}
                        onMouseEnter={() => {
                            handleAnchorHover('middleHovered');
                        }}
                        onMouseLeave={() => handleAnchorHover(null, false)}
                    >
                        <img
                            className={styles.image}
                            src={homePhotos[photoIndex].src}
                        />
                    </div>
                    <a
                        className={`${styles.topLeftCorner} ${styles.corner} ${
                            hoveredElement === 'topLeftHovered'
                                ? styles.hovered
                                : ''
                        } ${
                            hoveredElement !== 'topLeft' && isCurrentlyHovered
                                ? styles[hoveredElement]
                                : ''
                        }`}
                        onMouseEnter={() => {
                            handleAnchorHover('topLeftHovered');
                        }}
                        onMouseLeave={() => handleAnchorHover(null, false)}
                    >
                        ABOUT
                    </a>
                    <a
                        className={`${styles.topRightCorner} ${styles.corner} ${
                            hoveredElement === 'topRightHovered'
                                ? styles.hovered
                                : ''
                        } ${
                            hoveredElement !== 'topRightHovered' &&
                            isCurrentlyHovered
                                ? styles[hoveredElement]
                                : ''
                        }`}
                        onMouseEnter={() =>
                            handleAnchorHover('topRightHovered')
                        }
                        onMouseLeave={() => handleAnchorHover(null, false)}
                    >
                        WORK
                    </a>
                    <a
                        className={`${styles.bottomRightCorner} ${
                            styles.corner
                        } ${
                            hoveredElement === 'topLeft' ? styles.hovered : ''
                        } ${
                            hoveredElement !== 'bottomRight' &&
                            isCurrentlyHovered
                                ? styles[hoveredElement]
                                : ''
                        }`}
                        onMouseEnter={() =>
                            handleAnchorHover('bottomRightHovered')
                        }
                        onMouseLeave={() => handleAnchorHover(null, false)}
                    >
                        CONTACT
                    </a>
                    <a
                        className={`${styles.bottomLeftCorner} ${
                            styles.corner
                        } ${
                            hoveredElement === 'bottomLeft'
                                ? styles.hovered
                                : ''
                        } ${
                            hoveredElement !== 'bottomLeft' &&
                            isCurrentlyHovered
                                ? styles[hoveredElement]
                                : ''
                        }`}
                        onMouseEnter={() =>
                            handleAnchorHover('bottomLeftHovered')
                        }
                        onMouseLeave={() => handleAnchorHover(null, false)}
                    >
                        SKILLS
                    </a>
                </div>
            </main>
        </>
    );
}
