import { DOM } from './DOM/index.js';

export class Tabs extends DOM {
    constructor(selector) {
        super();
        if (!document.querySelector(selector)) return;
        this.getElements(selector);

        this.classes = {
            activeLink: 'active',
            activeTab: 'current-tab'
        }
        this.initLinks();
    }


    getElements(selector) {
        let container = document.querySelector(selector);
        // let links = container.querySelectorAll('.tabs-nav-link');
        let links = this.findAll('.tabs-nav-link', container);
        let tabs = this.findAll('.tab-item', container);
        // let tabs = container.querySelectorAll('.tab-item');
        let items = {};
        tabs.forEach(tab => {
            let id = `#${tab.getAttribute('id')}`;
            items[id] = tab;
        });
        this.container = container;
        this.links = links;
        this.items = items;
    }



    initLinks() {
        this.links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                this.removeActiveLinks();
                this.removeActiveTabs();
                this.addActiveLink(link);
                this.addActiveTab(this.items[link.getAttribute('href')]);
            })
        })
    }



    removeActiveLinks() {
        this.links.forEach(link => {
            this.removeClass(link.parentNode, this.classes.activeLink);
        });
    }


    removeActiveTabs() {
        for (let id in this.items) {
            let tab = this.items[id];
            this.removeClass(tab, this.classes.activeTab);
        }
    }


    addActiveLink(link) {
        if (!link) return;
        this.addClass(link.parentNode, this.classes.activeLink);
    }

    addActiveTab(tab) {
        if (!tab) return;
        this.addClass(tab, this.classes.activeTab);
    }
}
