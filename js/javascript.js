var globalInformation = {
    projectName: "",
    oneLineProjectDesc : "",
    teamLogo : "",
    abstract : "",
    screenshot1: "",
    screenshot2: "",
    teamMemberPhotos: {},
    teamMemberNames: [],
    teamMemberEmails: []

}



function readURL(input, imgId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // console.log(e.target.result)
            if(imgId == "companyLogo"){
                $('#' + imgId)
                .attr('src', e.target.result)
                .width(500)
                .height(500);

                globalInformation.teamLogo = e.target.result;
            }
            if(imgId == "screenshot1" || imgId == "screenshot2"){
                $('#' + imgId)
                .attr('src', e.target.result)
                .width(500)
                .height(500);

                if(imgId == "screenshot1"){
                    globalInformation.screenshot1 = e.target.result;
                }else{
                    globalInformation.screenshot2 = e.target.result;
                }
            }
            else{
                $('#' + imgId)
                .attr('src', e.target.result)
                .width(250)
                .height(250);

                globalInformation.teamMemberPhotos[imgId] = e.target.result
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
        // var newIn = ' <div id="field'+ next +'" name="field'+ next +'"><!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="user_name'+ next +'">Name</label> <div class="col-md-5"> <input id="user_name'+ next +'" name="user_name'+ next +'" type="text" placeholder="Jane Smith" class="form-control input-md"> </div></div> <!-- Text input--><div class="form-group"> <label class="col-md-4 control-label" for="user_email'+ next +'">Email</label> <div class="col-md-5"> <input id="user_email'+ next +'" name="user_email'+ next +'" type="text" placeholder="Jane@Smith.com" class="form-control input-md"> </div></div> <!-- File Button --> <div class="form-group"> <label class="col-md-4 control-label" for="user_picture'+ next +'">Member Photo (Required: 500px x 500px)</label> <div class="col-md-4"> <input id="user_picture'+ next +'" name="user_picture'+ next +'" class="input-file" type="file"> </div></div></div>';
        
        var newIn = '<div id="field'+ next +'" name="field'+ next +'"><div class=container><div class=row><div class=col style=margin-top:10%><div class=form-group><label class="control-label col-md-4"for=user_name'+ next +'">Name</label><div class=col-md-5><input class="form-control input-md"id=user_name'+ next +'" name=user_name'+ next +'" placeholder="Jane Smith"></div></div><div class=form-group><label class="control-label col-md-4"for=user_email'+ next +'">Email</label><div class=col-md-5><input class="form-control input-md"id=user_email'+ next +'" name=user_email'+ next +'" placeholder=Jane@Smith.com></div></div></div><div class=col><label class="float-left control-label"for=user_picture'+ next +'">Member Photo (Required: 500px x 500px)</label> <img alt=... class="float-left rounded" id=user_picture'+ next +'" src="./img/avataaars.svg" style="width:250px;height:250px;margin-top:3%;margin-bottom:3%"> <input type="file" accept=.png,.jpg,.jpeg class=form-control-file onchange=\"readURL(this, \'user_picture'+ next +'\')\"</div>'
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

function validateInputs(){
    //Check Project name
    var validForm = true;

    var projName = document.getElementById("projectName").value;
    if(projName == ""){
        alert("Please enter a Project name!")
        validForm=false;
    }else{
        globalInformation.projectName = projName;
    }

    //Check One line description
    var projectDescription = document.getElementById("projectDescription").value;
    if(projectDescription ==""){
        alert("Please enter a Project description!")
        validForm=false;
    }else{
        globalInformation.oneLineProjectDesc = projectDescription;
    }

    //Check Abstract
    var abstract = document.getElementById("abstract").value;
    if(abstract == ""){
        alert("Please enter a valid Abstract!")
        validForm=false;
    }else{
        globalInformation.abstract = abstract;
    }

    // validate Images
    // logo
    var logo_x = document.getElementById("companyLogo").naturalWidth;
    var logo_y = document.getElementById("companyLogo").naturalHeight;
    if(logo_x != 500 && logo_y != 500){
        console.log(logo_x, logo_y)
        alert("Your Logo is: " + logo_x + " x " +logo_y + ". Please make sure Logo is 500px by 500px exactly!")
        validForm=false;
    }

    //screenshot1
    var screenshot1_x = document.getElementById("screenshot1").naturalWidth;
    var screenshot1_y = document.getElementById("screenshot1").naturalHeight;
    if(screenshot1_x != 500 && screenshot1_y != 500){
        console.log(screenshot1_x, screenshot1_y)
        alert("Your Screenshot 1 is: " + screenshot1_x + " x " + screenshot1_y + ". Please make sure Screenshot 1 is 500px by 500px exactly!")
        validForm=false;
    }

    //screenshot2
    var screenshot2_x = document.getElementById("screenshot2").naturalWidth;
    var screenshot2_y = document.getElementById("screenshot2").naturalHeight;
    if(screenshot2_x != 500 && screenshot2_y != 500){
        console.log(screenshot2_x, screenshot2_y)
        alert("Your Screenshot 2 is: " + screenshot2_x + " x " +screenshot2_y + ". Please make sure Screenshot 2 is 500px by 500px exactly!")
        validForm=false;
    }
    return validForm;
}

function getUserAttributes(){
        var userAttributeErrorFound = false;

        var userNamesInput = $( "input[name*='user_name']" );
        var userNames = [];
        for(var i=0; i<userNamesInput.length; i++){
            // console.log(userNamesInput[i].value)
            if(userNamesInput[i].value == ""){
                userAttributeErrorFound = true;
            }else{
                userNames.push(userNamesInput[i].value) 
            }
        }
    
        var userEmailInput = $( "input[name*='user_email']" );
        var userEmails = [];
        for(var i=0; i<userEmailInput.length; i++){
            // console.log(userEmailInput[i].value)
            if(userEmailInput[i].value == ""){
                userAttributeErrorFound = true;
            }else{
                userEmails.push(userEmailInput[i].value) 
            }
        }

        if(userAttributeErrorFound == false || userEmails.length != userNames.length){
            alert("Please make sure all member names and emails are filled out!")
            return("error");
        }else{
            // setting global variables
            globalInformation.teamMemberNames = userNames;
            globalInformation.teamMemberEmails = userEmails;
        }
}

function submitForm(){
    //Validate inputs
    if(this.validateInputs()){
        var userAttributes = this.getUserAttributes();
        if(userAttributes != "error"){
            console.log("errorreddd")
        }else{
            console.log(globalInformation)
        }
    }

    // var userAttributes = this.getUserAttributes();
    // if(userAttributes != "error"){
    //     console.log("errorreddd")
    // }else{
    //     console.log(globalInformation)
    // }
}



// Things to do still: 
// 1) Validate user images
// 2) See why user image is not coming on image for new users 
// 3) Create basic website template 
// 4) fill in things from global information variable to make website personalized
// 5) download images and html file
// 6) Congratulations you have downloaded all the items, make sure you zip them
