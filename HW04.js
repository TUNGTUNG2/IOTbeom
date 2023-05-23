        const number = prompt('몇 명이 참가하나요?')
        const realNumber = Number(number);
        const $button = document.querySelector('button');
        const $input = document.querySelector('input');
        const $word = document.querySelector('#word');
        const $order = document.querySelector('#order');

        let word;
        let newWord;

        const onClickButton = () => {

            if (!word || word[word.length - 1] === newWord[0]) {
                word = newWord;
                $word.textContent = word;

                $input.value='';
                $input.focus();

                const order = Number($order.textContent);
                $order.textContent = order % realNumber + 1;
            }
            else {
                alert('올바르지 않은 단어입니다!');
                $input.value='';
                $input.focus(); 
            }
        };
        const onInput = (event) => {
            newWord = event.target.value;
        };
        $button.addEventListener('click', onClickButton);
        $input.addEventListener('input', onInput)