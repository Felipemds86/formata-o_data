const data = new Date();

const dataFormatada = data.toLocaleDateString(
    'pt-Br',
    {
        day: '2-digit',
        month:'2-digit',
        year: ' numeric ',
    }
)

console.log(dataFormatada);