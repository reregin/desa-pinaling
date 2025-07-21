// Navbar scroll effect - transparent at top, solid when scrolled
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled")
  } else {
    navbar.classList.remove("navbar-scrolled")
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (mobileMenu && mobileMenuBtn) {
    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
      mobileMenu.classList.add("hidden")
    }
  }
})

// Close mobile menu when window is resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && mobileMenu) {
    mobileMenu.classList.add("hidden")
  }
})

// Animation on scroll for progress bars
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('[style*="width"]')
      progressBars.forEach((bar) => {
        bar.style.transition = "width 1.5s ease-in-out"
      })
    }
  })
}, observerOptions)

// Observe chart sections
document.querySelectorAll(".space-y-6").forEach((section) => {
  observer.observe(section)
})
