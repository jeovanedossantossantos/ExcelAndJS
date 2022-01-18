const downloadXLSX = () => {
    const wb = XLSX.utils.book_new();

    wb.Props = {
        Title: 'Relatório do Papai',
        Subject: 'Vídeos Assistidos',
        Author: 'Papai Desenvolvedor',
        CreatedDate: new Date(),
    };

    wb.SheetNames.push('Relatório 1');

    const dados = [
        ['Nome', 'Usuário', 'E-mail', 'Link Vídeo'],
        ['Naruto', 'folha123', 'uzumaki@folha.oculta', 'https://you.be/h97g9vebv'],
        ['Kakaroto', 'veditaAmigao', 'kakaroto@dahora.jp', 'https://you.be/h97g9vebv']
    ];

    const ws = XLSX.utils.aoa_to_sheet(dados);

    wb.Sheets['Relatório 1'] = ws;

    XLSX.writeFile(wb, 'Relatório do Papai Desenvolvedor.xlsx', { bookType: 'xlsx', type: 'bynary' });
};

document.getElementById('download').addEventListener('click', () => {
    downloadXLSX();
})