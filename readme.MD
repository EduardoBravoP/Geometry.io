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

## Testes:
Ao todo implementei 6 testes incluindo teste de snapshot, tentando utilizar diferentes funções do jest e react-testing-library, você pode visualizar os arquivos de testes nesses paths:
`src/components/Input/input.test.tsx`
`src/pages/EditObject/editObject.test.tsx`
`src/pages/SignIn/signIn.snap.test.tsx`
`src/pages/SignIn/signIn.test.tsx`

## Padrão de projeto utilizado:
Neste projeto eu optei por utilizar a arquitetura MVVM (Model View View-Model)