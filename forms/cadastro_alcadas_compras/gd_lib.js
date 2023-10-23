// FUNCOES GENERICAS P/ DESENVOLVIMENTO DE FORMULARIOS FLUIG

//FORMATA DATA
function mData2(v){
   v=v.replace(/\D/g,"");   
   v=v.replace(/(\d{2})(\d)/,"$1/$2");       
   v=v.replace(/(\d{2})(\d)/,"$1/$2");                                                    
   v=v.replace(/(\d{2})(\d{2})$/,"$1$2");	
   if (v.length == 8)
   {
       v1 = v.substring(0,6);
       v2 = v.substring(6);
       v= v1+"20"+v2;
   }
   if (v.length > 10)
   {
       v = v.substring(0,10);
   }
   return v;
}

//FORMATA VALOR 2 CADAS DECIMAIS
function mValor(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d)(\d{8})$/,"$1.$2");
    v=v.replace(/(\d)(\d{5})$/,"$1.$2");   			
    v=v.replace(/(\d)(\d{2})$/,"$1,$2");  
    return v;
}

//SOMENTE NUMERICOS
function mNumerico(v){
    v=v.replace(/[^0-9]+/g,'');
    return v;
}

//MASCARA DE DATA DD/MM/YYYY
function mData(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d)/,"$1/$2");       
    v=v.replace(/(\d{2})(\d)/,"$1/$2");                                                  
    v=v.replace(/(\d{2})(\d{2})$/,"$1$2");
    return v;
}

//PERMITE SOMENTE NUMEROS INTEIROS
function mInt(v){
    v=v.replace(/[^0-9]+/g,'');
    v=v.replace(/(\d)(\d{9})$/,"$1.$2");
    v=v.replace(/(\d)(\d{6})$/,"$1.$2"); 
    v=v.replace(/(\d)(\d{3})$/,"$1.$2"); 
    return v;
}
//PERMITE SOMENTE CARECTERES
function mChar(v){
    v=v.replace(/[^a-z,A-z,à-ú,À-Ú]+/g,'');
    return v;
}
//PERMITE SOMENTE CARECTERES
function mAlfanum(v){
    v=v.replace(/[^a-z,A-z,0-9]+/g,'');
    return v;
}
//FORMATA CPF
function mCpf(v){
    v=v.replace(/\D/g,"");                    
    v=v.replace(/(\d{3})(\d)/,"$1.$2");      
    v=v.replace(/(\d{3})(\d)/,"$1.$2");       
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2"); 
    return v;
}
//FORMATA CEP
function mCep(v){
    v=v.replace(/D/g,"");                
    v=v.replace(/^(\d{5})(\d)/,"$1-$2"); 
    return v;
}
//FORMATA CNPJ
function mCnpj(v){
    v=v.replace(/\D/g,"");                   
    v=v.replace(/^(\d{2})(\d)/,"$1.$2");     
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3"); 
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");           
    v=v.replace(/(\d{4})(\d)/,"$1-$2");              
    return v;
}
//FAZ REPLACE DE TODAS AS OCORRENCIAS EM UMA STRING
function replaceAll(string, token, newtoken) {
    while (string.indexOf(token) != -1) {
            string = string.replace(token, newtoken);
    }
    return string;
}
// RECEBE VALOR COMO CARACTER DE CAMPO (2,30) E RETORNA O VALOR COMO FLOAT(2.30).
function retornaFloat(string){
	if(string == ""){
		string = "0,00";
	}
	string = replaceAll(string, ".", "");
	string = replaceAll(string, ",", ".");
	return parseFloat(string)
}
//RECEBE VALOR COMO FLOAR (2.30) E RETORNA O VALOR COMO CARACTER DE CAMPO(2,30).
function retornaString(float,precision){
	if (precision == undefined){
		precision = 2;
	}
	if(float == ""){
		float = 0;
	}
	var negativo = false;
	if(float < 0){
		negativo = true;
	}
	float = float.toFixed(precision).toString();
	float = replaceAll(float, ".", ",");
	//float = mValor(float);
	if (negativo){
		float = "-"+float;
	}
	return float	
}
// RETRONA DATA DO DIA
function dateBase()
{
    var now = new Date();
    var year = "" + now.getFullYear();
    var month = "" + (now.getMonth() + 1); //Deve somar um no mes pois a funcao getMonth retorna valores entre 0 e 11 
    var day = "" + now.getDate();
    
    return FormattedDateTime(day) +"/" + FormattedDateTime(month) +"/"+ year;
}
// AJUSTA O FORMATO DA DATA QUANDO A MESMA NAO POSSUI 2 CARACTERES
function FormattedDateTime(dateTime)
{
    if (dateTime.length == 1) 
    {
                   dateTime = "0" + dateTime; 
    }
    return dateTime;
}
//RETRONA HORA
function hourBase()
{
    var now = new Date();
    var hour = "" + now.getHours();
    var minute = "" + now.getMinutes(); 
    
    return FormattedDateTime(hour) +":" + FormattedDateTime(minute);
}

function getUsuarioLogado(){
	var retorno = null
	$.ajax({
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        url: '/api/public/social/user/logged/v2',
        async: true,
        success: function (response){
        	putUsuarioLogado(response);
        }
	});
}

function getConfiguration(){
	var retorno = null;
	 $.ajax({
	         type: 'GET',
	         dataType: 'json',
	         contentType: "application/json",
	         url: '/public/wcm/configuration',
	         async: true,
	         success: function (response){
	        	 putConfiguration(response)
	         }
	  });
}

function preencheZeros(valor,tamanho){

	var qtd = valor.length;

	if(qtd < tamanho){

		var limite = tamanho-qtd;

		for(i=0;i<limite;i++){

			valor = '0'+valor;

		}
	}
	return valor;
}

function fluigAlert(message, title,label){
	message = typeof message !== 'undefined' ? message : "";
	title = typeof title !== 'undefined' ? title : "Alert";
	label = typeof label !== 'undefined' ? label : "OK";
	window.parent.FLUIGC.message.alert({
		message: message,
		title: title,
		label: label
		});
}

$(document).ready(function(){
    /////Validacao Caracter class='mNumerico' /////
   $(document).on('keyup', '.mNumerico',function(){
          var valor = mNumerico($(this).val());
          $(this).val(valor);
    });
   $(document).on('blur', '.mNumerico',function(){
          var valor = mNumerico($(this).val());
          $(this).val(valor);
    });

    
   /////Validacao Caracter class='mChar' /////
   $(document).on('keyup', '.mChar',function(){
          var valor = mChar($(this).val());
          $(this).val(valor);
    });
   $(document).on('blur', '.mChar',function(){
          var valor = mChar($(this).val());
          $(this).val(valor);
    });
    
   /////Validacao Caracter class='mAlfanum' /////
   $(document).on('keyup', '.mAlfanum',function(){
          var valor = mAlfanum($(this).val());
          $(this).val(valor);
    });
   $(document).on('blur', '.mAlfanum',function(){
          var valor = mAlfanum($(this).val());
          $(this).val(valor);
    });

   /////Validacao Inteiro class='mInt' /////
   $(document).on('keyup', '.mInt',function(){
          var valor = mInt($(this).val());
          $(this).val(valor);
    });
   $(document).on('blur', '.mInt',function(){    
          var valor2 = 0;
          var valor  = $(this).val();
          valor  = replaceAll(valor,'.','');
          valor2 = parseInt(valor);
          valor  = mInt(valor2.toString());
          $(this).val(valor);
    });
   /////Validacao Valor class='mValor' ///// 
   $(document).on('focus', '.mValor',function(){
	   var readonly = $(this).attr("readonly");
	   if(readonly != true && readonly != "readonly"){
		   var precision = $(this).attr("data-precision");
		   if(precision != undefined){
			   if(precision.trim() != ""){
				   precision = parseInt(precision.trim());
			   }else{
				   precision = 2;
			   }
		   }else{
			   precision = 2;
		   }
		   $(this).maskMoney({thousands:'.', decimal:',', allowZero:true,precision:precision});
	   }
   });

   /////Validacao Data class='mData' ///// 
   $(document).on('keyup', '.mData',function(){
          var valor = mData($(this).val());
          $(this).val(valor);
   });
   $(document).on('blur', '.mData',function(){
          var valor = mData2($(this).val());
          $(this).val(valor);
   });
   /////Validacao CEP class='mCep' ///// 
   $(document).on('keyup', '.mCep',function(){
          var valor = mCep($(this).val());
          $(this).val(valor);
   });
   $(document).on('blur', '.mCep',function(){
          var valor = mCep($(this).val());
          $(this).val(valor);
   });
   /////Validacao CPF class='mCpf' ///// 
   $(document).on('keyup', '.mCpf',function(){
          var valor = mCpf($(this).val());
          $(this).val(valor);
   });
   $(document).on('blur', '.mCpf',function(){
          var valor = mCpf($(this).val());
          $(this).val(valor);
   });
   /////Validacao CNPJ class='mCnpj' ///// 
   $(document).on('keyup', '.mCnpj',function(){
          var valor = mCnpj($(this).val());
          $(this).val(valor);
   });
   $(document).on('blur', '.mCnpj',function(){
          var valor = mCnpj($(this).val());
          $(this).val(valor);
   }); 
});


/*
 *  jquery-maskmoney - v3.0.2
 *  jQuery plugin to mask data entry in the input text in the form of money (currency)
 *  https://github.com/plentz/jquery-maskmoney
 *
 *  JQUERY-MASKMONEY MIN
 */
!function($){"use strict";$.browser||($.browser={},$.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),$.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),$.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()));var a={destroy:function(){return $(this).unbind(".maskMoney"),$.browser.msie&&(this.onpaste=null),this},mask:function(a){return this.each(function(){var b,c=$(this);return"number"==typeof a&&(c.trigger("mask"),b=$(c.val().split(/\D/)).last()[0].length,a=a.toFixed(b),c.val(a)),c.trigger("mask")})},unmasked:function(){return this.map(function(){var a,b=$(this).val()||"0",c=-1!==b.indexOf("-");return $(b.split(/\D/).reverse()).each(function(b,c){return c?(a=c,!1):void 0}),b=b.replace(/\D/g,""),b=b.replace(new RegExp(a+"$"),"."+a),c&&(b="-"+b),parseFloat(b)})},init:function(a){return a=$.extend({prefix:"",suffix:"",affixesStay:!0,thousands:",",decimal:".",precision:2,allowZero:!1,allowNegative:!1},a),this.each(function(){function b(){var a,b,c,d,e,f=s.get(0),g=0,h=0;return"number"==typeof f.selectionStart&&"number"==typeof f.selectionEnd?(g=f.selectionStart,h=f.selectionEnd):(b=document.selection.createRange(),b&&b.parentElement()===f&&(d=f.value.length,a=f.value.replace(/\r\n/g,"\n"),c=f.createTextRange(),c.moveToBookmark(b.getBookmark()),e=f.createTextRange(),e.collapse(!1),c.compareEndPoints("StartToEnd",e)>-1?g=h=d:(g=-c.moveStart("character",-d),g+=a.slice(0,g).split("\n").length-1,c.compareEndPoints("EndToEnd",e)>-1?h=d:(h=-c.moveEnd("character",-d),h+=a.slice(0,h).split("\n").length-1)))),{start:g,end:h}}function c(){var a=!(s.val().length>=s.attr("maxlength")&&s.attr("maxlength")>=0),c=b(),d=c.start,e=c.end,f=c.start!==c.end&&s.val().substring(d,e).match(/\d/)?!0:!1,g="0"===s.val().substring(0,1);return a||f||g}function d(a){s.each(function(b,c){if(c.setSelectionRange)c.focus(),c.setSelectionRange(a,a);else if(c.createTextRange){var d=c.createTextRange();d.collapse(!0),d.moveEnd("character",a),d.moveStart("character",a),d.select()}})}function e(b){var c="";return b.indexOf("-")>-1&&(b=b.replace("-",""),c="-"),c+a.prefix+b+a.suffix}function f(b){var c,d,f,g=b.indexOf("-")>-1&&a.allowNegative?"-":"",h=b.replace(/[^0-9]/g,""),i=h.slice(0,h.length-a.precision);return i=i.replace(/^0*/g,""),i=i.replace(/\B(?=(\d{3})+(?!\d))/g,a.thousands),""===i&&(i="0"),c=g+i,a.precision>0&&(d=h.slice(h.length-a.precision),f=new Array(a.precision+1-d.length).join(0),c+=a.decimal+f+d),e(c)}function g(a){var b,c=s.val().length;s.val(f(s.val())),b=s.val().length,a-=c-b,d(a)}function h(){var a=s.val();s.val(f(a))}function i(){var b=s.val();return a.allowNegative?""!==b&&"-"===b.charAt(0)?b.replace("-",""):"-"+b:b}function j(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function k(a){a=a||window.event;var d,e,f,h,k,l=a.which||a.charCode||a.keyCode;return void 0===l?!1:48>l||l>57?45===l?(s.val(i()),!1):43===l?(s.val(s.val().replace("-","")),!1):13===l||9===l?!0:!$.browser.mozilla||37!==l&&39!==l||0!==a.charCode?(j(a),!0):!0:c()?(j(a),d=String.fromCharCode(l),e=b(),f=e.start,h=e.end,k=s.val(),s.val(k.substring(0,f)+d+k.substring(h,k.length)),g(f+1),!1):!1}function l(c){c=c||window.event;var d,e,f,h,i,k=c.which||c.charCode||c.keyCode;return void 0===k?!1:(d=b(),e=d.start,f=d.end,8===k||46===k||63272===k?(j(c),h=s.val(),e===f&&(8===k?""===a.suffix?e-=1:(i=h.split("").reverse().join("").search(/\d/),e=h.length-i-1,f=e+1):f+=1),s.val(h.substring(0,e)+h.substring(f,h.length)),g(e),!1):9===k?!0:!0)}function m(){r=s.val(),h();var a,b=s.get(0);b.createTextRange&&(a=b.createTextRange(),a.collapse(!1),a.select())}function n(){setTimeout(function(){h()},0)}function o(){var b=parseFloat("0")/Math.pow(10,a.precision);return b.toFixed(a.precision).replace(new RegExp("\\.","g"),a.decimal)}function p(b){if($.browser.msie&&k(b),""===s.val()||s.val()===e(o()))a.allowZero?a.affixesStay?s.val(e(o())):s.val(o()):s.val("");else if(!a.affixesStay){var c=s.val().replace(a.prefix,"").replace(a.suffix,"");s.val(c)}s.val()!==r&&s.change()}function q(){var a,b=s.get(0);b.setSelectionRange?(a=s.val().length,b.setSelectionRange(a,a)):s.val(s.val())}var r,s=$(this);a=$.extend(a,s.data()),s.unbind(".maskMoney"),s.bind("keypress.maskMoney",k),s.bind("keydown.maskMoney",l),s.bind("blur.maskMoney",p),s.bind("focus.maskMoney",m),s.bind("click.maskMoney",q),s.bind("cut.maskMoney",n),s.bind("paste.maskMoney",n),s.bind("mask.maskMoney",h)})}};$.fn.maskMoney=function(b){return a[b]?a[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?($.error("Method "+b+" does not exist on jQuery.maskMoney"),void 0):a.init.apply(this,arguments)}}(window.jQuery||window.Zepto);