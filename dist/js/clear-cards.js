System.register("interfaces/clear-card-row.interface", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("interfaces/clear-card.interface", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("managers/clear-cards.manager", [], function (exports_3, context_3) {
    "use strict";
    var ClearCardsManager;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            ClearCardsManager = /** @class */ (function () {
                function ClearCardsManager() {
                }
                ClearCardsManager.prototype.InitContainer = function (element, cards) {
                    element.innerHTML = '';
                    cards.forEach(function (card) {
                    });
                };
                ClearCardsManager.prototype.GetCardElement = function (card) {
                    var element = document.createElement('div');
                    element.classList.add('clear-card');
                };
                return ClearCardsManager;
            }());
            exports_3("ClearCardsManager", ClearCardsManager);
        }
    };
});
