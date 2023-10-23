function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("ID");
    dataset.addColumn("Aprovador");
      
    
    dataset.addRow(new Array("001", "Gerente"));
    dataset.addRow(new Array("002", "Diretor Financeiro"));
    dataset.addRow(new Array("003", "Diretor de Compras"));
    dataset.addRow(new Array("004", "Diretoria Solicitante"));
    dataset.addRow(new Array("005", "Diretor Administrativo"));
    dataset.addRow(new Array("006", "Diretor Geral"));
    dataset.addRow(new Array("007", "CEO"));
     
    return dataset;
}