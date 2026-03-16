# AVANTI — E-commerce Layout
 
Desafio técnico do Programa de Estágio AVANTI: desenvolvimento pixel-perfect de um layout de e-commerce a partir de um protótipo Figma, com versões desktop e mobile.
 
---
 
## Tecnologias utilizadas
 
- **HTML5** semântico
- **CSS3** com media queries para responsividade
- **Tailwind CSS** (via CDN)
- **JavaScript** (vanilla)
- **Swiper.js** para os carrosséis de produtos
 
---
 
## Funcionalidades implementadas
 
- Layout fiel ao protótipo Figma nas versões **desktop e mobile**
- **Header fixo** no mobile com hamburguer menu
- **Busca funcional**: ao clicar na lupa, exibe a mensagem `Você buscou por: 'termo'` abaixo do campo
- **Carrosséis de produtos** com Swiper.js, navegação por setas e paginação por pontos
  - Desktop: até 5 cards visíveis
  - Mobile: 2 cards visíveis
- **Dropdowns** de categorias e departamentos na navegação
- **Seções de destaque** com imagem e texto gerados dinamicamente via JS
- **Footer responsivo** com accordion no mobile (Institucional, Central de ajuda, Atendimento)
- **Newsletter** com layout adaptado para mobile
 
---
 
## Estrutura do projeto
 
```
├── index.html
├── global.css
├── script.js
└── assets/
    └── imgs/
        ├── icons/
        ├── footer-imgs/
        └── pagamentos-img/
```
 
---
 
## Como rodar
 
Basta abrir o `index.html` diretamente no navegador — não há dependências de build.