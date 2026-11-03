const btnAvancar = document.getElementById("btnAvancar");
const btnCalcular = document.getElementById("calcular");

const nome = document.getElementById("nome");

const blocoNome = document.getElementById("blocoNome");
const blocoNotas = document.getElementById("blocoNotas");

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const resultado = document.getElementById("resultado");

// BOTÃO AVANÇAR
btnAvancar.addEventListener("click", function() {

    if (nome.value.trim() === "") {
        alert("Digite seu nome!");
        nome.focus();
        return;
    }

    blocoNome.style.display = "none";
    blocoNotas.style.display = "block";

    nota1.disabled = false;
    nota2.disabled = false;
    nota3.disabled = false;

});

// BOTÃO CALCULAR MÉDIA
btnCalcular.addEventListener("click", function() {

    if (
        nota1.value === "" ||
        nota2.value === "" ||
        nota3.value === ""
    ) {
        alert("Preencha todas as notas!");
        return;
    }

    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    if (
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
    ) {
        alert("As notas devem estar entre 0 e 10");
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    if (media >= 7) {
        resultado.innerHTML =
            `Parabéns, ${nome.value}! Sua média foi ${media.toFixed(2)}. Você foi aprovado!`;
    } else {
        resultado.innerHTML =
            nome.value +
            ", sua média foi " + media.toFixed(2) +
            ". Você foi reprovado!";
    }

});
