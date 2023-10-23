function createDataset(fields, constraints, sortFields) {
	
	try
	{
		
	var filtros = fields[0] + ";"+ fields[1]+ ";"+  fields[2];
	log.info("wsProjetos-> Fields: " + filtros);
	
	// Criar o objeto de Integra??o
	const SERVICE_STUB = ServiceManager.getService('RMWsDataServer');
    log.info("wsProjetos-> SERVICE_STUB: " + SERVICE_STUB);
    const SERVICE_HELPER = SERVICE_STUB.getBean();

    log.info("wsProjetos-> SERVICE_HELPER: " + SERVICE_HELPER);
    
    // Criar o obejto da classe principal do Servico
    const wsDataServer = SERVICE_HELPER.instantiate('com.totvs.WsDataServer');
    log.info("wsProjetos-> wsDataServer: " + wsDataServer);
    // Obter o objeto do WS
    var iWsDataServer = wsDataServer.getRMIwsDataServer();
    log.info("wsProjetos-> iWsDataServer: " + iWsDataServer);
    // Configurar a autentica??o
    var rm_user = 'FLUIG';
    var rm_pass = 'Fluig@123';
    
    var authIwsDataServer = SERVICE_STUB.getBasicAuthenticatedClient(iWsDataServer, 'com.totvs.IwsDataServer', rm_user, rm_pass);
    log.info("wsProjetos-> authIwsDataServer: " + authIwsDataServer);
    // Passar os parametros
    var dataServerName = "CtbCCustoData";
    var filtro = "CODCOLIGADA IN ('1')"; 
    var contexto = "";
    
    // Executar
    var readView = authIwsDataServer.ReadView(dataServerName, filtro, contexto);
   
    if ((readView != null) && (readView.indexOf("===") != -1)) {
        var msgErro = readView.substring(0, readView.indexOf("==="));                
        throw msgErro;
     }
    
    var xmlNewDataSet = new XML(readView);
    
    log.info(xmlNewDataSet);
    /*var dataset = DatasetBuilder.newDataset();
    dataset.addColumn('XML');
        
    var Movimento = "<CC> "+ xmlNewDataSet + "</CC> ";
    
	var registro = new Array();
	registro.push(Movimento);*/
	
	dataset.addRow( registro );
    
    return dataset;
    
    } catch(e) {
          return getDatasetError(e);
    };          
}

function getDatasetError(exception) {
    var dtsError = new DatasetBuilder.newDataset();
    dtsError.addColumn("ERROR");
    dtsError.addRow([ "Ocorreu um erro na execu??o do DataSet. Mensagem: "
                 + exception.message + '(#' + exception.lineNumber + ')' ]);
    return dtsError;

};