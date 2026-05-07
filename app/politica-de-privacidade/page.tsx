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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <p className="text-white/70 font-bold text-sm mb-2">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export default function PoliticaDePrivacidade() {
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
              <span className="text-white/50">Política de Privacidade</span>
            </div>
            <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
              Política de Privacidade
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-white/35">
              <span>apprenovo.com.br</span>
              <span>·</span>
              <span>Versão 1.0</span>
              <span>·</span>
              <span>Última atualização: Maio de 2026</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-6 max-w-2xl">
              O RENOVO respeita a sua privacidade e está comprometido com a proteção das suas informações pessoais. Esta Política descreve como coletamos, usamos, divulgamos, armazenamos e protegemos informações quando você acessa ou usa o aplicativo RENOVO e os serviços relacionados (coletivamente, "App").
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-2xl">
              Ao usar o App, você concorda com as práticas descritas nesta Política. Se não concordar, deve interromper o uso e desinstalar o App. Esta Política deve ser lida em conjunto com nossos{" "}
              <Link href="/termos-de-uso" className="text-green-400 hover:text-green-300 transition-colors">Termos de Uso</Link>.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 py-16">

          {/* Important Disclaimers */}
          <div className="mb-4">
            <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-5">Avisos Importantes</p>

            <AlertBox title="Natureza do Serviço">
              <p>O RENOVO é um aplicativo de autoajuda e acompanhamento de hábitos. O App <strong className="text-white/70">não é</strong> um serviço de saúde, dispositivo médico, plataforma de terapia, serviço de aconselhamento ou programa de tratamento.</p>
              <p>O RENOVO não fornece aconselhamento médico, diagnóstico ou tratamento, e não cria relação médico-paciente, terapeuta-cliente ou profissional de saúde-usuário.</p>
              <p>As informações inseridas pelos usuários podem incluir dados comportamentais pessoais e sensíveis, inseridos voluntariamente para fins de acompanhamento de hábitos dentro do App.</p>
              <p>Usuários que busquem assistência profissional relacionada a dependência, comportamento compulsivo ou saúde mental devem consultar um profissional de saúde qualificado.</p>
            </AlertBox>

            <AlertBox title="Uso Informacional e de Autoajuda">
              <p>O RENOVO não monitora a atividade do usuário fora do App e não garante resultados específicos relacionados a mudança comportamental, formação de hábitos ou abstinência.</p>
              <p>Os usuários são os únicos responsáveis por suas decisões e ações pessoais. O App não deve ser utilizado como substituto de serviços profissionais médicos, psicológicos ou de aconselhamento.</p>
            </AlertBox>
          </div>

          {/* Sections */}
          <Section number="1." title="Informações que Coletamos">
            <p>Coletamos apenas os dados necessários (ou fornecidos voluntariamente) para oferecer as funcionalidades, personalização, insights e melhorias do App.</p>

            <SubSection title="1.1 Informações que Você Fornece">
              <p><strong className="text-white/60">Informações de Conta</strong></p>
              <BulletList items={[
                "Endereço de e-mail",
                "Nome",
                "Idade",
                "URL de foto (se aplicável)",
                "Data de criação e último acesso",
              ]} />
              <p className="mt-3"><strong className="text-white/60">Perfil e Preferências</strong></p>
              <p>Você pode fornecer voluntariamente: metas de hábitos, notas motivacionais, preferências de lembretes e configurações de personalização. O fornecimento dessas informações é opcional.</p>
              <p className="mt-3"><strong className="text-white/60">Registros de Acompanhamento de Hábitos</strong></p>
              <p>Você pode inserir voluntariamente informações sobre hábitos pessoais, incluindo:</p>
              <BulletList items={[
                "Rastreamento de sequência",
                "Registros de recaída",
                "Motivos para parar",
                "Entradas de diário",
                "Gatilhos ou anotações",
                "Check-ins de humor ou estado emocional",
                "Respostas de autoavaliação",
                "Dados de acompanhamento de progresso",
              ]} />
              <p className="mt-2">Essas informações são usadas exclusivamente para gerar ferramentas de rastreamento, visualizações e insights controlados pelo usuário dentro do App.</p>
              <p className="mt-3"><strong className="text-white/60">Pagamento e Assinatura</strong></p>
              <p>Assinaturas podem ser adquiridas pela Apple App Store, Google Play ou processadores de pagamento terceirizados como Stripe. O RENOVO não armazena números de cartão de crédito completos. O processamento de pagamentos segue as políticas de privacidade dos respectivos provedores.</p>
            </SubSection>

            <SubSection title="1.2 Informações Coletadas Automaticamente">
              <p><strong className="text-white/60">Informações do Dispositivo</strong></p>
              <BulletList items={[
                "Modelo e tipo do dispositivo",
                "Versão do sistema operacional",
                "Versão do App",
                "Identificadores de dispositivo permitidos pela plataforma",
                "Endereço IP",
                "Relatórios de falhas e diagnósticos",
              ]} />
              <p className="mt-3"><strong className="text-white/60">Dados de Uso e Análise</strong></p>
              <BulletList items={[
                "Funcionalidades utilizadas",
                "Duração de sessão",
                "Padrões de navegação",
                "Métricas de desempenho",
                "Registros de erros",
              ]} />
              <p className="mt-2">Dados analíticos são usados exclusivamente para melhorar a funcionalidade, confiabilidade e desempenho do produto.</p>
              <p className="mt-3"><strong className="text-white/60">Permissões</strong></p>
              <p>O App pode solicitar permissões opcionais como notificações push e acesso à câmera para avatares e o Botão de Pânico. Permissões são solicitadas somente quando necessário e podem ser revogadas nas configurações do dispositivo.</p>
            </SubSection>

            <SubSection title="1.3 Conteúdo da Comunidade">
              <p>Se você participar de funcionalidades comunitárias como fóruns ou chats, poderemos coletar o conteúdo que você enviar voluntariamente, incluindo publicações, comentários e nome de usuário. Onde possível, essas funcionalidades permitem o uso de identificadores pseudônimos.</p>
              <p className="mt-2">O RENOVO não coleta dados precisos de geolocalização, listas de contatos, gravações de microfone ou dados de câmera, salvo quando o usuário concede permissão explícita para uma funcionalidade específica.</p>
            </SubSection>
          </Section>

          <Section number="2." title="Dados Pessoais Sensíveis">
            <p>Certas informações inseridas voluntariamente pelos usuários podem estar relacionadas a hábitos pessoais, estados emocionais ou comportamentos associados ao consumo de pornografia.</p>
            <p>Nos termos da LGPD (Lei nº 13.709/2018), tais informações podem ser consideradas dados pessoais sensíveis relacionados à saúde ou vida sexual.</p>
            <p>O RENOVO trata essas informações somente:</p>
            <BulletList items={[
              "Para fornecer as funcionalidades de rastreamento de hábitos solicitadas pelo usuário",
              "Para gerar métricas de progresso controladas pelo usuário",
              "Para viabilizar as funcionalidades do App",
            ]} />
            <p className="mt-2">Informações comportamentais sensíveis <strong className="text-white/60">nunca são</strong> vendidas, usadas para criação de perfis publicitários ou compartilhadas com corretores de dados.</p>
          </Section>

          <Section number="3." title="Controle do Usuário sobre Dados Pessoais">
            <p>Registros e anotações pessoais inseridos no App são criados e controlados pelo usuário. O RENOVO não avalia nem interpreta as entradas do usuário como avaliações médicas ou psicológicas.</p>
            <p>O usuário controla se deseja inserir, editar ou excluir suas informações. O RENOVO não monitora registros pessoais, exceto quando necessário para manter a integridade da plataforma, cumprir os Termos de Uso ou investigar uso indevido.</p>
          </Section>

          <Section number="4." title="Como Usamos as Informações">
            <p>As informações coletadas pelo App podem ser usadas para:</p>
            <BulletList items={[
              "Fornecer as funcionalidades do App",
              "Manter contas de usuário",
              "Gerar insights de rastreamento de hábitos e análises de progresso",
              "Melhorar o desempenho e a confiabilidade do produto",
              "Comunicar atualizações de serviço ou respostas de suporte",
              "Processar assinaturas e cobranças",
              "Detectar fraudes ou abusos",
              "Cumprir obrigações legais",
            ]} />
            <p className="mt-2">Informações comportamentais sensíveis são usadas exclusivamente para as funcionalidades solicitadas pelo usuário.</p>
          </Section>

          <Section number="5." title="Base Legal para o Tratamento (LGPD)">
            <p>Nos termos da Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), tratamos dados pessoais com base nas seguintes hipóteses legais:</p>
            <BulletList items={[
              "Execução de contrato — para fornecer o App e seus serviços",
              "Legítimo interesse — segurança, análise, prevenção de fraudes e melhoria do produto",
              "Consentimento — funcionalidades opcionais como notificações ou análises onde exigido",
              "Cumprimento de obrigação legal — quando exigido pela legislação aplicável",
            ]} />
          </Section>

          <Section number="6." title="Compartilhamento e Divulgação de Dados">
            <p>O RENOVO <strong className="text-white/60">não vende</strong> informações pessoais.</p>

            <SubSection title="6.1 Prestadores de Serviço">
              <p>Podemos compartilhar informações com fornecedores que auxiliam na operação do App, incluindo provedores de hospedagem em nuvem, provedores de análise, processadores de pagamento e sistemas de suporte ao cliente. Esses prestadores são contratualmente obrigados a proteger as informações pessoais e processá-las apenas para fins autorizados.</p>
            </SubSection>

            <SubSection title="6.2 Cumprimento Legal e Segurança">
              <p>Podemos divulgar informações quando exigido por lei, decisão judicial ou para proteger a segurança dos usuários, investigar abusos ou condutas ilegais.</p>
            </SubSection>

            <SubSection title="6.3 Transações Corporativas">
              <p>Em caso de fusão, aquisição, reestruturação ou venda de ativos, as informações dos usuários poderão ser transferidas à entidade sucessora, que estará obrigada a tratar os dados de forma consistente com esta Política ou fornecer aviso adequado sobre mudanças materiais, conforme exigido pela LGPD.</p>
            </SubSection>
          </Section>

          <Section number="7." title="Segurança dos Dados">
            <p>O RENOVO utiliza salvaguardas padrão do setor para proteger informações pessoais, incluindo:</p>
            <BulletList items={[
              "Criptografia em trânsito",
              "Controles de acesso",
              "Infraestrutura de nuvem segura",
              "Monitoramento e revisões de segurança",
            ]} />
            <p className="mt-2">Apesar dessas medidas, nenhum sistema pode garantir segurança absoluta. Os usuários devem proteger suas credenciais e nos notificar sobre suspeitas de acesso não autorizado.</p>
          </Section>

          <Section number="8." title="Incidentes de Segurança">
            <p>Em caso de incidente de segurança confirmado envolvendo acesso não autorizado a informações pessoais, o RENOVO tomará medidas razoáveis para investigar, mitigar danos potenciais e fornecer notificação conforme exigido pela LGPD e pelas diretrizes da ANPD (Autoridade Nacional de Proteção de Dados).</p>
            <p>Notificações poderão ser entregues por e-mail, notificação no App ou outros meios razoáveis de comunicação.</p>
          </Section>

          <Section number="9." title="Retenção de Dados">
            <p>Retemos informações pessoais apenas pelo tempo razoavelmente necessário para fornecer as funcionalidades do App, manter contas de usuário, processar assinaturas e cumprir obrigações legais ou regulatórias.</p>
            <p>Quando um usuário exclui sua conta ou envia uma solicitação de exclusão verificada, tomaremos medidas razoáveis para excluir ou anonimizar permanentemente as informações pessoais associadas, exceto quando a retenção for necessária para:</p>
            <BulletList items={[
              "Cumprimento de legislação aplicável",
              "Resolução de disputas",
              "Cumprimento dos Termos de Uso",
              "Detecção de incidentes de segurança ou prevenção de fraudes",
              "Manutenção de registros financeiros ou contábeis necessários",
            ]} />
          </Section>

          <Section number="10." title="Cookies, Tecnologias de Rastreamento e Análise">
            <p>O App e os serviços relacionados podem usar cookies, identificadores móveis, SDKs ou tecnologias semelhantes para suportar funcionalidades, análises e desempenho do serviço.</p>
            <p>O RENOVO <strong className="text-white/60">não usa</strong> dados comportamentais sensíveis, registros de hábitos ou informações pessoais de recuperação para segmentação publicitária ou criação de perfis de marketing.</p>
            <p>Os usuários podem gerenciar certas preferências de rastreamento pelas configurações do dispositivo, incluindo a redefinição de identificadores de publicidade ou a limitação de permissões de rastreamento.</p>
          </Section>

          <Section number="11." title="Dados Agregados e Anonimizados">
            <p>O RENOVO pode criar informações agregadas ou anonimizadas derivadas do uso do App que não identificam razoavelmente usuários individuais. Essas informações podem ser usadas para analisar padrões de uso, melhorar funcionalidades, desenvolver novos recursos e realizar análises estatísticas.</p>
          </Section>

          <Section number="12." title="Seus Direitos de Privacidade">
            <p>Nos termos da LGPD (Lei nº 13.709/2018), você possui os seguintes direitos em relação aos seus dados pessoais:</p>
            <BulletList items={[
              "Confirmação da existência de tratamento",
              "Acesso aos dados pessoais que mantemos sobre você",
              "Correção de dados incompletos, inexatos ou desatualizados",
              "Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos",
              "Portabilidade dos dados a outro fornecedor de serviço",
              "Eliminação dos dados tratados com base no seu consentimento",
              "Informação sobre entidades com as quais compartilhamos seus dados",
              "Revogação do consentimento a qualquer momento",
              "Petição à ANPD em caso de violação desta Lei",
            ]} />
            <p className="mt-3">Para exercer esses direitos, entre em contato: <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a></p>
            <p className="mt-2">Podemos solicitar verificação razoável de identidade antes de atender determinadas solicitações. Responderemos dentro dos prazos exigidos pela LGPD, geralmente em até 15 dias.</p>
          </Section>

          <Section number="13." title="Transferências Internacionais de Dados">
            <p>Informações podem ser processadas ou armazenadas fora do Brasil, incluindo nos Estados Unidos, onde operam alguns de nossos provedores de infraestrutura e análise.</p>
            <p>Quando exigido pela LGPD, transferências internacionais são protegidas por mecanismos adequados, como cláusulas contratuais padrão ou verificação de nível de proteção equivalente pelo país destinatário.</p>
          </Section>

          <Section number="14." title="Insights Automatizados e Processamento Algorítmico">
            <p>O App pode usar sistemas automatizados para gerar insights de progresso, lembretes e análises de hábitos com base nas informações inseridas voluntariamente pelos usuários.</p>
            <p>Esses sistemas são projetados exclusivamente para auxiliar os usuários no rastreamento de hábitos e motivações. <strong className="text-white/60">Não constituem avaliação médica ou psicológica.</strong> Os usuários permanecem no controle das informações que inserem e podem excluí-las a qualquer momento.</p>
          </Section>

          <Section number="15." title="Restrições de Idade">
            <p>Como o App aborda temas relacionados ao comportamento sexual, o RENOVO é destinado a usuários com pelo menos 13 anos ou a idade de consentimento digital aplicável em sua jurisdição.</p>
            <p>O RENOVO não coleta intencionalmente informações pessoais de menores. Se identificarmos que um usuário forneceu informações de idade falsas, nos reservamos o direito de suspender ou encerrar a conta e excluir as informações pessoais associadas.</p>
          </Section>

          <Section number="16." title="Serviços de Terceiros">
            <p>O App pode conter links para serviços de terceiros. Esta Política de Privacidade não se aplica a esses serviços. Recomendamos que os usuários revisem as políticas de privacidade dos respectivos provedores.</p>
          </Section>

          <Section number="17." title="Exclusão de Conta">
            <p>Os usuários podem excluir sua conta pelas configurações do App (<strong className="text-white/60">Configurações → Excluir Conta</strong>) ou entrando em contato pelo e-mail <a href="mailto:suporte@apprenovo.com.br" className="text-green-400 hover:text-green-300 transition-colors">suporte@apprenovo.com.br</a>.</p>
            <p>A exclusão removerá os dados pessoais associados à conta, exceto onde a retenção for exigida por lei.</p>
          </Section>

          <Section number="18." title="Alterações nesta Política">
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Alterações materiais serão comunicadas pelo App, por e-mail ou pela publicação de uma política atualizada.</p>
            <p>O uso continuado do App após as atualizações constitui aceitação da política revisada.</p>
          </Section>

          <Section number="19." title="Contato e Encarregado de Dados (DPO)">
            <p>Para dúvidas sobre esta Política de Privacidade, seus direitos como titular de dados ou para exercer qualquer direito previsto na LGPD:</p>
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
              <p className="text-white/70 text-sm">
                <span className="text-white/40">Autoridade supervisora: </span>
                <span className="text-white/60">ANPD — Autoridade Nacional de Proteção de Dados (gov.br/anpd)</span>
              </p>
              <p className="text-white/35 text-xs mt-1">Respondemos em até 15 dias, conforme exigido pela LGPD.</p>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </>
  );
}
