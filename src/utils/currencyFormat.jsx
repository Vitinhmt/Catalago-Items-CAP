function currencyFormat(value) {
  return value.toLocaleString("PT-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default currencyFormat;
