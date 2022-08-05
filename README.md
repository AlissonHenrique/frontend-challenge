
## Projeto 

Como instalar e startar

- `git clone https://github.com/AlissonHenrique/frontend-challenge`

- `Va até a pasta `
- `yarn i ou npm i`
- `yarn run dev ou npm run dev `



===========================================================================

O projeto consiste de uma tela de lista de personagens e uma tela de detalhe do personagem.

Você é livre para definir o layout e arquitetura que vai utilizar. Não é necessário implementar da mesma maneira que nas imagens de exemplo. 

Qualquer funcionalidade extra é bem vinda para agregar na solução proposta.

Estamos avaliando pela qualidade do código, pela modularidade e pela criatividade.

## Instruções

Crie um fork deste projeto e desenvolva em cima dele. Use o README.md do seu repositório para colocar instruções de como rodar o seu projeto.

#### Como entrego meu teste?

Nos envie um email com o link do seu fork para o email ingo.eyng@repassa.com.br

#### Prazo

Será combinado entre o candidato e responsável pela entrevista.

## Teste prático

Crie uma aplicação _**React**_ ou _**Next.js**_ que consuma a API (https://rickandmortyapi.com/) que tenha 2 páginas principais citadas abaixo.

Fique a vontade para implementar a maneira que deseja para consumir a API, utlizando REST ou GraphQL. Essa API fornece as duas maneiras.

### Listagem de personagens (`/`):

1. Consumir API para obter os dados para listagem
    - **REST**: https://rickandmortyapi.com/documentation/#get-all-characters
    - **GraphQL**: Query `characters` passando argumento `page` (https://rickandmortyapi.com/graphql)
2. Listar os personagens de `Rick and Morty` com paginação, mostrando-os em formato de card como imagem abaixo

![image](https://user-images.githubusercontent.com/6909132/175135119-21b5a325-cde7-49e5-ab73-90d1ef9a3858.png)

> Opcional: Implementar filtros de busca na tela de listagem

### Ficha completa do personagem (`/personagem/[id]`)

1. Ao clicar no card do personagem, o usuário é redirecionado para `/personagem/[id]`
2. Mostrar ficha completa do personagem:
    - **REST**: `get-a-single-character` na documentação
    - **GraphQL**: Query `character` passando argumento `id` (https://rickandmortyapi.com/graphql)

    > Fique a vontade para mostrar quaisquer dados adicionais do personagem, disponíveis na API, que julgar importante.

### Opcionais:

- Em ambas as telas mostrar um componente de carregamento (loading) enquanto a requisição não é concluída.

## Dúvidas?

Envie um e-mail para ingo.eyng@repassa.com.br
