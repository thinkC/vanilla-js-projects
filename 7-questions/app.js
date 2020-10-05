//using selectors inside the element
const questions = document.querySelectorAll('.question');
// console.log(questions);
questions.forEach((question) => {
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    //console.log(btn)
    btn.addEventListener('click', () => {

        //checks to see what question is opened and which question to close when not clicked
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
})












// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         // console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');

//     })
// });