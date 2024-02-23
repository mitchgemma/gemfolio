import { me, bootsy, river, arch, pearl, camp } from '../assets/index';

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
            'Mitch "Wuxi Finger Hold" Gemma',
            'Frontend Developer',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tech:'React, SCSS, Craft Cms',
        thumbnail: me.src,
        link: 'https://righthandrobotics.com'
    },
    {
        name: 'Righthand Robotics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tech:'React, SCSS, Craft Cms',
        thumbnail: me.src,
        link: 'https://righthandrobotics.com'
    },
]
    
    
    const homePhotos = [me, bootsy, river, arch, pearl, camp];
    
    export { marquee, homePhotos, projects };
    