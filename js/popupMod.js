const popup = document.querySelector('.popup.mod');
const popupCanc = document.querySelector('.popup.canc');
const popupConf = document.querySelector('.popup.conf');
const divMod = document.getElementById("divMod");
const divBusq = document.getElementById("div-busq");
const input = document.getElementById("input");

function showPopup() {
    popup.classList.add('open');
    document.getElementById("myForm").reset();
}

function hidePopup() {
    popup.classList.remove('open');
    divMod.style.display = "none";
    divBusq.style.visibility = "hidden";
    input.value = "";
}

function showPopupCanc() {
    popupCanc.classList.add('open');
}

function hidePopupCanc() {
    popupCanc.classList.remove('open');
}

function confirmCanc(){
    popupConf.classList.add('open');
    hidePopupCanc();
}

function hideConfirmCanc(){
    divBusq.style.visibility = "hidden";
    popupConf.classList.remove('open');
    input.value = "";
}