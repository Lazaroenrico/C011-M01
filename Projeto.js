console.clear()
const prompt = require('prompt-sync')();

let score = 0

console.log()

console.log(' Digite exatamenta da forma que será exiba em cada pergunta feita !')
console.log()
const name = prompt('Digite seu nome: ');

console.log(`As raças existentes dentro do mundo de Xainlog são:
 
Demonio
Fada
Anao 
`);

 let race = prompt(`Escolha sua raça: `).toLowerCase();
 
console.log('--------------------------------------------');

 if(race == 'demonio'){
    console.log(` O mundo de Xainlong ja foi dominado por várias raças, mas
 a mais aterrorizante e dominante delas foram a raça dos Demonios que possuiam 
 um rei conhecido como ${name}, ele foi morto em uma rebelião que tinha como princípio
 mudar a raça dominante do mundo e deixa com que as outras pudessem ter seu próprio
 domínio de terras e comercio, mas aconteceu algo que nenhuma delas esperava...`)
} else if(race == 'fada'){
    console.log(`O mundo de Xainlong ja foi dominado por várias raças, mas
 a mais aterrorizante e dominante delas foram a raça das Fadas que possuiam 
 um rei conhecido como ${name}, ele foi morto em uma rebelião que tinha como princípio
 mudar a raça dominante do mundo e deixa com que as outras pudessem ter seu próprio
 domínio de terras e comercio, mas aconteceu algo que nenhuma delas esperava...`)
} else if(race == 'anao'){
    console.log(`O mundo de Xainlong ja foi dominado por várias raças, mas
 a mais aterrorizante e dominante delas foram a raça dos Anões que possuiam 
 um rei conhecido como ${name}, ele foi morto em uma rebelião que tinha como princípio
 mudar a raça dominante do mundo e deixa com que as outras pudessem ter seu próprio
 domínio de terras e comercio, mas aconteceu algo que nenhuma delas esperava...`)
};
console.log('--------------------------------------------');
console.log();
console.log('--------------------------');
console.log(' O RETORNO DO REI ');
console.log('--------------------------');
console.log();

console.log(`Você acaba de ser reencarnado por um meio desconhecido, agora 
que retornou, você irá buscar vingança pela sua raça ? `);

console.log();

let return1 = prompt(" Responda sim ou nao: ");

console.log();

if(return1 == 'sim'){
    
    (score = score + 1)
    console.log('-------------------')
   
    console.log(`Muito bem, você foi reencarnado e está na mesma raça da sua vida 
    passada, o único problema é que ela sendo caçada no momento e você não possui 
    poder suficiente para entrar em combate com os caçadores caso encontre algum.`)
   
    console.log('-------------------')

} else if( return1 == 'nao'){
    console.log('-------------------')
   
    console.log(` Se cuide então, pois você está classificado na mesma raça de sua
    vida passa, e ela está sendo caçada no momento e você não possui poder suficiente
    para entrar em combate com os caçadores caso encontre com algum.`)
   
    console.log('-------------------')

}
 

console.log();


console.log(` Você irá treinar para poder lutar contra os caçadores 
para se defender ou caso queira se vingar ?`);

console.log();
 
let return2 = prompt("Responda a pergunta sim ou nao: ");

 console.log();

 
 if(return2 == 'sim'){
      (score = score + 1)

    console.log('-------------------')
    
    console.log(` Treine bastante para que possa vencer os caçadores tanto
     para se proteger quanto para vingar sua raça caso queira.`)

    console.log('-------------------')
 
} else if(return2 == 'nao'){
    console.log('-------------------')

     console.log(` É recomendável que você treina para que possa vencer
     os caçadores para se defender ou para vingar sua raça casp queira.`)
  
     console.log('-------------------')
 }


 console.log();

 console.log(` Você está na cidade, deseja ir até a cabana de informações
  para saber onde os caçadores estão ? `);

 console.log();
 
 let return3 = prompt(`Responda com sim ou nao: `);
 
 console.log();
 
 if(return3 == "sim"){
    
    (score = score + 1)

    console.log('-------------------')
     
    console.log(` Agora que você tem a informação dos caçadores e agora você saber
     onde eles estão para evitar uma luta ou uma emboscada.`)

    console.log('-------------------')
     
 } else if(return3 == 'nao'){
    console.log('-------------------')

     console.log(` Você não possui informação dos caçadores e com isso
     você pode se encontrar com eles sendo que você não possui arma
     ou armadura para se defender e pode ser pego em uma armadilha e 
     acaba morrendo novamente devido a isso.`)

    console.log('-------------------')
 }
 
 console.log()

console.log(` Já que você está na cidade, podemos para comprar armas, armaduras e 
algumas poções para ser utilizadas em batalha, você desaja ir ?`)

console.log();

 let return4 = prompt(`Responda com sim ou nao: `)
console.log()
    
 if(return4 == 'sim'){

    (score = score + 1)
    
    console.log('-------------------')

    console.log(` Boa escolha, agora estamos mais preparados para nos defendermos 
    e para caso você queira se vingança.`)
    console.log('-------------------')

 } 
 else
 {
    console.log('-------------------')

    console.log(` Má escolha, agora não possuimos armaduras e armas para
    nos defendermos e nem para caso queira se vingar. `)

    console.log('-------------------')

 }
    



console.log();

console.log(` Você agora está preparado para se defender para o resto de sua vida
 ou para concluir sua vingança ?`);

console.log();
 
let return5 = prompt(`Responda com sim ou nao: `);

console.log();

if(return5 === 'sim'){

    (score = score + 1)

    console.log('-------------------')
    
    console.log(` Se você decidiu que está preparado quer dizer que você sabe o podeer 
    que possui e os seus limites, com a sua jornada em busca de poder, informações e armas
    para consquistar seus objetivos, sendo assim vá até onde você achar que consegue 
    fazendo sempre o que está a seu alcance e sabendo dos seus limites para não ultrapa-lo
    e assim acabar falhando. `)

    console.log('-------------------')

} else if(return5 == 'nao'){
    console.log(` A escolha do seu destino e vida é com você então de agora em diante. `)
};


console.log('----------------------------------------------------------------------------')
console.log()
console.log()
console.log()


console.log(` Você terminou o mini game e agora ele está finaizado, veja o seu resultado
 e os seus pontos que são as quantidades de 'SIM' que foram digitadas durante o
 mini game, voce deseja ver o seu resultado ? `);
 console.log()
 
 let finish = prompt(`Digite aqui sim ou nao: `).toLowerCase();


if(finish == 'nao'){
    console.log( `O mini game foi terminado ! `)
}else if(score == 0){
   console.log()
    console.log(` Você falhou miseravelmente na sua vida pela segunda vez !
    
    (Pontuação ${score}) `)
 }else if(score < 3 ){ 
   console.log()
    console.log(` Você se encontrou com um animal exremamente selvagem ao sair da cidade
     e não irá  proseguir mais do que isso pelo resto de sua vida e se você quisesse vingar 
     sua ração não irá conseguir mais ! 
     
     (Pontuação ${score})`)
}else if(score == 3){
   console.log()
        console.log(`Ao sair da cidade você se encontrou com um animal selvagem, mas conseguiu
        fugir, porem ficou gravemente ferido, você poderá se proteger sozinho, mas se caso
        quisesse vingar sua raça não irá coseguir ! 
        
        (Pontuação ${score}) `)
    }else if(score == 4){ 
   console.log()
        console.log(`Você acidentalmente encontrou com os caçadores e conseguiu derrota-los,
    acabou sofrendo um pouco na batalha, e se você optou pela vingança, ela acabou acontecendo
    mesmo com você perdendo um braço, conseguiu vingar sua raça  e consegue se auto-proteger!
    
    (Pontuação ${score}) `)
}else if(score == 5){
   console.log()
    console.log(` Você atingiu todos os objetivos e conseguiu sua vingança pela sua raça
    em uma nova vida com sucesso, aprendeu com seus erros da vida passada e fez as
    escolhas certas na nova que lhe foi dada ! 
     
    (Pontuação máxima ${score})`)
}


console.log()
console.log()
console.log()
console.log(`                           ------------------------------`);
console.log('                                 FIM DE SUA JORNADA     ');
console.log(`                           ------------------------------`);

 















































