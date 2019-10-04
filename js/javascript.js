function readURL(input, imgId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if(imgId == "companyLogo"){
                $('#' + imgId)
                .attr('src', e.target.result)
                .width(250)
                .height(250);
            }else{
                $('#' + imgId)
                .attr('src', e.target.result)
                .width(500)
                .height(500);
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="user_name">Name</label> <div class="col-md-5"> <input id="user_name" name="user_name" type="text" placeholder="" class="form-control input-md"> </div></div> <!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="user_email">Email</label> <div class="col-md-5"> <input id="user_email" name="user_email" type="text" placeholder="" class="form-control input-md"> </div></div> <!-- File Button --> <div class="form-group"> <label class="col-md-4 control-label" for="user_picture">Member Photo</label> <div class="col-md-4"> <input id="user_picture" name="user_picture" class="input-file" type="file"> </div></div></div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });

});


function downloadContent(name, content) {
    var atag = document.createElement("a");
    var file = new Blob([""], {type: 'image/png'});
    atag.href = URL.createObjectURL(file);
    atag.download = name;
    atag.click();
  }