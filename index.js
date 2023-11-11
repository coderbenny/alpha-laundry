const orders = []
const cart = document.querySelector('.items')
const scheduleForm = document.querySelector('#schedule-form')

scheduleForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const form  = e.target
    // console.log(form)

    const name = form.name.value
    const phone = form.phone.value
    const pickupDate = form.pickupDate
    const garment = form.garment.value
    const quantity = form.quantity.value

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

    console.log(userOrder)
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