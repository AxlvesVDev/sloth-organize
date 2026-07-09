# 🦥 SlothOrganize

Sistema de organização pessoal focado em produtividade, gerenciamento de tarefas, controle financeiro e acompanhamento de hábitos.

O objetivo do projeto é centralizar em um único ambiente ferramentas que auxiliem na organização diária, permitindo que o usuário acompanhe tarefas, finanças e histórico de produtividade de forma simples e intuitiva.

---

## 📸 Preview

![SlothOrganize]
<img width="1511" height="802" alt="Captura de tela 2026-06-04 224836" src="https://github.com/user-attachments/assets/10fe283a-dbf6-4db0-b31c-e1066ab2d796" />


---

## 🚀 Funcionalidades

### ✅ Autenticação

- Cadastro de usuários
- Login com e-mail e senha
- Senhas criptografadas com BCrypt
- Geração de token JWT
- Persistência de usuários em PostgreSQL

### 📋 Gerenciamento de Tarefas

- Criar tarefas
- Definir prioridade
- Adicionar data e horário
- Definir duração estimada
- Criar subtarefas
- Marcar tarefas como concluídas
- Histórico de tarefas concluídas

### 📅 Calendário

- Visualização mensal
- Histórico de tarefas concluídas por data
- Navegação entre meses

### 💰 Controle Financeiro

- Registro de entradas
- Registro de saídas
- Cálculo automático de saldo
- Indicadores financeiros
- Exportação de relatório CSV

### ⏱️ Modo Foco

- Temporizador Pomodoro
- Auxílio para concentração e produtividade

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express
- TypeScript

### Banco de Dados

- PostgreSQL
- Prisma ORM

### Autenticação

- JWT (JSON Web Token)
- BCryptJS

### Ferramentas

- Prisma Studio
- Beekeeper Studio
- Git
- GitHub

---

## 📂 Estrutura do Projeto

```text
SlothOrganize
│
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controller
│   │   ├── routes
│   │   ├── prisma.ts
│   │   └── server.ts
│   │
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── components
│   ├── services
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
│
└── README.md
