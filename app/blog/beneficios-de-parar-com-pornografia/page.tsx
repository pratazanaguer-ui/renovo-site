"use client";

import BlogArticleLayout, { Section, RelatedArticle } from "@/components/BlogArticleLayout";

const sections: Section[] = [
  {
    id: "primeiras-72-horas",
    heading: "O que muda nas primeiras 72 horas",
    content: (
      <>
        <p>
          As primeiras 72 horas são as mais difíceis — e também as mais reveladoras. O corpo e o cérebro iniciam imediatamente o processo de regulação dopaminérgica, e os primeiros sinais aparecem mais rápido do que a maioria espera.
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Sono", d: "A qualidade do sono começa a melhorar. Adormecer fica mais fácil, o sono se torna mais profundo e o despertar é menos pesado." },
            { t: "Clareza mental", d: "Uma leve redução da névoa mental começa a aparecer. Pensamentos ficam um pouco mais nítidos e o foco aumenta discretamente." },
            { t: "Irritabilidade", d: "Paradoxalmente, os primeiros dias podem trazer mais irritação e ansiedade — são os sintomas de abstinência. Passam." },
            { t: "Presença", d: "Muitos homens relatam já sentir uma qualidade diferente de atenção — como se tivessem \"voltado para o corpo\"." },
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
        <p className="mt-4">
          72 horas. Três dias. É o primeiro marco — e ele importa.
        </p>
      </>
    ),
  },
  {
    id: "30-dias",
    heading: "30 dias: foco, energia e sono de volta",
    content: (
      <>
        <p>
          Com 30 dias limpos, os receptores de dopamina começam a se recuperar de forma mensurável. O cérebro, que estava dessensibilizado pelo excesso de estímulo artificial, passa a responder com mais intensidade aos prazeres normais da vida.
        </p>
        <p>
          O que a nossa comunidade relata de forma consistente no primeiro mês:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Energia matinal significativamente maior — levantar da cama fica menos custoso",
            "Foco no trabalho e nos estudos melhora de forma perceptível",
            "Motivação para projetos e atividades físicas retorna",
            "Sono mais profundo e reparador",
            "Redução da vergonha e culpa crônicas que pesavam no humor",
            "Maior interesse em interações sociais presenciais",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div
          className="rounded-xl px-5 py-4 mt-4"
          style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.15)" }}
        >
          <p className="text-green-400 font-semibold text-sm leading-relaxed">
            "No dia 34 acordei e simplesmente me senti presente. Não me lembro quando foi a última vez que senti isso." — Gabriel C., 67 dias limpo
          </p>
        </div>
      </>
    ),
  },
  {
    id: "90-dias",
    heading: "90 dias: relacionamentos e confiança restaurados",
    content: (
      <>
        <p>
          90 dias é o marco onde as mudanças se tornam visíveis para as pessoas ao redor — não apenas para você. A razão é neurológica: pesquisas mostram aumento da densidade de massa cinzenta no córtex pré-frontal nesse período, a região responsável por empatia, tomada de decisão e regulação emocional.
        </p>
        <p>
          O que muda nos relacionamentos com 90 dias:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Atração por pessoas reais", d: "A libido, que estava condicionada ao hiperestímulo artificial, começa a se calibrar para a intimidade genuína. Relações físicas melhoram em qualidade." },
            { t: "Presença emocional", d: "A capacidade de estar verdadeiramente presente com outra pessoa — sem distração, sem comparação — aumenta de forma notável." },
            { t: "Confiança social", d: "O contato visual fica mais natural. A ansiedade social diminui. Conversas ficam mais fluidas e menos ensaiadas." },
            { t: "Autoestima", d: "A consistência da sequência gera uma prova concreta de capacidade de compromisso — com reflexo direto em como você se vê." },
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
    id: "1-ano",
    heading: "1 ano: a transformação que você não esperava",
    content: (
      <>
        <p>
          Em 12 meses, os homens que chegam a esse marco relatam algo além de uma lista de benefícios físicos e mentais. Relatam uma reconexão com quem sempre foram — antes do vício se tornar parte da identidade.
        </p>
        <p>
          Mudanças que aparecem no horizonte de 1 ano:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Impulsos por pornografia se tornam raros e facilmente gerenciáveis",
            "Identidade descolada do vício — ele deixa de ser \"quem você é\"",
            "Capacidade de intimidade profunda — emocional e física — com outra pessoa",
            "Ambição e clareza de propósito voltam com força",
            "Disciplina construída no processo de recuperação se expande para outras áreas da vida",
            "A vergonha de anos carregada como fardo silencioso se dissolve",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          1 ano não é o fim da jornada. É onde ela verdadeiramente começa.
        </p>
      </>
    ),
  },
  {
    id: "ciencia",
    heading: "A ciência por trás de cada benefício",
    content: (
      <>
        <p>
          Os benefícios relatados por homens em recuperação não são placebo ou wishful thinking. Têm base neurológica documentada:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Dopamina", d: "O consumo crônico de pornografia dessensibiliza os receptores D2/D3 de dopamina — os mesmos afetados pelo vício em cocaína. A abstinência restaura a sensibilidade gradualmente." },
            { t: "Córtex pré-frontal", d: "Estudos de neuroimagem mostram que o CPF, responsável por controle de impulso e tomada de decisão, tem atividade reduzida em usuários crônicos. A recuperação reverte parte desse dano." },
            { t: "Testosterona", d: "Pesquisas mostram que abstinência de masturbação por 7 dias pode aumentar os níveis de testosterona em até 45% temporariamente — com efeitos positivos em energia, assertividade e libido." },
            { t: "Neuroplasticidade", d: "O cérebro adulto continua capaz de criar novos circuitos neurais em resposta a novos comportamentos. Cada dia de recuperação literalmente reconstrói conexões." },
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
    id: "garantir-os-ganhos",
    heading: "Como garantir que os ganhos durem",
    content: (
      <>
        <p>
          Chegar a 30, 90 ou 365 dias é uma conquista extraordinária. Mantê-la exige uma estratégia de longo prazo — porque o vício não desaparece, ele fica adormecido.
        </p>
        <p>
          O que separa quem mantém os ganhos de quem regride:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Não abandona o sistema quando a vida melhora", d: "A armadilha mais comum é achar que, depois de 90 dias, o trabalho está feito. Continuar usando as ferramentas é o que consolida a mudança." },
            { t: "Mantém consciência dos gatilhos", d: "Mesmo com meses de sequência, situações de estresse extremo, solidão ou esgotamento podem reativar o impulso. Conhecer seus gatilhos continua sendo uma arma." },
            { t: "Tem comunidade de longo prazo", d: "Não isola o progresso. Compartilha marcos, continua participando, ajuda quem está chegando. Ensinar consolida o aprendizado." },
            { t: "Trata recaídas como dados, não como falhas", d: "Se uma recaída acontece mesmo depois de meses, ela é uma informação sobre o que ainda precisa de atenção — não uma razão para abandonar tudo." },
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
        <p className="mt-4">
          O RENOVO foi construído para ser um companheiro de longo prazo — não apenas para os primeiros dias difíceis, mas para toda a jornada de se tornar a versão que você sempre foi.
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
    title: "Como ajudar alguém com vício em pornografia",
    image: "/blog-parar.png",
    href: "/blog/como-ajudar-alguem-com-vicio-em-pornografia",
  },
];

export default function Page() {
  return (
    <BlogArticleLayout
      title="Descubra os benefícios completos de parar com o vício — etapa por etapa"
      heroImage="/blog-superar.png"
      readTime="9 min"
      date="6 de maio de 2025"
      intro="O que exatamente muda quando você para com a pornografia? Nas primeiras 72 horas, no mês 1, nos 90 dias, em 1 ano? Este guia detalha cada etapa da transformação — com a ciência por trás de cada benefício."
      sections={sections}
      related={related}
    />
  );
}
