// notacao literal

const nomeDoEstudante = "nomeEstudante";
const notaDoEstudante = 5.5;

const obj1 = {};
obj1[nomeDoEstudante] = notaDoEstudante;

console.log(obj1);

// get e setting exemplos

const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor);

//funcoes importantes de objeto

//criacao literal de obj

const pessoa = {
  nome: "Demetrius",
  idade: 50,
  peso: 50,
  teste() {
    this.peso * this.idade;
  },
};

//funcao que pega as chaves de determinada funcao colocada como parametro

console.log(Object.keys(pessoa));

//funcao que pega os valores de determinada funcao colocada como parametro

console.log(Object.values(pessoa));

// funcao que separa os valores e compacta em outros arrays menores

console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave} ${valor}`);
});

// para definir uma propriedade do objeto para

// estudos sobre heranca
var ferrari = {
  modelo: `F40`,
  velMax: 324,
};

var volvo = {
  modelo: `V40`,
  velMax: 200,
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {
  console.log(typeof Object, typeof MeuObjeto);
  console.log(Object.prototype, MeuObjeto.prototype);
}

//estudos sobre cadeia de prototipos (prototype chain)

var avo = { attr1: `A` };
var pai = { __proto__: avo, attr2: `B` };
var filho = { __proto__: pai, attr3: `C` };
console.log(filho.attr1);

//Nesse estudo de caso podemos analisar a utilizacao de heranca em cadeia,
//tendo em vista que o filho pega o atributo attr1 do avo. Podemos fazer
//tambem:

console.log(filho.attr2);
//Nesse caso o filho esta pegando a propriedade attr2 do pai, devido a handleOperationCallback

console.log(pai.attr1);
//pai pegando o attr1 em const avo

//sobreposicao de valores

const carro = {
  velAtual: 0,
  velMax: 200,
  acelarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax} Km/h`;
  },
};

const Ferrari1 = {
  modelo: `F40`,
  velMax: 324,
};

const volvo1 = {
  modelo: `V40`,
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

//metodo importante para aprofundamento

Object.setPrototypeOf(Ferrari1, carro);
Object.setPrototypeOf(volvo1, carro);

console.log(Ferrari1);
console.log(volvo1);

Ferrari1.acelarMais(300);
console.log(Ferrari1.status);

volvo1.acelarMais(100);
console.log(volvo1.status);

//podemos usar o mecanics de object.create, dessa maneira:

const pai1 = { nome: `Pedro`, corCabelo: `preto` };

const filho1 = Object.create(pai);
filho1.nome = `Demetrius`;
filho1.corCabelo = `Branco`;
console.log(pai);
console.log(filho1);

const filha2 = Object.create(pai, {
  nome: { value: `Bia`, writable: false, enumarable: true },
});

//Algumas maneiras de trabalhar com heranca atraves da funcao obje.create()

//funcao prototypr

function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj5 = new MeuObjeto();
const obg7 = new MeuObjeto();

// Estudos sobre object.preventExtensions

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promocao",
});

console.log("Extensivel:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
console.log(produto);
delete produto.tag;
console.log(produto);

// estudos sobore object sealed

const pessoaSeal = { nome: "Sara", idade: 35 };
Object.seal(pessoaSeal);
console.log("Selado:", Object.isSealed(pessoaSeal));

pessoaSeal.sobrenome = "Silva";
delete pessoaSeal.nome;
pessoaSeal.idade = 29;
console.log(pessoaSeal);

function aulaSobre(nome, videoID) {
  this.nome = nome;
  this.videoID = videoID;
}

const aula1 = new aulaSobre("bem vindo", 123);
const aula2 = new aulaSobre("ate breve", 456);

console.log(aula1, aula2);

//agora vamos criar um operador que imitar a funcao aulasobre
function novaAulaSobre(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novaAulaSobre(aulaSobre, "Bem vindo", 12345);
console.log(aula3);

//Json vs Objeto, algumas diferencas

//json e um formato de dados, nele nao existe funcoes.

//JSON.stringify()    <--- metodo importante

const obj = {
  alunoNome: "Demetrius",
  idadeAluno: 20,
  linguagensDominadas: "ReactJS",
  soma() {
    return alunoNome + idadeAluno + linguagensDominadas;
  },
};
console.log(JSON.stringify(obj));

//estudos de classes e funcoes constructorArgs

class Lancamento {
  constructor(nome = "Generico", valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach((l) => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor;
    });
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 45000);
const contaDeLuz = new Lancamento("Luz", -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());

//herencas com classes

class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}

const filho5 = new Filho;

console.log(Avo);
console.log(Pai);
console.log(filho5);
