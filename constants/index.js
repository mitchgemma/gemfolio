import { me, bootsy, river, arch, pearl, camp, rhr } from '../assets/index';

const marquee = {
    // if text is too short, it will make the entire site glitch out
    // likely an issue with the library and the 'autofill' property
    top: {
        position: 'top',
        link: 'https://drive.google.com/file/d/1-wRQW02eVmy87b69XWYp-ofaKk-JnRh3/view?usp=sharing',
        text: ['Click here to download resume'],
    },
    right: {
        position: 'right',
        link: '',
        text: [
            'Site is under construction',
            "The site is not broken, this is the only page that I've built",
            'Thanks for your patience',
        ],
    },
    bottom: {
        position: 'bottom',
        link: 'https://github.com/mitchgemma',
        text: [
            'Mitch Gemma - Frontend Developer',
            'Click here to visit my GitHub',
        ],
    },
    left: {
        position: 'left',
        link: '',
        text: [
            'Site is under construction',
            "The site is not broken, this is the only page that I've built",
            'Thanks for your patience',
        ],
    },
};

const projects = [
    {
        name: 'Righthand Robotics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tech: 'React, SCSS, Craft CMS',
        thumbnail: me.src,
        link: 'https://righthandrobotics.com',
    },
    {
        name: 'Righthand Robotics',
        description:
            'I have worked on this website for 40 hours each month for the past 2 years. As the sole developer on this website, I worked on everything from new page development, to site health and optimization, code modernization, and more. This was a codebase that was handed to me, and it certainly shows it\'s age at times. A large challenge for me was learning how to work with code, as well finding the time to try and update that code, and try to get the code to work with mine. My most recent work on this site are the revamped <a class="link" target="_blank" href="https://righthandrobotics.com">homepage</a> and the <a class="link" target="_blank" href="https://righthandrobotics.com/products">products</a> page.',
        tech: 'React, SCSS, Vanilla JS, GreenSock Animation (GSAP), PHP, GraphQL Craft CMS',
        thumbnail: rhr.src,
        link: 'https://righthandrobotics.com',
    },
];

const homePhotos = [me, bootsy, river, arch, pearl, camp];

export { marquee, homePhotos, projects };
