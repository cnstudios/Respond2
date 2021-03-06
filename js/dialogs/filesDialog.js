var filesDialog = {

	dialog: null,

	init:function(){

		filesDialog.dialog = $('#filesDialog');
        
        $('#selectFile li').live('click',function(){
            $(this).parent().find('li').removeClass('selected');
            $(this).addClass('selected');
        });

	},
    
    addFile:function(){
        
        var file = $('#selectFile li.selected a');

        if(file.length==0){
            message.showMessage('error', 'Please select a file');
            return;
        }
        
        var filename = $(file).attr('data-filename');
        
        $('#desc').respondAppend(
			'<div class="file" data-filename="'+filename+'">' +
			editorDefaults.elementMenuNoConfig +
			'<div><i class="in-textbox fa fa-file-o"></i>' +
			'<input type="text" value="' + $('#msg-files-dialog-download').val() + 
			' ' +
			filename + '" spellcheck="false" maxlength="256" placeholder="' +
			$('#msg-files-dialog-desc').val() + '"></div></div>'
        );

        $('#filesDialog').modal('hide'); // show modal
    },

	show:function(){ // shows the dialog
    
        contentModel.updateFiles();
		
	    $('#filesDialog').modal('show'); // show modal
	}

}

$(document).ready(function(){
  filesDialog.init();
});