# Geometry.io

## Instale as dependências do projeto:
```bash
npx expo install
```

## Adicione o arquivo .env.local
Adicione o arquivo de variável de ambiente com os dados do firebase

## Rode o projeto:
```bash
npx expo start
```
>**OBS**: Para uma melhor experiência é recomendável que o projeto seja rodado em um dispositivo físico por conta da biblioteca `@react-three/fiber`, ou em um emulador android. Durante o desenvolvimento tive problemas de renderização dos objetos com o emulador iOS.

## Rode os testes:
```bash
# com npm
npm run test

# com yarn
yarn test
```
Para atualizar os snapshots:
```bash
# com npm
npm run test -u

# com yarn
yarn test -u
```

## Padrão de projeto utilizado:
Neste projeto eu optei por utilizar a arquitetura MVVM (Model View View-Model)