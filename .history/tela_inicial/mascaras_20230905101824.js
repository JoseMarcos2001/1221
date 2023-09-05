
function handleChangeMask(event) {
  const { value } = event.target

  phoneMask(mask(value))
}
const CPFMask = (value) => {
  if (!value) return "";

  // Remove all non-digit characters from the input
  const cleanValue = value.replace(/\D/g, "");

  // Apply the CPF formatting pattern
  const formattedValue = cleanValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "($1) $2-$3");

  return formattedValue;
};