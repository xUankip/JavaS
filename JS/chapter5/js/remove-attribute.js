var firstItem = document.getElementById('one'); //Get first list item
if ( firstItem.hasAttribute('class') ) { //If it has class attribute
    firstItem.removeAttribute('class'); //Remove its class attribute
}