console.clear();
console.log();
const prompt = require('prompt-sync')();

console.log(`O Game \n 
Persiste em escolher um número de 1 até 3, e cada número equivale a um
tipo de epécie diferente, cada espécie possui sua fraquesa que é uma
outra espécie: \n
 1 equivalem a Espécie dos Demónios
 2 equivalem a Espécie das Fadas
 3 equivalem a Espécie dos Anões \n
 Você jogará o game contra a máquina que escolherá as espécies de forma aleatória,
e só existirão 3 resultados no confronto contra essas espécies que são: \n
 Vitória
 Derrota
 Empate \n
 As espécies que ganham uma das outras são: \n
Demónios ganham de Anões
Fadas ganham de Demónios
Anões ganham de Fadas \n
 As espeécies que perdem para outras são: \n
 Demónios perdem para as Fadas
 Fadas perdem para os Anões
 Anões perdem para Demónios \n
 O empate do game ocorre quando a máquinha sorteia a mesma espécie que
você selecionou. \n
 O game é jogado em rodas escolhidas pelo joador ! `);

let score = 0
let score1 = 0
console.log()
let round = +prompt('Quantas rodadas você deseja jogar? ');
let finish 
console.log()
console.log(`Lembrete:

1 equivale a Espécie dos Demónios
2 equivale a Espécie das Fadas
3 equivale a Espécie dos Anões`)

console.log() 
while(finish = 'sim'){
  
  for (round = round ; round >= 0  ; round--) {
    let round1 = +prompt(' Escolha um número de 1 até 3: ')
   
    console.log()

   let random = Math.floor(Math.random() *3 + 1);
   console.log(`A escolha do computador foi: ${random} `);
    if( round1 == 1 && random == 3 || round1 == 2 && random == 1 || round1 == 3 && random == 2 ){
     score++

    console.log('Você ganhou esta rodada. ');

    }else if (round1 == 3 && random == 1 || round1 == 1 && random ==2 || round1 == 2 && random == 3){
           score1++

          console.log(`O computador ganhou esta rodada.`);

      }else if (random = round1){
        console.log('Ocorreu um empate. ');
      }

     
      while( round1 >= 4 || round1 == ' '   ){
        console.log('Iválido');
        round1--;
      }
    console.log();

    console.log(` Você ainda tem ${round} rodadas`);

    console.log();
    console.log('-----------------------------------------');
   
  
    console.log();
    

  } if (score > score1){
    console.log(`Você foi o grande campeão do Game, possuindo ${score} pontos. `)
  }else if(score1 > score){
    console.log(`O computador foi o grande campeão do Game possuindo ${score1} pontos.`)
  }
  console.log()
  console.log()
  
  finish = prompt(`Mesmo com o game sendo finalizado, há uma possibilide de joga-lo
novamente, caso queira, digite 'sim' ou caso não queira digite 'nao: `)

}

