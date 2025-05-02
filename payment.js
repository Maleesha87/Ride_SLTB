// paymentScript.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const price = urlParams.get('price');
    if (price) {
        document.getElementById('priceDisplay').textContent = price + ' LKR';
    }
});

function validateForm() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardNumberPattern = /^\d{16}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;
    if (!cardNumberPattern.test(cardNumber.replace(/\s+/g, ''))) {
        alert('Please enter a valid 16-digit card number.');
        return false;
    }
    if (!expiryPattern.test(expiryDate)) {
        alert('Please enter a valid expiry date (MM/YY).');
        return false;
    }
    if (!cvvPattern.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return false;
    }
    return true;
}

function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    input.value = value.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiryDate(input) {
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); // Auto-insert '/' after MM
    }
    input.value = value.slice(0, 5); // Limit to MM/YY format
}

