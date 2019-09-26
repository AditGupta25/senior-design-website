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
    //@naresh action dynamic childs
    var next = 0;
    $("#add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><div id="field0"><div class="form-group"> <label class="col-md-4 control-label" for="action_id">Name</label><div class="col-md-5"> <input id="action_id" name="action_id" type="text" placeholder="" class="form-control input-md"></div></div><div class="form-group"> <label class="col-md-4 control-label" for="action_name">Email</label><div class="col-md-5"> <input id="action_name" name="action_name" type="text" placeholder="" class="form-control input-md"></div></div></div></div>';
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