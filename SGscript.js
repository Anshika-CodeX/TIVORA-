document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      const icon = menuToggle.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".nav-menu") &&
      !event.target.closest(".menu-toggle") &&
      navMenu.classList.contains("active")
    ) {
      navMenu.classList.remove("active")
      const icon = menuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  // Slideshow functionality
  const slides = document.querySelectorAll(".slide")
  const indicators = document.querySelectorAll(".indicator")
  const prevArrow = document.querySelector(".prev-arrow")
  const nextArrow = document.querySelector(".next-arrow")
  let currentSlide = 0
  let slideInterval

  // Function to show a specific slide
  function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach((slide) => slide.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    // Add active class to current slide and indicator
    slides[index].classList.add("active")
    indicators[index].classList.add("active")

    // Update current slide index
    currentSlide = index
  }

  // Function to show next slide
  function nextSlide() {
    let next = currentSlide + 1
    if (next >= slides.length) {
      next = 0
    }
    showSlide(next)
  }

  // Function to show previous slide
  function prevSlide() {
    let prev = currentSlide - 1
    if (prev < 0) {
      prev = slides.length - 1
    }
    showSlide(prev)
  }

  // Set up event listeners for arrows
  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      prevSlide()
      resetInterval()
    })
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      nextSlide()
      resetInterval()
    })
  }

  // Set up event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index)
      resetInterval()
    })
  })

  // Start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
  }

  // Reset interval when manually changing slides
  function resetInterval() {
    clearInterval(slideInterval)
    startSlideshow()
  }

  // Initialize slideshow
  startSlideshow()

  // Keyboard navigation for slideshow
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide()
      resetInterval()
    } else if (e.key === "ArrowRight") {
      nextSlide()
      resetInterval()
    }
  })

  // Pause slideshow when hovering over it
  const slideshowContainer = document.querySelector(".slideshow-container")
  if (slideshowContainer) {
    slideshowContainer.addEventListener("mouseenter", () => {
      clearInterval(slideInterval)
    })

    slideshowContainer.addEventListener("mouseleave", () => {
      startSlideshow()
    })
  }

  // Product hover animation
  const productCards = document.querySelectorAll(".product-card")
  productCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.querySelector(".product-actions").style.bottom = "0"
    })
    card.addEventListener("mouseleave", function () {
      this.querySelector(".product-actions").style.bottom = "-50px"
    })
  })

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = this.querySelector('input[type="email"]')
      if (emailInput.value.trim() !== "") {
        // Here you would typically send the data to a server
        alert("Thank you for subscribing to our newsletter!")
        emailInput.value = ""
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
          // Close mobile menu if open
          if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active")
            const icon = menuToggle.querySelector("i")
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
          }
        }
      }
    })
  })

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".action-btn:nth-child(2)")
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation()
      const productCard = this.closest(".product-card")
      const productName = productCard.querySelector("h3").textContent

      // Animation for adding to cart
      const notification = document.createElement("div")
      notification.className = "cart-notification"
      notification.textContent = `${productName} added to cart!`
      document.body.appendChild(notification)

      setTimeout(() => {
        notification.classList.add("show")
      }, 10)

      setTimeout(() => {
        notification.classList.remove("show")
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 300)
      }, 2000)
    })
  })

  // Initialize animation on scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(".category-card, .product-card, .section-title")
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.classList.add("animate")
      }
    })
  }

  // Add animation class to CSS
  const style = document.createElement("style")
  style.textContent = `
        .category-card, .product-card, .section-title {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .category-card.animate, .product-card.animate, .section-title.animate {
            opacity: 1;
            transform: translateY(0);
        }
        .cart-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--success-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 1001;
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.3s ease;
        }
        .cart-notification.show {
            opacity: 1;
            transform: translateX(0);
        }
    `
  document.head.appendChild(style)

  // Call animation function on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})
