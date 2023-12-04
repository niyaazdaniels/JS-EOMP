let btn = document.querySelector('#clear');
btn.addEventListener('click', clearData);

function clearData() {
    document.getElementById('contact-form').reset();
}