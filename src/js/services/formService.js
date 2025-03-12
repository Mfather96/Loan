export default class FormService {
    constructor(){}

    validateEmail(input) {
        input.addEventListener('input', () => {
            if (!input.value.match(/[^а-яё 0-9]/ig)) {
                input.value = '';
            }
        })
    }

    phoneMask(input) {
        let matrix = '+1 (___) ___-____';
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = input.value.replace(/\D/g, '');
        let maskedValue = '';

        if (def.length >= val.length) {
            val = def;
        }

        maskedValue = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                    ? ''
                    : a;
        })

        if (maskedValue[0] != '+' || maskedValue[1] != '1') {
            input.value = '+1'
        } else {
            input.value = maskedValue;
        }

        if (event.type === 'blur') {
            if (input.value.length == 2) {
                input.value = '';
            }
        } else {
            this.setCursorPosition(input, input.value.length);
        }
    }

    setCursorPosition(elem, pos) {
        elem.focus();

        let localPos = pos;

        if (pos < 2) {
            localPos = 2;
        }

        if (elem.setSelectionRange) {
            elem.setSelectionRange(localPos, localPos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', localPos);
            range.moveStart('character', localPos);
            range.select();
        }
    }

    bindInputsChanges(input) {
        input.addEventListener('input', () => {
            if (!input.style.border) {
                input.style.border = '1px solid green';
            }
        })
    }

    maxRangeDateInput(input) {
        input.addEventListener('change', () => {
            if (input.value.length > 10) {
                input.value = input.value.slice(0, 9);
            }
        })

        input.addEventListener('input', () => {
            if (input.value.length > 10) {
                input.value = input.value.slice(0, 9);
            }
        })
    }
}
