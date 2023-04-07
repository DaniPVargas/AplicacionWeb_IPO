const popup = document.querySelector('.popup');

function showPopup() {
    popup.classList.add('open');
    document.getElementById("myForm").reset();
}

function hidePopup() {
    popup.classList.remove('open');
}