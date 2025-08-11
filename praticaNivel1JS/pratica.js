//Etapa 1
let nome = "Labubu Diddy";
let classe = "Mago das Sombras";
let nivel = 20;
let vida = 2000;
let ouro = 5000;
let agilidade = 100;
let xp = 100;

//Etapa 2
const NOME_ARMA = "Lâmina do molesto";
let DANO_BASE = 1000;
const NOME_ARMADURA = "Carapaça do Éter Vivo";
let DEFESA_BASE = 1000;

//Etapa 3
xp += 150;
ouro -= 30;
vida += 40;
DANO_BASE *= 2;

console.log(`XP: ${xp}`);
console.log(`Ouro: ${ouro}`);
console.log(`Vida: ${vida}`);
console.log(`Dano: ${DANO_BASE}`);
console.log("----------------------------");


//Etapa 4 
ataqueTotal = nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel / 2);

console.log("Ataque Total:", ataqueTotal);
console.log("Defesa Total:", defesaTotal);
console.log("----------------------------");

//Etapa 6 Lore
console.log(" REGISTRO DE DADOS: O ARQUIVO LABUBU DIDDY");
console.log("");
console.log(`No núcleo do servidor ancestral, uma lenda digital ganha forma: ${nome}, o ${classe}.`);
console.log(`Ele não tece feitiços, mas manipula a própria sintaxe do universo, alcançando o Nível ${nivel}.`);
console.log(`Sua arma, a ${NOME_ARMA}, não é feita de metal, mas sim de código corrompido que desfere um dano de ${DANO_BASE}.`);
console.log(`Combina à sua maestria, ela garante um ataque total de ${ataqueTotal}, o suficiente para quebrar qualquer firewall.`);
console.log(`Labubu, vesta a ${NOME_ARMADURA}, uma armadura que se fundiu ao seu avatar, fornecendo ${defesaTotal} de defesa.`);
console.log(`Seu poder é refletido em sua vasta fortuna de ${ouro} de ouro, coletada em incursões por redes de dados.`);
console.log(`Com ${vida} pontos de vida, ele é uma entidade quase invulnerável, uma verdadeira anomalia no sistema.`);
console.log(`${nome} é um vírus benevolente, um erro de compilação que se tornou o maior herói do reino digital.`);
console.log(`Ele se prepara para o combate final, a batalha que decidirá o destino do universo de Eldoria.`);


// PARTE 2 - CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1
//Etapa 1
let vidaAtual = 2040;
let vidaMaxima = 2100;
let manaAtual = 2000; 
let manaMáxima = 3000;
let combatesVencidos = 1;

let localAtual = "Eldoria"
let missaoAtual = "Matar o chefão"

//Etapa 3
console.log("Labubu está indo em direção da batalha, e no meio do caminho ele encontra um mercador, que irá oferecer alguns itens antes da batalha");
console.log("----------------------------------------------------------------");


if (ouro < 5000) {
    console.log("Você é muito pobre para comprar a espada!");
    console.log("---------------------------------------------------------------- ");
} else {
    console.log("Toma, agora ela é sua!");
    
}

console.log("Labubu está indo em direção da batalha, e no meio do caminho ele encontra um ancião, que decidirá se ele pode seguir ou não em direção à batalha");
console.log("----------------------------------------------------------------");

if (ouro >= 1000) {
    console.log("Você é rico, parabéns!!");
    console.log("----------------------------------------------------------------");    
}

if (vida += 1500) {
    console.log("Você está saudavel, pode seguir viagem.");    
    console.log("----------------------------------------------------------------");
}

//Etapa 4
if (ouro >= 50) {
    console.log(" Com ouro suficiente, " + nome + " compra equipamentos melhores!");
    DANO_BASE += 5
    DEFESA_BASE += 3
    ouro -= 50;

    console.log("Dano e defesa aumentaram! Ouro restante: " + ouro);
    console.log("----------------------------------------------------------------");
} else {
    console.log(" Sem ouro suficiente, " + nome + " deve confiar apenas em suas habilidades!");
    console.log("A adversidade fortalece o espírito! Você não gaha nada");
}

if (nivel < 5) {
    console.log("Você é muito fraco para esta missão!");
} else {
    console.log("Você pode seguir, boa sorte!");
    console.log("----------------------------------------------------------------");
}

//Etapa 5
let poderInimigo = 30;

if (vida <= 30) {
    console.log(" Com pouca vida, " + nome + " usa uma tática desesperada!");
    console.log("Ataque final com toda a força restante!");
    poderInimigo -= (DANO_BASE * 2);
} else if (manaAtual >= 30 && classe === "Mago das Sombras") {
    console.log(nome + " canaliza todo seu poder mágico!");
    console.log("Magia devastadora!");
    poderInimigo -= (DANO_BASE + 20);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log("Com grande agilidade, executa um ataque certeiro!");
    poderInimigo -= DANO_BASE;
} else {
    console.log("Luta defensiva e calculada!");
    poderInimigo -= (DANO_BASE / 2);
    vidaAtual += 10; 
}
console.log("--------------------------------------------------------------");

//Etapa 6
console.log("CONTINUAÇÃO DA JORNADA DE " + nome);
console.log("");

console.log("Após os em " + localAtual + ", nosso heroí " + nome);
console.log("da classe " + classe + " se depara com um novo desafio...");
console.log("");

if (poderInimigo <= 0) {
    console.log("VITÓRIA FÁCIL! " + nome + " brilha!");
    xp += 100; 
    combatesVencidos++; 
    console.log("A lenda de " + nome + " cresce...");  
} else {
    console.log("A batalha do árdua, mas " + nome + " sobrevive para lutar outro dia!");
    
}

// PARTE 3 - CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 E 2
//Etapa 1 
let inventario = ["Poção de Vida", " Lâmino do Molesto", " Carapaça do Éter Vivo"];
let aliados = ["Ichigo", "Vacivus", "Guts"];
let inimigosEncontrados = ["Claudinei do Pneu", "Mohg"];
let salasCastelo = ["Biblioteca Arcana", "Armadilha de Cristal", "Torre do Tempo"];
let tesouroColetado = [];

console.log("-----------------------------------------------------------");
console.log(nome + " ADENTRA O CASTELO DOS ARRAYS");
console.log("Após as vitórias dos níveis anteriores, nosso herói chegou ao castelo lendário...");
console.log("Inventário inicial: " + inventario.length + " itens mágicos");

//Etapa 2 
let pocoesEncontradas = ["Cura Maior", "Força Titânica", "Invisibilidade"];

console.log("Primeira poção encontrada: " + pocoesEncontradas[0]);
console.log("Total de poções mágicas: " + pocoesEncontradas.length);

inventario[0] = "Poção de Vida Suprema"; 
console.log(nome + " aprimorou uma poção!");

inventario.push(" Anel de Proteção"); 
console.log("Novo item adicionado! Inventário: " + inventario);

let itemRemovido = inventario.pop(); 
console.log("Item removido: " + itemRemovido);
console.log("Inventário atual: " + inventario);

//Etapa 3
console.log("Começando exploração das " + salasCastelo.length + " salas místicas...");

for (let i = 0; i < salasCastelo.length; i++) {
    console.log("Sala " + (i + 1) + ": " + salasCastelo[i]);
    if (i === 0) {
        console.log( nome + " encontra pergaminhos antigos!");
        xp += 50;
        } else if (i === 1) {
        console.log("Cristais brilhantes concedem poder mágico!");
        tesouroColetado.push("Cristal de Poder");
        } else {
        console.log("O tempo distorce ao redor de " + nome + "!");
        vidaAtual -= 10; 
        }
        }

        console.log("Exploração completa! XP: " + xp + " | Vida: " + vidaAtual);

//Etapa 4 
console.log(nome + " convoca seus aliados para a batalha final:");

for (let i = 0; i < aliados.length; i++) {
    let aliado = aliados[i];
    console.log("Aliado " + (i + 1) + ": " + aliado + " se junta à missão!");
    
    if (i === 0) { 
    console.log("Como líder mágico, " + aliado + " multiplica o poder da equipe!");
    ouro += 50;
    } else if (i === 1) { 
    console.log("Como defensor principal, " + aliado + " fortalece a resistência!");
    vidaMaxima += 30;
    } else { 
    console.log("Como especialista, " + aliado + " aprimora táticas de combate!");
    xp += 40;
    }
    }

    console.log("Equipe completa! Ouro: " + ouro + " | Vida máxima: " + vidaMaxima);

//Etapa 5
let inimigosBatalha = ["Ziegfried"];
let danoRecebido = [];

console.log( nome + " enfrenta " + inimigosBatalha.length + " inimigos épicos!");

for (let i = 0; i < inimigosBatalha.length; i++) {
    let inimigo = inimigosBatalha[i];
    let dano = Math.floor(Math.random() * 30) + 10; 
    
    console.log("Rodada " + (i + 1) + " - Enfrentando: " + inimigo);
    console.log(nome + " causa " + dano + " de dano!");
    
    danoRecebido.push(dano);

    if (i === 0) {
    console.log("Primeira vitória! Cristais fragmentados concedem bônus!");
    tesouroColetado.push("Fragmento de Cristal");
    } else if (i === 1) {
    console.log("Segunda batalha! As sombras drenam energia, mas " + nome + " resiste!");
    vidaAtual -= 15;
    } else {
    console.log("Batalha final! O dragão recua! Vitória épica alcançada!");
    xp += 100;
    tesouroColetado.push("Escama Dragônica");
    }
    }

    let danoTotal = 0;
    for (let i = 0; i < danoRecebido.length; i++) {
    danoTotal += danoRecebido[i];
    console.log("Rodada " + (i + 1) + " - Dano: " + danoRecebido[i]);
    }
    
    console.log("Dano total causado: " + danoTotal);
    console.log("Tesouros coletados: " + tesouroColetado.length + " itens épicos!");

//Etapa 6
console.log("Estatísticas Finais da Aventura:");
console.log("• Nível alcançado: " + nivel);
console.log("• Experiência total: " + xp);
console.log("• Vida restante: " + vidaAtual + "/" + vidaMaxima);
console.log("• Ouro acumulado: " + ouro);
console.log("• Itens no inventário: " + inventario.length);
console.log("• Aliados conquistados: " + aliados.length);
console.log("• Tesouros épicos: " + tesouroColetado.length);

//lore
console.log("A LENDA CONTINUA...");
console.log("Após conquistar o Castelo dos Arrays, " + nome + " emergiu transformado.");
console.log("O domínio sobre as coleções arcanas fluía em suas veias como magia pura.");
console.log("Cada loop executado havia forjado sua mente em algoritmos de ferro e determinação.");
console.log("Os arrays sussurravam segredos ancestrais, revelando padrões ocultos da realidade.");
console.log("Aliados admiravam sua capacidade de organizar caos em estruturas harmoniosas.");
console.log("O inventário repleto de artefatos místicos brilhava com poder recém-descoberto.");
console.log("Mas no horizonte, novas aventuras aguardavam o Mestre dos Códigos Arcanos.");
console.log("Rumores falavam de torres onde funções aguardavam para serem dominadas.");
console.log("E objetos legendários que guardariam os segredos da programação orientada.");
console.log("A jornada estava longe do fim - era apenas o início de uma saga maior.");
console.log("Pois " + nome + " havia provado ser digno do título supremo:");
console.log("ARQUI-MAGO DOS ALGORITMOS ETERNOS ");