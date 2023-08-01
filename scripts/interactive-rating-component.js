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

/* Add listener to submit button that loads a new page if a value was selected */
loadPageListener = () => {
    /* Only load page if reviewScore has a value */
    if (reviewScore) {
        /* Create new page html */
        let newHTML =
        `<div class="response-graphic-wrap">
            <img class="response-graphic" src="images/illustration-thank-you.svg" draggable="false"/>
        </div>
        <div class="rating-review-wrap">
            <button class="rating-review">You selected ${reviewScore} out of 5</button>
        </div>
        <div class="title-container-review">
            <p class="review-title">Thank you!</p>
        </div>
        <div class="text-container-review">
            <p class="review-text">We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate to
            get in touch!</p>
        </div>`
        document.querySelector(`.main-container`).innerHTML = newHTML;
    }
}
document.querySelector(`.submit-button`).addEventListener("click", loadPageListener);