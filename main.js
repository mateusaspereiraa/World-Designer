/*  abre e fecha o menu quando clicar no icone: x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
// scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
// menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,  // espaço entre slides
  loop: true,        // permite que os slides se repitam em loop
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  // permite clicar nas bolinhas de paginação
  },
  autoplay: {
    delay: 10000,      // define o tempo entre os slides (5 segundos)
    disableOnInteraction: false,  // continua mesmo após interação manual
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão que volta para o topo */
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Aparecer quem acessou o site

const clientNames = ['Thiago', 'Rafael', 'Ana', 'Raphaela', 'Rogério', 'Célia',
  'Tania', 'Carla','Paula','David', 'Maringá', 'Marcos','Cristina','Gabriel',
  'Roberto','Matheus','Vitor','Julio','Luana','Octávio','Ceni','Benicio','Bárbara']; 
const clientTicker = document.getElementById('clientTicker');

function updateClientTicker() {
  const randomName = clientNames[Math.floor(Math.random() * clientNames.length)];
  clientTicker.textContent = `${randomName} acessou o site!`;
  clientTicker.style.opacity = 1;

  setTimeout(() => {
    clientTicker.style.opacity = 0;
  }, 4000);
}

setInterval(updateClientTicker, 8000);
updateClientTicker();



document.querySelector('.btn-loja').addEventListener('click', function(event) {
  // Exemplo de rastreamento ou qualquer outra ação  
});

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

    // Create the performance observer.
    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Logs all server timing data for this response
        console.log('Server Timing', entry.serverTiming);
      }
    });

    // Start listening for navigation entries to be dispatched.
    po.observe({type: 'navigation', buffered: true});
  
    