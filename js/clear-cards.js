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
     */
    constructor(title, rows) {
        this.title = title;
        this.rows = rows;
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
        element.classList.add('clead-cards-container');
        element.innerHTML = '';
        cards.forEach((card) => {
            element.append(this.BuildCardElement(card));
        });
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
}
