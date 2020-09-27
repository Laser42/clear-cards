import IClearCard from "../interfaces/clear-card.interface";

class ClearCardsManager {
    InitContainer(element: HTMLElement, cards: IClearCard[]): void {
        element.innerHTML = '';
        cards.forEach((card: IClearCard) => {

        });

    }

    GetCardElement(card: IClearCard) {
        let element = document.createElement('div');
        element.classList.add('clear-card');
    }
}
export = ClearCardsManager;