const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

const handleCPF = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const cpfMask = (value) => {
  // Remove todos os caracteres não numéricos
  const cleanValue = value.replace(/\D/g, "");

  // Aplica a formatação do CPF
  const formattedValue = cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

  return formattedValue;
}