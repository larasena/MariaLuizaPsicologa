<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $para = "laraf.sena@gmail.com";
    $assunto = "Formulário de Contato";
    $mensagem = "Nome: " . $_POST["nome"] . "\n";
    $mensagem .= "Email: " . $_POST["email"] . "\n";
    $mensagem .= "Mensagem: " . $_POST["mensagem"];

    // Envia o e-mail
    mail($para, $assunto, $mensagem);

    echo "O e-mail foi enviado com sucesso.";
} else {
    echo "Ocorreu um erro ao enviar o e-mail.";
}

?>