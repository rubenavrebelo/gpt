import { WebConfig } from './website.config-types';

// icon and svgs must be on static folder

export const config: WebConfig = {
    homepage: {
        title: 'Liga Portuguesa dos Direitos Humanos',
        subTitle: 'Civitas',
        buttonLabel: 'Saiba Mais',
        svg: 'running_wild'
    },
    navbar: {
        icon: 'icon.png',
        buttons: [
            { label: 'Início' },
            { label: 'LPDH-Civitas' },
            { label: 'Comunicados' },
            { label: 'Notícias' },
            { label: 'Links' },
        ]
    },
    sections: [
        {
            title: 'Lorem Ipsum',
            svg: '',
            svgPosition: 'right',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus dolor purus non enim praesent elementum facilisis leo.
            Ut faucibus pulvinar elementum integer enim neque.`,
            backgroundColor: '#47ABE2'
        },
        {
            title: 'Lorem Ipsum',
            svg: 'getting_coffee',
            svgPosition: 'left',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus dolor purus non enim praesent elementum facilisis leo.
            Ut faucibus pulvinar elementum integer enim neque.`,
            backgroundColor: '#BDF0FF'
        }
    ]
};

export default config;