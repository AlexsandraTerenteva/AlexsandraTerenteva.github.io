window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form'),
        budget = document.querySelector('#budget'),
        expensesName = document.querySelectorAll('#expenses-name'),
        expensesPrice = document.querySelectorAll('#expenses-price'),
        optionalExpensesName = document.querySelectorAll('#optional-expenses-name'),
        optionalExpensesPrice = document.querySelectorAll('#optional-expenses-price'),
        savingWrap = document.querySelector('.saving-wrap'),
        formGroup = document.querySelectorAll('.form__group'),
        button = document.querySelectorAll('.button'),
        plus = document.querySelectorAll('.plus');
    let result = document.querySelector('.form__block_result');
    let newOptExpenssesBlock, newExpenssesBlock;

    const replaceNotNumber = (input) => {
        input.value = input.value.replace(/\D/g, '');
    };
    
    const showSavingsBlock = (e) => {
        const target = e.target;

        if(target.classList.contains('input_true') || target.classList.contains('label_true')) {
            formGroup.forEach(item => {
                item.classList.remove('form__group_hidden');
            });
        } 

        if(target.classList.contains('input_false') || target.classList.contains('label_false')) {
            formGroup.forEach(item => {
                if (item.classList.contains('form__group_saving')) {
                    item.classList.add('form__group_hidden');
                }
            });
        }
    };

    const plusBlocks = (item) => {
        if (item.hasAttribute("data-expensses")) {
            newExpenssesBlock = document.createElement('div');
            newExpenssesBlock.classList.add('form__group', 'faded');
            
            newExpenssesBlock.innerHTML = `
            <div class="form__block">
                <input  type="text" name="expenses-name" id="expenses-name" class="input" maxlength="30" min-height="1"> 
            </div>
            <div class="form__block">
                <input data-number type="text" name="expenses-price" id="expenses-price" class="input" maxlength="10" min-height="2">
            </div>
            `;

            item.insertAdjacentElement('afterend', newExpenssesBlock );
        }

        if (item.hasAttribute("data-optExpensses")) {
                newOptExpenssesBlock = document.createElement('div');
                newOptExpenssesBlock.classList.add('form__group', 'faded');
                newOptExpenssesBlock.innerHTML = `
                <div class="form__block">
                    <input type="text" name="optionalExpenses-name" id="optional-expenses-name" class="input" maxlength="30" min-height="1" autocomplete="off">
                </div>
                <div class="form__block">
                    <input  data-number type="text" name="optional-expenses-price" id="optional-expenses-price" class="input" maxlength="10" min-height="2" autocomplete="off">
                </div>
                `;
            item.insertAdjacentElement('afterend', newOptExpenssesBlock);
        }

    };

    const removeBlock = (item) => {
        if (item.hasAttribute("data-expensses")) {
            newExpenssesBlock.innerHTML = '';
        }
        if (item.hasAttribute("data-optExpensses")) {
            newOptExpenssesBlock.innerHTML = '';
        }
    };

    const detectDayBudget = () => {

        const budgetForOneDay = (budget.value/30).toFixed(1);
        let expenses, optionalExpenses;

        const checkExpenses = () => {
            if (optionalExpensesPrice.value && optionalExpensesName.value) {
                expenses = +optionalExpensesPrice.value + (+expensesPrice.value);
            } else {
                expenses = +expensesPrice.value;
            }
            return expenses;
        };

        const checkOptExpensses = () => {
            if(!optionalExpensesPrice.value && !optionalExpensesName.value) {
                optionalExpenses = `Необязательных рассходов нет !`;
            } else {
                optionalExpenses = `${optionalExpensesName.value} - ${optionalExpensesPrice.value}`;
            }
            return optionalExpenses;
        };
        
        
        result.innerHTML = `
                <div> Бюджет на один день: ${budgetForOneDay}</div>
                <div>Обязательные рассходы: ${expensesName.value } - ${expensesPrice.value}</div>
                <div>Необязательные рассходы: ${checkOptExpensses()}</div>
                <div>Всего рассходов: ${checkExpenses()}</div>
        `;

    };

    form.addEventListener('input', (e) => {
        const target = e.target;

        if (target.hasAttribute("data-number")) {
            replaceNotNumber(target);
        }
        
    }); 
    
    formGroup.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target; 

            if(target.classList.contains('plus') || target.classList.contains('icon-plus')) {
                plusBlocks(item);
            }

            if(target.classList.contains('minus') || target.classList.contains('icon-minus')) {
                removeBlock(item);
            }
        });
   });
    
    savingWrap.addEventListener('click', (e) => {
        showSavingsBlock(e);
    });

    button.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(e.target.classList.contains('button_submit')) {
               detectDayBudget(); 
            }

            if (e.target.classList.contains('button_reset')) {

                form.reset();
                result.innerHTML = '';

            }
        });
    });




   



});