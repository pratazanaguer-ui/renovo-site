"use client";

import BlogArticleLayout, { Section, RelatedArticle } from "@/components/BlogArticleLayout";

const sections: Section[] = [
  {
    id: "parar-vs-superar",
    heading: "A diferença entre parar e superar",
    content: (
      <>
        <p>
          Parar significa não consumir pornografia. Superar significa que você não quer mais. Essa distinção muda tudo.
        </p>
        <p>
          Muitos homens conseguem parar por dias, semanas ou até meses usando força bruta — suprimindo o desejo, evitando gatilhos, se mantendo ocupado. Mas quando o ambiente muda, quando o cansaço bate ou quando a vida complica, a abstinência forçada cede. Porque o impulso nunca foi verdadeiramente processado.
        </p>
        <p>
          Superar vai além. Requer entender <em>por que</em> você usava pornografia, quais necessidades emocionais ela estava preenchendo (alívio de estresse, escape da solidão, regulação do tédio) e construir formas melhores de satisfazer essas necessidades. Quando isso acontece, o desejo perde potência. Não desaparece do dia para a noite, mas vai enfraquecendo de forma consistente.
        </p>
        <div
          className="rounded-xl px-5 py-4 my-2"
          style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.15)" }}
        >
          <p className="text-green-400 font-semibold text-sm leading-relaxed">
            "Abstinência é a ausência de consumo. Recuperação é a reconstrução de quem você é."
          </p>
        </div>
      </>
    ),
  },
  {
    id: "cerebro-na-recuperacao",
    heading: "O que acontece no seu cérebro durante a recuperação",
    content: (
      <>
        <p>
          O cérebro humano tem uma propriedade extraordinária: neuroplasticidade. Circuitos neurais que foram construídos ao longo de anos de uso de pornografia podem ser enfraquecidos e substituídos por novos padrões. Não de forma instantânea — mas de forma consistente.
        </p>
        <p>
          Nas primeiras semanas, o cérebro passa por uma espécie de ressaca. Os receptores de dopamina, que foram dessensibilizados pelo excesso de estímulo, começam a se recuperar. Isso pode causar irritabilidade, dificuldade de concentração e uma sensação de "névoa mental" (brain fog). Esses são sinais de recuperação — não de fraqueza.
        </p>
        <p>
          A partir de 30 dias, pesquisas mostram aumento de densidade de massa cinzenta em regiões do córtex pré-frontal — a área responsável por tomada de decisão, controle de impulso e foco. Em outras palavras: você literalmente se torna mais capaz de resistir ao impulso conforme a recuperação avança.
        </p>
        <p>
          Em 90 dias, muitos homens relatam mudanças profundas: sono mais reparador, libido mais saudável, melhora na concentração e uma presença social que não sentiam há anos.
        </p>
      </>
    ),
  },
  {
    id: "recaida-nao-e-o-fim",
    heading: "A recaída não é o fim — é dado",
    content: (
      <>
        <p>
          A maioria das tentativas de recuperação inclui recaídas. Isso não é falha — é o padrão esperado em qualquer processo de mudança comportamental profunda. O que determina o resultado final não é a ausência de recaídas, mas o que você faz depois delas.
        </p>
        <p>
          Duas respostas possíveis à recaída:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { label: "Resposta destrutiva", desc: "\"Já estraguei tudo, não adianta.\" Abandon. Culpa. Espiral." },
            { label: "Resposta construtiva", desc: "\"O que me derrubou desta vez? O horário? O estado emocional? O ambiente?\" Análise. Ajuste. Recomeço com mais dados." },
          ].map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <div>
                <span className="text-white font-bold">{item.label}: </span>
                <span>{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Cada recaída analisada com honestidade é uma arma contra a próxima. O RENOVO foi construído para que você registre o que aconteceu, identifique o padrão e recomece — sem arrastar culpa desnecessária, mas com mais autoconhecimento do que antes.
        </p>
      </>
    ),
  },
  {
    id: "novos-habitos",
    heading: "Como construir novos hábitos no lugar do vício",
    content: (
      <>
        <p>
          A natureza abomina o vácuo. Quando você remove um comportamento compulsivo sem substituir pelo que ele estava preenchendo, o espaço fica aberto para o impulso retornar.
        </p>
        <p>
          As necessidades que a pornografia preenchia — alívio de tensão, escape, estimulação, conexão — são reais. Elas precisam de respostas melhores, não de repressão.
        </p>
        <p>
          Estratégias que funcionam:
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Exercício físico intenso — especialmente no horário de maior risco",
            "Rotina de sono consistente — privação de sono é um gatilho poderoso",
            "Presença social planejada — jantar, ligar para alguém, sair de casa",
            "Projeto pessoal com progresso visível — a dopamina precisa de outro destino",
            "Técnicas de regulação emocional (meditação, respiração, journaling)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Não se trata de preencher o dia com distrações. Trata-se de construir uma vida que você não quer escapar.
        </p>
      </>
    ),
  },
  {
    id: "quanto-tempo",
    heading: "Em quanto tempo você vai se sentir diferente",
    content: (
      <>
        <p>
          A recuperação não é linear, e os prazos variam de pessoa para pessoa dependendo da intensidade e duração do vício. Mas alguns padrões são consistentes:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { prazo: "3 a 7 dias", desc: "Sono começa a melhorar. Clareza mental aumenta levemente. Irritabilidade pode aumentar." },
            { prazo: "2 a 4 semanas", desc: "Redução da névoa mental. Mais energia pela manhã. Impulsos ainda intensos, mas com padrão mais previsível." },
            { prazo: "30 a 60 dias", desc: "Foco melhor. Motivação mais estável. Relacionamentos começam a se beneficiar." },
            { prazo: "90 dias", desc: "Mudanças profundas: confiança, presença social, libido saudável, controle emocional." },
            { prazo: "6 a 12 meses", desc: "A versão de você que você sempre soube que existia começa a aparecer com clareza." },
          ].map((item) => (
            <li key={item.prazo} className="flex items-start gap-4">
              <span className="text-green-500 font-black text-xs flex-shrink-0 mt-0.5" style={{ minWidth: 80 }}>{item.prazo}</span>
              <span>{item.desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-white/50 text-sm italic">
          Os números acima são baseados em relatos da nossa comunidade e em pesquisas sobre neuroplasticidade. Cada organismo responde no seu ritmo — o importante é permanecer consistente.
        </p>
      </>
    ),
  },
  {
    id: "ferramentas-que-aceleram",
    heading: "Ferramentas que aceleram a superação",
    content: (
      <>
        <p>
          Recuperação é um processo — mas não precisa ser lento ou solitário. As ferramentas certas fazem diferença concreta no ritmo e na qualidade da recuperação.
        </p>
        <p>
          O RENOVO integra em um único lugar tudo o que a ciência e a experiência prática mostram que funciona:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Luigi — IA Terapeuta", d: "Conversas terapêuticas profundas, sem julgamento, disponíveis a qualquer hora. Ele não substitui um terapeuta humano, mas está lá às 3h da manhã quando o impulso bate." },
            { t: "Universidade da Renovação", d: "Conteúdo educacional sobre como a pornografia afeta o cérebro, a dopamina e os relacionamentos. Entender o mecanismo é parte da cura." },
            { t: "Comunidade de suporte", d: "Homens em diferentes estágios da jornada compartilhando com honestidade. O isolamento alimenta o vício; a comunidade o enfraquece." },
            { t: "Rastreamento de progresso", d: "Ver os dados da sua evolução — dias limpos, melhor sequência, padrões de gatilhos — é motivação concreta e mensurável." },
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
];

const related: RelatedArticle[] = [
  {
    title: "Como parar o vício em pornografia",
    image: "/blog-ajudar.png",
    href: "/blog/como-parar-o-vicio-em-pornografia",
  },
  {
    title: "Como ajudar alguém com vício em pornografia",
    image: "/blog-parar.png",
    href: "/blog/como-ajudar-alguem-com-vicio-em-pornografia",
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
      title="Como superar o vício em pornografia e se livrar totalmente"
      heroImage="/blog-beneficios.png"
      readTime="9 min"
      date="6 de maio de 2025"
      intro="Parar de consumir pornografia é o primeiro passo. Superar o vício de verdade — a ponto de não querer mais — é uma jornada diferente. Este guia explica como atravessá-la com estratégia, honestidade e as ferramentas certas."
      sections={sections}
      related={related}
    />
  );
}
