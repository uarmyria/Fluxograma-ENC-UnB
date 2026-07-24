// =============================================================
//  DEPENDÊNCIAS
// =============================================================
const dependencias = {
    'BOT0004': [['BOT0021'], ['BOT0044'], ['BOT0049'], ['ICB0250'], ['ICB0251']],
    'BOT0006': [['BOT0004'], ['BOT0042']],
    'BOT0042': ['BOT0020', 'BOT0044'],
    'EFL0044': ['EFL0049'],
    'EFL0049': ['BOT0006', 'EST0027', 'EFL0010'],
    'EFL0085': [['EFL0049'], ['ENC0255'], ['ENC0229']],
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'], // FISICA 2
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'], // FISICA 2 EXP
    'IFD0179': ['IFD0175', 'MAT0026'], // FISICA 3
    'IFD0181': ['IFD0175', 'MAT0026'], // FISICA 3 EX
    'MAT0026': ['MAT0025'],
    'MAT0027': ['MAT0025', 'MAT0026'],
    'MAT0028': ['MAT0027'],
    'MAT0048': ['MAT0026'],
    'MAT0053': ['MAT0026'],
    'ECL0033': ['CEL0088'],
    'EPR0059': ['EPR0068'],
    'EPR0068': ['ENC0274'],
    'FDD0282': ['ENC0002'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'ENE0002': ['MAT0027', 'MAT0031'],
    'ENE0009': ['ENE0274', 'ENE0335'],
    'ENE0013': ['ENE0334'],
    'ENE0015': ['ENE0274'],
    'ENE0039': [['CIC0007'], ['CIC0004']],
    'ENE0040': [['CIC0007'], ['CIC0004']],
    'ENE0056': ['ENE0039', 'ENE0040'],
    'ENE0058': ['ENE0039', 'ENE0040'],
    'ENE0066': ['MAT0026', 'MAT0031'],

    'FGA0107': ['IFD0171','IFD0173'],

    'ENC0001': ['ENC0037', 'IQD0125'], //
    'ENC0002': ['SOL0042', 'MAT0025'], //
    'ENC0003': ['SOL0042', 'ENC0269'], // SASAMA
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'], //
    'ENC0007': ['ENC0251', 'ENC0001'], //
    'ENC0010': ['ENC0251', 'ENC0001'], //
    'ENC0011': ['ENC0166', 'ENC0275'], // MOD SIM SIST AMB
    'ENC0012': ['ENC0269'], // EST ECOSSIST AQUAT CONTINENT
    'ENC0013': ['ENC0275'], // 
    'ENC0014': ['ENC0037'], // ACP AR
    'ENC0015': ['ENC0166', 'ENC0001'], // 
    'ENC0016': ['ENC0183', 'ENC0037'], // 
    'ENC0017': ['ENC0235'], // SOLOS TROPICAIS
    'ENC0018': ['ENC0269', 'IQD0125'], // BIOQUIM APL ENG AMB
    'ENC0019': [['ENC0251', 'ENC0001'], ['ENC0251', 'ENC0168']], // TACH AVANCADO
    'ENC0020': [['ENC0251', 'ENC0001'], ['ENC0251', 'ENC0168']], // TARU AVANCADO
    'ENC0021': ['ENC0016'], // TOP AVANC TRANSP CONTAMINANTES
    'ENC0022': [['ENC0166', 'ENC0016'], ['ENC0166', 'ENC0015']], // MOD POLUICAO DIFUSA SIST HIDR
    'ENC0023': ['ENC0026', 'ENC0267'], // AVALIACAO AMB ESTRATEG
    'ENC0025': ['EPR0059'], // 
    'ENC0026': ['FDD0282', 'EPR0059'], //
    'ENC0028': ['ENC0025'], //
    'ENC0030': ['ENC0028'], //
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015'], //
    'ENC0032': ['ENC0166'], // TOP ESP GESTAO RECURSOS HIDR
    'ENC0033': ['ENC0183'], // RECUP E REABIL DE AREAS DEGRD POR MINERACAO
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0038': ['ENC0140', 'ENC0251', 'ENC0252', 'ENE0001', 'ENE0002'],
    'ENC0039': ['ENC0038'],
    'ENC0040': [['ENC0133'], ['ENC0035']],
    'ENC0041': ['ENC0254', 'ENC0255'],
    'ENC0047': ['ENC0254', 'ENC0255'],
    'ENC0048': ['ENC0254', 'ENC0255'],
    'ENC0042': ['EST0023'],
    'ENC0050': ['ENC0235'], // GEOSSINTETICOS EM ENG AMB
    'ENC0051': [['ENC0169'], ['ENC0251', 'ENC0252']], // SISTEMAS DE ESGOTO SANITARIO
    'ENC0052': ['ENC0183', 'ENC0001'], 
    'ENC0064': ['ENC0251', 'ENC0252'], // TOP ESP ENG HIDRAULICA
    'ENC0066': ['ENC0135'],
    'ENC0095': ['ENC0251', 'ENC0252'],
    'ENC0121': ['ENC0235'],
    'ENC0123': ['ENC0199'],
    'ENC0124': ['ENC0211'],
    'ENC0128': ['ENC0053'],
    'ENC0132': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0133': ['ENC0132'],
    'ENC0134': ['ENC0133'],
    'ENC0135': ['MAT0053', 'ENC0134'],
    'ENC0136': ['ENC0135'],
    'ENC0137': ['ENC0132'],
    'ENC0138': ['ENC0134'],
    'ENC0139': ['ENC0135'],
    'ENC0140': ['IGD0183', 'ENC0254', 'ENC0255', 'ENC0128'],
    'ENC0141': ['ENC0140'],
    'ENC0142': ['ENC0145'],
    'ENC0145': ['ENC0140'],
    'ENC0146': ['ENC0134', 'ENC0135', 'ENC0254', 'ENC0255'],
    'ENC0147': ['ENC0146'],
    'ENC0148': ['ENC0134', 'ENC0135', 'ENC0254', 'ENC0255'],
    'ENC0149': ['ENC0148'],
    'ENC0150': ['ENC0146'],
    'ENC0151': ['ENC0146'],
    'ENC0152': ['ENC0148', 'ENC0146'],
    'ENC0153': ['ENC0147'],
    'ENC0154': ['ENC0148', 'ENC0146'],
    'ENC0155': ['ENC0148'],
    'ENC0156': ['ENC0251', 'ENC0252'],
    'ENC0158': ['ENC0168', 'ENC0169'],
    'ENC0160': ['ENC0168', 'ENC0169'],
    'ENC0162': ['ENC0251', 'ENC0252', 'ENC0166'], // TOP ESP HIDRAULICA
    'ENC0165': ['ENC0251', 'ENC0252', 'ENC0166'], // SIST IRRIGACAO E DRENAGEM 
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENC0168': ['ENC0251', 'ENC0252'],
    'ENC0169': ['ENC0166', 'ENC0251', 'ENC0252'], // SHS
    'ENC0170': ['ENC0140', 'ENC0167'],
    'ENC0172': ['ENC0166', 'ENC0251', 'ENC0252'], // AGUAS SUBTERR
    'ENC0173': ['ENC0251', 'ENC0252', 'ENC0166'], // APROVEITAMENTO HIDRELETRICO
    'ENC0174': ['ENC0128', 'IGD0183'],
    'ENC0176': ['ENC0251', 'ENC0252'],
    'ENC0178': ['ENC0251', 'ENC0252'],
    'ENC0179': ['ENC0169', 'ENC0146'],
    'ENC0182': ['ENC0251', 'ENC0252'], // SIST HIDROVIARIOS
    'ENC0183': ['ENC0235'], 
    'ENC0184': ['ENC0251', 'ENC0252', 'ENC0166'],
    'ENC0185': ['ENC0251', 'ENC0252'],
    'ENC0186': ['ENC0140', 'EPR0068'],
    'ENC0187': ['ENC0166', 'ENC0251', 'ENC0252'], // SIST ABASTECIMENTO AGUA
    'ENC0188': ['ENC0241' ,'ENC0240'], // INVEST GEOTEC
    'ENC0191': [['ENC0133'], ['ENC0121']],
    'ENC0192': ['ENC0249', 'ENC0250'],
    'ENC0193': ['ENC0135'],
    'ENC0195': ['MAT0027'],
    'ENC0197': ['ENC0195'],
    'ENC0199': ['IGD0183', 'ENC0241', 'ENC0240', 'ENC0203'],
    'ENC0200': ['ENC0199'],
    'ENC0203': ['CIC0007', 'EST0023'],
    'ENC0206': ['ENC0235', 'ENC0199'],
    'ENC0207': ['ENC0203'],
    'ENC0211': [['ENC0197'],['ENC0121']],
    'ENC0214': ['ENC0121'], //BARRAGENS TERRA E ENRONCAMENTO
    'ENC0219': ['ENC0134'], // MET ELEMENTO FINITO
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'], // 
    'ENC0223': ['ENC0221'],
    'ENC0226': ['ENC0199'], // ORG E OPERACAO DE TRANSPORTES PUBLICOS
    'ENC0227': ['ENC0203'], // TECNOLOGIA DE TRANSPORTE
    'ENC0228': ['ENC0140', 'ENC0146'], // PATOLOGIA DAS CONSTRUCOES
    'ENC0231': ['ENC0135'], // ANALISE ESTRUTURAL
    'ENC0232': [['ENC0053'], ['ENC0128']], // TOP ESP INSTALACOES 1
    'ENC0237': ['ENC0235'], // TOP ESPEC GEOTEC 1
    'ENC0238': ['ENC0240'], // LAB GEOTEC 2
    'ENC0239': [['ENC0235'], ['ENC0121']], // MET COMP GEOTEC
    'ENC0240': ['IGD0173'], // 
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'], // 
    'ENC0243': ['ENC0242'],
    'ENC0244': [['IGD0043'], ['IGD0183']], // SENSORIAMENTO REMOTO APLICADO ENG CIVIL
    'ENC0245': ['ENC0251', 'ENC0252', 'ENC0166'], // MET NUMERICOS HIDROLOGIA
    'ENC0247': ['ECL0014', 'ENC0166'], // GESTAO AMBIENTAL
    'ENC0248': ['ENC0121'],
    'ENC0251': ['ENC0267', 'ENC0037'],//
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0253': [['ECL0014'],['ECL0033'],['ECL0030']], // FUNDAMENTOS GESTAO AGUA
    'ENC0254': ['IQD0125', 'IQD0126', 'IGD0173'],
    'ENC0255': ['IQD0125', 'IQD0126', 'IGD0173'],
    'ENC0257': ['ECL0014'],
    'ENC0260': ['ENC0254', 'ENC0255'], // CONCRETOS ESPECIAIS
    'ENC0261': [['ENC0246'],['ENC0263']], // GESTAO PROJ E EQUIP MULTIDISCIPL
    'ENC0262': ['ENC0145'],
    'ENC0264': ['ENC0267'], // TRANSPORTE E MEIO AMBIENTE
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0271': ['ENC0268'], // MATERIAIS P CONSTRUCAO 1
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],
    'ENC0276': ['ENC0271'],
    'ENC0277': ['ENC0271'],
    'ENC0278': ['ENC0235'], // OBRAS SUBTERRANEAS
    'ENC0279': ['ENC0037','ENC0235'], // ESTACAS DE CALOR
    'ENC0281': [['ENC0268'],['ENC0052']], // ANALISE CICLO DE VIDA
    'ENC0282': ['ENC0166'], // PLANEJ E GESTAO SISTEMAS HIDRICOS
    'ENC0301': ['CEL0088'], // MICROBIO EXP
    'ENC0302': [['ENC0168', 'ENC0121'],['ENC0183', 'ENC0001']], // RSU
    
    'CDS0008': ['CDS0007'],
    'CEL0019': ['IQD0125', 'IQD0126'],
    'CEL0054': ['IQD0125'],

    'ENM0027': [['ENM0146'], ['ENM0127']],
    'ENM0068': [['IFD0175'],['IFD0013'],['ENM0080']],
    'ENM0071': [[['ENM0068'],['ENM0233']],['ENM0128','ENM0233'],['ENM0068','ENM0082'],['ENM0128','ENM0082'],['ENM0068','FGA0204'],['ENM0068','IQD0005']],
    'ENM0072': ['ENM0071'],
    'ENM0080': [['MAT0027', 'ENC0132'],['MAT0027','ENM0120'],['MAT0027','FGA0154'],['MAT0027','ENC0035']],        
    'ENM0082': ['ENM0140'],
    'ENM0090': [['IQD0051'],['IQD0125','IQD0126']],
    'ENM0112': [['ENC0132','ENC0054'],['ENC0054','ENM0163']],
    'ENM0120': ['IFD0171','MAT0026','MAT0031'],
    'ENM0121': ['IFD0171','MAT0027','MAT0031'],
    'ENM0123': ['ENM0165','ENM0132'],
    'ENM0124': ['ENM0122', 'ENM0123'],
    'ENM0126': [['IQD0051'],['IQD0058','IQD0126'],['IQD0125','IQD0126']],
    'ENM0127': ['ENM0164'],
    'ENM0128': [['ENM0071'],['ENM0080']],
    'ENM0132': [['ENM0161'],['ENC0053','ENC0054'],['ENM0230']],
    'ENM0134': [['ENM0027'],['ENM0171']],
    'ENM0140': [['MAT0027','ENC0132'],['MAT0027', 'ENM0163'],['MAT0027','ENM0120']],
    'ENM0145': ['EST0023'],
    'ENM0146': ['ENM0090','ENM0145'],
    'ENM0163': [['MAT0026','MAT0031','IFD0173'],['MAT0026','IFD0173','MAT0039']],
    'ENM0164': [['ENM0163'],['ENM0120'],['ENM0203']],
    'ENM0165': ['ENM0164'],
    'ENM0171': [['ENM0172'],['ENM0126']],
    'ENM0174': [['ENE0243'],['ENE0172'],['IFD0179'],['ENE0001']],
    'EPR0051': ['EPR0069'],
    'EPR0057': [['EST0023','ENM0134'],['EST0023','EPR0068']],
    'EPR0058': ['EPR0068'],
    'EPR0060': ['EPR0058'],
    'EPR0069': [['EPR0056'],['EPR0122']],
    'EPR0071': [['EPR0061','EPR0069'],['EPR0063','EPR0076']],
    'EPR0073': ['EPR0071'],
    'EST0023': [['MAT0025'],['MAT0022']],
    'EST0027': [['MAT0025'],['MAT0022']],
    'FAV0074': ['FAV0148','IGD0043','GEA0011'],
    'FAV0148': [['IGD0021','IQD0118'],['IGD0021','IQD0063']],
    'FAV0218': [['FAV0074'],['ENC0167'],['ENC0251','ENC0252']],
    'FGA0154': ['IFD0171'],
    'FGA0204': ['ENM0080'],
    'IFD0217': ['IFD0210'],
    'IQD0005': ['MAT0027'],
    'IQD0009': ['IQD0005'],
    'IQD0010': [['MAT0027','IQD0101','IQD0005'],['MAT0027','IQD0296','IQD0005']],
    'IQD0011': ['ENM0071','IQD0009'],
    'IQD0012': ['IQD0010','IQD0011','IQD0046'],
    'IQD0014': ['IQD0009'],
    'IQD0015': ['ENC0053','IQD0012','IQD0014','IQD0048'],
    'IQD0032': ['IQD0101'],
    'IQD0046': [['IQD0103'],['IQD0296','ENM0068']],
    'IQD0048': ['MAT0026','IQD0032','IQD0005'],
    'IQD0063': [['IQD0058','IQD0061'],['IQD0051'],['IQD0262','IQD0263','IQD0061']],
    'IQD0101': [["IQD0262", "IQD0263", "IQD0259", "IFD0175", "MAT0026"],["IQD0058", "IFD0175", "MAT0026"],["IQD0153", "MAT0026", "IFD0175"],
                ["IQD0058", "IQD0061", "MAT0026", "IFD0299", "IFD0302"],["IQD0058", "IQD0061", "MAT0026", "IFD0175", "IFD0177"],["IQD0058", "IQD0061", "MAT0023", "IFD0299", "IFD0302"],
                ["IQD0058", "IQD0061", "MAT0023", "IFD0175", "IFD0177"],["IQD0051", "MAT0026", "IFD0299", "IFD0302"],["IQD0051", "MAT0026", "IFD0175", "IFD0177"],
                ["IQD0051", "MAT0023", "IFD0299", "IFD0302"],["IQD0051", "MAT0023", "IFD0175", "IFD0177"],["IQD0153", "MAT0026", "IFD0299", "IFD0302"],
                ["IQD0262", "IQD0263", "IQD0259", "IFD0299", "IFD0302", "MAT0026"]]
    'IQD0103': [['IQD0101'],['IQD0029']],
    'IQD0118': [['IQD0058','IQD0061'],['IQD0125'],['EFL0010','EFL0160']],
    'IQD0296': [["IQD0262", "IQD0263", "IQD0259", "MAT0025"],["IQD0058", "MAT0025"],
                ["IQD0153", "MAT0025"],["IQD0125", "MAT0025"],["IQD0058", "MAT0022"],
                ["IQD0153", "MAT0022"],["IQD0125", "MAT0022"]]
    'LET0377': ['LET0376'],
    'LET0378': ['LET0377'],
    'MAT0023': ['MAT0022'],
    'MAT0028': ['MAT0027'],
    'MAT0039': ['MAT0025'],
    'MAT0048': ['MAT0026'],
    'MAT0059': ['MAT0027'],
    'TEC0018': ['TAU0013']
};

// =============================================================
//  ESTADO GLOBAL
// =============================================================
const estadoGlobal = {};
let horasModuloLivre = 0;
let dadosGlobal = null;
let configsGlobal = null;

// =============================================================
//  MODO CLARO / ESCURO
// =============================================================
function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem('unb_tema', tema);
    const btn = document.getElementById('btn-tema');
    btn.textContent = tema === 'claro' ? '🌙' : '☀️';
    btn.title = tema === 'claro' ? 'Modo escuro' : 'Modo claro';
}

function toggleTema() {
    const atual = document.documentElement.getAttribute('data-tema') || 'escuro';
    aplicarTema(atual === 'escuro' ? 'claro' : 'escuro');
}

// =============================================================
//  MÓDULO LIVRE
// =============================================================
function atualizarModuloLivre(valor) {
    // Arredonda para múltiplo de 15, limita entre 0 e 360
    let h = Math.round(valor / 15) * 15;
    h = Math.max(0, Math.min(360, h));
    horasModuloLivre = h;

    // Atualiza o input visualmente
    const input = document.getElementById('input-modulo-livre');
    if (input) input.value = h;

    localStorage.setItem('unb_modulo_livre', h);

    if (dadosGlobal && configsGlobal) {
        atualizarTodosContadores(dadosGlobal, configsGlobal);
    }
}

// =============================================================
//  MONTA GRADE
// =============================================================
function montarGrade(dados, cursoKey, containerId) {
    const container = document.getElementById(containerId);
    const niveis = dados.cursos[cursoKey].niveis;

    container.replaceChildren();

    Object.keys(niveis).forEach(num => {
        const semestre = document.createElement('div');
        semestre.className = 'semestre';

        const titulo = document.createElement('h2');
        titulo.textContent = `${num}º Nível`;
        semestre.appendChild(titulo);

        niveis[num].forEach(codigo => {
            const d = dados.disciplinas[codigo];
            if (!d) { console.warn(`Código ${codigo} não encontrado!`); return; }
            semestre.appendChild(criarMateria(codigo, d, cursoKey));
        });

        container.appendChild(semestre);
    });
}

// =============================================================
//  MONTA OPTATIVAS
// =============================================================
function montarOptativas(dados, cursoKey, encContainerId, outrosContainerId) {
    const curso = dados.cursos[cursoKey];

    function criarBlocoOptativas(containerEl, lista) {
        containerEl.replaceChildren();
        const bloco = document.createElement('div');
        bloco.className = 'optativas-container oculto-opt';
        lista.forEach(codigo => {
            const d = dados.disciplinas[codigo];
            if (!d) return;
            bloco.appendChild(criarMateria(codigo, d, cursoKey));
        });

        const header = containerEl.previousElementSibling;
        const titulo = header.querySelector('.optativas-titulo');
        titulo.style.cursor = 'pointer';
        titulo.style.userSelect = 'none';

        const seta = document.createElement('span');
        seta.className = 'opt-seta';
        seta.textContent = ' ▶';
        titulo.appendChild(seta);

        titulo.addEventListener('click', () => {
            const aberto = !bloco.classList.contains('oculto-opt');
            bloco.classList.toggle('oculto-opt', aberto);
            seta.textContent = aberto ? ' ▶' : ' ▼';
        });

        containerEl.appendChild(bloco);
    }

    criarBlocoOptativas(document.getElementById(encContainerId), curso.optativas_enc);
    criarBlocoOptativas(document.getElementById(outrosContainerId), curso.optativas_outros);
}

// =============================================================
//  CRIA MATÉRIA
// =============================================================
function criarMateria(codigo, d, cursoKey) {
    const div = document.createElement('div');
    div.className = `materia ${d.tipo}`;
    div.id = `${codigo}-${cursoKey}`;
    div.dataset.codigo = codigo;
    div.innerHTML = `${codigo} - ${d.nome} - ${d.horas}h <input type="checkbox" data-codigo="${codigo}" data-curso="${cursoKey}">`;
    return div;
}

// =============================================================
//  SINCRONIZAÇÃO
// =============================================================
function sincronizarCodigo(codigo, checked) {
    estadoGlobal[codigo] = checked;
    document.querySelectorAll(`input[data-codigo="${codigo}"]`).forEach(chk => {
        if (!chk.disabled) {
            chk.checked = checked;
            chk.closest('.materia').classList.toggle('concluida', checked);
        }
    });
}

// =============================================================
//  VERIFICAÇÃO DE DEPENDÊNCIAS
// =============================================================
function verificarDependencias() {
    let mudou = true;
    while (mudou) {
        mudou = false;
        Object.keys(dependencias).forEach(idAlvo => {
            const regra = dependencias[idAlvo];

            // Detecta se é o formato OU (array de arrays) ou E simples (array de strings)
            const habilitada = Array.isArray(regra[0])
                ? regra.some(grupo => grupo.every(r => estadoGlobal[r]))   // OU de grupos E
                : regra.every(r => estadoGlobal[r]);                        // E simples

            document.querySelectorAll(`input[data-codigo="${idAlvo}"]`).forEach(chk => {
                if (!habilitada) {
                    if (chk.checked || !chk.disabled) {
                        chk.disabled = true;
                        if (chk.checked) {
                            chk.checked = false;
                            chk.closest('.materia').classList.remove('concluida');
                            if (estadoGlobal[idAlvo]) {
                                estadoGlobal[idAlvo] = false;
                                mudou = true;
                            }
                        }
                    }
                } else {
                    chk.disabled = false;
                }
            });
        });
    }
}

// =============================================================
//  CONTADOR — inclui horas de módulo livre nas optativas
// =============================================================
function atualizarContador(dados, cursoKey, config) {
    const curso = dados.cursos[cursoKey];
    const optSet = new Set(curso.optativas_nos_niveis);
    const todosNiveis = Object.values(curso.niveis).flat();
    const obrigatorias = new Set(todosNiveis.filter(c => !optSet.has(c)));

    const todasOptativas = new Set([
        ...curso.optativas_nos_niveis,
        ...curso.optativas_enc,
        ...curso.optativas_outros
    ]);

    let horasObr = 0;
    let horasOpt = 0;

    Object.keys(estadoGlobal).forEach(codigo => {
        if (!estadoGlobal[codigo]) return;
        const d = dados.disciplinas[codigo];
        if (!d) return;
        if (obrigatorias.has(codigo)) horasObr += d.horas;
        else if (todasOptativas.has(codigo)) horasOpt += d.horas;
    });

    // Adiciona horas de módulo livre às optativas
    horasOpt += horasModuloLivre;

    const horasTT = horasObr + horasOpt;
    const pctObr = Math.min((horasObr / config.totalObr) * 100, 100).toFixed(1);
    const pctOpt = Math.min((horasOpt / config.totalOpt) * 100, 100).toFixed(1);
    const pctTT  = Math.min((horasTT  / config.totalTT)  * 100, 100).toFixed(1);

    document.getElementById(`${config.prefix}-barra-obr`).style.width = `${pctObr}%`;
    document.getElementById(`${config.prefix}-barra-opt`).style.width = `${pctOpt}%`;
    document.getElementById(`${config.prefix}-barra-tt`).style.width  = `${pctTT}%`;

    document.getElementById(`${config.prefix}-info-obr`).textContent = `${horasObr}h / ${config.totalObr}h — ${pctObr}%`;
    document.getElementById(`${config.prefix}-info-opt`).textContent = `${horasOpt}h / ${config.totalOpt}h — ${pctOpt}%`;
    document.getElementById(`${config.prefix}-info-tt`).textContent  = `${horasTT}h / ${config.totalTT}h — ${pctTT}%`;
}

function atualizarTodosContadores(dados, configs) {
    configs.forEach(c => atualizarContador(dados, c.cursoKey, c));
}

// =============================================================
//  SALVA / CARREGA ESTADO
// =============================================================
function salvarEstado() {
    localStorage.setItem('unb_grade_estado', JSON.stringify(estadoGlobal));
}

function carregarEstado(dados, configs) {
    let salvo = {};
    try {
        salvo = JSON.parse(localStorage.getItem('unb_grade_estado') || '{}');
    } catch {
        localStorage.removeItem('unb_grade_estado');
    }
    Object.keys(salvo).forEach(codigo => {
        if (salvo[codigo]) estadoGlobal[codigo] = true;
    });
    Object.keys(estadoGlobal).forEach(codigo => {
        if (!estadoGlobal[codigo]) return;
        document.querySelectorAll(`input[data-codigo="${codigo}"]`).forEach(chk => {
            chk.checked = true;
            chk.closest('.materia').classList.add('concluida');
        });
    });

    // Carrega módulo livre salvo
    const mlSalvo = parseInt(localStorage.getItem('unb_modulo_livre') || '0');
    horasModuloLivre = mlSalvo;
    const input = document.getElementById('input-modulo-livre');
    if (input) input.value = mlSalvo;

    verificarDependencias();
    atualizarTodosContadores(dados, configs);
}

// =============================================================
//  EVENTOS
// =============================================================
function registrarEventos(dados, configs) {
    document.addEventListener('change', function (e) {
        const chk = e.target;
        if (!chk.matches('input[type="checkbox"][data-codigo]')) return;
        sincronizarCodigo(chk.dataset.codigo, chk.checked);
        verificarDependencias();
        atualizarTodosContadores(dados, configs);
        salvarEstado();
    });
}

// =============================================================
//  TOGGLE CURSOS
// =============================================================
function toggleCurso(curso) {
    const secao = document.getElementById(`secao-${curso}`);
    const btn   = document.getElementById(`btn-${curso}`);
    const estaAtivo = btn.classList.contains('ativo');
    btn.classList.toggle('ativo', !estaAtivo);
    secao.classList.toggle('oculto', estaAtivo);
}

// =============================================================
//  PONTO DE ENTRADA
// =============================================================
function exibirErroCarregamento(mensagem) {
    const aviso = document.getElementById('erro-carregamento');
    aviso.textContent = mensagem;
    aviso.hidden = false;
}

fetch(new URL('dados.json', document.baseURI))
    .then(r => {
        if (!r.ok) throw new Error(`dados.json não encontrado (HTTP ${r.status})`);
        return r.json();
    })
    .then(dados => {
        dadosGlobal = dados;

        montarGrade(dados, 'ambiental', 'grade-ambiental');
        montarOptativas(dados, 'ambiental', 'opt-amb-enc', 'opt-amb-outros');
        montarGrade(dados, 'civil', 'grade-civil');
        montarOptativas(dados, 'civil', 'opt-civ-enc', 'opt-civ-outros');

        const configs = [
            { cursoKey: 'ambiental', prefix: 'amb', totalObr: 2760, totalOpt: 1140, totalTT: 3900 },
            { cursoKey: 'civil',     prefix: 'civ', totalObr: 2370, totalOpt: 1560, totalTT: 3930 }
        ];
        configsGlobal = configs;

        registrarEventos(dados, configs);
        carregarEstado(dados, configs);

        // Tema salvo
        const temaSalvo = localStorage.getItem('unb_tema') || 'escuro';
        aplicarTema(temaSalvo);
    })
    .catch(err => {
        console.error('Erro ao carregar dados.json:', err);
        exibirErroCarregamento(
            'Não foi possível carregar dados.json. Publique esse arquivo junto com index.html e abra o site por um servidor HTTP (ou pelo GitHub Pages).'
        );
    });
