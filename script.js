/**
 * ===== CARREGAR TEMA SALVO =====
 * Verifica se existe um tema salvo no localStorage do navegador
 * Se o tema salvo for 'light', adiciona a classe 'light-mode' ao body
 * para aplicar os estilos do modo claro
 */
const savedTheme = localStorage.getItem('theme');
if (savedTheme == 'light') {
  document.body.classList.add('light-mode');
}

/**
 * ===== SELETOR DO BOTÃO =====
 * Obtém o elemento botão que alterna entre os temas (tema toggle)
 * Este botão possui o id 'theme-toggle' no HTML
 */
const themeToggle = document.getElementById('theme-toggle');

/**
 * ===== EVENTO DE CLIQUE DO BOTÃO =====
 * Adiciona um ouvinte de evento que executa quando o usuário clica no botão
 */
themeToggle.addEventListener('click', () => {
  
  /**
   * Alterna a classe 'light-mode' no elemento body
   * Se a classe está presente, remove-a (ativa modo escuro)
   * Se não está presente, adiciona-a (ativa modo claro)
   */
  document.body.classList.toggle('light-mode');

  /**
   * Verifica qual tema está ativo no momento
   * Se 'light-mode' está presente na classList, o tema é 'light'
   * Caso contrário, é 'dark'
   */
  const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  
  /**
   * Salva o tema atual no localStorage
   * Assim, quando o usuário retornar ao site, o tema preferido será carregado
   */
  localStorage.setItem('theme', currentTheme);

  /**
   * Atualiza o ícone/texto do botão para mostrar qual tema será ativado ao clicar novamente
   * Se modo claro está ativo, mostra 🌙 (indicando que próximo clique ativa escuro)
   * Se modo escuro está ativo, mostra 🌟 (indicando que próximo clique ativa claro)
   */
  themeToggle.textContent = currentTheme === 'light' ? '🌙' : '🌟';
});

/**
 * ===== DEFINIR ÍCONE INICIAL =====
 * Define o ícone inicial do botão na primeira carga da página
 * Mostra o tema oposto ao tema atual (indica para qual tema alternará)
 */
themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌟';

/**
 * ===== SELECIONAR PERFIL =====
 * Adiciona evento de clique em cada perfil para salvar dados no localStorage
 * Quando um perfil é clicado, seu nome e imagem são armazenados
 */
const profileLinks = document.querySelectorAll('.profile');

profileLinks.forEach(profile => {
  profile.addEventListener('click', (e) => {
    e.preventDefault(); // Previne navegação imediata
    
    const profileName = profile.getAttribute('data-profile-name');
    const profileImg = profile.getAttribute('data-profile-img');
    const href = profile.getAttribute('href');
    
    // Salva o nome e imagem do perfil ativo no localStorage
    localStorage.setItem('perfilAtivoNome', profileName);
    localStorage.setItem('perfilAtivoImagem', profileImg);
    
    // Redireciona após salvar os dados
    window.location.href = href;
  });
});
