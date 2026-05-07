"use client";

import BlogArticleLayout, { Section, RelatedArticle } from "@/components/BlogArticleLayout";

const sections: Section[] = [
  {
    id: "vicio-real",
    heading: "Antes de tudo: entenda que é um vício real",
    content: (
      <>
        <p>
          Se alguém que você ama está lutando contra o vício em pornografia, a primeira coisa que você precisa fazer é aceitar que não se trata de falta de amor, de caráter ou de respeito por você. É uma dependência neurológica — tão real quanto o alcoolismo ou o vício em jogos.
        </p>
        <p>
          O cérebro de quem tem esse vício foi condicionado ao longo de meses ou anos a buscar aquele estímulo específico. Isso não aconteceu por maldade. Aconteceu porque a pornografia é projetada para ser viciante — com novidade constante, gratificação instantânea e acessibilidade ilimitada.
        </p>
        <p>
          Compreender isso não significa aceitar o comportamento passivamente. Significa abordar a situação com a estratégia certa: com compaixão firme, em vez de raiva e julgamento que, na prática, alimentam o ciclo de culpa e isolamento que mantém o vício vivo.
        </p>
        <div
          className="rounded-xl px-5 py-4 my-2"
          style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.15)" }}
        >
          <p className="text-green-400 font-semibold text-sm leading-relaxed">
            "A pessoa com vício geralmente já sente vergonha profunda pelo comportamento. Mais vergonha não resolve — cria mais isolamento, que alimenta mais vício."
          </p>
        </div>
      </>
    ),
  },
  {
    id: "como-iniciar-conversa",
    heading: "Como iniciar a conversa sem afastar",
    content: (
      <>
        <p>
          A conversa inicial é delicada. A forma como ela começa pode abrir uma porta ou fechar todas as portas por meses. Algumas orientações práticas:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Escolha o momento certo", d: "Não aborde o assunto logo após uma briga, quando estiver com raiva ou em público. Um momento calmo, em privado, cria mais abertura." },
            { t: "Fale de como você se sente, não do que ele fez", d: "\"Percebi algo que me preocupa e quero entender\" funciona muito melhor do que acusações diretas." },
            { t: "Evite ultimatos na abertura", d: "Ultimatos na primeira conversa geralmente geram defensividade, não honestidade. Eles têm lugar — mas não aqui, não agora." },
            { t: "Demonstre que você está ao lado, não contra", d: "\"Estou aqui para entender, não para julgár\" — e cumpra isso na prática." },
          ].map((item) => (
            <li key={item.t} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <div>
                <span className="text-white font-semibold">{item.t}: </span>
                <span>{item.d}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "o-que-evitar",
    heading: "O que evitar — armadilhas que pioram a situação",
    content: (
      <>
        <p>
          Com as melhores intenções, é fácil cometer erros que pioram o quadro. Os mais comuns:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Monitoramento obsessivo", d: "Verificar o celular, histórico do navegador ou cobrar relatórios diários cria um ambiente de desconfiança que aumenta o estresse — e o estresse é um gatilho direto para o vício." },
            { t: "Vergonha como ferramenta", d: "Frases como \"como você pode fazer isso comigo\" ou \"você é fraco\" não motivam mudança. Intensificam a espiral de culpa → vício → culpa." },
            { t: "Tentar controlar a recuperação", d: "Você pode oferecer suporte, mas não pode fazer a recuperação por outra pessoa. Tentar controlar cada passo gera resistência e dependência invertida." },
            { t: "Ignorar seus próprios limites", d: "Apoiar alguém com vício é emocionalmente exigente. Negligenciar seu próprio bem-estar não ajuda ninguém — e é insustentável a longo prazo." },
          ].map((item) => (
            <li key={item.t} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <div>
                <span className="text-white font-semibold">{item.t}: </span>
                <span>{item.d}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "como-dar-suporte",
    heading: "Como dar suporte sem se perder",
    content: (
      <>
        <p>
          Apoiar alguém que você ama em uma jornada de recuperação é um ato de amor genuíno. Também é um ato que exige que você cuide de si mesmo no processo.
        </p>
        <p>
          Formas concretas de apoiar sem se dissolver:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Informe-se sobre o vício em pornografia — não para virar especialista, mas para entender o que está acontecendo",
            "Pergunte o que a pessoa precisa de você, em vez de assumir",
            "Celebre progressos — mesmo que pequenos. Uma semana limpa merece reconhecimento genuíno",
            "Seja consistente, não perfeito. Você vai ter dias de paciência zero — isso é normal",
            "Estabeleça limites claros para você mesmo sobre o que é e não é aceitável na relação",
            "Considere acompanhamento terapêutico para você também — muitas clínicas oferecem suporte para familiares e parceiros",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "para-parceiros",
    heading: "Orientações específicas para parceiros(as)",
    content: (
      <>
        <p>
          Descobrir que um parceiro tem vício em pornografia provoca reações que vão do choque à raiva, da tristeza à dúvida sobre si mesmo. Muitos parceiros se perguntam: "Não sou suficiente?" A resposta objetiva é: não tem nada a ver com você. Vício em pornografia existe independentemente da qualidade da relação ou da atratividade do parceiro.
        </p>
        <p>
          Dito isso, o impacto na relação é real e merece atenção:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Converse sobre como o vício afetou a intimidade — não como acusação, mas como fato que precisa ser abordado",
            "Defina juntos o que a recuperação precisa parecer para que a relação continue — sem expectativas implícitas",
            "Considere terapia de casal, especialmente se a confiança foi abalada",
            "Dê tempo para o processo — recuperação genuína não acontece em semanas",
            "Cuide da sua saúde emocional com a mesma seriedade que você cuida da relação",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          O RENOVO tem recursos específicos para parceiros(as) — incluindo orientações sobre como acompanhar a recuperação sem invadir e como manter comunicação aberta ao longo do processo.
        </p>
      </>
    ),
  },
  {
    id: "ajuda-profissional",
    heading: "Quando buscar ajuda profissional",
    content: (
      <>
        <p>
          O suporte de familiares e parceiros é essencial, mas há situações em que ajuda profissional é necessária — e quanto antes, melhor:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Quando o vício está causando impacto severo no trabalho, relacionamentos ou saúde mental",
            "Quando há sinais de depressão, ansiedade grave ou pensamentos autodestrutivos associados",
            "Quando múltiplas tentativas de parar sozinho falharam",
            "Quando o vício envolve comportamentos que cruzam limites legais ou éticos",
            "Quando você (como parceiro ou familiar) está com sua saúde mental comprometida pelo impacto do vício alheio",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          O RENOVO não substitui terapia profissional — e foi construído com essa consciência. O Luigi, nosso terapeuta com IA, pode ser um suporte poderoso no dia a dia, mas para casos graves, o acompanhamento profissional é insubstituível. Se você identificar qualquer sinal acima, procure um psicólogo especializado em dependências comportamentais.
        </p>
      </>
    ),
  },
];

const related: RelatedArticle[] = [
  {
    title: "Como parar o vício em pornografia",
    image: "/blog-ajudar.png",
    href: "/blog/como-parar-o-vicio-em-pornografia",
  },
  {
    title: "Como superar o vício em pornografia e se livrar totalmente",
    image: "/blog-beneficios.png",
    href: "/blog/como-superar-o-vicio-em-pornografia",
  },
  {
    title: "Descubra os benefícios completos de parar com o vício",
    image: "/blog-superar.png",
    href: "/blog/beneficios-de-parar-com-pornografia",
  },
];

export default function Page() {
  return (
    <BlogArticleLayout
      title="Como ajudar alguém com vício em pornografia"
      heroImage="/blog-parar.png"
      readTime="8 min"
      date="6 de maio de 2025"
      intro="Se alguém que você ama está lutando contra o vício em pornografia, você provavelmente já sentiu impotência, raiva e confusão. Este guia mostra como ajudar de verdade — sem se perder no processo."
      sections={sections}
      related={related}
    />
  );
}
