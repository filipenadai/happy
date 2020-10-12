## Happy NLW#3

### Uma semana de aprendizado com conteúdo inédito disponibilizado pela Rocketseat. 
![](web/src/images/logo.svg)

A aplicação consiste em cadastrar e ver orfanatos da região, mostrando meios e horários de se fazer uma visita para as crianças que vivem nele. 
Nessa aplicação será utilizado algumas ferramentas como: 

- [x] Node.JS
- [x] React.JS
- [x] React Native
- [x] Leaflet (para a visualização de mapas)

Adicionei algumas outras ferramentas para acelerar e melhorar meu código: 

- [x] ESlint
- [x] Prettier
- [x] Styled-Components (para fazer o CSS)

Podemos ver algumas imagens de como está ficando a aplicação logo abaixo: 

<img src="https://media-exp1.licdn.com/dms/image/C4D22AQEpG-UkI0UEhg/feedshare-shrink_1280-alternative/0?e=1605139200&v=beta&t=lM3iXfLVtPbEhEtDc_cSQmtldTXpDsxPdp43y080WrU">
<img src="https://media-exp1.licdn.com/dms/image/C4D22AQFBSHf138IZOQ/feedshare-shrink_1280-alternative/0?e=1605139200&v=beta&t=eP0faVFgKkTq0FUgCswLDo-osX6o50YQy36b5ZBv3rs">

Para instalar e usar esta aplicação basta fazer o ```git clone``` e instalar suas dependências com: 
```npm install``` ou ```yarn add```.
Lembrando que para utilizar o mapa você pode descomentar o código que está comentado do leaflet dentro do arquivo ```web/src/pages/orphanages/index.tsx```, ou pode criar uma conta no Mapbox e utilizar um Token de sua conta colocando em um arquivo ```.env``` na raiz do projeto da pasta "web", use o nome ```REACT_APP_TOKEN_MAP``` para colocar o token.
