# Site Romântico

Projeto simples e direto para criar uma página especial com carta, galeria de fotos e música.

## Estrutura

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- Music/
|   |-- Musica.mp3
|-- Fotos/
|   |-- foto01.jpeg
|   |-- foto02.jpeg
|   |-- foto03.jpeg
|   |-- foto04.jpeg
|   |-- foto05.jpeg
|   |-- foto06.jpeg
```

## Como personalizar

1. Coloque sua música em `Music/Musica.mp3`.
2. Coloque as fotos em `Fotos/` com nomes no padrão:
   - `foto01.jpeg`
   - `foto02.jpeg`
   - `foto03.jpeg`
   - `foto04.jpeg`
   - `foto05.jpeg`
   - `foto06.jpeg`
3. Edite o texto da carta em `index.html`.
4. Se quiser mudar cores, ajuste as variáveis no topo de `styles.css`.

## Visual do site

- Tela inicial com destaque para a frase `Fiz isso pra você ❤️`
- Botão `Entrar` com rolagem suave
- Carta com tom emocional e visual clean
- Galeria com animação leve
- Música com autoplay e botão de pausar/tocar
- Encerramento com a frase `Feliz nosso dia.`

## Como abrir localmente

Como o projeto é estático, basta abrir `index.html` no navegador.

Se preferir rodar com servidor local, use uma destas opções:

```powershell
npx serve .
```

ou

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação rápida

### Netlify

1. Acesse o painel da Netlify.
2. Arraste a pasta do projeto para a área de deploy.
3. Aguarde a geração do link público.

### Vercel

1. Importe o projeto no painel da Vercel.
2. Como é um site estático, o deploy sai sem configuração extra.

### GitHub Pages

1. Envie os arquivos para um repositório.
2. Ative o GitHub Pages nas configurações.
3. Escolha a branch principal e a pasta raiz.

## QR Code

Depois de publicar, copie o link e gere um QR Code usando qualquer serviço online.

## Observações

- Alguns navegadores bloqueiam autoplay com som. Nesse caso, o botão de tocar resolve.
- O site já está apontando para `Music/Musica.mp3`.
- O site já está apontando para `Fotos/foto01.jpeg` até `Fotos/foto06.jpeg`.
