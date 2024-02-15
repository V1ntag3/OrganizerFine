const Validations = {
  onlyBlankSpaces(text:string){
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
  formatDateDDMMYYYYHHMM(date:string) {
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

  }
}
export default Validations
