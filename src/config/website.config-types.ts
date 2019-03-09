
export interface WebConfig {
    homepage: Homepage;
    navbar: NavigationBar;
    sections: Section[];
}

export interface Homepage {
    title: string;
    subTitle: string;
    buttonLabel: string;
    svg: string;
}

export interface NavigationBar {
    buttons: Button[];
    icon: string;
}

export interface Button {
    label: string;
}

export interface Section {
    title: string;
    svg: string;
    svgPosition: svgPosition;
    description: string;
    backgroundColor: string;
}

export type svgPosition = 'right' | 'left';