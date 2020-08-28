window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.string'),
        button = document.querySelector('.button'),
        answer = document.querySelector('.answer'),
        answerString = document.querySelector('h2');

    button.addEventListener('click', () => {

        let str = input.value.toLowerCase();

        if (str === '')return;

        let newStr = str.split('').reverse().join('');

        const req = document.createElement('h2');
        answer.append(req);

        const clearReq = () => {
          req.textContent = '';
            
        };

        if (newStr === str) {
            req.textContent = 'Yes, it is a polydrome!';
            req.style.color = 'green';
            input.value = '';
            setTimeout(() => {
                clearReq();
            }, 10000);
          

        }else {
            req.textContent = 'No, it is not polydrome!';
            req.style.color = 'red';
            input.value = '';
            
            setTimeout(() => {
                clearReq();
            }, 10000);
        }

    });
});