var JurisdictionModalHTML = `<div class="row">
  <div class="form-group col-md-2">
    <label for="newStartValue">De</label>
    <input type="text" id="newStartValue" class="form-control modalRequiredField mValor">
  </div>
  <div class="form-group col-md-2">
    <label for="newEndValue">Até</label>
    <input type="text" id="newEndValue" class="form-control modalRequiredField mValor">
  </div>

  <div class="form-group col-md-3">
    <label for="newCSC">C.S.C</label>
    <div class="input-group" onclick="getCSCList()">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newCSC" name="newCSC" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="newSetors">Setor</label>
    <div class="input-group" onclick="getSectorsList()">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newSector" name="newSector" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="newFormFieldForApproval">Campo Formulário</label>
    <input type="text" id="newFormFieldForApproval" class="form-control modalRequiredField">
  </div>
</div>

<div class="row">
  
  <div class="form-group col-md-3">
    <label for="new_approver_1">1º Aprovador</label>
    <div class="input-group" onclick="getApproverList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control" id="new_approver_1" name="new_approver_1" readonly>
    </div>
  </div>
  
  <div class="form-group col-md-3">
    <label for="new_approver_2">2º Aprovador</label>
    <div class="input-group" onclick="getApproverList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control" id="new_approver_2" name="new_approver_2" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="new_approver_3">3º Aprovador</label>
    <div class="input-group" onclick="getApproverList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control" id="new_approver_3" name="new_approver_3" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="new_approver_4">4º Aprovador</label>
    <div class="input-group" onclick="getApproverList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control" id="new_approver_4" name="new_approver_4" readonly>
    </div>
  </div>
</div>

  <div class="row">
  <div class="form-group col-md-3">
    <label for="newAssignmentType">Tipo de Atribuição</label>
    <div class="input-group" onclick="getAssignmentTypeList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newAssignmentType_1" name="newAssignmentType_1" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="newAssignmentType">Tipo de Atribuição</label>
    <div class="input-group" onclick="getAssignmentTypeList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newAssignmentType_2" name="newAssignmentType_2" readonly>
    </div>
  </div>
  
  <div class="form-group col-md-3">
    <label for="newAssignmentType">Tipo de Atribuição</label>
    <div class="input-group" onclick="getAssignmentTypeList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newAssignmentType_3" name="newAssignmentType_3" readonly>
    </div>
  </div>

  <div class="form-group col-md-3">
    <label for="newAssignmentType">Tipo de Atribuição</label>
    <div class="input-group" onclick="getAssignmentTypeList(this)">
      <span class="input-group-addon"><span class="fluigicon fluigicon-search"></span></span>
      <input type="text" class="form-control modalRequiredField" id="newAssignmentType_4" name="newAssignmentType_4" readonly>
    </div>
  </div>
</div>
`;
