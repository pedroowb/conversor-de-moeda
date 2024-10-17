const form = document.getElementById('conversor-form');
const valorInput = document.getElementById('valor');
const moedaOrigemSelect = document.getElementById('moeda-origem');
const moedaDestinoSelect = document.getElementById('moeda-destino');
const resultadoP = document.getElementById('resultado');

const taxasDeCambio = {
    BRL: {
        USD: 0.25,
        EUR: 0.22
    },
    USD: {
        BRL: 4.00,
        EUR: 0.88
    },
    EUR: {
        BRL: 4.50,
        USD: 1.14
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valor = parseFloat(valorInput.value);
    const moedaOrigem = moedaOrigemSelect.value;
    const moedaDestino = moedaDestinoSelect.value;

    if (isNaN(valor)) {
        resultadoP.textContent = 'Erro: valor inválido';
        return;
    }

    const taxaDeCambio = taxasDeCambio[moedaOrigem][moedaDestino];
    const valorConvertido = valor * taxaDeCambio;

    resultadoP.textContent = `O valor de ${valor} ${moedaOrigem} é igual a ${valorConvertido.toFixed(2)} ${moedaDestino}`;
});