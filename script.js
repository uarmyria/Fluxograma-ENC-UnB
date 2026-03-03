document.addEventListener("DOMContentLoaded", () => {

    const matriz = {
        
        // =====================
        // OBRIGATÓRIAS (exemplo)
        // =====================
        "1º Semestre": [
            { codigo: "MAT0001", nome: "Cálculo I", prereq: [] },
            { codigo: "QUI0001", nome: "Química Geral", prereq: [] },
            { codigo: "ENC0001", nome: "Introdução à Engenharia Ambiental", prereq: [] }
        ],

        "2º Semestre": [
            { codigo: "MAT0002", nome: "Cálculo II", prereq: ["MAT0001"] },
            { codigo: "FIS0001", nome: "Física I", prereq: [] }
        ],

        // =========================================
        // OPTATIVAS – TODAS MISTURADAS (COMO PEDIU)
        // =========================================
        "Optativas (Todas Juntas)": [
            { codigo: "CDS0007", nome: "Educação Ambiental", prereq: [] },
            { codigo: "CDS0008", nome: "Sustentabilidade", prereq: [] },
            { codigo: "CEL0019", nome: "Genética", prereq: ["CEL0088"] },
            { codigo: "CEL0054", nome: "Ecologia Vegetal", prereq: ["CEL0032"] },
            { codigo: "ENC0018", nome: "Química Ambiental", prereq: [] },
            { codigo: "ENC0269", nome: "Tópicos Avançados em Biologia", prereq: [] },
            { codigo: "ENC0021", nome: "Hidráulica", prereq: [] },
            { codigo: "ENC0032", nome: "Tratamento de Água", prereq: [] },
            { codigo: "ENC0208", nome: "Planejamento Urbano", prereq: [] },
            { codigo: "CIC0007", nome: "Introdução à Programação", prereq: [] },
            { codigo: "MAT0048", nome: "Métodos Numéricos", prereq: ["MAT0002"] },
            { codigo: "ENE0273", nome: "Energia e Sociedade", prereq: [] },
            { codigo: "IQD0051", nome: "Química Ambiental Avançada", prereq: [] },
            { codigo: "DSC0063", nome: "Saúde Pública", prereq: [] },
            { codigo: "LIP0174", nome: "Língua Portuguesa Instrumental", prereq: [] }
        ]
    };

    const container = document.getElementById("container");

    // Criar títulos
    function criarTitulo(titulo) {
        const div = document.createElement("div");
        div.className = "titulo-bloco";
        div.textContent = titulo;

        div.onclick = () => {
            const bloco = div.nextSibling;
            bloco.style.display = bloco.style.display === "block" ? "none" : "block";
        };

        return div;
    }

    // Criar cards
    function criarCard(disc) {
        const card = document.createElement("div");
        card.className = "card";

        if (disc.codigo.startsWith("CDS") || disc.codigo.startsWith("CEL") || disc.codigo.startsWith("ENC0") || disc.codigo.startsWith("CIC") || disc.codigo.startsWith("ENE") || disc.codigo.startsWith("IQD"))
            card.classList.add("optativa");

        card.innerHTML = `
            <h3>${disc.codigo} – ${disc.nome}</h3>
            <small>Pré-requisitos: ${disc.prereq.length ? disc.prereq.join(", ") : "Nenhum"}</small>
        `;
        return card;
    }

    // Renderização
    for (const bloco in matriz) {
        container.appendChild(criarTitulo(bloco));

        const lista = document.createElement("div");
        lista.className = "lista";

        matriz[bloco].forEach(d => {
            lista.appendChild(criarCard(d));
        });

        container.appendChild(lista);
    }
});
