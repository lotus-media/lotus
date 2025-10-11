import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress"; // É recomendado usar useRoute em vez de useRouter para observar mudanças de rota
import './style.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    
    const updateTexts = () => {
      // Garante que o código só será executado no navegador
      if (typeof document === 'undefined') return;
      
      // Traduz textos
      Array.from(document.querySelectorAll("body *")).filter(el => [
        "note", "important", "tip", "previous page", "next page", "caution", "search"
      ].includes(el.textContent.toLowerCase().trim())).forEach(el => {
        switch (el.textContent.toLowerCase().trim()) {
          case 'note':
            el.textContent = 'NOTA';
            break;
          case 'important':
            el.textContent = 'IMPORTANTE';
            break;
          case 'tip':
            el.textContent = 'SAIBA MAIS';
            break;
          case 'caution':
            el.textContent = 'ATENÇÃO';
            break;
          case 'previous page':
            el.textContent = 'Página anterior';
            break;
          case 'next page':
            el.textContent = 'Próxima página';
            break;
          case 'search':
            // Verifica se o elemento já não foi traduzido para evitar loops
            if (!el.innerHTML.includes('Pesquisar')) {
              el.innerHTML = 'Pesquisar&nbsp;&nbsp;';
            }
            break;
        }
      })
    }
    
    onMounted(() => {
      updateTexts();
    });
    
    watch(() => route.path, () => {
      // Usar nextTick garante que o DOM foi atualizado após a mudança de rota
      import('vue').then(({ nextTick }) => {
        nextTick(updateTexts);
      });
    });
  },
};