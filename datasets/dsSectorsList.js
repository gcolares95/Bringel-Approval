function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("ID");
    dataset.addColumn("Setor");
      
    
    dataset.addRow(new Array("001", "Financeiro"));
    dataset.addRow(new Array("002", "Compras"));
     
    return dataset;
}