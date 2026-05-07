"use client";

import BlogArticleLayout, { Section, RelatedArticle } from "@/components/BlogArticleLayout";

const sections: Section[] = [
  {
    id: "o-que-e-o-vicio",
    heading: "O que é o vício em pornografia, de verdade",
    content: (
      <>
        <p>
          Vício em pornografia não é fraqueza de caráter. É uma condição neurológica. Cada vez que você consome pornografia, o seu cérebro libera dopamina em quantidades muito acima do normal — o mesmo mecanismo ativado por cocaína, apostas e álcool. Com o tempo, o cérebro se adapta: você precisa de mais estímulo para sentir o mesmo efeito. É tolerância. É dependência.
        </p>
        <p>
          Estudos da Universidade de Cambridge mostram que homens com vício em pornografia apresentam ativação do sistema de recompensa idêntica à de dependentes de drogas. Isso não é metáfora — é literalmente o que acontece nos seus neurônios.
        </p>
        <p>
          Reconhecer isso não é uma desculpa para continuar. É o ponto de partida para uma estratégia que realmente funciona. Você não está tentando vencer uma fraqueza. Está tentando reprogramar um circuito neural que foi condicionado por anos.
        </p>
        <div
          className="rounded-xl px-5 py-4 my-2"
          style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.15)" }}
        >
          <p className="text-green-400 font-semibold text-sm leading-relaxed">
            "O vício não é uma escolha que você faz todos os dias. É o resultado de um cérebro que foi treinado para buscar aquele atalho dopaminérgico — e que precisa ser retreinado com paciência e estratégia."
          </p>
        </div>
      </>
    ),
  },
  {
    id: "por-que-parar-nao-funciona",
    heading: "Por que \"só parar\" não funciona",
    content: (
      <>
        <p>
          Decidir parar é necessário, mas não é suficiente. Se fosse, você já teria parado. A decisão sem sistema é como tentar não pensar em elefantes rosados — quanto mais você tenta suprimir, mais o pensamento volta.
        </p>
        <p>
          O que a maioria das pessoas chama de "força de vontade" é na verdade um recurso limitado. Quando você está cansado, ansioso, entediado ou estressado, a reserva de força de vontade está baixa — e o cérebro procura o atalho mais rápido disponível. Se esse atalho foi construído durante anos, ele vai ganhar.
        </p>
        <p>
          Tentar parar sem substituição comportamental, sem suporte e sem um plano para o momento do impulso resulta em alto índice de recaída — geralmente mais intensa do que o padrão anterior. O ciclo se reforça.
        </p>
        <p>
          O que funciona é construir um <strong className="text-white">sistema</strong>: identificar gatilhos, criar planos de escape, ter apoio disponível no momento crítico e usar ferramentas que tornem a recaída mais difícil do que resistir.
        </p>
      </>
    ),
  },
  {
    id: "reconhecer-seus-padroes",
    heading: "O primeiro passo: reconhecer seus padrões",
    content: (
      <>
        <p>
          O vício em pornografia segue um ciclo previsível: <strong className="text-white">gatilho → impulso → ação → alívio temporário → culpa → gatilho novamente</strong>. Quebrá-lo começa por saber em qual parte do ciclo você está quando ele começa.
        </p>
        <p>
          Os gatilhos mais comuns são: tédio, solidão, estresse, ansiedade, cansaço e um determinado horário (geralmente à noite, quando o controle está mais fraco). Muitas vezes o ciclo começa muito antes do consumo — com um conteúdo que leva a outro, até o ponto de não retorno.
        </p>
        <ul className="list-none space-y-2 mt-2">
          {[
            "Anote o horário, o estado emocional e o que aconteceu antes do impulso",
            "Identifique os três gatilhos mais frequentes na sua semana",
            "Mapeie os ambientes que aumentam o risco (quarto escuro, celular na cama)",
            "Perceba os pensamentos que antecedem o impulso — geralmente são os mesmos",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2">
          Com esses dados, você para de ser surpreendido. E consciência antecipada é a primeira e mais poderosa arma.
        </p>
      </>
    ),
  },
  {
    id: "momento-do-impulso",
    heading: "O que fazer no momento do impulso",
    content: (
      <>
        <p>
          Os primeiros segundos do impulso são os mais críticos. O que você faz nesse intervalo determina se vai ceder ou não. A boa notícia: o impulso não é permanente. A maioria dura em média 7 a 15 minutos — se você atravessar esse período, ele passa.
        </p>
        <p>
          Um protocolo de 5 passos para o momento crítico:
        </p>
        <ol className="list-none space-y-3 mt-2">
          {[
            { n: "01", t: "Reconheça", d: "\"Estou sentindo um impulso.\" Nomeá-lo já reduz a intensidade." },
            { n: "02", t: "Saia do ambiente", d: "Levante. Vá para outro cômodo. Mude o contexto físico imediatamente." },
            { n: "03", t: "Respire", d: "Técnica 4-7-8: inspire 4s, segure 7s, expire 8s. Ativa o sistema parassimpático." },
            { n: "04", t: "Acione o plano de fuga", d: "Tenha uma lista pronta de atividades para o momento do impulso — exercício, ligar para alguém, água fria." },
            { n: "05", t: "Registre", d: "Anote o que aconteceu. Cada impulso atravessado é dado valioso para o próximo." },
          ].map((item) => (
            <li key={item.n} className="flex items-start gap-4">
              <span className="text-green-500 font-black text-xs flex-shrink-0 mt-1" style={{ minWidth: 24 }}>{item.n}</span>
              <div>
                <span className="text-white font-bold">{item.t}: </span>
                <span>{item.d}</span>
              </div>
            </li>
          ))}
        </ol>
      </>
    ),
  },
  {
    id: "suporte",
    heading: "O papel do suporte na recuperação",
    content: (
      <>
        <p>
          Isolamento é o melhor amigo do vício. A recuperação é, fundamentalmente, um ato social. Dados consistentes mostram que pessoas com rede de suporte ativa mantêm sequência de abstinência por mais tempo e com menos sofrimento do que quem tenta sozinho.
        </p>
        <p>
          Isso não significa contar para todo mundo. Significa ter <em>alguém</em> — um amigo de confiança, um terapeuta, uma comunidade online que entende o que você está passando. O simples ato de verbalizar o que está sentindo para outra pessoa reduz o poder do impulso.
        </p>
        <p>
          O desafio é que vício em pornografia ainda carrega estigma. Isso faz com que a maioria dos homens lute sozinhos, em silêncio, acumulando culpa que alimenta o próprio ciclo. Comunidades especializadas — onde ninguém vai te julgar porque todos passam pela mesma coisa — resolvem esse problema.
        </p>
      </>
    ),
  },
  {
    id: "renovo",
    heading: "Como o RENOVO te ajuda a parar",
    content: (
      <>
        <p>
          O RENOVO foi construído especificamente para preencher cada lacuna que faz as tentativas de parar falharem:
        </p>
        <ul className="list-none space-y-3 mt-2">
          {[
            { t: "Sequência de dias", d: "Ver o contador crescer ativa o mesmo mecanismo de gamificação — você não quer quebrar o número." },
            { t: "Botão de Pânico", d: "Um protocolo de emergência com 6 opções de intervenção imediata para o momento crítico." },
            { t: "Luigi — IA Terapeuta", d: "Disponível às 3h da manhã quando o impulso bate e não há ninguém para ligar." },
            { t: "Biblioteca de Ações", d: "42 rotas de fuga catalogadas — sempre há uma opção disponível." },
            { t: "Comunidade", d: "Homens que estão na mesma batalha, sem julgamento, com honestidade." },
            { t: "Diário de gatilhos", d: "Mapeia seus padrões ao longo do tempo para que você pare de ser surpreendido." },
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
    title: "Como superar o vício em pornografia e se livrar totalmente",
    image: "/blog-beneficios.png",
    href: "/blog/como-superar-o-vicio-em-pornografia",
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
      title="Como parar o vício em pornografia"
      heroImage="/blog-ajudar.png"
      readTime="8 min"
      date="6 de maio de 2025"
      intro="Parar com pornografia não é uma questão de força de vontade. É uma questão de entender o que está acontecendo no seu cérebro — e ter as ferramentas certas para mudar o caminho. Este guia mostra por onde começar."
      sections={sections}
      related={related}
    />
  );
}
