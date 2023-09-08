const origin = window.location.origin + '/~icordova';

const pageMap = new Map<string, string>([
    [ `${origin}/`, 'Home with CSS' ],
    [ `${origin}/no-css/`, 'Home without CSS'],
    [ `${origin}/projects/`, 'Projects' ],
    [ `${origin}/qualifications/`, 'Qualifications' ],
    [ `${origin}/service/`, 'Service Work' ],
    [ `${origin}/ai-generated/`, 'AI Generated' ]
])

export class Navbar extends HTMLElement {
    
    container: HTMLDivElement;

    constructor() {
        super();

        this.container = document.createElement('div');

        this.container.classList.add('ic-navbar-container');

        this.append(this.container)

        for(const [ pageURL, pageName ] of pageMap) {

            let navbarElement = document.createElement('a');
            navbarElement.classList.add('ic-navbar-element');

            navbarElement.href = pageURL;
            navbarElement.innerHTML = pageName;
            navbarElement.classList.add('ic-navbar-element-link');

            if(pageURL == window.location.href) {

                navbarElement.classList.add('ic-navbar-element-current');
            }

            this.container.append(navbarElement)
        }
    }
}

customElements.define('ic-navbar', Navbar);