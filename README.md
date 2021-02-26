# clear-cards
Dashboard building toolkit

## Description

### What is it?
Yes, firstly it seems to be a set of styled rectangle generator. Basically, it's a true. Everybody can write something similar by yourself.
But not all purposes reqires custom, unique implementation. This toolkit (js + css) can save some time and give some basic data view fuctionality using only a few rows of code.
Finally, this is small simple toolkit to help you visualise some indicators on your webpages

### Key features
* We build responsive, well looking cards with indicators (and maybe something else)
* Cards style is highly customizable: you can choose both theme and colors, and of course make your own
* For simpliness, we use vanilla JS and CSS
* Data model for indicating is simple and can be formed on you backend as well on you database engine

## Documentation

### Quick start
1. Add style refs to your page. Firstly, you should use core styles, than add desired theme and color
```html
<link rel="stylesheet" href="css/clear-cards-core.css">
<link rel="stylesheet" href="css/clear-cards-theme-neon.css">
<link rel="stylesheet" href="css/clear-cards-colors-ocean.css">
```
2. Add script ref to your page
```html
<script lang="javascript" src="js/clear-cards.js"></script>
```
3. Get indicators data
```js
let cards = [
    {
        title: 'Company revenue',
        rows: [
            { value: 100, unit: 'RVL', label: 'Not bad' }
        ]
    },
    {
        title: 'Cost to income',
        rows: [
            { value: 50, unit: '%', label: 'For last year' }
        ]
    },
    {
        title: 'Share price',
        rows: [
            { value: 1, unit: 'RVL', label: 'equity stock' },
            { value: 2, unit: 'RVL', label: 'preference stock' }
        ]
    }
];
```
4. Initialise a container for cards
```js
let container = document.getElementsByTagName('main')[0];
let manager = new ClearCardsManager();
manager.InitContainer(container, cards);
```

### Style customization: themes and colors
You can start with your own color stylesheet. For example, add your enterprise's brand colours 
Here is color variables description.
* 

### Cards' events
Currently there is no built-in event handlers