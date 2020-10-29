let amountPaid = document.querySelector('#Amount-Paid'),
    cash = document.querySelector('#Cash'),
    pos = document.querySelector('#POS'),
    transfer = document.querySelector('#E-Transfer'),
    totalAmount = document.querySelector('#Total-Amount'),
    totalAmountPaid = document.querySelector('#Total-Amount-Paid'),
    balance = document.querySelector('#Balance'),
    overallTotal = document.querySelector('#Overall-Total')
    submit = document.querySelector('.submit'),
    payments = document.querySelectorAll('.variables'),
    input = document.querySelectorAll('input'),
    form = document.querySelector('form');

form.addEventListener('submit', e => {
    if (totalAmountPaid.value === '' || totalAmountPaid.value === NaN || totalAmountPaid.value === 0) {
        e.preventDefault()
        alert(`Please specify total amount to be paid`)
    } else if ( overallTotal.value === '' || overallTotal.value === NaN) {
        e.preventDefault()
        alert(`Please specify the amount you want to pay`)
    } else if (overallTotal.value > totalAmountPaid.value) {
        e.preventDefault()
        alert(`Please check your value`)
    } 
    // else {
    //     e.preventDefault()
    //     alert(`Form Submitted`)
    //     input.value = ""
    // }

})

amountPaid.addEventListener('keyup', e => {
    let displayNum = e.target.value
    let input = []
    input.push(displayNum)
    totalAmountPaid.value = Number(input)
})

let procedure = e => {
    if (totalAmountPaid.value === '' || totalAmountPaid.value === NaN) {
        alert(`Please enter Amount to be paid`)
        e.target.value = ''
    } else {
        totalAmount.value = Number(cash.value) + Number(pos.value) + Number(transfer.value)
        balance.value = totalAmountPaid.value - totalAmount.value
        overallTotal.value = Number(Math.abs(balance.value)) + Number(totalAmount.value)
        overallTotal.value > totalAmountPaid.value ? overallTotal.style.borderColor = 'red' : overallTotal.style.borderColor = 'inherit'
    }
}

cash.addEventListener('keyup', e => {
    procedure(e)
    overallTotal.value > totalAmountPaid.value ? cash.style.borderColor = 'red' : cash.style.borderColor = 'inherit'
})
pos.addEventListener('keyup', e => {
    procedure(e)
    overallTotal.value > totalAmountPaid.value ? pos.style.borderColor = 'red' : pos.style.borderColor = 'inherit'
})
transfer.addEventListener('keyup', e => {
    procedure(e)
    overallTotal.value > totalAmountPaid.value ? transfer.style.borderColor = 'red' : transfer.style.borderColor = 'inherit'
})
