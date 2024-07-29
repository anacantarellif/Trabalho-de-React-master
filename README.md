# Lista de Ideias de Decoração

## Descrição da aplicação como um todo
Esta aplicação web responsiva permite adicionar uma nova ideia de decoração para festas infantis, como Barbie, Hello Kit, Winx... Usando `FormularioIdeia`, o usuário pode adicionar novas ideias de decoração, exibir as ideias com `ListaIdeias` mostrando todas as ideias adicionadas, editar e remover esses ítens/ideias da lista com `ItemIdeia`.



## Descrição de cada componente

### FormularioIdeia.jsx

**Descrição**: Componente de formulário para adicionar novas ideias de decoração.

**Funcionamento**: Renderiza um campo de entrada de texto e um botão de submissão. O campo de entrada permite que o usuário digite uma nova ideia, e o botão submete essa ideia ao ser clicado, chamando a função `adicionarIdeia`.

**Finalidade**: Facilitar a adição de novas ideias de decoração à lista.



### ListaIdeias.jsx

**Descrição**: Componente que exibe a lista de ideias de decoração.

**Funcionamento**: Recebe um array de ideias e mapeia cada ideia para o componente `ItemIdeia`, passando as funções de remoção e atualização de ideia como props.

**Finalidade**: Exibir todas as ideias de decoração adicionadas pelo usuário.



### ItemIdeia.jsx

**Descrição**: Componente para exibir e editar uma ideia individual.

**Funcionamento**: Renderiza uma ideia de decoração com opções para editar e excluir. Possui um modo de edição que, quando ativado, permite modificar o texto da ideia e salvá-la. Inclui botões para salvar a edição ou excluir a ideia.

**Finalidade**: Permitir que o usuário edite ou remova uma ideia específica da lista.



## Tecnologias Utilizadas
- React
- CSS

## Instruções de Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/anacantarellif/TrabalhoREACT.git
   
2. Digitar o comando:
   ```bash
   npm i

3. Digitar o comando:
   ```bash
   npm start
