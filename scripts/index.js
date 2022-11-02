const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const generateBtn = document.querySelector('.generator__button');
const password = document.querySelectorAll('.generator__password');

generateBtn.addEventListener('click', function () {
    const number = prompt("Укажите количество символов для нового пароля:", "Пожалуйста, используйте только цифры...");

    password.forEach(element =>
        element.innerHTML = xaxa())

    function xaxa() {
        const el = characters.sort(function () {
            return Math.random() - 0.5;
        })
        return el.slice(0, `${+number}`).join('');
    }

});

password.forEach(element =>
    element.addEventListener('click', function () {
        let copyData = element.textContent;
        if (copyData) {
            navigator.clipboard.writeText(copyData);
        }
    }))