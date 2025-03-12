import DataService from "../services/dataService";
import FormService from "../services/formService";

export default class FormModule {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.message = {
            pending: 'Loading...',
            success: 'Done!',
            failed: 'Oops! Something went wrong. Please, try later',
        }
        this.dataService = new DataService();
        this.formService = new FormService();
        this.inputEvents = ['input', 'focus', 'blur', 'click'];
    }

    bindSubmits() {
        this.forms.forEach(form => {
            this.bindInputsChanges(form);
            this.setPhoneMask(form);
            this.setEmailLangValidator(form);
            this.setMaxRangeDateInput(form);

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (!this.validateRequiredInputs(form)) return;

                const formData = new FormData(form);

                this.setMessage(form, this.message.pending);

                this.dataService.postData('./assets/question.php', formData)
                    .then(data => {
                        this.setMessage(form, this.message.success);
                        console.log(data);
                    }).catch(() => {
                        this.setMessage(form, this.message.failed);
                    }).finally(() => {
                        this.clearInputs(form);
                        setTimeout(() => {
                            form.querySelector('.message').remove();
                        }, 1500)
                    })
            })
        })
    }

    clearInputs(form) {
        form.querySelectorAll('input').forEach(input => {
            input.value = '';
        })
    }

    bindInputsChanges(form) {
        form.querySelectorAll('input').forEach(input => {
            this.formService.bindInputsChanges(input);
        })
    }

    validateRequiredInputs(form) {
        let isValid = true;
        form.querySelectorAll('input').forEach(input => {
            if (input.value == '' || !input.value.length) {
                input.style.border = '1px solid red';
                isValid = false;
            } else {
                input.style.border = '1px solid green';
                isValid = true;
            }
        });

        return isValid;
    }

    setPhoneMask(form) {
        const phoneInput = form.querySelector('#phone');

        if (phoneInput) {
            this.inputEvents.forEach((event) => {
                phoneInput.addEventListener(event, () => {
                    this.formService.phoneMask(phoneInput);
                })
            })
        }
    }

    setEmailLangValidator(form) {
        const emailInput = form.querySelector('[type="email"]');

        if (emailInput) {
            this.formService.validateEmail(emailInput)
        }
    }

    setMaxRangeDateInput(form) {
        const dateInput = form.querySelector('[type="date"]');

        if (dateInput) {
            this.formService.maxRangeDateInput(dateInput);
        }
    }

    setMessage(form, msg) {
        const div = document.createElement('div');
        div.classList.add('message',`message__${msg}`);
        div.style.cssText = `
            text-align: center;
            color: #fff;
        `;
        div.innerHTML = `
            <span>
                ${msg}
            </span>
        `;

        if (form.querySelector('.message')) {
            form.querySelector('.message').remove();
        }

        form.appendChild(div);
    }

    init() {
        this.bindSubmits();
    }
}
