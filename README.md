# 🩺 Médicos & Dentistas Solidários

> Um portal moderno e acolhedor para conectar profissionais de saúde e voluntários.

## 🖼️  Visualização do Projeto

<img width="2560" height="1600" alt="Captura de tela 2025-12-16 163608" src="https://github.com/user-attachments/assets/57f98bdb-3169-47bd-a62d-09ff8cbb4c89" />

Acesse a página em produção através deste link:  
👉 [**Link para o Deploy**](https://desafio-rotas-tau.vercel.app/)

## 🎨 Design

O layout foi baseado no protótipo disponibilizado no Figma:
📎 [**Link do Figma**](https://www.figma.com/design/3xVb8soN2e6NHfrNM3kd5J/Desafio-Rotas?node-id=1-2&t=tpPx934tixLguEDm-0)


## 📄 Sobre o Projeto

Este projeto foi desenvolvido como parte de um desafio técnico focado no domínio de **SCSS** e **React**. O objetivo foi criar uma aplicação Front-end responsiva, estruturada com rotas e componentes reutilizáveis, para apresentar informações sobre saúde e permitir o cadastro de voluntários.

O grande diferencial deste projeto reside nas suas restrições técnicas: **todo o layout foi construído sem o uso de Frameworks CSS (como Bootstrap ou Tailwind) e sem propriedades de posicionamento (Position) ou Grid Layout**, exigindo um domínio profundo de **Flexbox** e fluxo de documento.

## ⚙️ Funcionalidades

- **Página Inicial (Home):** Apresentação da missão, impacto e cards informativos.
- **Página de Voluntários:** Formulário de cadastro interativo para novos voluntários.
- **Navegação:** Roteamento via `react-router-dom`.
- **Menu Responsivo:** Menu hambúrguer funcional implementado com lógica de estado (sem Bootstrap).
- **Design Responsivo:** Adaptável a mobile, tablet e desktop.

## 🛠️ Tecnologias Utilizadas

- **React.js (Vite):** Estrutura da aplicação.
- **Sass (SCSS):** Estilização com uso de aninhamento (nesting) e variáveis.
- **React Router DOM:** Gerenciamento de rotas.
- **JavaScript (ES6+):** Lógica de interação.

## 🚧 O Desafio e Restrições Técnicas

Para testar os fundamentos do CSS, o projeto seguiu regras estritas:

- ✅ **Uso Obrigatório:** Flexbox (`display: flex`), Variáveis CSS/Sass, Design Responsivo (Media Queries), Unidades relativas (`rem`, `%`, `vh`).
- ❌ **Proibido:** CSS Grid, Propriedade `position` (absolute, relative, fixed, sticky), Frameworks de CSS e Bibliotecas de UI prontas.

*Isso garante que toda a estrutura, incluindo o menu sobreposto no mobile e o alinhamento dos elementos, foi feita puramente com lógica de Flexbox e manipulação do DOM.*

## 💚 Identidade Visual

A paleta de cores e tipografia foi escolhida para transmitir higiene e bem-estar, focando em tons de verde e cores neutras:

- 💚 **Verde:** Representando saúde e esperança.
- 🦷 **Branco/Cinza:** Higiene, clareza e modernidade.
- **Fonte:** Inter (Google Fonts) para melhor legibilidade.

## 🚀 Como rodar o projeto

1. Clone o repositório:
 ```bash
 git clone https://github.com/ingridmoitinho//desafio-rotas.git
 ```
2. Acesse a pasta do projeto:
```bash
cd desafio-rotas
```
3. Instale as dependências:
 ```bash
npm install
```
4. Rode o projeto:
```bash
npm run dev
```

## ✨ Autora
**Ingrid Moitinho**  

🔗 [LinkedIn](https://www.linkedin.com/in/ingridmoitinho)
