// Rolagem suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('copyEmailBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const email = this.getAttribute('data-email');

    navigator.clipboard.writeText(email).then(() => {
        const originalText = this.textContent;
        this.textContent = "Email copiado!";
        setTimeout(() => {
            this.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar email: ", err);
    });
});
