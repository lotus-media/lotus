<p class="breadcrumb"><a href="./">&lt;- Cultura Tech</a></p>

# Therac-25: o bug que matou – e o que ele ainda ensina aos desenvolvedores

Nos anos 80, um erro de software custou vidas em uma máquina de radioterapia. Neste post, revisitamos o caso do Therac-25 e destacamos as lições atemporais sobre responsabilidade, testes e desenvolvimento seguro.

---

![Imagem do computador controlador e da máquina de radioterapia](/images/posts/therac-25.jpg)

> Imagem do computador controlador e da máquina de radioterapia

Em meados da década de 1980, o Therac-25, uma máquina de radioterapia usada para tratar câncer, se tornou o centro de uma tragédia. Seis pacientes foram expostos a doses letais de radiação, alguns deles morrendo em poucos dias. O culpado não era uma peça quebrada, nem um erro do operador - era o software.

Desenvolvido pela AECL (Atomic Energy of Canada Limited), o Therac-25 foi o primeiro da linha a operar quase exclusivamente via software, sem os circuitos de segurança mecânicos que protegiam as versões anteriores. A empresa acreditava que o código era confiável. Não era.

## 🐛 Bugs de concorrência

Um dos principais erros no Therac-25 foi um bug de concorrência — um problema que ocorre quando duas ou mais operações são executadas ao mesmo tempo e interferem entre si de forma inesperada. No caso da máquina, se um operador digitasse comandos muito rapidamente para alterar o modo de radiação, o sistema não processava corretamente a sequência.

Na prática, o software achava que o feixe de radiação estava sendo moderado por um filtro, quando na verdade estava emitindo um feixe concentrado de elétrons diretamente no corpo do paciente. O sistema não acusava erro. A radiação era aplicada. E o dano era irreversível.

Bugs de concorrência são notoriamente difíceis de detectar porque não acontecem sempre — apenas sob condições muito específicas de tempo e ordem de execução. Em sistemas críticos, eles precisam ser tratados com rigor extremo.

## 🧪 O papel dos testes formais

Outro grande problema no caso do Therac-25 foi a ausência de testes formais. Enquanto testes tradicionais verificam se o software se comporta como esperado em vários cenários, testes formais envolvem técnicas matemáticas para provar que o código sempre funcionará corretamente, mesmo nos piores casos.

A AECL não aplicou testes formais nem realizou revisões completas do código. Confiou na experiência da equipe e no fato de que o software vinha sendo "reutilizado" de versões anteriores. O erro foi mortal.

## Quando software crítico falha

O caso do Therac-25 virou estudo obrigatório em engenharia de software, porque escancara uma verdade dura: software crítico precisa ser tratado como engenharia de segurança, não como simples desenvolvimento.

Em aplicações como saúde, aviação, transporte ou energia, um bug não é apenas uma falha funcional - é um risco direto à vida humana. Isso exige:

- Redundância (software + hardware);
- Logs e diagnósticos claros;
- Testes automatizados e manuais;
- Simulações de uso extremo;
- Auditoria externa e validação independente.

## ✅ A lição que fica

Erros de software podem acontecer. O problema é quando as equipes e empresas subestimam o impacto de um bug ou pulam etapas de validação em nome da pressa ou do custo.

O caso do Therac-25 nos lembra que, na engenharia de software, a confiança só é válida quando acompanhada de evidência concreta — e testes rigorosos.