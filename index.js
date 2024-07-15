    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const toggleBtn = item.querySelector('.toggle-btn');
        const toggleImg = toggleBtn.querySelector('img');

        const toggleAnswer = () => {
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
            toggleImg.src = isVisible ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
            toggleImg.alt = isVisible ? 'Show Answer' : 'Hide Answer';
        };

        question.addEventListener('click', toggleAnswer);

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAnswer();
            }
        });
    });
