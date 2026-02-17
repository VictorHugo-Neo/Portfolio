# 👨‍💻 Victor Hugo Lisboa | Portfolio v2

Este é o repositório do meu portfólio profissional, desenvolvido para consolidar minha atuação na intersecção entre o **Desenvolvimento de Software** e a **Análise de Dados**. O projeto foi arquitetado com foco em performance, tipagem estática e design minimalista.

**Acesse em:** [victorhugo.dev.br](https://victorhugo.dev.br)

---

## Tecnologias Utilizadas

### Frontend
* **React 18** + **Vite**: Framework e build tool de alta performance.
* **TypeScript**: Garantia de integridade e tipagem em todo o sistema.
* **Tailwind CSS**: Estilização utilitária com foco em responsividade e Dark Mode nativo.
* **Lucide React**: Biblioteca de ícones vetoriais.

### Integrações & Infraestrutura
* **GitHub API**: Extração em tempo real de metadados e tecnologias dos repositórios.
* **Vercel**: Deployment contínuo e gestão de infraestrutura global (CDN).
* **Registro.br**: Gestão de domínio personalizado (.dev.br).

---

## Funcionalidades Principais

- **Dark/Light Mode**: Persistência de tema e transições suaves via CSS Transitions.
- **Curadoria Dinâmica**: Integração com a API do GitHub para exibir projetos específicos através de filtros de normalização de strings.
- **Arquitetura Modular**: Divisão lógica de componentes (`Navbar`, `Header`, `About`, `Skills`, `Repositories`) para facilitar a manutenção.
- **SEO & Performance**: Configuração de meta-tags para indexação em motores de busca e otimização de ativos estáticos.

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