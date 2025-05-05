# Nuplist Web

Um aplicativo web para planejamento financeiro de casamentos, ajudando casais a gerenciar orçamentos, convidados e contribuições.

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nuplist-web.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🏗️ Estrutura do Projeto

```
src/
├── app/              # Páginas e layouts do Next.js
├── components/       # Componentes React
│   ├── atoms/       # Componentes básicos
│   ├── molecules/   # Componentes compostos
│   └── organisms/   # Componentes complexos
├── hooks/           # Custom hooks
├── services/        # Serviços e APIs
├── types/           # Definições de tipos TypeScript
└── utils/           # Funções utilitárias
```

## 🎨 Padrão de Design

O projeto segue o padrão de design Atomic Design, dividindo os componentes em:

- **Atoms**: Componentes básicos (botões, inputs, etc.)
- **Molecules**: Combinações de atoms (formulários, cards, etc.)
- **Organisms**: Componentes complexos (seções, layouts, etc.)

## 🔄 Padrão de Serviços

![Service-Pattern](https://github.com/user-attachments/assets/cccd1e03-1fa9-40f9-ad05-1440fdfe4417)

O projeto utiliza um padrão de serviços para gerenciar as chamadas à API:

- **Services**: Serviços específicos por domínio
- **Hooks**: Custom hooks para gerenciar estado e lógica

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
