# Projeto de Autenticação com Firebase e Google

Este é um projeto de estudo que demonstra a implementação de autenticação usando Firebase e login com Google em uma aplicação React.

## 🚀 Funcionalidades

- Autenticação com Google usando Firebase
- Página de login
- Página de logout
- Interface responsiva com Tailwind CSS

## 🛠️ Tecnologias Utilizadas

- React
- Firebase
- Tailwind CSS

## 📋 Pré-requisitos

- Node.js instalado
- Conta no Google Cloud Console
- Projeto Firebase configurado

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PedroHBachiega/Login-Google-Firebase
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
   - Preencha as variáveis no arquivo `.env` com suas credenciais do Firebase:
   ```
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
   VITE_FIREBASE_PROJECT_ID=seu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
   ```

4. Inicie o projeto:
```bash
npm start
```

## 🔐 Configuração do Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative a autenticação com Google
4. Obtenha as credenciais de configuração
5. Adicione as credenciais ao arquivo `.env`

## 📁 Estrutura do Projeto

```
src/
  ├── pages/
  │   ├── Login/
  │   └── Logout/
  ├── firebaseConfig.js
  └── App.jsx
```

## 🎯 Aprendizados

Este projeto foi desenvolvido para estudo e demonstra:
- Integração com Firebase
- Autenticação social com Google
- Estilização com Tailwind CSS
- Gerenciamento de estado de autenticação

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

[Pedro Henrique Bachiega]

---

Feito com ❤️ para estudos de autenticação com Firebase

