<p class="breadcrumb"><a href="./">&lt;- Tutoriais</a></p>

# Dando Vida à sua Rolagem: Uma Introdução às Animações CSS Scroll-Driven

Desenvolvedor, diga adeus às bibliotecas JavaScript pesadas para criar animações que respondem à rolagem da página\! O CSS oferece uma maneira nativa e de alto desempenho para criar efeitos impressionantes com as **Animações Scroll-Driven** (Animações Guiadas pela Rolagem).

<img src="/images/posts/css.png" alt="Imagem com três blocos na cor azul, formando a sigla CSS." style="border-radius: 10px; margin-bottom: 2rem; max-height: 200px; width: 100%; object-fit: cover;">

Neste post, vamos mergulhar de forma simples e didática em como você pode começar a usar essa nova e empolgante funcionalidade do CSS para adicionar interatividade e um toque especial aos seus projetos, sem a necessidade de criar componentes complexos.

## O que são Animações Scroll-Driven?

Em essência, as Animações Scroll-Driven vinculam o progresso de uma animação CSS à posição da barra de rolagem de um contêiner. Isso significa que, em vez de uma animação ser executada em um período de tempo fixo (como segundos), ela avança ou retrocede conforme o usuário rola para cima ou para baixo.

Existem dois tipos principais de linhas do tempo (timelines) que podemos usar:

1. **Scroll Progress Timeline (`scroll()`):** A animação é vinculada ao progresso geral da rolagem de um contêiner. Pense em uma barra de progresso de leitura que preenche à medida que você desce a página.
2. **View Progress Timeline (`view()`):** A animação é vinculada à visibilidade de um elemento específico dentro da área de visualização (viewport). É perfeita para efeitos de revelação, onde um elemento aparece gradualmente à medida que entra na tela.

## Mão na Massa: Criando sua Primeira Animação

Vamos criar um exemplo clássico e muito útil: uma barra de progresso no topo da página que indica o quanto o usuário já rolou.

**Estrutura HTML**

Primeiro, adicione este HTML simples ao seu arquivo Markdown no VitePress.

```html

<div class="progress-bar"></div>
<div class="content">
  <h1>Continue Rolando</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
</div>
```

**Estilização com CSS**

Agora, vamos à mágica do CSS. Você pode adicionar este código a um arquivo CSS global do seu projeto VitePress ou diretamente em uma tag `<style>` no seu componente ou página.

```css
/* Estilo básico para a barra de progresso */
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: #42b883; /* Um verde Vue-like ;) */
  width: 0%; /* Começa com largura zero */
}

/* A animação que fará a barra crescer */
@keyframes grow-progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

/* Vinculando a animação à rolagem da página */
.progress-bar {
  animation: grow-progress linear;
  animation-timeline: scroll(root);
}

/* Estilos para o conteúdo de exemplo */
.content {
  padding: 2rem;
  padding-top: 50px;
  height: 200vh; /* Apenas para garantir uma rolagem longa */
}
```

**Entendendo o Código:**

* `@keyframes grow-progress`: Define uma animação simples que aumenta a `width` de 0% para 100%.
* `animation: grow-progress linear;`: Aplica a animação ao nosso elemento `.progress-bar`. O `linear` garante uma progressão suave e direta com a rolagem.
* `animation-timeline: scroll(root);`: Esta é a propriedade chave\! Ela diz ao navegador para não usar uma linha do tempo baseada em tempo, mas sim a posição da rolagem.
    * `scroll()`: Ativa uma *Scroll Progress Timeline*.
    * `root`: Especifica que queremos acompanhar a rolagem do contêiner de rolagem principal do documento (a página inteira).

## Revelando Elementos ao Rolar

Outro efeito popular é fazer com que os elementos apareçam suavemente à medida que entram na tela. Para isso, usaremos a `view()`.

**Estrutura HTML**

```html

<div class="content">
  <img src="httpsa://via.placeholder.com/400" alt="Placeholder Image" class="reveal-image">
  <p>Mais conteúdo aqui...</p>
  <img src="https://via.placeholder.com/400" alt="Placeholder Image" class="reveal-image">
</div>
```

**Estilização com CSS**

```css
/* Animação para revelar a imagem */
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicando a animação de revelação */
.reveal-image {
  animation: reveal 1s ease-out;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

**Entendendo o Código:**

* `@keyframes reveal`: Define uma animação que muda a `opacity` de 0 para 1 e move o elemento um pouco para cima.
* `animation-timeline: view();`: Aqui, usamos a `view()` para criar uma *View Progress Timeline*. A animação será controlada pela visibilidade do elemento `.reveal-image` na tela.
* `animation-range: entry 0% cover 40%;`: Esta propriedade nos dá um controle mais refinado sobre quando a animação acontece.
    * `entry 0%`: A animação começa assim que o elemento começa a entrar na área de visualização.
    * `cover 40%`: A animação termina quando o elemento cobriu 40% da área de visualização. Isso cria um efeito de revelação rápido e suave conforme o elemento aparece.

## Compatibilidade com Navegadores e Melhoria Progressiva

As Animações Scroll-Driven são uma tecnologia moderna e o suporte está crescendo. Atualmente, elas funcionam nas versões mais recentes do Chrome, Edge e estão em desenvolvimento no Firefox.

Para garantir que seu site continue funcionando bem em navegadores que ainda não suportam essa funcionalidade, você pode usar a regra `@supports` do CSS. Isso se chama **melhoria progressiva** (progressive enhancement).

```css
@supports (animation-timeline: scroll()) {
  /* Todo o nosso código de animação scroll-driven vai aqui */
  .progress-bar {
    animation: grow-progress linear;
    animation-timeline: scroll(root);
  }

  .reveal-image {
    animation: reveal 1s ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }
}
```

Dessa forma, apenas os navegadores que entendem `animation-timeline` aplicarão as animações, enquanto os outros simplesmente exibirão o conteúdo estaticamente, sem quebrar a página.

## Conclusão

As Animações Scroll-Driven em CSS abrem um novo mundo de possibilidades para criar experiências web mais dinâmicas e engajadoras, tudo isso sem a necessidade de uma única linha de JavaScript. Com algumas propriedades CSS, você pode facilmente adicionar barras de progresso, efeitos de revelação e muito mais.

Experimente estes exemplos no seu projeto e veja como é simples dar mais vida às suas páginas\!