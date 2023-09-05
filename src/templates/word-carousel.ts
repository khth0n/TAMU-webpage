export class WordCarousel extends HTMLElement {

    container: HTMLDivElement;
    affixes: string[];
    affixIndex: number;
    affixText: HTMLHeadingElement;

    constructor() {
        super();

        this.container = document.createElement('div');

        this.append(this.container);

        const stem = this.getAttribute('stem') || '';
        const affixString = this.getAttribute('affixes') || '';
        this.affixes = affixString.split(',');
        this.affixIndex = 0;

        let stemText = document.createElement('h3');
        stemText.innerHTML = stem;
        this.container.append(stemText);

        this.affixText = document.createElement('h3');
        this.affixText.innerHTML = this.affixes[this.affixIndex];

        this.container.append(this.affixText);
    }

    next() {

        this.affixIndex = (this.affixIndex + 1) % this.affixes.length;

        this.affixText.innerHTML = this.affixes[this.affixIndex];
    }
}

customElements.define('ic-word-carousel', WordCarousel);