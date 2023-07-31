/* Create a varaible to store selected rating */
let reviewScore;
/* Cycle input button elements */
document.querySelectorAll(`.input-button`).forEach( (button, index) => {
    /* Create a function for an event that will add selected style to clicked button,
    Remove selected style from all other buttons, and update reviewScore */
    selectListener = () => {
        /* Loop every button, stripping selected style from each */
        document.querySelectorAll(`.input-button`).forEach(button => {
            button.classList.remove(`input-button-selected`);
        });
        /* Apply style to clicked button */
        button.classList.add(`input-button-selected`)
        /* Set reviewScore to value in clicked button */
        reviewScore = button.dataset.score;}
    /* Add function as a listener for clicking each button */
    button.addEventListener('click', selectListener);
})