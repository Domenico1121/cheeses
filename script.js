function showCheeseImage() {
    var cheeseInput = document.getElementById('cheeseInput').value.toLowerCase();
    var cheeseImageContainer = document.getElementById('cheeseImageContainer');

    // Clear previous image
    cheeseImageContainer.innerHTML = '';

    // Check if a valid cheese is entered
    switch (cheeseInput) {
        case 'cheddar':
            displayCheeseImage('cheddar.jpg');
            break;
        case 'swiss':
            displayCheeseImage('swiss.jpg');
            break;
        case 'mozzarella':
            displayCheeseImage('mozzarella.jpg');
            break;
        case 'parmesan':
            displayCheeseImage('parmesan.jpg');
            break;
        case 'gouda':
            displayCheeseImage('gouda.jpg');
            break;
        case 'brie':
            displayCheeseImage('brie.jpg');
            break;
        case 'roquefort':
            displayCheeseImage('roquefort.jpg');
            break;
        case 'feta':
            displayCheeseImage('feta.jpg');
            break;
        case 'gorgonzola':
            displayCheeseImage('gorgonzola.jpg');
            break;
        case 'manchego':
            displayCheeseImage('manchego.jpg');
            break;
        // More cheeses from various countries
        case 'asiago':
            displayCheeseImage('asiago.jpg');
            break;
        case 'emmental':
            displayCheeseImage('emmental.jpg');
            break;
        case 'camembert':
            displayCheeseImage('camembert.jpg');
            break;
        case 'pecorino':
            displayCheeseImage('pecorino.jpg');
            break;
        case 'edam':
            displayCheeseImage('edam.jpg');
            break;
        case 'colby':
            displayCheeseImage('colby.jpg');
            break;
        // Add more cheeses as needed
        default:
            cheeseImageContainer.innerHTML = '<p>No image available for this cheese</p>';
    }
}

function displayCheeseImage(imageFileName) {
    var cheeseImageContainer = document.getElementById('cheeseImageContainer');
    var imageElement = document.createElement('img');
    imageElement.src = 'images/' + imageFileName;
    cheeseImageContainer.appendChild(imageElement);
}
