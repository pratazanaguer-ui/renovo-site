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
      <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-3 pl-0 md:pl-10">
        {children}
      </div>
    </div>
  );
}

function AlertBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 mb-2" style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)" }}>
      <p className="text-green-400 font-black text-sm mb-3 uppercase tracking-wider">{title}</p>
      <div className="text-gray-400 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl px-5 py-4 my-3" style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)" }}>
      <div className="text-red-300/80 text-sm leading-relaxed">{children}</div>
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

export default function TermosDeUso() {
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
              <span className="text-white/50">Termos de Uso</span>
            </div>
            <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
              Termos de Uso
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-white/35">
              <span>apprenovo.com.br</span>
              <span>·</span>
              <span>Versão 1.0</span>
              <span>·</span>
              <span>Última atualização: Maio de 2026</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-2xl">
              Estes Termos de Uso regem o acesso e uso do aplicativo móvel RENOVO, do site apprenovo.com.br e dos serviços relacionados (coletivamente, "App" ou "Serviço"), desenvolvidos e operados pelo RENOVO ("nós", "nosso").
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-2xl">
              Ao baixar, instalar, acessar ou utilizar o App, você declara ter lido, compreendido e concordado em estar legalmente vinculado a estes Termos e à nossa Política de Privacidade. Se você não concordar, deve interromper imediatamente o uso do App e desinstalá-lo.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* Important Notices */}
          <div className="mb-4">
            <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-5">Avisos Importantes</p>

            <AlertBox title="Aviso Médico e Educacional">
              <p>O RENOVO é um aplicativo de autoajuda e acompanhamento de hábitos. O App <strong className="text-white/70">não é</strong> um serviço médico, terapia ou aconselhamento clínico, dispositivo médico, e não diagnostica, trata ou previne qualquer condição de saúde.</p>
              <p>Nenhum conteúdo do App constitui aconselhamento médico, diagnóstico ou tratamento. O uso do App não cria qualquer relação médico-paciente ou terapeuta-cliente.</p>
              <p>Se você estiver enfrentando sofrimento psicológico, preocupações com dependência ou situações de crise, procure imediatamente um profissional de saúde qualificado.</p>
              <WarnBox>
                <p className="font-bold">Em situações de crise ou pensamentos de autolesão:</p>
                <p className="mt-1">Ligue para o <strong>CVV: 188</strong> (24 horas, gratuito) ou vá ao pronto-socorro mais próximo.</p>
              </WarnBox>
            </AlertBox>

            <AlertBox title="Aviso sobre Saúde Comportamental e Dependência">
              <p>O RENOVO aborda temas relacionados ao consumo de pornografia, comportamentos compulsivos e mudança de hábitos. Você reconhece e concorda que:</p>
              <BulletList items={[
                "Resultados individuais variam. O App não garante abstinência, prevenção de recaídas, melhora emocional ou benefício psicológico.",
                "Risco de sofrimento emocional. Visualizar dados de sequência, registrar recaídas ou participar da comunidade pode causar estresse, ansiedade, frustração ou culpa.",
                "Não é um programa clínico. O RENOVO não oferece tratamento para dependência, terapia comportamental ou aconselhamento psicológico.",
                "Responsabilidade do usuário. Os usuários são os únicos responsáveis por suas decisões pessoais, ações e escolhas comportamentais.",
                "Sem monitoramento externo. O RENOVO não monitora nem verifica o comportamento do usuário fora do App.",
                "Conteúdo da comunidade não é aconselhamento profissional e pode não ser preciso ou adequado para sua situação.",
              ]} />
            </AlertBox>
          </div>

          {/* Numbered Sections */}
          <Section number="1." title="Elegibilidade">
            <p>O RENOVO é aberto a usuários de todas as idades. Para usuários menores de 13 anos, é obrigatório o consentimento verificável dos pais ou responsáveis legais antes do cadastro, em conformidade com a LGPD (Lei nº 13.709/2018) e as diretrizes da Apple App Store e Google Play Store.</p>
            <p>Usuários entre 13 e 18 anos devem ter o conhecimento e consentimento de seus responsáveis para utilizar o aplicativo.</p>
            <p>O RENOVO reserva-se o direito de suspender ou encerrar contas onde os requisitos de elegibilidade não sejam atendidos.</p>
          </Section>

          <Section number="2." title="Cadastro e Segurança da Conta">
            <p>Para acessar determinadas funcionalidades, é necessário criar uma conta. Você concorda em fornecer informações verdadeiras, precisas e atualizadas; manter a segurança de suas credenciais; e notificar-nos imediatamente em caso de acesso não autorizado pelo email <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a>.</p>
            <p>Você é o único responsável por todas as atividades realizadas sob sua conta.</p>
          </Section>

          <Section number="3." title="Licença de Uso">
            <p>Sujeito ao cumprimento destes Termos, o RENOVO concede a você uma licença limitada, revogável, não exclusiva, intransferível e não sublicenciável para baixar e usar o App exclusivamente para fins pessoais e não comerciais. Todos os direitos não expressamente concedidos são reservados pelo RENOVO.</p>
          </Section>

          <Section number="4." title="Propriedade Intelectual">
            <p>O App e toda a tecnologia relacionada — incluindo software, algoritmos, banco de dados, design, elementos de interface, textos, marca, logotipo, personagem Luigi, metodologias de recuperação, modelos de acompanhamento de hábitos e sistemas de gamificação — são e permanecerão propriedade exclusiva do RENOVO ou de seus licenciantes, protegidos pela legislação brasileira e internacional de propriedade intelectual.</p>
          </Section>

          <Section number="5." title="Restrições de Uso">
            <p>Você não pode, direta ou indiretamente:</p>
            <BulletList items={[
              "Copiar, reproduzir, modificar, distribuir, vender, licenciar ou criar obras derivadas do App",
              "Realizar engenharia reversa, descompilar ou desmontar qualquer parte do App",
              "Tentar extrair código-fonte, algoritmos ou modelos de dados",
              "Raspar, coletar ou extrair dados do App por meios automatizados",
              "Usar bots, crawlers, spiders ou ferramentas de scraping",
              "Usar o App para construir produto ou serviço concorrente",
              "Usar o App ou seu conteúdo para treinar sistemas de inteligência artificial",
              "Tentar acessar APIs não públicas ou infraestrutura interna",
              "Contornar proteções de segurança ou limites de taxa",
            ]} />
            <p className="mt-2">O uso não autorizado pode resultar em encerramento de acesso, ações legais e pedidos de danos.</p>
          </Section>

          <Section number="6." title="Proibição de Treinamento de IA e Extração de Dados">
            <p>Você não pode usar o App, seu conteúdo, dados ou tecnologia subjacente para treinar, desenvolver, ajustar ou melhorar quaisquer sistemas de inteligência artificial, aprendizado de máquina ou modelos de linguagem sem consentimento prévio e expresso por escrito do RENOVO.</p>
            <p>O RENOVO reserva-se o direito de buscar todos os recursos legais disponíveis para violações desta seção, incluindo pedidos de danos, liminares e recuperação de honorários advocatícios.</p>
          </Section>

          <Section number="7." title="Conteúdo do Usuário">
            <p>O App pode permitir que você crie ou envie conteúdo como registros de progresso, anotações e publicações na comunidade. Você retém a propriedade do seu conteúdo.</p>
            <p>Ao enviar conteúdo, você concede ao RENOVO uma licença mundial, não exclusiva e gratuita para armazenar, processar, analisar, exibir e transmitir esse conteúdo exclusivamente para fins de operação, manutenção e melhoria do App.</p>
          </Section>

          <Section number="8." title="Conduta Proibida">
            <p>Você concorda em não:</p>
            <BulletList items={[
              "Violar leis aplicáveis",
              "Assediar, ameaçar ou abusar de outros usuários",
              "Publicar conteúdo ilegal, prejudicial, discriminatório, de ódio ou sexualmente explícito",
              "Se passar por qualquer pessoa ou entidade",
              "Usar o App para spam ou comunicações não solicitadas",
              "Interferir, interromper ou degradar o funcionamento do App",
            ]} />
          </Section>

          <Section number="9." title="Isenção de Responsabilidade pelo Conteúdo da Comunidade">
            <p>O conteúdo enviado por usuários reflete exclusivamente as opiniões desses usuários. O RENOVO não endossa, verifica ou assume responsabilidade por qualquer conteúdo gerado por usuários, incluindo declarações, conselhos ou recomendações de outros membros da comunidade.</p>
          </Section>

          <Section number="10." title="Assinaturas e Cobrança">
            <p>Determinadas funcionalidades podem exigir uma assinatura paga. Os detalhes sobre planos, preços, renovação automática, cancelamento e reembolso estão disponíveis em nossa Política de Assinatura.</p>
            <p>O RENOVO reserva-se o direito de modificar preços ou condições de assinatura com aviso prévio mínimo de 30 dias.</p>
          </Section>

          <Section number="11." title="Funcionalidades Beta">
            <p>Funcionalidades experimentais ou em versão beta podem ser instáveis, alteradas ou descontinuadas a qualquer momento. São fornecidas no estado em que se encontram, sem qualquer garantia.</p>
          </Section>

          <Section number="12." title="Serviços de Terceiros">
            <p>O App pode integrar serviços de terceiros, incluindo Supabase (banco de dados), OpenAI via Lovable AI Gateway (inteligência artificial) e plataformas de pagamento. O RENOVO não é responsável pelo conteúdo ou práticas de dados de terceiros.</p>
            <p>Para compras pela Apple App Store: estes Termos são celebrados entre você e o RENOVO, não com a Apple Inc. A Apple não tem responsabilidade pelo App ou seu conteúdo.</p>
          </Section>

          <Section number="13." title="Isenção de Garantias">
            <p className="uppercase text-xs text-white/50 leading-relaxed">
              Na máxima extensão permitida pela legislação brasileira, o App e todos os serviços relacionados são fornecidos "no estado em que se encontram" e "conforme disponíveis". O RENOVO isenta-se de todas as garantias, expressas, implícitas ou legais, incluindo garantias de adequação a uma finalidade específica, precisão, confiabilidade e serviço ininterrupto.
            </p>
          </Section>

          <Section number="14." title="Limitação de Responsabilidade">
            <p className="uppercase text-xs text-white/50 leading-relaxed">
              Na máxima extensão permitida pela legislação brasileira, o RENOVO não será responsável por quaisquer danos indiretos, incidentais, consequenciais, especiais ou exemplares, incluindo sofrimento emocional, danos relacionados à dependência, perda de dados ou perda de receita.
            </p>
            <p className="mt-3 text-sm">A responsabilidade total do RENOVO não excederá o valor total pago por você nos doze meses anteriores ao evento, ou R$100,00 (cem reais), o que for maior.</p>
          </Section>

          <Section number="15." title="Indenização">
            <p>Você concorda em indenizar e isentar de responsabilidade o RENOVO e seus sócios, dirigentes e funcionários de quaisquer reclamações decorrentes de: seu uso do App; sua violação destes Termos; conteúdo que você enviar; ou sua violação de qualquer lei ou direito de terceiros.</p>
          </Section>

          <Section number="16." title="Resolução de Disputas">
            <p>Quaisquer disputas serão submetidas primeiramente à tentativa de resolução amigável. Persistindo a divergência, as partes elegem o foro da comarca de Brasília, Distrito Federal, com renúncia a qualquer outro.</p>
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor (Lei nº 8.078/1990) e o Marco Civil da Internet (Lei nº 12.965/2014).</p>
          </Section>

          <Section number="17." title="Encerramento">
            <p>O RENOVO pode suspender ou encerrar seu acesso a qualquer momento se você violar estes Termos ou se envolver em condutas que criem risco legal ou de segurança.</p>
            <p>Você pode encerrar sua conta a qualquer momento em <strong className="text-white/60">Configurações → Excluir Conta</strong>.</p>
          </Section>

          <Section number="18." title="Alterações no App">
            <p>O RENOVO reserva-se o direito de modificar funcionalidades, descontinuar serviços ou atualizar o App a qualquer momento. Alterações significativas serão comunicadas com antecedência mínima de 15 dias.</p>
          </Section>

          <Section number="19." title="Transações Corporativas">
            <p>Em caso de fusão, aquisição ou venda de ativos, as informações da sua conta poderão ser transferidas à entidade sucessora, que estará obrigada a tratar os dados pessoais de forma consistente com nossa Política de Privacidade ou a fornecer aviso adequado de mudanças materiais, conforme exigido pela LGPD.</p>
          </Section>

          <Section number="20." title="Acordo Integral">
            <p>Estes Termos, juntamente com a Política de Privacidade e a Política de Assinatura, constituem o acordo integral entre você e o RENOVO em relação ao uso do App, substituindo quaisquer acordos anteriores sobre o mesmo objeto.</p>
          </Section>

          <Section number="21." title="Contato">
            <p>Para dúvidas sobre estes Termos ou o App:</p>
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
