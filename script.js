// Função de envio de formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
