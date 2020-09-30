class ClearCardsManager {
    InitContainer(element, cards) {
        element.innerHTML = '';
        cards.forEach((card) => {
            element.append(this.GetCardElement(card));
        });
    }
    GetCardElement(card) {
        let titleElement = document.createElement('div');
        titleElement.className = 'clear-card-title';
        titleElement.innerText = card.title;
        // todo: rows
        let cardElement = document.createElement('div');
        cardElement.className = 'clear-card';
        cardElement.append(titleElement);
        return cardElement;
    }
}
