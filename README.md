<h2 align="center">Happy #NLW3</h2>

### Uma semana de aprendizado com conteúdo inédito disponibilizado pela Rocketseat. 

A aplicação consiste em cadastrar e ver orfanatos da região, mostrando meios e horários de se fazer uma visita para as crianças que vivem nele. 
Nessa aplicação será utilizado algumas ferramentas como: 

- [x] Node.JS
- [x] React.JS
- [x] React Native
- [x] Leaflet (para a visualização de mapas)
- [x] SQLite (Implementarei um PostgreSQL)
- [x] TypeORM
- [x] Typescript

Adicionei algumas outras ferramentas para acelerar e melhorar meu código: 

- [x] ESlint
- [x] Prettier
- [x] Styled-Components (para fazer o CSS)

Podemos ver algumas imagens da aplicação logo abaixo: 

<h3>Landing<h3>  

<img width="50%" src="https://media-exp1.licdn.com/dms/image/C4D22AQEpG-UkI0UEhg/feedshare-shrink_1280-alternative/0?e=1605139200&v=beta&t=lM3iXfLVtPbEhEtDc_cSQmtldTXpDsxPdp43y080WrU">

<h3>Mapas<h3>  

<img width="50%" src="https://media-exp1.licdn.com/dms/image/C4D22AQFBSHf138IZOQ/feedshare-shrink_1280-alternative/0?e=1605139200&v=beta&t=eP0faVFgKkTq0FUgCswLDo-osX6o50YQy36b5ZBv3rs">

<h3>Detailhes do orfanato (Mobile)<h3>  

<img width="50%" src="https://media-exp1.licdn.com/dms/image/C4D22AQFPZhkVokN-BA/feedshare-shrink_2048_1536-alternative/0?e=1606348800&v=beta&t=uH5P7s1pJuNi5S0VgXo8I6NZC-zn4QXS_gcu2n9pkwg">


<h3 align="center">Desafios</h3>

Foi proposto alguns desafios pela Rocketseat para levar esta aplicação para um próximo nivel, logo abaixo se encontram estes desafios e o meu progresso no desenvolvimento: 

- [ ] Cadastro de usuários para acesso restrito.
- [ ] Sistema de autenticação usando JWT.
- [ ] Uma dashboard para usuários autenticados.
- [ ] Recuperação de senhas.
- [ ] Cadastro de orfanatos com pendência de aprovação por um usuário administrador.
- [ ] Sucesso e cancelamento de cadastro. (Mobile)
- [x] Tela de sucesso. (Web)
- [ ] Excluir orfanatos. (Web)
- [ ] Splash Screen no mobile.
- [ ] Onboarding do usuário.
- [ ] Localização real do usuário.
- [ ] Cadastro em múltiplas etapas.
- [ ] Logout da aplicação.

Outros desafios pessoais meus: 

- [ ] Refatorar o código.
- [ ] Utilizar o PostgreSQL.
- [ ] Implementar um WebSocket.


Para instalar e usar esta aplicação sigas os passos abaixo.

1. Faça um ```git clone``` do projeto.

2. Instale as dependências em todas as pastas utilizando ```npm install``` ou ```yarn add```.

3. Lembrando que para utilizar o mapa você pode descomentar o código que está comentado do leaflet dentro do arquivo ```web/src/pages/orphanages/index.tsx```, ou pode criar uma conta no Mapbox e utilizar um Token de sua conta colocando em um arquivo ```.env``` na raiz do projeto da pasta "web", use o nome ```REACT_APP_TOKEN_MAP``` para colocar o token.
