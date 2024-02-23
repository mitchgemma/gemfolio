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

const homePhotos = [me, bootsy, river, arch, pearl, camp];

export { marquee, homePhotos };
