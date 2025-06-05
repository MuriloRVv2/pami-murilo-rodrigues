function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Murilo"));

//Interface para objeto usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Propriedade opcional
}

//Utilizando a interface Usuario
function exbirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exbirUsuario({ nome: "Murilo", idade: 30 });

//Exemplo de uma função que retirna arrays e tem parametros opcionais
function listarNomes(nomes: string[]) : void {
    nomes.forEach((nome => console.log(nome)));
}

listarNomes(["Ana", "Bruno", "Carlos"]);