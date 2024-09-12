let animaisHabilitados = [
    {
        especie : "LEAO",
        bioma : ["savana"],
        tamanho : 3,
        carnivoro: true
    },
    {
        especie : "LEOPARDO",
        bioma : ["savana"],
        tamanho : 2,
        carnivoro: true
    },
    {
        especie : "CROCODILO",
        bioma : ["rio"],
        tamanho : 3,
        carnivoro: true
    },
    {
        especie : "MACACO",
        bioma : ["savana" ,"floresta"],
        tamanho : 1,
        carnivoro: false
    },
    {
        especie : "GAZELA",
        bioma : ["savana"],
        tamanho : 2,
        carnivoro: false
    },
    {
        especie: "HIPOPOTAMO",
        bioma : ["savana e rio" , "rio"],
        tamanho : 4,
        carnivoro: false
    }
];

let recintos = [
    {
        id : 1,
        bioma : "savana",
        tamanhoTotal : 10,
        animaisExistentes : ["MACACO", "MACACO", "MACACO"]
    },
    {
        id : 2,
        bioma : "floresta",
        tamanhoTotal : 5,
        animaisExistentes : []
    },
    {
        id : 3,
        bioma : "savana e rio",
        tamanhoTotal : 7,
        animaisExistentes : ["GAZELA"]
    },
    {
        id : 4,
        bioma : "rio",
        tamanhoTotal : 8,
        animaisExistentes : []
    },
    {
        id : 5,
        bioma : "savana",
        tamanhoTotal : 9,
        animaisExistentes : ["LEAO"]
    }
];

export { animaisHabilitados, recintos };