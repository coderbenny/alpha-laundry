const orders = []
const cart = document.querySelector('.items')
const scheduleForm = document.querySelector('#add-item')

scheduleForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const form  = e.target 
    const name = form.name
    const phone = form.phone
    const garment = form.garment
    const quantity = form.quantity

    // Define the order
    const userOrder = {
        name: name,
        phone: phone,
        garments: [
            {
                name: garment, 
                quantity: quantity
            }
        ]
    }

    



})

document.addEventListener('DOMContentLoaded', ()=>{
    // Hiding the cart when the DOM Loads
    cart.style.display = 'none';
    
})





// Frequently Asked Questions
// const questions = document.querySelectorAll('.question');
// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         question.classList.toggle('active');
//         const answer = question.nextElementElement;
//         answer.classList.toggle('active');
//     });
// });