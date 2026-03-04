// =============================================================
//  DEPENDÊNCIAS (Ambiental — mantidas igual ao original)
// =============================================================
const dependencias = {
    'IFD0175': ['IFD0171', 'IFD0173', 'MAT0025'],
    'IFD0177': ['IFD0171', 'IFD0173', 'MAT0025'],
    'MAT0026': ['MAT0025'],
    'ECL0033': ['CEL0088'],
    'ENC0035': ['IFD0171', 'MAT0026', 'MAT0031'],
    'ENC0241': ['IFD0171', 'MAT0025', 'IGD0173'],
    'ENC0240': ['IGD0173'],
    'ENC0266': ['IFD0175'],
    'ENC0267': ['IGD0173', 'ENC0053'],
    'ENC0268': ['IQD0125'],
    'MAT0027': ['MAT0025', 'MAT0026'],
    'ENC0037': ['MAT0027', 'ENC0035'],
    'ENC0235': ['ENC0241', 'ENC0240', 'MAT0027'],
    'ENC0269': ['CEL0088'],
    'ENC0270': ['CEL0088'],
    'ENC0272': ['IQD0125'],
    'ENC0273': ['IQD0125'],
    'ENC0183': ['ENC0235'],
    'ENC0251': ['ENC0267', 'ENC0037'],
    'ENC0252': ['ENC0267', 'ENC0037'],
    'ENC0274': ['MAT0027'],
    'ENC0275': ['MAT0027'],
    'ENC0001': ['ENC0037', 'IQD0125'],
    'ENC0002': ['SOL0042', 'MAT0025'],
    'ENC0166': ['ENC0037', 'ENC0267', 'ENC0274'],
    'ENE0001': ['MAT0027', 'MAT0031'],
    'EPR0068': ['ENC0274'],
    'ENC0004': ['ECL0033', 'ENC0251', 'ENC0166'],
    'ENC0007': ['ENC0251', 'ENC0001'],
    'ENC0010': ['ENC0251', 'ENC0001'],
    'ENC0052': ['ENC0183', 'ENC0001'],
    'EPR0059': ['EPR0068'],
    'FDD0282': ['ENC0002'],
    'ENC0013': ['ENC0275'],
    'ENC0015': ['ENC0166', 'ENC0001'],
    'ENC0016': ['ENC0183', 'ENC0037'],
    'ENC0025': ['EPR0059'],
    'ENC0026': ['FDD0282', 'EPR0059'],
    'ENC0028': ['ENC0025'],
    'ENC0030': ['ENC0028'],
    'ENC0031': ['FDD0282', 'ENC0016', 'ENC0015'],
    'ENC0238': ['ENC0240'],
    'ENC0003': ['SOL0042', 'ENC0269'],
    'ENC0011': ['ENC0166', 'ENC0275'],
    'ENC0169': ['ENC0166', 'ENC0251', 'ENC0252'],
    'ENC0264': ['ENC0267']
};

// =============================================================
//  ESTADO GLOBAL — quais códigos estão marcados
// =============================================================
// Mapa: codigo -> boolean (checked)
const estadoGlobal = {};

// =============================================================
//  MONTA UMA GRADE (ambiental ou civil)
// =============================================================
function montarGrade(dados, cursoKey, containerId) {
    const container = document.getElementById(containerId);
    const niveis = dados.cursos[cursoKey].niveis;

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
//  MONTA SEÇÃO DE OPTATIVAS
// =============================================================
function montarOptativas(dados, cursoKey, encContainerId, outrosContainerId) {
    const curso = dados.cursos[cursoKey];

    function criarBlocoOptativas(containerEl, lista) {
        const bloco = document.createElement('div');
        bloco.className = 'optativas-container oculto-opt';
        lista.forEach(codigo => {
            const d = dados.disciplinas[codigo];
            if (!d) return;
            bloco.appendChild(criarMateria(codigo, d, cursoKey));
        });

        // adiciona seta e listener no titulo do header anterior
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
//  CRIA DIV DE UMA MATÉRIA (com data-codigo para sincronização)
// =============================================================
function criarMateria(codigo, d, cursoKey) {
    const div = document.createElement('div');
    div.className = `materia ${d.tipo}`;
    // ID único por instância: codigo-curso
    div.id = `${codigo}-${cursoKey}`;
    div.dataset.codigo = codigo;
    div.innerHTML = `${codigo} - ${d.nome} - ${d.horas}h <input type="checkbox" data-codigo="${codigo}" data-curso="${cursoKey}">`;
    return div;
}

// =============================================================
//  SINCRONIZAÇÃO: ao marcar qualquer checkbox, atualiza todos
//  os elementos com o mesmo código (nos dois cursos)
// =============================================================
function sincronizarCodigo(codigo, checked) {
    estadoGlobal[codigo] = checked;

    // Atualiza TODOS os checkboxes com esse código (podem estar em 2 cursos)
    document.querySelectorAll(`input[data-codigo="${codigo}"]`).forEach(chk => {
        if (!chk.disabled) {
            chk.checked = checked;
            chk.closest('.materia').classList.toggle('concluida', checked);
        }
    });
}

// =============================================================
//  VERIFICAÇÃO DE DEPENDÊNCIAS — opera sobre estadoGlobal
// =============================================================
function verificarDependencias() {
    let mudou = true;
    while (mudou) {
        mudou = false;
        Object.keys(dependencias).forEach(idAlvo => {
            const reqs = dependencias[idAlvo];
            const habilitada = reqs.every(r => estadoGlobal[r]);

            // Aplica a TODOS os elementos com esse código
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
//  ATUALIZA CONTADOR DE UM CURSO ESPECÍFICO
// =============================================================
function atualizarContador(dados, cursoKey, config) {
    const curso = dados.cursos[cursoKey];
    const optSet = new Set(curso.optativas_nos_niveis);
    const todosNiveis = Object.values(curso.niveis).flat();
    const obrigatorias = new Set(todosNiveis.filter(c => !optSet.has(c)));
    const optativasNiveis = optSet;

    // Coleta todos os codigos marcados (via estadoGlobal)
    let horasObr = 0;
    let horasOpt = 0;

    Object.keys(estadoGlobal).forEach(codigo => {
        if (!estadoGlobal[codigo]) return;
        const d = dados.disciplinas[codigo];
        if (!d) return;

        // Conta se essa disciplina aparece no curso em questão
        if (obrigatorias.has(codigo)) horasObr += d.horas;
        else if (optativasNiveis.has(codigo)) horasOpt += d.horas;
    });

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

// =============================================================
//  ATUALIZA OS DOIS CONTADORES DE UMA VEZ
// =============================================================
function atualizarTodosContadores(dados, configs) {
    configs.forEach(c => atualizarContador(dados, c.cursoKey, c));
}

// =============================================================
//  SALVA E CARREGA ESTADO (localStorage)
// =============================================================
function salvarEstado() {
    localStorage.setItem('unb_grade_estado', JSON.stringify(estadoGlobal));
}

function carregarEstado(dados, configs) {
    const salvo = JSON.parse(localStorage.getItem('unb_grade_estado') || '{}');

    Object.keys(salvo).forEach(codigo => {
        if (salvo[codigo]) estadoGlobal[codigo] = true;
    });

    // Aplica o estado nos checkboxes antes de verificar dependências
    Object.keys(estadoGlobal).forEach(codigo => {
        if (!estadoGlobal[codigo]) return;
        document.querySelectorAll(`input[data-codigo="${codigo}"]`).forEach(chk => {
            chk.checked = true;
            chk.closest('.materia').classList.add('concluida');
        });
    });

    verificarDependencias();
    atualizarTodosContadores(dados, configs);
}

// =============================================================
//  REGISTRA EVENTOS
// =============================================================
function registrarEventos(dados, configs) {
    document.addEventListener('change', function (e) {
        const chk = e.target;
        if (!chk.matches('input[type="checkbox"][data-codigo]')) return;

        const codigo = chk.dataset.codigo;
        const checked = chk.checked;

        // Atualiza estado global e sincroniza todas as instâncias
        sincronizarCodigo(codigo, checked);
        verificarDependencias();
        atualizarTodosContadores(dados, configs);
        salvarEstado();
    });
}

// =============================================================
//  PONTO DE ENTRADA
// =============================================================
fetch('dados.json')
    .then(r => r.json())
    .then(dados => {
        // --- Ambiental ---
        montarGrade(dados, 'ambiental', 'grade-ambiental');
        montarOptativas(dados, 'ambiental', 'opt-amb-enc', 'opt-amb-outros');

        // --- Civil ---
        montarGrade(dados, 'civil', 'grade-civil');
        montarOptativas(dados, 'civil', 'opt-civ-enc', 'opt-civ-outros');

        // Configurações dos contadores (horas calculadas a partir do JSON)
        const configs = [
            {
                cursoKey: 'ambiental',
                prefix: 'amb',
                totalObr: 2760,
                totalOpt: 1140,
                totalTT: 3900
            },
            {
                cursoKey: 'civil',
                prefix: 'civ',
                totalObr: 2370,
                totalOpt: 915,
                totalTT: 3285
            }
        ];

        registrarEventos(dados, configs);
        carregarEstado(dados, configs);
    })
    .catch(err => console.error('Erro ao carregar dados.json:', err));

// =============================================================
//  TOGGLE DE CURSOS
// =============================================================
function toggleCurso(curso) {
    const secao = document.getElementById(`secao-${curso}`);
    const btn   = document.getElementById(`btn-${curso}`);

    const estaAtivo = btn.classList.contains('ativo');

    btn.classList.toggle('ativo', !estaAtivo);
    secao.classList.toggle('oculto', estaAtivo);
}