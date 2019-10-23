import './tab-slider.scss'

import {
  show as fadeShow,
  hide as fadeHide
} from '../../../assets/js/fadeFuncs'

window.addEventListener('DOMContentLoaded', () => {
  const tabsSection = document.querySelector('.tab-slider__tabs')
  const imgContainer = tabsSection.querySelector('.tab-slider__img-container')
  const imgs = imgContainer.querySelectorAll('.tab-slider__img')

  const textContainer = tabsSection.querySelector(
    '.tab-slider__tab-text-container'
  )

  const toggleClass = (targetNode, className) => {
    const showNode = tabsSection.querySelector(`.${className}`)

    if (showNode !== targetNode) {
      showNode.classList.remove(className)
      targetNode.classList.add(className)
    }
  }

  const timeoutToggleClass = (
    targetNode,
    className,
    fadeInClass,
    fadeOutClass
  ) => {
    const showNode = tabsSection.querySelector(`.${className}`)

    if (showNode !== targetNode) {
      fadeHide(showNode, fadeInClass, fadeOutClass)

      setTimeout(() => {
        showNode.classList.remove(className)
        fadeShow(targetNode, fadeInClass, fadeOutClass)
        targetNode.classList.add(className)
      }, 200)
    }
  }

  const tabs = tabsSection.querySelectorAll('.tab-slider__tab')

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetIdx = tab.dataset.target
      const targetImg = imgs[targetIdx]
      const targetText = textContainer.querySelectorAll(
        '.tab-slider__tab-text'
      )[targetIdx]

      toggleClass(tab, 'tab-slider__tab--active')

      timeoutToggleClass(
        targetImg,
        'tab-slider__img--show',
        'fade-in-left',
        'fade-out-left'
      )

      timeoutToggleClass(
        targetText,
        'tab-slider__tab-text--show',
        'scale-in',
        'scale-out'
      )
    })
  })
})
