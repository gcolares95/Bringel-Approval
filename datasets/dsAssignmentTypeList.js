function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("ID");
    dataset.addColumn("Tipo");
      
    
    dataset.addRow(new Array("001", "Papel"));
    dataset.addRow(new Array("002", "Usuário"));
    dataset.addRow(new Array("002", "Livre"));
     
    return dataset;
}