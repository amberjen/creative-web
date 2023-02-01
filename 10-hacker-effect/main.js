(() => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const textObjects = document.querySelectorAll('nav p');

  textObjects.forEach(obj => {
    obj.addEventListener('mouseover', (e) => {

      let iterations = 0;
      
      const interval = setInterval(() => {
        e.target.textContent = 
        e.target.textContent.split('')
        .map( (letter, index) => {

          if (index < iterations) {
            return (e.target.dataset.value[index]).toUpperCase();
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

        if (iterations >= e.target.dataset.value.length) {
          clearInterval(interval)
        };

        iterations += 1 / 4;

      }, 30);

    });
  });


})();