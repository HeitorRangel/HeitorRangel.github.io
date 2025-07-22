const input = document.getElementById('input-text');
    const typed = document.getElementById('typed');

    input.addEventListener('input', function() {
      typed.textContent = this.value;
    });