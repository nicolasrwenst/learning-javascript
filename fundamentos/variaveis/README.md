# Variáveis em JavaScript

Tipos: `var`, `let`, `const`

- `var`: escopo de função (hoisting). Pode ser redeclarada e reatribuída. Evitar em código moderno.
- `let`: escopo de bloco. Pode ser reatribuída, não redeclarada no mesmo escopo.
- `const`: escopo de bloco. Não pode ser reatribuída (referência imutável), porém objetos referenciados podem mutar suas propriedades.

Diferentes comportamentos:
- Hoisting: declarações com `var` são içadas e inicializadas com `undefined`; `let`/`const` são içadas mas ficam em "temporal dead zone" até a atribuição.
- Escopo: `var` não respeita bloco `{}`; `let` e `const` sim.

Exemplo prático (veja `example.js`):

- Mostra diferenças de escopo, hoisting e comportamento de `const` com objetos.
