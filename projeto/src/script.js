

function calcularPreco() {
  const precoFilamento = document.getElementById("preco").value;
  const gramasFilamento = document.getElementById("gramas").value;
  const horasImpressao = document.getElementById("horas").value;
  const lucroImpressao = document.getElementById("lucro").value;

  let valorVenda = document.getElementById("valorVendas");

  let custoMaterial = 0;
  let gastoEnerg = 0;
  let custoProducao = 0;
  let precoVenda = 0;

  if (
    precoFilamento == '' ||
    gramasFilamento == '' ||
    horasImpressao == '' ||
    lucroImpressao == ''
  ) {
    alert("Preencha todos os capos!")
  } else {
    custoMaterial = (precoFilamento / 1000) * gramasFilamento;
    console.log(custoMaterial);

    gastoEnerg = horasImpressao * 1;

    custoProducao = custoMaterial + gastoEnerg;

    precoVenda = custoProducao + (custoProducao * lucroImpressao) / 100;

    valorVenda.innerText = `R$ ${precoVenda.toFixed(2)}`;

    console.log(precoVenda.toFixed(2));
  }
}

document.getElementById("calcular").addEventListener("click", calcularPreco);

document.getElementById("200").addEventListener("click", function () {
  document.getElementById("lucro").value = 200;
});

document.getElementById("300").addEventListener("click", function () {
  document.getElementById("lucro").value = 300;
});

document.getElementById("500").addEventListener("click", function () {
  document.getElementById("lucro").value = 500;
});
