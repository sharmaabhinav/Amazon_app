
$.ajax({
  url : "account/view",
  type : "get",
  dataType : "json",
  success : fillAccounts
});
	
function fillAccounts(data){
  $('#account_list').empty();
  for(i=0;i<data.length;i++){
    $('#account_list').append( "<li><a onclick = aRegion(" + data[i].name + ")>" + data[i].name + "</a></li>");
  }
}  
	
function  setRegion(item){
  $("#region").attr("value",item);
}

function aRegion(item) {
  $('#pref_region').attr("value",item);
}

function accountCheck() {
  var name =  $('#account_name').val();
  var access_key = $('#access_key').val();
  var secret_access_key = $('#secret_key').val();
  var region = $('#pref_region').val();
  if (name == "" || access_key == "" || secret_access_key == ""  || region == "") {
    
    return 0;

  }else{
  	
  	return 1;

  }
}
	
function createAccount(args) {
  var account = {
    "name" : $('#account_name').val() ,
	"access_key" : $('#access_key').val(),
	"secret_access_key" : $('#secret_key').val(),
	"region" : $('#pref_region').val()		    
  }
			    
  if (accountCheck() == 1) {
    $.ajax({
	  url : "http://54.251.227.64:3000/account/create",
	  type : "post",
	  data : account,
	  success : function(data){
		  location.reload(true)
	  }
	})
  }else{
    alert('No field can be left blank');    
  }
}
    