const Validations = {
  onlyBlankSpaces(text: string | null) {
    if (text === null) return true
    return text.trim() === '';
  },
  hasTruthyValue(obj: { [key: string]: boolean }): boolean {
    for (const key in obj) {
      if (obj[key]) {
        return true;
      }
    }
    return false;
  },
  formatDateDDMMYYYYHHMM(date: string) {
    // Data original

    // Converter para objeto Date
    const data = new Date(date);

    // Obter componentes da data
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');

    // Formatar data e hora
    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;

  },
  isEmail(email: String | null) {
    if (email === null) return true

    const emailRegex = /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  },


  diffDate(data: string) {
    const dataAtual = new Date();
    const dataCriacao = new Date(data);
    var dataFinal = ""
    const diferencaMeses =
      (dataAtual.getFullYear() - dataCriacao.getFullYear()) * 12 +
      (dataAtual.getMonth() - dataCriacao.getMonth());

    if (diferencaMeses > 0) {
      dataFinal = `${diferencaMeses} mês(es) atrás`;
    } else {
      const diferencaDias = Math.floor(
        (dataAtual - dataCriacao) / (1000 * 60 * 60 * 24)
      );
      dataFinal = `${diferencaDias} dia(s) atrás`;
    }

    return dataFinal
  }
}
export default Validations
