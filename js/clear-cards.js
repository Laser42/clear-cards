const CC_CLASSES_HANDBOOK = {
    Container: 'clear-cards-container',
    Overlay: 'clear-cards-overlay',
    Card: 'clear-card'
}

/**
 * Card row class
 */
class ClearCardRow {
    /**
     * Ctor
     * @param {number} value - numeric value
     * @param {string} unit - value unit
     * @param {string} label - value label
     */
    constructor(value, unit, label) {
        this.value = value;
        this.unit = unit;
        this.label = label;
    }
}

/**
 * Card class
 */
class ClearCard {
    /**
     * 
     * @param {string} title - card title
     * @param {ClearCardRow[]} rows - rows array
     * @param {Function} clickFn - click handle function
     */
    constructor(title, rows, clickFn) {
        this.title = title;
        this.rows = rows;
        this.clickFn = clickFn;
    }
}

/**
 * Manager class
 */
class ClearCardsManager {
    /**
     * 
     * @param {HTMLElement} element - HTML element to insert cards
     * @param {ClearCard[]} cards - array of cards
     */
    InitContainer(element, cards) {
        element.classList.add(CC_CLASSES_HANDBOOK.Container);
        element.innerHTML = '';
        cards.forEach((card) => {
            let cardElement = this.BuildCardElement(card);
            cardElement.addEventListener('click', card.clickFn ?? this.DefaultClickHandler);
            element.append(cardElement);
        });
        this.InitOverlay();
    }

    InitOverlay() {
        let overlayElement = document.querySelector(`.${CC_CLASSES_HANDBOOK.Overlay}`);
        if (overlayElement)
            return;

        overlayElement = document.createElement('div');
        overlayElement.className = CC_CLASSES_HANDBOOK.Overlay;
        document.querySelector('body').append(overlayElement);
    }

    /**
     * Builds card dom element from object
     * @param {ClearCard} card - card instance
     */
    BuildCardElement(card) {
        let cardElement = document.createElement('div');
        cardElement.className = 'clear-card';

        let titleElement = document.createElement('div');
        titleElement.className = 'clear-card-title';
        titleElement.innerText = card.title;
        cardElement.append(titleElement);

        card.rows.forEach((row) => {
            let valueElement = document.createElement('div');
            valueElement.className = 'clear-card-value';
            valueElement.innerText = row.value;

            let unitElement = document.createElement('div');
            unitElement.className = 'clear-card-unit';
            unitElement.innerText = row.unit;

            let labelElement = document.createElement('div');
            labelElement.className = 'clear-card-label';
            labelElement.innerText = row.label;

            let rowElement = document.createElement('div');
            rowElement.className = 'clear-card-row';
            rowElement.append(valueElement);
            rowElement.append(unitElement);
            rowElement.append(labelElement);
            cardElement.append(rowElement);
        });

        return cardElement;
    }

    DefaultClickHandler(event) {
        document.querySelector('.clear-cards-overlay').classList.add('active');
        let cardDetailsElement = document.createElement('div');
        cardDetailsElement.className = 'clear-card-details';
        document.querySelector('body').append(cardDetailsElement);
    }
}
