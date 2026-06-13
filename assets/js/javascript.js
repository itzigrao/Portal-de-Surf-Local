const suggestionCards = document.querySelectorAll(".suggestion-card");
const dots = document.querySelectorAll(".dot");

if (suggestionCards.length > 0) {
  let currentSuggestion = 0;

  function showSuggestion(index) {
    suggestionCards[currentSuggestion].classList.remove("active");
    dots[currentSuggestion].classList.remove("active");

    currentSuggestion = index;

    suggestionCards[currentSuggestion].classList.add("active");
    dots[currentSuggestion].classList.add("active");
  }

  function showNextSuggestion() {
    let nextSuggestion = currentSuggestion + 1;

    if (nextSuggestion >= suggestionCards.length) {
      nextSuggestion = 0;
    }

    showSuggestion(nextSuggestion);
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);
      showSuggestion(index);
    });
  });

  setInterval(showNextSuggestion, 4000);
}

/* ===== VALIDAÇÃO DE FORMULÁRIO ===== */
const formInscricao = document.getElementById('inscricao-aulas');
if (formInscricao) {
  formInscricao.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const tipoAula = document.getElementById('tipo-aula').value;
    const feedback = document.getElementById('form-feedback');

    feedback.classList.remove('hidden', 'success', 'error');

    // Validação básica
    if (!nome || !email || !telefone || !tipoAula) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.classList.add('error');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      feedback.textContent = 'Por favor, insira um e-mail válido.';
      feedback.classList.add('error');
      return;
    }

    // Se passou na validação
    feedback.textContent = `Obrigado, ${nome}! Sua solicitação para ${tipoAula} foi recebida. Entraremos em contato em breve.`;
    feedback.classList.add('success');
    
    // Opcional: limpar o formulário após enviar
    formInscricao.reset();
  });
}

/* ===== INTERNACIONALIZAÇÃO (i18n) ===== */
const translations = {
  pt: {
    "subtitle": "Bem vindo ao Morning Sick! Um portal sobre o surfe local de Imbituba e região",
    "subtitle_picos": "Picos de Surfe | Conheça alguns dos principais picos de Imbituba e região.",
    "subtitle_camps": "Campeonatos Locais | Acompanhe os eventos e competições de surfe em Imbituba e região.",
    "subtitle_aulas": "Aulas de Surf | Aprenda a surfar ou evolua o seu nível com os melhores instrutores de Imbituba e região.",
    "subtitle_loja": "Loja Morning Sick | Vestuário e equipamentos essenciais para o verdadeiro surfista local.",
    "nav_home": "Home",
    "nav_picos": "Picos",
    "nav_camps": "Campeonatos",
    "nav_aulas": "Aulas de Surf",
    "nav_loja": "Loja",
    "recomenda": "Morning Sick Recomenda",
    "destaque": "3 picos em destaque",
    "confira": "Confira alguns picos da região que merecem atenção.",
    "ver_pico": "Ver pico",
    "sobre_titulo": "Sobre o Morning Sick",
    "sobre_texto": "O Morning Sick é um portal dedicado ao surfe local de Imbituba e região. Nosso objetivo é fornecer informações atualizadas sobre os melhores picos de surfe, campeonatos locais, aulas de surf e uma loja de roupas que representa o que a marca é de verdade.",
    "oferecemos_titulo": "O que oferecemos",
    "footer": "© 2026 Morning Sick. Todos os direitos reservados."
  },
  en: {
    "subtitle": "Welcome to Morning Sick! A portal about local surfing in Imbituba and region",
    "subtitle_picos": "Surf Spots | Discover some of the main surf spots in Imbituba and region.",
    "subtitle_camps": "Local Championships | Follow the local surfing events and competitions in Imbituba and region.",
    "subtitle_aulas": "Surf Lessons | Learn to surf or level up with the best instructors in Imbituba and region.",
    "subtitle_loja": "Morning Sick Shop | Essential apparel and equipment for the true local surfer.",
    "nav_home": "Home",
    "nav_picos": "Spots",
    "nav_camps": "Championships",
    "nav_aulas": "Surf Lessons",
    "nav_loja": "Shop",
    "recomenda": "Morning Sick Recommends",
    "destaque": "3 featured spots",
    "confira": "Check out some spots in the region that deserve attention.",
    "ver_pico": "View spot",
    "sobre_titulo": "About Morning Sick",
    "sobre_texto": "Morning Sick is a portal dedicated to local surfing in Imbituba and region. Our goal is to provide updated information about the best surf spots, local championships, surf lessons, and a clothing store that represents what the brand truly is.",
    "oferecemos_titulo": "What we offer",
    "footer": "© 2026 Morning Sick. All rights reserved."
  },
  es: {
    "subtitle": "¡Bienvenido a Morning Sick! Un portal sobre el surf local en Imbituba y región",
    "subtitle_picos": "Picos de Surf | Descubre algunos de los principales picos de surf en Imbituba y región.",
    "subtitle_camps": "Campeonatos Locales | Sigue los eventos y competiciones locales de surf en Imbituba y región.",
    "subtitle_aulas": "Clases de Surf | Aprende a surfear o mejora tu nivel con los mejores instructores de Imbituba y región.",
    "subtitle_loja": "Tienda Morning Sick | Ropa y equipo esenciales para el verdadero surfista local.",
    "nav_home": "Inicio",
    "nav_picos": "Picos",
    "nav_camps": "Campeonatos",
    "nav_aulas": "Clases de Surf",
    "nav_loja": "Tienda",
    "recomenda": "Morning Sick Recomienda",
    "destaque": "3 picos destacados",
    "confira": "Echa un vistazo a alguns picos de la región que merecen atención.",
    "ver_pico": "Ver pico",
    "sobre_titulo": "Sobre Morning Sick",
    "sobre_texto": "Morning Sick es un portal dedicado al surf local en Imbituba y región. Nuestro objetivo es proporcionar información actualizada sobre los mejores picos de surf, campeonatos locais, clases de surf y una tienda de ropa que representa lo que verdaderamente es la marca.",
    "oferecemos_titulo": "Lo que ofrecemos",
    "footer": "© 2026 Morning Sick. Todos los derechos reservados."
  }
};

function setLang(lang) {
  // Salva no localStorage para persistir entre as abas
  localStorage.setItem('preferredLang', lang);

  // Traduz todos os elementos marcados
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Atualiza classe ativa dos botões do seletor
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const onClickAttr = btn.getAttribute('onclick');
    if (onClickAttr && onClickAttr.includes(`'${lang}'`)) {
      btn.classList.add('active');
    }
  });
}

// Inicializa a tradução com o idioma persistido ou padrão 'pt'
const savedLang = localStorage.getItem('preferredLang') || 'pt';
setLang(savedLang);