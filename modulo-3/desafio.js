let perro = {};

let pessoa = {
    nome: 'Ygor',
    sobrenome: 'Mendes',
    sexo: 'Masculino',
    idade: 21,
    altura: 1.75,
    peso: 65,
    andando: false,
    caminhouQuantosMetros: 0
}
console.log(pessoa);
// Finalizado 

pessoa.fazerAniversario = function(){
    return pessoa.idade++
};
pessoa.fazerAniversario()
console.log(pessoa)
// Finalizado

pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
};

pessoa.andar(100)
console.log(pessoa);
// Finalizado

pessoa.parar = function(){
    pessoa.andando = false;
};
pessoa.parar()
console.log(pessoa);
// Finalizado

pessoa.nomeCompleto = function(){
    return 'Olá meu nome é: ' + pessoa.nome + " " + pessoa.sobrenome ;
};
console.log(pessoa.nomeCompleto());
// Finalizado

pessoa.showIdade = function(){
    return 'Olá, eu tenho ' + pessoa.idade + ' anos!' ;
};
console.log(pessoa.showIdade())
// Finalizado

pessoa.showPeso = function(){
    return 'Eu peso ' + pessoa.peso + ' Kg.';
};
console.log(pessoa.showPeso());
// Finalizado

pessoa.mostraAltura = function(){
    return 'Minha altura é ' + pessoa.altura + 'm';
};
console.log(pessoa.mostraAltura());
// Finalizado

console.log(pessoa.nomeCompleto()); // nome completo, resposta retornada
console.log(pessoa.idade); // idade, resposta retornada
console.log(pessoa.peso); // peso, resposta retornada
console.log(pessoa.altura); // altura, resposta retornada

pessoa.fazerAniversario();   // fazer 3 aniversarios
pessoa.fazerAniversario();
pessoa.fazerAniversario();
console.log(pessoa); // quantos anos tem agora, resposta retornada

if( pessoa.andar === true){
    pessoa.caminhouQuantosMetros + pessoa.caminhouQuantosMetros
}
pessoa.andar(100); // fazer a pessoa andar mais metros
pessoa.andar(43);
pessoa.andar(12);

pessoa.parar = function(){ // fazer a pessoa parar de andar
    pessoa.andando = false;
};
pessoa.parar();
console.log(pessoa);

console.log(pessoa.caminhouQuantosMetros); // quantos metros ela andou 

pessoa.apresentacao = function(){
    var sexo = 'o';
    var idadeAnos = 'anos'
    var metrosCaminhados = 'metros';
    if(pessoa.sexo === 'Feminino'){
        sexo = 'a';
    };

    if(pessoa.idade === 1){
        idadeAnos = 'ano';
    };

    if(pessoa.caminhouQuantosMetros ===1){
        metrosCaminhados = 'metro';
    };

    return 'Olá, eu sou ' + sexo + ', ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idadeAnos + ',' + ' minha altura é de ' + pessoa.altura + 'm e meu peso é ' + pessoa.peso + 'Kg' + ' e só hoje, eu já caminhei ' + pessoa.caminhouQuantosMetros + ' ' + metrosCaminhados + '!.';
}; // fazer a pessoa se apresentar 
console.log(pessoa.apresentacao());
// Finalizado

/**
 * 
 * git init -> inicializar um repositório git
 * git config user.name "Ygor Mendes"
 * git config user.email "ygor@email.com"
 * Para saber se deu certo, coloque -> git config user.name e dê um enter
 * Isso serve para o email -> git config user.email e dê um enter
 * git add . -> faz o git observar todos os arquivos/pastas do projeto
 * git add nameDoArquivo -> se quiser adicionar arquivos especificos
 * git commit -m "comentário" -> comenta as modificações/inserções... (só pode ser usado após o git add )
 * 
 * para subir algo no git hub é preciso observar atentamento agora
 */