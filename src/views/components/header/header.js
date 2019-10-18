window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.header__toggle-btn')
    const mobileContainer = document.querySelector('.header__mobile-container')

    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('header__toggle-btn--show')
        mobileContainer.classList.toggle('header__mobile-container--show')
    })
})
