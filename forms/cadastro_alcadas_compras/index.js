// add new row in Jurisdiction table
// Open modal to add new Jurisdiction
function openModalJurisdiction() {
  let jurisdictionModal = FLUIGC.modal(
    {
      title: "Adicionar Alçada",
      content: JurisdictionModalHTML,
      id: "fluig-modal",
      size: "large",
      actions: [
        {
          label: "Salvar",
          bind: "data-open-modal",
          classType: "btn-primary saveNewJurisdictionButton",
        },
        {
          label: "Cancelar",
          autoClose: true,
        },
      ],
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        // When click save button
        $(".saveNewJurisdictionButton").on("click", function () {
          const fieldsAreValids = validateFields("modalRequiredField"); // class to validate fields

          if (fieldsAreValids) {
            let newJurisdictionData = {
              newStartValue: $("#newStartValue").val(),
              newEndValue: $("#newEndValue").val(),
              newCSC: $("#newCSC").val(),
              newSector: $("#newSector").val(),
              newAssignmentType: $("#newAssignmentType").val(),
              newFormFieldForApproval: $("#newFormFieldForApproval").val(),
              new_approver_1: $("#new_approver_1").val(),
              new_approver_2: $("#new_approver_2").val(),
              new_approver_3: $("#new_approver_3").val(),
              new_approver_4: $("#new_approver_4").val(),
            };

            addNewJurisdiction({ newJurisdictionData });

            FLUIGC.toast({
              title: "",
              message: "Nova alçada criada com sucesso.",
              type: "success",
            });

            jurisdictionModal.remove();
          } else {
            FLUIGC.toast({
              title: "Erro: ",
              message: "Preencha os campos obrigatórios.",
              type: "danger",
            });
          }
        });
      }
    }
  );
}

function validateFields(classElement) {
  let qtdFieldsInvalids = 0;

  $(`.${classElement}`).each(function () {
    const valueField = $(this).val();

    if (!valueField) {
      $(this).addClass("error");

      qtdFieldsInvalids++;
    }
  });

  if (qtdFieldsInvalids > 0) {
    return false;
  }

  return true;
}

// add a new Row in Jurisction fluig table
function addNewJurisdiction({ newJurisdictionData }) {
  const idRow = wdkAddChild("tb_jurisdictions"); // new line id

  const {
    newStartValue,
    newEndValue,
    newCSC,
    newSector,
    newAssignmentType,
    newFormFieldForApproval,
    new_approver_1,
    new_approver_2,
    new_approver_3,
    new_approver_4,
  } = newJurisdictionData;

  $(`#startValue___${idRow}`).val("De R$" + newStartValue);
  $(`#endValue___${idRow}`).val("Até R$ " + newEndValue);
  $(`#csc___${idRow}`).val(newCSC);
  $(`#sectors___${idRow}`).val(newSector);
  $(`#assignmentType___${idRow}`).val(newAssignmentType);
  $(`#formFieldForApproval___${idRow}`).val(newFormFieldForApproval);
  $(`#approver_1___${idRow}`).val(new_approver_1);
  $(`#approver_2___${idRow}`).val(new_approver_2);
  $(`#approver_3___${idRow}`).val(new_approver_3);
  $(`#approver_4___${idRow}`).val(new_approver_4);
}

// Remove row from Jurisction table
function removeJurisdiction(element) {
  FLUIGC.message.confirm(
    {
      message: "Deseja excluir esta alçada?",
      title: "Remover alçada",
      labelYes: "Excluir",
      labelNo: "Cancelar",
    },
    function (result, el, ev) {
      if (result) {
        fnWdkRemoveChild(element);
      }
    }
  );
}

function setSelectedZoomItem(selectedItem) {
  switch (true) {
    case selectedItem.type === "CSCListType":
      $("#newCSC").val(selectedItem.CSC);
      break;

    case selectedItem.type === "SectorsListType":
      $("#newSector").val(selectedItem.Setor);
      break;

    case selectedItem.type.includes("newAssignmentType"):
      $("#" + selectedItem.type).val(selectedItem.Tipo);
      break;

    case selectedItem.type.includes("new_approver"):
      $("#" + selectedItem.type).val(selectedItem.Aprovador);
      break;
  }
}

// Dataset list - C.S.C Field
function getCSCList() {
  tdizoom.open("dsCscList", "ID,ID,CSC,CSC", "", "C.S.C", "", "CSCListType");
}

// Dataset list - Setor Field
function getSectorsList() {
  tdizoom.open(
    "dsSectorsList",
    "ID,ID,Setor,Setor",
    "",
    "Setor",
    "",
    "SectorsListType"
  );
}

// Dataset list - Tipo de Atribuição Field
function getAssignmentTypeList(element) {
  const id = $(element).find("input").attr("id");

  tdizoom.open(
    "dsAssignmentTypeList",
    "ID,ID,Tipo,Tipo",
    "",
    "Tipo de Atribuição",
    "",
    id
  );
}

// Dataset list - Aprovador Field
function getApproverList(element) {
  const id = $(element).find("input").attr("id");

  tdizoom.open(
    "dsApproversList",
    "ID,ID,Aprovador,Aprovador",
    "",
    "Aprovador",
    "",
    id
  );
}

// try {
// var dataset = DatasetFactory.getDataset("dsCscList");
// var users = dataset.values;

// return users;

// } catch (error) {
// console.error(error);

// return [];
// }
