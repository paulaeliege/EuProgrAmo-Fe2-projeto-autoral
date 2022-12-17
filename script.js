function carregaProjetoAutoral() {

    var biografias = {
        bio01: {
            nome: "Confeitaria",
            imagem: "https://i.postimg.cc/Pxg1J1gm/Whats-App-Image-2022-12-16-at-15-26-39-2.jpg",
            descricao: "Olá eu sou a Paula, tenho 47 anos,  há 5 anos atrás queria seguir carreira de confeiteira, cheguei até criar alguns pratos e investir neles. A confeitaria me levou a lugares que jamais imaginaria chegar, conheci pessoas e lugares maravilhosos na grande São Paulo.",
            citacao: "A  confeitaria ultrapassa a exatidão das medidas dos ingredientes e as técnicas. É adicionar amor e prazer no que se faz! Seja um bolo simples, com memória afetiva, ou um preparo mais elaborado. Não há distinção! Bruno Rucy Marinho."
        },

        bio02: {
            nome: "Surpresa de Morango",
            imagem: "https://i.postimg.cc/G3DkNSDz/Whats-App-Image-2022-12-16-at-16-18-23.jpg",
            descricao: "Surpresa de Morango, um doce que remete amor e carinho o sabor do chocolate junto com o morango, da sempre aquela senssação de quero mais.",
            citacao: "Com açúcar, com afeto, fiz seu doce predileto. Chico Buarque."

        },

        bio03: {
            nome: "Crepe",
            imagem: "https://i.postimg.cc/DyKqKddh/Whats-App-Image-2022-12-16-at-15-26-39.jpg",
            descricao: "crepe de morango com chocolate, olhando para esse prato ele me traz uma saudade de quando minhas meninas era pequeninas, na verdade eu considero como um dos melhores doces da confeitaria.",
            citacao: " Busque sempre olhar o lado doce da vida! Fernanda R. Silva."

        },

        bio04: {
            nome: "Amigos",
            imagem: "https://i.postimg.cc/sXQp3TNj/Whats-App-Image-2022-12-16-at-16-29-50.jpg.",
            descricao: "O curso de confeitaria me troxe amigos maravilhosos que levarei comigo para vida, sou grata a todos que fizerem parte deste momento comigo, aqui se feichou um ciclo em minha tragetória.",
            citacao: "Acredito que existem fases, ciclos, começos, recomeços. E acho que estou bem no meio de um deles. Clarissa Corrêa."
        },

        bio05: {
            nome: "Codando",
            imagem: "https://i.postimg.cc/Hs4bWcBy/Whats-App-Image-2022-12-16-at-15-38-50.jpg",
            descricao: "Em meio a pandemia conheci o mundo dos códigos, com o incentivo das minhas filhas terminei me apaixonando por eles, e descobri que codar é coisa pra mulher sim.",
            citacao: "Quem consegue decifrar os códigos secretos do Destino, é capaz de entender qualquer mensagem enviada por Ele. Fábio Silva."
        },

        bio06: {
            nome: "Códigos",
            imagem: "https://i.postimg.cc/7ZH05HWQ/Whats-App-Image-2022-12-16-at-15-39-28.jpg",
            descricao: "O medo vai sempre existir poque a cada dia surjem novos desafios, novas maneiras de se escrever linhas de códigos, os estudos precisam ser constantes para se alcansar o objetivo.",
            citacao: "A vida é como um código deve-se procurar tudo para decifrar a chave da sua existência. Platino."
        },

    };

    var content = document.getElementById("content");

    for (var bio in biografias) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' +
            biografias[bio].imagem +
            '"/>' +
            "<details>" +
            "<summary>" +
            biografias[bio].nome +
            "</summary>" +
            "<p>" +
            biografias[bio].descricao +
            "</p>" +
            "<blockquote><q>" +
            biografias[bio].citacao +
            "</q></blockquote>" +
            "</details>" +
            "</div>";

    }

}

carregaProjetoAutoral();