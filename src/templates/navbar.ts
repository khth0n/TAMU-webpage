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
    
    container: HTMLUListElement;

    constructor() {
        super();

        this.container = document.createElement('ul');

        this.container.classList.add('ic-navbar-container');

        this.append(this.container)

        this.build();
    }

    async build() {

        for(const [ pageURL, pageName ] of pageMap) {

            let navbarElement = document.createElement('li');
            navbarElement.classList.add('ic-navbar-element');

            let navbarElementLink = document.createElement('a')
            navbarElementLink.href = pageURL;
            navbarElementLink.innerHTML = pageName;
            navbarElementLink.classList.add('ic-navbar-element-link');

            if(pageURL == window.location.href) {

                navbarElementLink.classList.add('ic-navbar-element-current');
            }

            navbarElement.append(navbarElementLink)

            this.container.append(navbarElement)
        }
    }
}

customElements.define('ic-navbar', Navbar);