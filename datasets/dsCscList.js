function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();
    
    dataset.addColumn("ID");
    dataset.addColumn("CSC");
      
    
    dataset.addRow(new Array("001", "Matriz"));
    dataset.addRow(new Array("002", "Grupo Norte"));
     
    return dataset;
}