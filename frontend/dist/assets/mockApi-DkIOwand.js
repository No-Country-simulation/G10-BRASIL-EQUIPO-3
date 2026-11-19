import { s as e } from "./index-DcNd8WVi.js";
var t = (e, t, n) => ({ valor: e, confianca: t, evidencia: n }),
  n = (e) => ({ situacao: `ilegivel`, evidencia: e });
function r(e) {
  let t = {},
    n = (e, n) => {
      n &&
        n.confianca !== null &&
        n.confianca !== void 0 &&
        (t[e] = n.confianca);
    };
  return (
    n(`paciente.nome`, e.paciente?.nome),
    n(`paciente.idade`, e.paciente?.idade),
    n(`medico_solicitante.nome`, e.medico_solicitante?.nome),
    n(`medico_solicitante.crm`, e.medico_solicitante?.crm),
    n(`medico_solicitante.uf_crm`, e.medico_solicitante?.uf_crm),
    n(`diagnostico_principal`, e.diagnostico_principal),
    n(`cid10_documentado`, e.cid10_documentado),
    n(`cid10_sugerido`, e.cid10_sugerido),
    n(`conclusao`, e.conclusao),
    n(`procedimento_solicitado`, e.procedimento_solicitado),
    (e.medicamentos ?? []).forEach((e, t) => {
      (n(`medicamentos[${t}].nome`, e.nome),
        n(`medicamentos[${t}].dosagem`, e.dosagem),
        n(`medicamentos[${t}].posologia`, e.posologia));
    }),
    (e.exames ?? []).forEach((e, t) => n(`exames[${t}].nome`, e.nome)),
    n(`datas.emissao`, e.datas?.emissao),
    n(`datas.realizacao_exame`, e.datas?.realizacao_exame),
    n(`datas.admissao`, e.datas?.admissao),
    n(`datas.alta`, e.datas?.alta),
    t
  );
}
var i = { provedor: `mock`, modelo: null, dados_de_teste: !0 },
  a = `mediflow-documentos-clinicos`;
function o(e, t, n = 1, r = `pdf`) {
  let i = `${t}/${e}/resultado_v${String(n).padStart(3, `0`)}.json`;
  return {
    bucket: a,
    caminho_objeto: i,
    referencia_documento: `${t === `falhas_processamento` ? `falhas_processamento` : `recebidos`}/${e}/original.${r}`,
    referencia_resultado: i,
    persistido: !0,
    status_backup: `sucesso`,
    modo_armazenamento: `mock`,
  };
}
function s(e) {
  return e.dados_extraidos
    ? { ...e, scores_por_campo: r(e.dados_extraidos) }
    : e;
}
var c = [
    `Maria Aparecida Souza`,
    `Carlos Eduardo Mendes`,
    `Ana Beatriz Ramos`,
    `José Antônio Ferreira`,
    `Luciana Prado Nunes`,
  ],
  l = [
    { nome: `Dr. João Pereira Lima`, crm: `123456`, uf: `SP` },
    { nome: `Dra. Renata Silveira`, crm: `145892`, uf: `SP` },
    { nome: `Dr. Paulo Henrique Matos`, crm: `208117`, uf: `RJ` },
  ],
  u = (e, t) => e[t % e.length],
  d = (e) => new Date(Date.now() - e * 864e5).toISOString().slice(0, 10);
function f(e, n, r = 0) {
  let a = u(l, r),
    f = u(c, r);
  return s({
    documento_id: e,
    status: `processado`,
    versao_resultado: 1,
    canal_origem: n,
    classificacao: {
      tipo_documento: `receita_medica`,
      especialidade: `Clínica médica`,
      prioridade: `rotina`,
      urgente: !1,
      score_confianca_classificacao: 0.97,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {
        nome: t(f, 0.98, `Paciente: ${f}`),
        idade: t(47, 0.95, `47 anos`),
      },
      medico_solicitante: {
        nome: t(a.nome, 0.96, a.nome),
        crm: t(a.crm, 0.93, `CRM-${a.uf} ${a.crm}`),
        uf_crm: t(a.uf, 0.93, `CRM-${a.uf} ${a.crm}`),
      },
      diagnostico_principal: t(
        `Faringoamigdalite aguda`,
        0.9,
        `Dx: faringoamigdalite aguda`,
      ),
      medicamentos: [
        {
          nome: t(`Amoxicilina`, 0.94, `Amoxicilina 500 mg`),
          dosagem: t(`500 mg`, 0.92, `Amoxicilina 500 mg`),
          posologia: t(
            `1 cápsula a cada 8 horas por 7 dias`,
            0.9,
            `1 cápsula de 8/8h por 7 dias`,
          ),
        },
      ],
      datas: { emissao: t(d(1), 0.91, `data de emissão no cabeçalho`) },
      score_confianca_extracao: 0.93,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: `FARMACIA_HOSPITALAR`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !1,
      motivo: `Campos obrigatórios confiáveis e validações aprovadas`,
      codigo_motivo: `criterios_atendidos`,
      justificativa_roteamento: `Receita médica não urgente, com todos os campos obrigatórios acima do limiar; roteada pela categoria.`,
      status_revisao: `nao_necessaria`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `processados`, 1, `txt`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function p(e, n = `PRONTO_SOCORRO`, r = 0) {
  let a = `Falha de enchimento em arteria pulmonar principal direita compativel com TEP agudo`;
  return s({
    documento_id: e,
    status: `processado`,
    versao_resultado: 1,
    canal_origem: n,
    classificacao: {
      tipo_documento: `laudo_exame`,
      especialidade: `Radiologia / Pneumologia`,
      prioridade: `urgente`,
      urgente: !0,
      score_confianca_classificacao: 0.99,
      sinais_urgencia: [
        {
          origem: `llm`,
          descricao: `Achado crítico compatível com tromboembolismo pulmonar agudo`,
          evidencia: a,
        },
        {
          origem: `regra`,
          descricao: `Termo de urgência no documento`,
          evidencia: `Sugere-se correlacao clinica urgente`,
        },
      ],
    },
    dados_extraidos: {
      paciente: {
        nome: t(
          `Carlos Eduardo Mendes`,
          0.98,
          `Paciente: Carlos Eduardo Mendes`,
        ),
        idade: t(52, 0.97, `52 anos`),
      },
      medico_solicitante: {
        nome: t(
          `Dra. Renata Silveira`,
          0.95,
          `Solicitante: Dra. Renata Silveira`,
        ),
        crm: t(`145892`, 0.96, `CRM-SP 145892`),
        uf_crm: t(`SP`, 0.96, `CRM-SP 145892`),
      },
      diagnostico_principal: t(
        `Tromboembolismo Pulmonar Agudo (TEP)`,
        0.97,
        `Quadro compativel com Tromboembolismo Pulmonar Agudo`,
      ),
      cid10_sugerido: { valor: `I26.9`, confianca: 0.8 },
      conclusao: t(
        `Quadro compativel com Tromboembolismo Pulmonar Agudo`,
        0.97,
        `CONCLUSÃO: Quadro compativel com Tromboembolismo Pulmonar Agudo`,
      ),
      exames: [
        {
          nome: t(
            `Tomografia de Torax com contraste`,
            0.98,
            `Exame: Tomografia de Torax com contraste`,
          ),
          tipo: `realizado`,
        },
      ],
      score_confianca_extracao: 0.96,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: `FILA_EMERGENCIA_MEDICA`,
      prioridade: `urgente`,
      urgente: !0,
      requer_auditoria_humana: !1,
      motivo: `Urgência sinalizada com paciente e evidência do achado confiáveis`,
      codigo_motivo: `urgencia_confiavel`,
      justificativa_roteamento: `Achado crítico de alta gravidade (TEP agudo) em paciente sintomático, com identificação do paciente e evidência textual confiáveis.`,
      status_revisao: `nao_necessaria`,
      notificacao_gerada: {
        canal: `Alerta_Plantao_Medico`,
        mensagem: `ALERTA URGENTE: laudo com achado crítico compatível com TEP agudo para paciente do Pronto-Socorro.`,
        gerada_em: new Date(Date.now() - r * 6e4).toISOString(),
        documento_id: e,
        evidencias: [a],
      },
    },
    armazenamento_oci: o(e, `processados/urgentes`, 1, `pdf`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function m(e, n = `AMBULATORIO`) {
  return s({
    documento_id: e,
    status: `em_auditoria`,
    versao_resultado: 1,
    canal_origem: n,
    classificacao: {
      tipo_documento: `receita_medica`,
      especialidade: `Clínica médica`,
      prioridade: `rotina`,
      urgente: !1,
      score_confianca_classificacao: 0.96,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {
        nome: t(
          `Maria Aparecida Souza`,
          0.98,
          `Paciente: Maria Aparecida Souza`,
        ),
      },
      medico_solicitante: {
        nome: t(`Dr. João Pereira Lima`, 0.96, `Dr. João Pereira Lima`),
        crm: t(`123456`, 0.45, `CRM-SP 12?456 (carimbo borrado)`),
        uf_crm: t(`SP`, 0.9, `CRM-SP`),
      },
      medicamentos: [
        {
          nome: t(`Amoxicilina`, 0.92, `Amoxicilina 500 mg`),
          dosagem: t(`500 mg`, 0.9, `Amoxicilina 500 mg`),
          posologia: t(
            `1 cápsula a cada 8 horas por 7 dias`,
            0.9,
            `1 cápsula de 8/8h por 7 dias`,
          ),
        },
      ],
      datas: { emissao: t(d(2), 0.91, `data de emissão no cabeçalho`) },
      score_confianca_extracao: 0.82,
    },
    validacoes: [
      {
        codigo: `baixa_confianca`,
        descricao: `Score do CRM (0,45) abaixo do limiar de referência (0,80)`,
        gravidade: `alta`,
        campos_afetados: [`medico_solicitante.crm`],
        evidencia: `CRM-SP 12?456 (carimbo borrado)`,
        acao_sugerida: `Conferir o número do CRM no documento original`,
      },
    ],
    decisao_roteamento: {
      destino: `FILA_REVISAO_HUMANA`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !0,
      motivo: `Score do CRM abaixo do limiar de referência`,
      codigo_motivo: `baixa_confianca_campo_obrigatorio`,
      justificativa_roteamento: `Documento não urgente com campo obrigatório (CRM) abaixo do limiar; roteamento automático não permitido.`,
      status_revisao: `pendente`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `auditoria_humana`, 1, `png`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function h(e, r = `PRONTO_SOCORRO`) {
  return s({
    documento_id: e,
    status: `em_auditoria`,
    versao_resultado: 1,
    canal_origem: r,
    classificacao: {
      tipo_documento: `laudo_exame`,
      especialidade: `Radiologia / Pneumologia`,
      prioridade: `urgente`,
      urgente: !0,
      score_confianca_classificacao: 0.88,
      sinais_urgencia: [
        {
          origem: `llm`,
          descricao: `Achado compatível com TEP agudo`,
          evidencia: `falha de enchimento em artéria pulmonar compatível com TEP agudo`,
        },
      ],
    },
    dados_extraidos: {
      paciente: {
        nome: n(`nome do paciente borrado na imagem`),
        idade: t(61, 0.55, `6? anos`),
      },
      diagnostico_principal: t(
        `Tromboembolismo Pulmonar Agudo (TEP)`,
        0.85,
        `compatível com TEP agudo`,
      ),
      score_confianca_extracao: 0.5,
    },
    validacoes: [
      {
        codigo: `campo_ilegivel`,
        descricao: `Nome do paciente ilegível no documento`,
        gravidade: `alta`,
        campos_afetados: [`paciente.nome`],
        evidencia: `nome do paciente borrado na imagem`,
        acao_sugerida: `Identificar o paciente no documento original antes de qualquer acionamento`,
      },
      {
        codigo: `baixa_confianca`,
        descricao: `Idade com score baixo (0,55)`,
        gravidade: `media`,
        campos_afetados: [`paciente.idade`],
      },
    ],
    decisao_roteamento: {
      destino: `FILA_REVISAO_HUMANA_PRIORITARIA`,
      prioridade: `urgente`,
      urgente: !0,
      requer_auditoria_humana: !0,
      motivo: `Urgência sinalizada, mas o paciente não pôde ser identificado`,
      codigo_motivo: `urgencia_dado_critico_insuficiente`,
      justificativa_roteamento: `Documento potencialmente urgente com campo crítico ilegível; prioridade urgente preservada e revisão humana prioritária obrigatória.`,
      status_revisao: `pendente`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `auditoria_humana`, 1, `jpg`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function g(e, t = `LABORATORIO`, n = 0) {
  return {
    documento_id: e,
    status: `erro`,
    versao_resultado: 1,
    canal_origem: t,
    validacoes: [],
    armazenamento_oci: o(e, `falhas_processamento`, 1, `pdf`),
    historico_revisao: [],
    erro: {
      codigo: `arquivo_corrompido`,
      descricao: `Não foi possível abrir o PDF: estrutura do arquivo inválida.`,
      etapa: `normalize_document`,
      ocorrido_em: new Date(Date.now() - n * 6e4).toISOString(),
    },
    origem_analise: null,
  };
}
function _(e, n) {
  return s({
    documento_id: e,
    status: `processado`,
    versao_resultado: 1,
    canal_origem: n,
    classificacao: {
      tipo_documento: `guia_solicitacao_procedimento`,
      especialidade: `Ortopedia`,
      prioridade: `rotina`,
      urgente: !1,
      score_confianca_classificacao: 0.94,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {
        nome: t(`Ana Beatriz Ramos`, 0.97, `Beneficiário: Ana Beatriz Ramos`),
        idade: t(34, 0.9, `34 anos`),
      },
      medico_solicitante: {
        nome: t(`Dr. Paulo Henrique Matos`, 0.95, `Dr. Paulo Henrique Matos`),
        crm: t(`208117`, 0.94, `CRM-RJ 208117`),
        uf_crm: t(`RJ`, 0.94, `CRM-RJ 208117`),
      },
      procedimento_solicitado: t(
        `Ressonância magnética de joelho direito`,
        0.93,
        `Solicito RM de joelho direito`,
      ),
      cid10_documentado: t(`M23.2`, 0.9, `CID M23.2`),
      datas: { emissao: t(d(3), 0.9, `data de emissão na guia`) },
      score_confianca_extracao: 0.92,
    },
    validacoes: [],
    decisao_roteamento: {
      destino: `AUDITORIA_AUTORIZACOES`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !1,
      motivo: `Campos obrigatórios confiáveis e validações aprovadas`,
      codigo_motivo: `criterios_atendidos`,
      justificativa_roteamento: `Guia de procedimento não urgente com campos obrigatórios confiáveis; roteada pela categoria.`,
      status_revisao: `nao_necessaria`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `processados`, 1, `pdf`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function v(e, n) {
  return s({
    documento_id: e,
    status: `em_auditoria`,
    versao_resultado: 1,
    canal_origem: n,
    classificacao: {
      tipo_documento: `outro`,
      especialidade: null,
      prioridade: `rotina`,
      urgente: !1,
      score_confianca_classificacao: 0.71,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {
        nome: t(`Luciana Prado Nunes`, 0.9, `Nome: Luciana Prado Nunes`),
      },
      conclusao: t(
        `Declaração de comparecimento à consulta`,
        0.78,
        `Declaro que a paciente compareceu à consulta`,
      ),
      datas: { emissao: t(d(1), 0.8, `data no rodapé`) },
      score_confianca_extracao: 0.8,
    },
    validacoes: [
      {
        codigo: `classificacao_incerta`,
        descricao: `A categoria documental não pôde ser determinada com segurança.`,
        gravidade: `media`,
        campos_afetados: [],
        acao_sugerida: `Conferir o tipo do documento no original.`,
      },
    ],
    decisao_roteamento: {
      destino: `FILA_REVISAO_HUMANA`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !0,
      motivo: `A categoria documental exige revisão humana.`,
      codigo_motivo: `categoria_sem_roteamento_automatico`,
      justificativa_roteamento: `A categoria documental exige revisão humana.`,
      status_revisao: `pendente`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `auditoria_humana`, 1, `pdf`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function y(e) {
  return s({
    documento_id: e,
    status: `em_auditoria`,
    versao_resultado: 1,
    canal_origem: `PRONTO_SOCORRO`,
    classificacao: {
      tipo_documento: `receita_medica`,
      especialidade: `Clínica médica`,
      prioridade: `rotina`,
      urgente: !1,
      score_confianca_classificacao: 0.9,
      sinais_urgencia: [],
    },
    dados_extraidos: {
      paciente: {
        nome: t(
          `José Antônio Ferreira`,
          0.96,
          `Paciente: José Antônio Ferreira`,
        ),
      },
      medico_solicitante: {
        nome: t(`Dra. Renata Silveira`, 0.94, `Dra. Renata Silveira`),
        crm: t(`145892`, 0.93, `CRM-SP 145892`),
        uf_crm: t(`SP`, 0.93, `CRM-SP 145892`),
      },
      medicamentos: [
        {
          nome: t(`Dipirona`, 0.92, `Dipirona`),
          dosagem: n(`dosagem manchada na receita`),
          posologia: t(
            `1 comprimido a cada 6 horas se dor`,
            0.88,
            `1 cp 6/6h se dor`,
          ),
        },
      ],
      datas: { emissao: t(d(0), 0.9, `data de hoje no cabeçalho`) },
      score_confianca_extracao: 0.76,
    },
    validacoes: [
      {
        codigo: `campo_ilegivel`,
        descricao: `O campo obrigatório 'Dosagem' está ilegível.`,
        gravidade: `alta`,
        campos_afetados: [`medicamentos[0].dosagem`],
        acao_sugerida: `Solicitar conferência humana do documento original.`,
      },
    ],
    decisao_roteamento: {
      destino: `FILA_REVISAO_HUMANA_PRIORITARIA`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !0,
      motivo: `Conteúdo obrigatório ilegível recebido no Pronto-Socorro.`,
      codigo_motivo: `conteudo_ilegivel_pronto_socorro`,
      justificativa_roteamento: `Conteúdo obrigatório ilegível recebido no Pronto-Socorro.`,
      status_revisao: `pendente`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `auditoria_humana`, 1, `jpg`),
    historico_revisao: [],
    erro: null,
    origem_analise: i,
  });
}
function b(e) {
  let t = m(e),
    n = structuredClone(t.dados_extraidos);
  n.medico_solicitante.crm = { valor: `128456`, revisado_por_humano: !0 };
  let r = {
    documento_id: e,
    revisor: `revisor.exemplo`,
    identidade_verificada: !1,
    data_hora: new Date(Date.now() - 57e5).toISOString(),
    decisao: `aprovar`,
    justificativa: `CRM corrigido conforme o carimbo do documento original`,
    correcoes: [
      {
        campo: `medico_solicitante.crm`,
        valor_anterior: `123456`,
        valor_posterior: `128456`,
      },
    ],
    versao_resultado_anterior: 1,
    versao_resultado_revisado: 2,
  };
  return s({
    ...t,
    status: `aprovado_auditoria`,
    versao_resultado: 2,
    dados_extraidos: n,
    validacoes: [],
    decisao_roteamento: {
      destino: `FARMACIA_HOSPITALAR`,
      prioridade: `rotina`,
      urgente: !1,
      requer_auditoria_humana: !1,
      motivo: `Documento aprovado por revisor humano; encaminhado ao destino determinístico da categoria.`,
      codigo_motivo: `aprovacao_humana`,
      justificativa_roteamento: `Documento aprovado por revisor humano; encaminhado ao destino determinístico da categoria.`,
      status_revisao: `aprovada`,
      notificacao_gerada: null,
    },
    armazenamento_oci: o(e, `processados`, 2, `png`),
    historico_revisao: [r],
  });
}
function x(e) {
  let t = v(e, `OPERADORA`),
    n = {
      documento_id: e,
      revisor: `revisor.exemplo`,
      identidade_verificada: !1,
      data_hora: new Date(Date.now() - 108e5).toISOString(),
      decisao: `rejeitar`,
      justificativa: `Documento administrativo fora do escopo clínico da triagem.`,
      correcoes: [],
      versao_resultado_anterior: 1,
      versao_resultado_revisado: 2,
    };
  return s({
    ...t,
    status: `rejeitado`,
    versao_resultado: 2,
    decisao_roteamento: {
      ...t.decisao_roteamento,
      requer_auditoria_humana: !1,
      motivo: `Documento rejeitado pelo revisor humano.`,
      codigo_motivo: `rejeicao_humana`,
      justificativa_roteamento: `Documento rejeitado pelo revisor humano.`,
      status_revisao: `rejeitada`,
    },
    armazenamento_oci: o(e, `auditoria_humana`, 2, `pdf`),
    historico_revisao: [n],
  });
}
function S() {
  return [
    {
      dto: h(`DOC-URG-ILEG-0001`),
      nomeArquivo: `laudo-tomografia-borrado.jpg`,
      minutosAtras: 18,
    },
    {
      dto: y(`DOC-PS-ILEG-0001`),
      nomeArquivo: `receita-ps-dipirona.jpg`,
      minutosAtras: 26,
    },
    {
      dto: m(`DOC-BAIXA-CONF-0001`),
      nomeArquivo: `receita-carimbo-borrado.png`,
      minutosAtras: 52,
    },
    {
      dto: v(`DOC-OUTRO-0001`, `OPERADORA`),
      nomeArquivo: `declaracao-comparecimento.pdf`,
      minutosAtras: 75,
    },
    {
      dto: p(`DOC-CLIN-2026-8942`, `PRONTO_SOCORRO`, 12),
      nomeArquivo: `laudo-tc-torax.pdf`,
      minutosAtras: 14,
    },
    {
      dto: f(`DOC-ROTINA-0001`, `AMBULATORIO`),
      nomeArquivo: `receita-amoxicilina.txt`,
      minutosAtras: 130,
    },
    {
      dto: _(`DOC-GUIA-0001`, `OPERADORA`),
      nomeArquivo: `guia-rm-joelho.pdf`,
      minutosAtras: 190,
    },
    {
      dto: b(`DOC-APROVADO-0001`),
      nomeArquivo: `receita-crm-corrigido.png`,
      minutosAtras: 240,
    },
    {
      dto: x(`DOC-REJEITADO-0001`),
      nomeArquivo: `comprovante-operadora.pdf`,
      minutosAtras: 400,
    },
    {
      dto: g(`DOC-ERRO-0001`, `LABORATORIO`, 40),
      nomeArquivo: `exame-corrompido.pdf`,
      minutosAtras: 45,
    },
  ];
}
var C = (t) => new e(409, t),
  w = (t) => new e(422, t),
  T = {
    receita_medica: `FARMACIA_HOSPITALAR`,
    laudo_exame: `PRONTUARIO_ELETRONICO`,
    guia_solicitacao_procedimento: `AUDITORIA_AUTORIZACOES`,
    relatorio_alta_internacao: `PRONTUARIO_ELETRONICO`,
    atestado_medico: `PRONTUARIO_ELETRONICO`,
    outro: null,
    indeterminado: null,
  },
  E = [`FILA_REVISAO_HUMANA`, `FILA_REVISAO_HUMANA_PRIORITARIA`],
  D = /^[a-z0-9_]+(\[\d+\])?(\.[a-z0-9_]+(\[\d+\])?)*$/;
function O(e) {
  let t = e.correcoes ?? [];
  if (!Number.isInteger(e.versao_resultado_base) || e.versao_resultado_base < 1)
    throw w(`versao_resultado_base: deve ser um inteiro ≥ 1`);
  if (e.decisao === `rejeitar` && !e.justificativa)
    throw w(`a rejeição exige justificativa`);
  if (e.decisao === `rejeitar` && t.length)
    throw w(`a rejeição não aceita correções de campos`);
  if (e.decisao === `aprovar` && t.length && !e.justificativa)
    throw w(`aprovação com correções exige justificativa`);
  let n = t.map((e) => e.campo);
  if (new Set(n).size !== n.length)
    throw w(`há mais de uma correção para o mesmo campo`);
  for (let e of n)
    if (!D.test(e)) throw w(`campo: chave inválida ${JSON.stringify(e)}`);
}
function k(e) {
  let t = e.prioridade === `urgente`;
  if (e.urgente !== t) throw w("`urgente` e `prioridade` são inconsistentes");
  if (e.requer_auditoria_humana !== (e.status_revisao === `pendente`))
    throw w("`requer_auditoria_humana` só é verdadeiro com revisão pendente");
  let n = E.includes(e.destino);
  if (n && e.status_revisao === `nao_necessaria`)
    throw w(
      `destino em fila de revisão humana não pode ter revisão desnecessária`,
    );
  if (
    !n &&
    (e.status_revisao === `pendente` || e.status_revisao === `rejeitada`)
  )
    throw w(
      `revisão pendente ou rejeitada só ocorre em fila de revisão humana`,
    );
  if (
    e.urgente &&
    e.destino !== `FILA_REVISAO_HUMANA_PRIORITARIA` &&
    e.destino !== `FILA_EMERGENCIA_MEDICA`
  )
    throw w(`documento urgente só pode ir para fila prioritária ou emergência`);
  if (e.destino === `FILA_EMERGENCIA_MEDICA` && !e.urgente)
    throw w(`fila de emergência exige documento sinalizado como urgente`);
  if (
    e.destino === `FILA_REVISAO_HUMANA_PRIORITARIA` &&
    !e.urgente &&
    e.codigo_motivo !== `conteudo_ilegivel_pronto_socorro`
  )
    throw w(`fila prioritária sem urgência exige motivo de ilegível no PS`);
  if (e.destino === `FILA_EMERGENCIA_MEDICA` && !e.notificacao_gerada)
    throw w(`encaminhamento à emergência exige o evento de alerta`);
  if (e.notificacao_gerada && !e.urgente)
    throw w(`alerta só pode ser gerado para documento urgente`);
  if (
    (e.codigo_motivo === `aprovacao_humana`) !=
    (e.status_revisao === `aprovada`)
  )
    throw w(
      `motivo de aprovação humana e status da revisão são inconsistentes`,
    );
  if (
    (e.codigo_motivo === `rejeicao_humana`) !=
    (e.status_revisao === `rejeitada`)
  )
    throw w(`motivo de rejeição humana e status da revisão são inconsistentes`);
}
function A(e, t) {
  let n = t.sinais_urgencia ?? [],
    r = n
      .map((e) => e.evidencia)
      .filter((e) => !!e)
      .slice(0, 20);
  return {
    canal: `Alerta_Plantao_Medico`,
    mensagem: `ALERTA DE TRIAGEM: documento com possível urgência; ${
      n
        .slice(0, 3)
        .map((e) => e.descricao)
        .join(`; `) || `sinalização urgente registrada`
    }.`,
    gerada_em: new Date().toISOString(),
    documento_id: e,
    evidencias: r,
  };
}
function j(e, t) {
  let n = {
    prioridade: t.prioridade,
    urgente: t.urgente,
    requer_auditoria_humana: !1,
    status_revisao: `aprovada`,
    codigo_motivo: `aprovacao_humana`,
  };
  if (t.urgente) {
    let r = `Documento urgente aprovado por revisor humano; encaminhado à emergência.`;
    return {
      ...n,
      destino: `FILA_EMERGENCIA_MEDICA`,
      motivo: r,
      justificativa_roteamento: r,
      notificacao_gerada: A(e, t),
    };
  }
  let r = T[t.tipo_documento],
    i =
      `Documento aprovado por revisor humano; ` +
      (r === null
        ? `categoria sem roteamento automático, permanece na fila humana.`
        : `encaminhado ao destino determinístico da categoria.`);
  return {
    ...n,
    destino: r ?? `FILA_REVISAO_HUMANA`,
    motivo: i,
    justificativa_roteamento: i,
    notificacao_gerada: null,
  };
}
function M(e, t) {
  if (!E.includes(t))
    throw C(`somente documentos na fila humana podem ser rejeitados`);
  let n = `Documento rejeitado pelo revisor humano.`;
  return {
    destino: t,
    prioridade: e.prioridade,
    urgente: e.urgente,
    requer_auditoria_humana: !1,
    motivo: n,
    codigo_motivo: `rejeicao_humana`,
    justificativa_roteamento: n,
    status_revisao: `rejeitada`,
    notificacao_gerada: null,
  };
}
var N = /^([a-z0-9_]+)(?:\[(\d+)\])?$/,
  P = (e) => w(`campo de correção inexistente: ${e}`);
function F(e, t) {
  let n = t.split(`.`),
    r = e;
  for (let e of n.slice(0, -1)) {
    let n = N.exec(e);
    if (!n) throw w(`caminho de correção inválido: ${t}`);
    let [, i, a] = n;
    if (a !== void 0) {
      let e = r[i];
      if (!Array.isArray(e) || Number(a) >= e.length) throw P(t);
      r = e[Number(a)];
    } else {
      r[i] === void 0 &&
        [`paciente`, `medico_solicitante`, `datas`].includes(i) &&
        (r[i] = {});
      let e = r[i];
      if (typeof e != `object` || !e || Array.isArray(e)) throw P(t);
      r = e;
    }
  }
  let i = N.exec(n[n.length - 1] ?? ``);
  if (!i) throw w(`caminho de correção inválido: ${t}`);
  let [, a, o] = i;
  if (o !== void 0)
    throw w(
      `correção precisa apontar para um campo extraído, não para um item inteiro`,
    );
  let s = r[a];
  if (
    !(s === void 0
      ? L.has(I(t))
      : typeof s == `object` && s && !Array.isArray(s))
  )
    throw w(`campo de extração não corrigível: ${t}`);
  return { obj: r, chave: a, campo: s ?? { situacao: `ausente` } };
}
var I = (e) => e.replace(/\[\d+\]/g, `[*]`),
  L = new Set([
    `paciente.nome`,
    `paciente.idade`,
    `medico_solicitante.nome`,
    `medico_solicitante.crm`,
    `medico_solicitante.uf_crm`,
    `diagnostico_principal`,
    `cid10_documentado`,
    `cid10_sugerido`,
    `conclusao`,
    `procedimento_solicitado`,
    `medicamentos[*].nome`,
    `medicamentos[*].dosagem`,
    `medicamentos[*].posologia`,
    `exames[*].nome`,
    `datas.emissao`,
    `datas.realizacao_exame`,
    `datas.admissao`,
    `datas.alta`,
  ]);
function R(e, t) {
  if (t === null) return;
  let n = I(e),
    r = () => w(`valor incompatível para o campo ${e}`);
  if (n === `paciente.idade`) {
    if (typeof t != `number` || !Number.isInteger(t)) throw r();
  } else if (n.startsWith(`datas.`)) {
    if (
      typeof t != `string` ||
      !/^\d{4}-\d{2}-\d{2}$/.test(t) ||
      Number.isNaN(Date.parse(t))
    )
      throw r();
  } else if (
    typeof t != `string` ||
    t.trim().length < 1 ||
    t.trim().length > 2e3
  )
    throw r();
}
function z(e, t, n) {
  let { obj: r, chave: i, campo: a } = F(e, t);
  R(t, n);
  let o = a.valor ?? null,
    s = typeof n == `string` ? n.trim() : n;
  if (JSON.stringify(o) === JSON.stringify(s))
    throw w(`a correção não altera o valor do campo`);
  return (
    (r[i] = {
      valor: s,
      confianca: null,
      evidencia: null,
      situacao: s === null ? `ausente` : `presente`,
      revisado_por_humano: !0,
    }),
    { campo: t, valor_anterior: o, valor_posterior: s }
  );
}
function B(e, t) {
  if ((O(t), e.status !== `em_auditoria`))
    throw C(`somente resultados em_auditoria podem ser revisados`);
  if (!e.decisao_roteamento || !e.classificacao || !e.dados_extraidos)
    throw C(
      `resultado sem decisão, classificação ou dados extraídos não pode ser revisado`,
    );
  let n = e.versao_resultado ?? 1;
  if (t.versao_resultado_base !== n)
    throw C(
      `versao_resultado_base desatualizada; recarregue o resultado antes de revisar`,
    );
  let i = structuredClone(e.dados_extraidos),
    a = (t.correcoes ?? []).map((e) => z(i, e.campo, e.valor_posterior)),
    o =
      t.decisao === `aprovar`
        ? j(e.documento_id, e.classificacao)
        : M(e.classificacao, e.decisao_roteamento.destino);
  k(o);
  let s = new Set(a.map((e) => I(e.campo))),
    c = (e.validacoes ?? []).filter(
      (e) => !(e.campos_afetados ?? []).some((e) => s.has(I(e))),
    ),
    l = n + 1,
    u = {
      documento_id: e.documento_id,
      revisor: t.revisor ?? null,
      identidade_verificada: !1,
      data_hora: new Date().toISOString(),
      decisao: t.decisao,
      justificativa: t.justificativa ?? null,
      correcoes: a,
      versao_resultado_anterior: n,
      versao_resultado_revisado: l,
    },
    d = t.decisao === `aprovar`;
  return {
    ...e,
    status: d ? `aprovado_auditoria` : `rejeitado`,
    versao_resultado: l,
    dados_extraidos: i,
    scores_por_campo: r(i),
    validacoes: c,
    decisao_roteamento: o,
    armazenamento_oci: e.armazenamento_oci,
    historico_revisao: [...(e.historico_revisao ?? []), u],
  };
}
var V = (e) => structuredClone(e),
  H = (e = 180) => new Promise((t) => setTimeout(t, e)),
  U = () =>
    `DOC-${Array.from(crypto.getRandomValues(new Uint8Array(6)), (e) =>
      e.toString(16).padStart(2, `0`),
    )
      .join(``)
      .toUpperCase()}`,
  W = new Map(),
  G = {},
  K = new Map(),
  q = 0;
S().forEach(({ dto: e, nomeArquivo: t, minutosAtras: n }) => {
  (W.set(e.documento_id, e),
    (G[e.documento_id] = {
      nomeArquivo: t,
      recebidoEm: new Date(Date.now() - n * 6e4).toISOString(),
    }));
});
var J = () => V(G);
function Y(e, t, n) {
  let r = e.toLowerCase();
  if (/erro|corromp/.test(r)) return () => g(t, n);
  if (/borrad|ileg/.test(r)) return () => h(t, n);
  if (/urgen|emerg|tep/.test(r)) return () => p(t, n);
  if (/baixa|crm|duvid/.test(r)) return () => m(t, n);
  let i = q++;
  return i % 3 == 1
    ? () => m(t, n)
    : i % 3 == 2
      ? () => p(t, n)
      : () => f(t, n, i);
}
function X(e, t, n) {
  let r = n || U(),
    i = Date.now();
  K.set(r, { inicio: i, pronto: i + 2600, finalizar: Y(e, r, t) });
  let a = {
    documento_id: r,
    status: `recebido`,
    versao_resultado: 1,
    canal_origem: t,
    validacoes: [],
    historico_revisao: [],
  };
  return (W.set(r, a), a);
}
function Z() {
  let e = Date.now();
  K.forEach((t, n) => {
    if (e >= t.pronto) (W.set(n, t.finalizar()), K.delete(n));
    else if (e >= t.inicio + 700) {
      let e = W.get(n);
      e && e.status === `recebido` && W.set(n, { ...e, status: `processando` });
    }
  });
}
var Q = {
  async listarDocumentos() {
    return (await H(), Z(), [...W.values()].map(V));
  },
  async obterDocumento(t) {
    (await H(120), Z());
    let n = W.get(t);
    if (!n) throw new e(404, `Documento não encontrado`);
    return V(n);
  },
  async enviarArquivo({ arquivo: e, canalOrigem: t }) {
    return (await H(450), V(X(e.name, t)));
  },
  async enviarTexto(e) {
    return (
      await H(450),
      V(X(e.documento_texto.slice(0, 400), e.canal_origem, e.documento_id))
    );
  },
  async registrarRevisao(t, n) {
    (await H(300), Z());
    let r = W.get(t);
    if (!r) throw new e(404, `Documento não encontrado`);
    let i = B(r, n);
    return (W.set(t, i), V(i));
  },
};
export { J as metaDeDemonstracao, Q as mockApi };
