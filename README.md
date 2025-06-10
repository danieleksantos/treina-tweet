# 🐦 Treina‑Tweet

O projeto Treina-Tweet tem como objetivo principal simular a experiência de um feed de tweets, desenvolvida para praticar conceitos de frontend com React.js.

## 🎯 Objetivos
Objetivos e Conceitos Abordados

* Componentização com React: O código é estruturado em componentes reutilizáveis (TextInput, Tweet, Index), o que promove a modularidade e organização do código.
- Gerenciamento de Estado:
- Hooks do React (useState, useEffect, etc.)
- Estado Controlado de Formulários
- Estilização com Módulos CSS
* Interação com Usuário:
- Manipulação de Eventos: Eventos como onChange (para o TextInput) e onClick (para o botão "Tweetar") são utilizados para capturar as interações do usuário.
- Validação de Entrada: O botão "Tweetar" é desabilitado quando o campo de texto está vazio
- Contador de Caracteres: (limite de caracteres do tweet)
* Exibição Dinâmica de Dados:
- Renderização de Listas: A lista de tweets é renderizada dinamicamente, exibindo cada tweet individualmente.
- Formatação de Datas: A biblioteca date-fns é utilizada para formatar a data de publicação do tweet de forma amigável (e.g., "há 5 minutos"), com localização para português do Brasil (ptBR).
* Passagem de Propriedades (Props)
- Manipulação de formulários e listas dinâmicas.
- Estruturação de código com React e CSS seguindo a metodologia BEM.

## 🔍 Demonstração ao vivo

👉 [Acesse o projeto aqui](https://treina-tweet.vercel.app/)

## 🚀 Tecnologias

- **Frontend**: React
- **Estilização**: CSS com metodologia BEM
- **Armazenamento local**: `localStorage`
- **Deploy**: Vercel


