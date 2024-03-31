/* spreed não copia objeto aninhado 
    const obj1 = {
        prop1: 1,
        prop2: 2,
        prop3: [1, 2, 3],
    };

    const obj2 = {
        ...obj1,
        prop: 'x',
    };

    console.log('obj1:', obj1);
    console.log('obj2:', obj2);
    console.log('obj1 === obj2:', obj1 === obj2);

    obj2.prop3.push(4);

    console.log('obj1:', obj1);
    console.log('obj2:', obj2);
    console.log('obj2.prop3 === obj1.prop3:', obj2.prop3 === obj1.prop3);
*/

/* spreed não copia objeto aninhado - solução 1 
    const obj1 = {
        prop1: 1,
        prop2: 2,
        prop3: [1, 2, 3],
    };

    console.log('obj1:', obj1);

    const obj2 = {
        ...obj1,
        prop3: [...obj1.prop3,4],
    };

    console.log('obj2:', obj2);
    console.log('obj1 === obj2:', obj1 === obj2);
    console.log('obj1:', obj1);
    console.log('obj2:', obj2);
    console.log('obj2.prop3 === obj1.prop3:', obj2.prop3 === obj1.prop3);
*/

/* spreed não copia objeto aninhado - solução 2 (structuredClone) 
    const obj1 = {
        prop1: 1,
        prop2: 2,
        prop3: [1, 2, 3],
    };

    console.log('obj1:', obj1);

    const obj2 = structuredClone(obj1);

    console.log('obj2:', obj2);
    console.log('obj1 === obj2:', obj1 === obj2);

    obj2.prop3.push(4);

    console.log('obj1:', obj1);
    console.log('obj2:', obj2);
    console.log('obj2.prop3 === obj1.prop3:', obj2.prop3 === obj1.prop3);
*/

/* destruct */
const playlist = {
    nome: 'JavaScript do zero (curso para iniciantes)',
    videos: 34,
    visualizacoes: 7.059,
    visibilidade: 'Pública',
};

const mensagem1 = `A playlist '${playlist.nome}' está com '${playlist.videos}' vídeos e tem '${playlist.visualizacoes}' visualizações e tem visibilidade '${playlist.visibilidade}'.`;

console.log('mensagem1:', mensagem1);

// 
const nome = playlist.nome;
const videos = playlist.videos;
const visualizacoes = playlist.visualizacoes;
const visibilidade = playlist.visibilidade;

const mensagem2 = `A playlist '${nome}' está com '${videos}' vídeos e tem '${visualizacoes}' visualizações e tem visibilidade '${visibilidade}'.`;

console.log('mensagem2:', mensagem2);

// destruct
const pegaMensagem = ({ nome, videos, visualizacoes, visibilidade }) => { 
    const mensagem3 = `A playlist '${nome}' está com '${videos}' vídeos e tem '${visualizacoes}' visualizações e tem visibilidade '${visibilidade}'.`;
    console.log('mensagem3:', mensagem3);
};

pegaMensagem(playlist);
