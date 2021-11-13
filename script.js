const updateRange = e => {
    toggleOutputDisplay(false)
    let range
    if (e) {
        range = e.value
    } else {
        range = 10
        const rateInput = document.getElementById('rate')
        if (rateInput) {
            rateInput.value = range
        }
    }
    const rangeDisplay = document.getElementById('range_value')
    if (rangeDisplay) {
        rangeDisplay.innerHTML = `${range}%`
    }
}

const compute = () => {
    const pricipal = document.getElementById('principal')?.value
    if (!pricipal) {
        alert('Please enter a valid amount.')
        return false
    }
    toggleOutputDisplay(true)

    const depositAmmount = document.getElementById('deposit_ammount')
    if (depositAmmount) {
        depositAmmount.innerHTML = pricipal
    }

    const rate = document.getElementById('rate').value
    const interestRate = document.getElementById('interest_rate')
    if (interestRate) {
        interestRate.innerHTML = `${rate}%`
    }

    const years = parseInt(document.getElementById('years').value)
    const amountToReceive = document.getElementById('amount_to_receive')
    if (amountToReceive) {
        const totalInterest = (pricipal * (rate / 100)).toFixed(2) * years
        amountToReceive.innerHTML = totalInterest
    }

    const inYear = document.getElementById('in_year')
    if (inYear) {
        const currentYear = new Date().getFullYear()
        inYear.innerHTML = currentYear + years
    }
}

const toggleOutputDisplay = isShow => {
    const output = document.getElementById('output')
    if (output) {
        output.style.display = isShow ? "" : "none"
    }
}

        
