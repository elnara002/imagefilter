  function flowerSelect(btn) {
    const selectedFlowerType = btn.textContent;
    const flowerImages = document.querySelectorAll('img[flowertype]');
    for (let i = 0; i < flowerImages.length; i++) {
      const flowerType = flowerImages[i].getAttribute('flowertype');
      if (selectedFlowerType === 'All' || selectedFlowerType === flowerType) {
        flowerImages[i].style.display = 'block';
      } else {
        flowerImages[i].style.display = 'none';
      }
    }
  }
  
  
  














