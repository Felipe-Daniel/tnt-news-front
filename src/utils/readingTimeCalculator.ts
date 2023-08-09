export function readingTimeCalculator(text: string) {
    // palavras lidas por minuto
    const plpm = 150
    const qtdPalavras = text.split(' ').length
    const timeInMinutes = Math.round(qtdPalavras / plpm)

    return `${timeInMinutes} minutos`
}