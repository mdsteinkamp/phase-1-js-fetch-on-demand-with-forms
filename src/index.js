//Selecting event target via input element
const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
/* 
        if (input.value > input.length()) {
            alert('Please request a valid ID!');
        } */

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
  }



//Selecting event target fromm the array like object
/* const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event.target.children[1].value);
    })
  
}
 */
document.addEventListener('DOMContentLoaded', init);