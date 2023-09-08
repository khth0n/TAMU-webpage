const stylesheets = '/~icordova/stylesheets';

const themeMap = new Map<string, string>([
    [ `${stylesheets}/style.css`, 'default' ],
    [ `${stylesheets}/tamu-style.css`, 'TAMU' ]
]);

export class ThemeSelector extends HTMLElement {

    container: HTMLDivElement;
    button: HTMLButtonElement;

    constructor() {
        super();

        this.container = document.createElement('div');

        this.button = document.createElement('button');
        this.button.innerHTML = 'Styles';

        this.container.append(this.button);

        let savedTheme = localStorage.getItem('theme');
        
        if(savedTheme) {
            let theme = document.getElementById('theme') as HTMLStyleElement;

            theme.setAttribute('href', savedTheme);
        }

        let themeOption: HTMLAnchorElement;

        for(const [ fileURL, name ] of themeMap) {

            themeOption = document.createElement('a');
            themeOption.href = '#';
            themeOption.innerHTML = name;

            themeOption.addEventListener('click', (ev: MouseEvent) => {

                localStorage.setItem('theme', fileURL)
                let theme = document.getElementById('theme') as HTMLStyleElement;

                theme.setAttribute('href', fileURL);
            });

            themeOption.classList.add('hidden');

            this.container.append(themeOption);
        }

        this.append(this.container);
    }
}

customElements.define('ic-themes', ThemeSelector);