function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado, digite o nome de um atleta ou esporte.</p>";
      return;
    }

    //transformar todos os caracteres do campo de pesquisa para minúsculos.
    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLocaleLowerCase();
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }
    }

    //Se eu não tiver resultados, faça:
    if (!resultados ) {
      resultados = "<p>Nada foi encontrado</p>"
    }
      // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados;
  }