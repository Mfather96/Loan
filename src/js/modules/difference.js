export default class Difference {
    constructor(oldSelector, newSelector, itemsSelector) {
        this.oldContainer = document.querySelector(oldSelector);
        this.newContainer = document.querySelector(newSelector);
        this.itemsSelector = itemsSelector;
    }

    hideItems(container) {
        container.querySelectorAll(this.itemsSelector).forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
            }
        })
    }

    bindTriggers() {
        this.bindTrigger(this.oldContainer);
        this.bindTrigger(this.newContainer);
    }

    bindTrigger(container) {
        const btn = container.querySelector('.card__click .plus');
        const items = container.querySelectorAll(this.itemsSelector);
        let activeIndex = 0;
        btn.addEventListener('click', () => {
            if (activeIndex !== items.length - 2) {
                items[activeIndex++].style.display = '';
            } else {
                items[activeIndex++].style.display = '';
                items[items.length - 1].remove();
            }
        })
    }

    init() {
        this.hideItems(this.oldContainer);
        this.hideItems(this.newContainer);

        this.bindTriggers();
    }
}
