let nome = "Ayla";
let nivel = 1;
let xp = 0;
let ouro = 50;
let vida = 100;

console.log("Início da jornada de " + nome);
console.log(`Nível: ${nivel}, XP: ${xp}, Ouro: ${ouro}, Vida: ${vida}`);

//xp = xp + 20
xp += 20; // Ayla ganhou +20 de xp;
ouro += 100; // Achou 100 de ouro;
vida -= 30; // Perdeu 30 pontos de vida; 
ouro *= 2; // Dobrou seu ouro.
//nível += 1;
nivel++; // Subiu de nível;
vida /= 2; // Perdeu metade da vida.

// 📃 Resultado Final
console.log("📃 Relatório Final da Jornada:");
console.log(`🥇 Herói: ${nome}`);
console.log(`📈 Nível: ${nivel}`);
console.log(`⭐ XP: ${xp}`);
console.log(`💰 Ouro: ${ouro}`);
console.log(`❤ Vida: ${vida}`);





