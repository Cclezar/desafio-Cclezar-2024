import {animaisHabilitados, recintos} from "./dados.js";

class RecintosZoo {

  analisaRecintos(animal, quantidade) {
  // Analisa os recintos disponíveis para um determinado animal e quantidade
    let animalLista = obterAnimal(animal)
    if (!animalLista) {
      return {erro: "Animal inválido"};
    }
    if (!validaQuantidade(quantidade)) {
      return {erro: "Quantidade inválida"};
    }

    // Filtra os recintos que atendem aos requesitos
    let recintosValidos = recintos.filter(recinto => {

    if (!animalLista.bioma.some(bioma => recinto.bioma.includes(bioma))) {
      return false;
    }

    let espaco = obterEspacoLivre(recinto, animalLista)

    if (espaco.espacoLivre < (animalLista.tamanho * quantidade)) {
      return false;
    }
  
    let animaisCarnivoros = animaisHabilitados.filter(animalHabilitado => animalHabilitado.carnivoro).map(animalHabilitado => animalHabilitado.especie)

    if (animalLista.carnivoro && recinto.animaisExistentes.some(animalRecinto => animalRecinto != animalLista.especie)) {
      return false;
    }

    if (!animalLista.carnivoro && recinto.animaisExistentes.length > 0 && animaisCarnivoros.includes(recinto.animaisExistentes[0])){
      return false;
    }

    if (animalLista.especie === 'HIPOPOTAMO' && espaco.existeOutrasEspecies) {
    if (!recinto.bioma.includes("savana e rio")) {
      return false;
    }
    }

    if (animalLista.especie === 'MACACO' && recinto.animaisExistentes.length === 0 && quantidade == 1) {
      return false;
    }
    
    return true;
  
    });

    if (recintosValidos.length == 0) {
      return {erro: "Não há recinto viável"}
    }

    // Formata a saída
    return {
      recintosViaveis: recintosValidos.map(recinto => {
        let espaco = obterEspacoLivre(recinto, animalLista)
        return `Recinto ${recinto.id} (espaço livre: ${espaco.espacoLivre - (animalLista.tamanho * quantidade)} total: ${recinto.tamanhoTotal})`;
      })
    }
  
  }

}

function obterAnimal(animal) {
  // Função que valida se o animal informado é um animal valido
  return animaisHabilitados.find(animais => animais.especie === animal);
   
}

function validaQuantidade(quantidade) {
  //  Função que verifica se a quantidade informada é valdida (maior que zero)
  if (quantidade <= 0) {
    return false
  }
  return true
}

function obterEspacoLivre(recinto, animalLista) {
// Calcula o espaço livre em um recinto e verifica se há outras espécies.
// Considera a ocupação extra de um espaço quando há múltiplas espécies.
  let animaisRecinto = [] 
  for (const animal in recinto.animaisExistentes) {
    animaisRecinto.push(animaisHabilitados.find(animalHabilitado => recinto.animaisExistentes.includes(animalHabilitado.especie)))
  }

  let espacoLivre = recinto.tamanhoTotal - animaisRecinto.reduce((soma,animalHabilitado) => soma + animalHabilitado.tamanho, 0)
  let existeOutrasEspecies = (new Set(animaisRecinto.map(animalRecinto => animalRecinto.especie))).size > 1

  
  if (existeOutrasEspecies || (animaisRecinto.length > 0 && !animaisRecinto.includes(animalLista))) {
    espacoLivre -= 1
  }

  return { espacoLivre: espacoLivre, existeOutrasEspecies: existeOutrasEspecies }
}

export { RecintosZoo as RecintosZoo };
