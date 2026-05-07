"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Section({ number, title, children }: { number?: string; title: string; children: React.ReactNode }) {
  return (
    <div className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <h2 className="text-white font-black text-lg md:text-xl mb-4 flex items-start gap-3">
        {number && (
          <span className="text-green-500/50 font-black flex-shrink-0" style={{ fontSize: 13, letterSpacing: "0.05em", minWidth: 28, marginTop: 3 }}>
            {number}
          </span>
        )}
        {title}
      </h2>
      <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-3 md:pl-10">
        {children}
      </div>
    </div>
  );
}

function AlertBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 mb-3" style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)" }}>
      <p className="text-green-400 font-black text-sm mb-3 uppercase tracking-wider">{title}</p>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 w-1 h-1 rounded-full bg-green-500/60 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlatformCard({ platform, steps }: { platform: string; steps: string[] }) {
  return (
    <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <p className="text-white/70 font-bold text-sm mb-2">{platform}</p>
      <div className="space-y-1">
        {steps.map((s, i) => (
          <p key={i} className="text-gray-500 text-xs leading-relaxed">{s}</p>
        ))}
      </div>
    </div>
  );
}

export default function TermosDeAssinatura() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="relative pt-32 pb-16 px-6 overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)" }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="flex items-center gap-2 mb-6 text-white/30 text-xs">
              <Link href="/" className="hover:text-white/50 transition-colors">Início</Link>
              <span>/</span>
              <span className="text-white/50">Termos de Assinatura</span>
            </div>
            <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
              Termos de Assinatura
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-white/35">
              <span>apprenovo.com.br</span>
              <span>·</span>
              <span>Versão 1.0</span>
              <span>·</span>
              <span>Última atualização: Maio de 2026</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-2xl">
              Estes Termos de Assinatura ("Termos de Assinatura") regem a compra e o uso de assinaturas com renovação automática para acesso aos recursos premium do aplicativo RENOVO ("App"). Ao adquirir ou renovar uma assinatura, você concorda com estes Termos de Assinatura, nossos{" "}
              <Link href="/termos-de-uso" className="text-green-400 hover:text-green-300 transition-colors">Termos de Uso</Link>{" "}
              e nossa{" "}
              <Link href="/politica-de-privacidade" className="text-green-400 hover:text-green-300 transition-colors">Política de Privacidade</Link>.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">

          <AlertBox title="Avisos Importantes sobre Recursos Premium">
            <p>Os recursos premium — incluindo ferramentas avançadas, insights, rastreamento, análises, conteúdo e melhorias de suporte — são fornecidos exclusivamente para fins educacionais e informativos gerais.</p>
            <p>Eles <strong className="text-white/70">não constituem</strong> aconselhamento médico, diagnóstico, tratamento, terapia, aconselhamento psicológico ou serviços profissionais de recuperação de dependências. O RENOVO e seus recursos premium não substituem cuidados profissionais de saúde.</p>
            <BulletList items={[
              "Nenhuma relação médico-paciente ou terapeuta-cliente é criada",
              "Nenhum resultado específico, abstinência ou melhora de saúde é garantido",
              "Resultados individuais variam amplamente e dependem de fatores além do App",
              "Consulte sempre profissionais de saúde qualificados para orientação personalizada",
              "Em situações de crise, busque ajuda profissional imediatamente — CVV: 188",
            ]} />
          </AlertBox>

          <Section number="1." title="Planos e Métodos de Pagamento">
            <p>O RENOVO oferece planos de assinatura com renovação automática que concedem acesso a recursos premium, podendo incluir ferramentas avançadas de recuperação, rastreamento de progresso e análises, conteúdo educacional e motivacional exclusivo, e recursos aprimorados de suporte e acompanhamento.</p>
            <p>Planos, funcionalidades, preços e períodos de cobrança (ex.: mensal, anual) são exibidos no App ou em nosso site no momento da compra. Podemos modificar, adicionar ou remover funcionalidades a qualquer momento, desde que alterações materiais estejam em conformidade com a legislação aplicável.</p>
            <p className="mt-2 text-white/60 font-semibold">Assinaturas são processadas por:</p>
            <div className="flex flex-col gap-3 mt-3">
              <PlatformCard
                platform="Apple App Store (iOS)"
                steps={["Cobrança feita ao seu Apple ID no momento da confirmação da compra e a cada renovação."]}
              />
              <PlatformCard
                platform="Google Play Store (Android)"
                steps={["Cobrança feita à sua conta Google Play no momento da confirmação e a cada renovação."]}
              />
              <PlatformCard
                platform="Stripe (compras via web)"
                steps={["Cobrança feita ao método de pagamento fornecido via Stripe.", "Stripe pode suportar Apple Pay e Google Pay em alguns fluxos."]}
              />
            </div>
            <p className="mt-3">A disponibilidade de cada método depende do seu dispositivo, região e políticas das lojas de aplicativos. Você seleciona o método no momento da compra.</p>
          </Section>

          <Section number="2." title="Cobrança e Renovação Automática">
            <p className="text-white/60 font-semibold">Apple / Google:</p>
            <p>A cobrança é feita na confirmação da compra e a cada renovação. A assinatura renova automaticamente ao final de cada período pelo preço vigente, a menos que a renovação automática seja desativada pelo menos 24 horas antes do término do período — via configurações do dispositivo. A renovação ocorre dentro de 24 horas antes do fim do período. Ao assinar, você autoriza cobranças recorrentes.</p>
            <p className="mt-3 text-white/60 font-semibold">Stripe:</p>
            <p>A cobrança é feita na compra e a cada renovação conforme o intervalo selecionado. A renovação automática continua até o cancelamento. Ao assinar, você autoriza cobranças recorrentes ao método de pagamento cadastrado no Stripe.</p>
            <p className="mt-3">Preços e tributos são os exibidos no momento da compra ou renovação. Você é responsável por todos os tributos aplicáveis, incluindo o IOF sobre pagamentos internacionais quando aplicável.</p>
          </Section>

          <Section number="3." title="Períodos de Teste Gratuito">
            <p>Caso um período de teste gratuito seja disponibilizado:</p>
            <BulletList items={[
              "Nenhuma cobrança é feita durante o período de teste",
              "Qualquer período de teste não utilizado é perdido ao adquirir uma assinatura paga",
              "A assinatura renova automaticamente (e a cobrança é feita) ao final do teste, a menos que seja cancelada pelo menos 24 horas antes do vencimento",
              "Testes gratuitos podem ser limitados a novos usuários ou a critérios específicos definidos pelo RENOVO",
            ]} />
          </Section>

          <Section number="4." title="Direito de Arrependimento (CDC)">
            <p>Nos termos do artigo 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o consumidor que adquirir assinatura fora do estabelecimento comercial — inclusive por meio eletrônico — tem o direito de desistir da compra no prazo de <strong className="text-white/60">7 (sete) dias corridos</strong> a contar da contratação, com reembolso integral dos valores pagos.</p>
            <p>Para exercer o direito de arrependimento dentro desse prazo, entre em contato pelo e-mail <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a> indicando o desejo de cancelamento.</p>
            <p>Após o prazo de 7 dias, aplica-se a política de reembolso descrita na seção 6 destes Termos.</p>
          </Section>

          <Section number="5." title="Gerenciamento e Cancelamento">
            <p>Gerencie ou cancele sua assinatura pela plataforma correspondente:</p>
            <div className="flex flex-col gap-3 mt-3">
              <PlatformCard
                platform="Apple iOS"
                steps={["Ajustes → [seu nome] → Assinaturas → RENOVO"]}
              />
              <PlatformCard
                platform="Google Android"
                steps={["Google Play → Pagamentos e assinaturas → Assinaturas → RENOVO"]}
              />
              <PlatformCard
                platform="Stripe (web)"
                steps={[
                  "Pelo portal da sua conta RENOVO (acessível via App ou site).",
                  "Pelo link do Stripe Customer Portal enviado nos e-mails de confirmação.",
                  "Para assistência: suporte@apprenovo.com.br",
                ]}
              />
            </div>
            <p className="mt-4 text-amber-400/70 text-sm">Atenção: excluir o App ou sua conta não cancela a assinatura. O cancelamento entra em vigor ao final do período de cobrança vigente. Você mantém acesso premium até essa data.</p>
          </Section>

          <Section number="6." title="Alterações de Preço">
            <p>Podemos ajustar os preços das assinaturas ou introduzir novos planos. Você receberá aviso prévio por notificação no App, e-mail, painel do Stripe ou conforme exigido pela legislação aplicável e pelas regras das lojas de aplicativos, caso uma alteração de preço afete sua assinatura vigente.</p>
            <p>As alterações se aplicam somente na próxima renovação, salvo acordo em contrário. O uso continuado após a renovação constitui aceitação do novo preço.</p>
          </Section>

          <Section number="7." title="Reembolsos">
            <p>Salvo pelo direito de arrependimento previsto na seção 4, todas as compras e renovações de assinatura são finais e não reembolsáveis, exceto quando expressamente exigido pela legislação brasileira, pelas políticas da Apple App Store, do Google Play ou da Stripe.</p>

            <p className="mt-2 text-white/60 font-semibold">Apple / Google:</p>
            <p>Reembolsos são gerenciados exclusivamente pela Apple ou pelo Google — não pelo RENOVO. Solicite por meio de <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">reportaproblem.apple.com</a> (iOS) ou pelo suporte do Google Play (Android).</p>

            <p className="mt-3 text-white/60 font-semibold">Stripe:</p>
            <p>Reembolsos ficam a critério exclusivo do RENOVO e estão sujeitos aos termos da Stripe. Solicitações devem ser feitas pelo e-mail <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a> ou pelo portal da sua conta. Não garantimos reembolsos por períodos parciais, insatisfação ou qualquer outro motivo além dos previstos em lei.</p>

            <p className="mt-3">Excluir sua conta ou cessar o uso não gera direito a reembolso, exceto dentro do prazo de arrependimento de 7 dias previsto no CDC.</p>
          </Section>

          <Section number="8." title="Acesso após Cancelamento ou Expiração">
            <p>Após o cancelamento ou não renovação:</p>
            <BulletList items={[
              "O acesso premium continua até o final do período de cobrança vigente",
              "Sua conta retorna à versão gratuita",
              "Dados de progresso e recuperação permanecem acessíveis (salvo exclusão de conta), mas funcionalidades exclusivas do plano premium ficam indisponíveis",
            ]} />
            <p className="mt-2">O RENOVO não se responsabiliza por perda de acesso, dados ou valor percebido após o encerramento da assinatura.</p>
          </Section>

          <Section number="9." title="Isenção de Garantias e Limitação de Responsabilidade">
            <p className="uppercase text-xs text-white/50 leading-relaxed">
              Os recursos premium e as assinaturas são fornecidos "no estado em que se encontram" e "conforme disponíveis", sem garantias expressas ou implícitas quanto a desempenho, resultados, acesso ininterrupto, operação sem erros ou adequação a qualquer finalidade — especialmente resultados relacionados à saúde.
            </p>
            <p className="mt-3">Na máxima extensão permitida pela legislação brasileira, o RENOVO e seus sócios, dirigentes, funcionários, agentes, licenciantes e processadores de pagamento não serão responsáveis por danos diretos, indiretos, incidentais, especiais, consequenciais ou exemplares — incluindo perda de dados, sofrimento emocional, custos médicos ou danos relacionados à dependência — decorrentes de assinaturas, recursos premium, processamento de pagamento ou destes Termos.</p>
            <p className="mt-3">A responsabilidade total do RENOVO, caso exista, limita-se ao valor pago por você nos 12 meses anteriores ao evento que originou a reclamação, ou R$100,00 (cem reais), o que for maior.</p>
          </Section>

          <Section number="10." title="Indenização">
            <p>Você concorda em indenizar, defender e isentar de responsabilidade o RENOVO e seus sócios, dirigentes e funcionários de quaisquer reclamações, perdas, danos, responsabilidades, custos e despesas (incluindo honorários advocatícios razoáveis) decorrentes de:</p>
            <BulletList items={[
              "Seu uso de recursos premium ou assinaturas",
              "Violação destes Termos de Assinatura",
              "Dependência do App para decisões de saúde ou recuperação",
              "Qualquer conteúdo que você enviar ou compartilhar",
              "Disputas relacionadas a métodos de pagamento ou processadores",
            ]} />
          </Section>

          <Section number="11." title="Alterações nestes Termos">
            <p>Podemos atualizar estes Termos de Assinatura periodicamente. Alterações materiais serão comunicadas no App, por e-mail ou por outros meios. O uso ou renovação continuada da assinatura após as alterações constitui aceitação dos novos termos.</p>
          </Section>

          <Section number="12." title="Lei Aplicável e Contato">
            <p>Estes Termos de Assinatura são regidos pelas leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor (Lei nº 8.078/1990), a LGPD (Lei nº 13.709/2018) e o Marco Civil da Internet (Lei nº 12.965/2014). As partes elegem o foro da comarca de Brasília, Distrito Federal, para dirimir quaisquer controvérsias.</p>
            <p className="mt-2">Para dúvidas sobre sua assinatura:</p>
            <div
              className="rounded-2xl p-5 mt-3 flex flex-col gap-2"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-white/70 text-sm">
                <span className="text-white/40">Email: </span>
                <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a>
              </p>
              <p className="text-white/70 text-sm">
                <span className="text-white/40">Site: </span>
                <span className="text-white/60">apprenovo.com.br</span>
              </p>
              <p className="text-white/35 text-xs mt-1">Respondemos em até 5 dias úteis.</p>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
