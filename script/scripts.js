
document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM carregado. Todos os scripts agora podem ser executados com segurança.");

    
    const btnExperimente = document.querySelectorAll('.open-modal');
    
    // Verifica se encontrou os botões do modal antes de continuar
    if (btnExperimente.length > 0) {
        console.log("Botões 'open-modal' encontrados. Adicionando eventos...");
        
        // Adiciona um evento de clique para CADA botão encontrado
        btnExperimente.forEach(function(botao) {
            botao.addEventListener("click", function() {
                console.log("Botão 'open-modal' foi clicado!");
            });
        });
    }


    

    // Encontra o botão no documento 
    const backToTopButton = document.getElementById('backToTop');

    //  Só continua se o botão realmente existir.
    if (backToTopButton) {
        
        console.log("Botão 'Voltar ao Topo' encontrado.");

        // 3. Adiciona o "ouvinte" de rolagem na janela.
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block'; // Mostra o botão
            } else {
                backToTopButton.style.display = 'none';  // Esconde o botão
            }
        });

        // 4. Adiciona o "ouvinte" de clique no botão.
        backToTopButton.addEventListener('click', function() {
            console.log("Botão 'Voltar ao Topo' clicado! Rolando...");
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
    } else {
        console.warn("Aviso: O botão com id='backToTop' não foi encontrado no HTML.");
    }

});



document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.querySelector('.darkmode');
    const body = document.body;

    // Função para aplicar o tema (dark/light) e atualizar o texto do botão
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeButton.textContent = 'Light'; // Muda o texto do botão para "Light"
        } else {
            body.classList.remove('dark-mode');
            darkModeButton.textContent = 'Dark'; // Muda o texto do botão para "Dark"
        }
    };

    // Ao carregar a página, verifica se já existe um tema salvo no navegador do usuário
    const savedTheme = localStorage.getItem('theme') || 'light'; // Se não houver, o padrão é 'light'
    applyTheme(savedTheme);

    // Adiciona o evento de clique ao botão para alternar os temas
    darkModeButton.addEventListener('click', () => {
        // Verifica se o modo escuro está ativo no momento do clique
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            // Se estiver ativo, remove o modo escuro e salva a preferência
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        } else {
            // Se não estiver ativo, adiciona o modo escuro e salva a preferência
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        }
    });
});