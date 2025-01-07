document.getElementById('search-btn').addEventListener('click', function() {
    const searchTerm = document.getElementById('search').value.toLowerCase(); 
    const gridItems = document.querySelectorAll('.picture'); 
    let hasResults = false; 
  
    gridItems.forEach(item => {
      const keyword = item.getAttribute('data-keyword').toLowerCase(); 
      if (keyword.includes(searchTerm)) {
        item.style.display = 'block'; 
        hasResults = true; 
      } else {
        item.style.display = 'none';  
      }
    });
  
    
    const noResultsMessage = document.getElementById('no-results');
    if (hasResults) {
      noResultsMessage.style.display = 'none'; 
    } else {
      noResultsMessage.style.display = 'block'; 
    }
  });

  



  
  