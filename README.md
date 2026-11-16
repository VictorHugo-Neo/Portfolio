# 👨‍💻 Victor Hugo Lisboa | Portfolio

Este é o repositório do meu portfólio profissional, desenvolvido para consolidar minha atuação na intersecção entre a **Engenharia de Software (Full-Stack)** e a **Docência Técnica**. O projeto foi arquitetado com foco em usabilidade, performance, acessibilidade e design minimalista.

**Acesse em:** [victorhugo.dev.br](https://victorhugo.dev.br)

---

## Tecnologias Utilizadas

### Frontend
* **React 19** + **Vite**: Framework e build tool de alta performance.
* **TypeScript**: Tipagem estática rigorosa e segurança de contratos.
* **Tailwind CSS v4**: Estilização utilitária de última geração com Dark Mode nativo via classe e persistência.
* **Lucide React**: Biblioteca de ícones vetoriais leves e acessíveis.

### Integrações & Infraestrutura
* **GitHub API**: Sincronização assíncrona de metadados dos repositórios com fallback local contra *rate limit*.
* **Vercel**: Deployment contínuo e CDN global.
* **Registro.br**: Domínio personalizado (`victorhugo.dev.br`).

---

## Funcionalidades Principais

- **Foco Editorial Minimalista**: Apresentação direta e sem ruído visual para clientes e recrutadores.
- **Divisão Clara da Trajetória**: Seções paralelas dedicadas para **Serviços & Atuação Profissional** e **Estudos & Formação Acadêmica**.
- **Dark/Light Mode Persistente**: Armazenamento no `localStorage` e sincronização automática com preferências do sistema.
- **Acessibilidade Completa (WCAG AA)**: Navegação por teclado, rótulos acessíveis (`aria-label`), anéis de foco visíveis e escala tipográfica legível.
- **Resiliência de Dados**: Carregamento instantâneo de projetos em produção (*SAEB Analytics*, *MatDiscreta/NumLab*) e publicação científica com tolerância a falhas na API externa.

---

## Estrutura do Projeto

```text
src/
 ├── components/      # Componentes React reutilizáveis
 ├── data/            # Constantes e configurações de dados
 ├── services/        # Lógica de integração com APIs externas
 ├── App.tsx          # Componente principal e orquestrador de estado
 └── main.tsx         # Ponto de entrada da aplicação
public/
 └── data/            # Arquivos estáticos (PDFs, Assets)