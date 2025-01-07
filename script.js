document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase(); // Obtém o valor da barra de pesquisa
    const gridItems = document.querySelectorAll('.picture'); // Seleciona todos os itens da grid
    let hasResults = false; // Variável para verificar se há resultados
  
    gridItems.forEach(item => {
      const keyword = item.getAttribute('data-keyword').toLowerCase(); // Obtém o valor de data-keyword
      if (keyword.includes(searchTerm)) {
        item.style.display = 'block'; // Exibe o item se a palavra-chave corresponder
        hasResults = true; // Marca que encontrou pelo menos um resultado
      } else {
        item.style.display = 'none'; // Oculta o item se não houver correspondência
      }
    });
  
    // Exibe ou oculta a mensagem de "Nenhuma foto encontrada"
    const noResultsMessage = document.getElementById('no-results');
    if (hasResults) {
      noResultsMessage.style.display = 'none'; // Oculta a mensagem de "nenhuma foto encontrada"
    } else {
      noResultsMessage.style.display = 'block'; // Exibe a mensagem de "nenhuma foto encontrada"
    }
  });

  



  
  