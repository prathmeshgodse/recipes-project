"use strict"

const carousel = document.querySelector(".slide-container")
const btnNextSlide = document.querySelector(".btn-carousel-right")
const btnPrevSilde = document.querySelector(".btn-carousel-left")
const slides = Array.from(document.querySelectorAll(".slide"))

const slideWidth = slides[0].getBoundingClientRect().width

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px"
})

function moveSlide(carousel, currentSlide, targetSlide) {
  carousel.style.transform = `translateX(-${targetSlide.style.left})`
  currentSlide.classList.remove("current-slide")
  targetSlide.classList.add("current-slide")
}

function moveToNextSlide() {
  const currSlide = carousel.querySelector(".current-slide")
  const nextSlide = currSlide.nextElementSibling
  moveSlide(carousel, currSlide, nextSlide)
}

function moveToPreviousSlide() {
  const currSlide = carousel.querySelector(".current-slide")
  const previousSlide = currSlide.previousElementSibling
  console.log(previousSlide)
  moveSlide(carousel, currSlide, previousSlide)
}

btnNextSlide.addEventListener("click", moveToNextSlide)

btnPrevSilde.addEventListener("click", moveToPreviousSlide)
