const orders = []
const cart = document.querySelector('.items')
const scheduleForm = document.querySelector('#schedule-form')

scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const form = e.target
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

// Declaring the navigation Links
const navLinks = document.querySelector('.topnav').children
// console.log(navLinks)

//Setting the scroll to event listener
for (const navLink of navLinks) {
    navLink.addEventListener('click', (e) => {
        const sectionId = navLink.id;

        if (sectionId) {
            document.querySelector(`${sectionId}`).scrollIntoView({ behavior: 'smooth' })
        }
    })

}




// Frequently Asked Questions
// const questions = document.querySelectorAll('.question');
// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         question.classList.toggle('active');
//         const answer = question.nextElementElement;
//         answer.classList.toggle('active');
//     });
// });