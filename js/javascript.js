var globalInformation = {
    projectName: "",
    oneLineProjectDesc : "",
    teamLogo : "",
    abstract : "",
    screenshot1: "",
    screenshot2: "",
    teamMemberPhotos: {},
    teamMemberNames: [],
    teamMemberEmails: [],
    advisor: "",
    advisorImage: "",
    advisorEmail: "",
    stakeholder: "",
    stakeholderName: "",
    stakeholderEmail: ""
}

function readURL(input, imgId) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var img = new Image();


        reader.onload = function (e) {
            img.src = e.target.result;
            img.onload = function() {
                if(img.naturalWidth == 500 && img.naturalHeight == 500){
                    if(imgId == "teamLogo"){
                        $('#' + imgId)
                        .attr('src', e.target.result)
                        .width(500)
                        .height(500);
        
                        globalInformation.teamLogo = e.target.result;
                    }else if(imgId == "screenshot1" || imgId == "screenshot2"){
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
                    else if(imgId == "stakeholder_picture"){
                        $('#' + imgId)
                        .attr('src', e.target.result)
                        .width(250)
                        .height(250);
        
                        globalInformation.stakeholder = e.target.result;
                    }else{
                        $('#' + imgId)
                        .attr('src', e.target.result)
                        .width(250)
                        .height(250);
        
                        globalInformation.teamMemberPhotos[imgId] = e.target.result
                    }
                }else{
                    console.log(img.naturalWidth)
                    console.log(img.naturalHeight)
                    alert("Please make sure your image size is 500px x 500px")
                
                }
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
        
        var newIn = '<div id="field'+ next +'" name="field'+ next +'"><div class=container><div class=row><div class=col style=margin-top:10%><div class=form-group><label class="control-label col-md-4"for=user_name'+ next +'">Name</label><div class=col-md-5><input class="form-control input-md"id=user_name'+ next +'" name=user_name'+ next +'" placeholder="Jane Smith"></div></div><div class=form-group><label class="control-label col-md-4"for=user_email'+ next +'">Email</label><div class=col-md-5><input class="form-control input-md"id=user_email'+ next +'" name=user_email'+ next +'" placeholder=Jane@Smith.com></div></div></div><div class=col><label class="float-left control-label" for=user_picture'+ next +'">Member Photo (Required: 500px x 500px)</label> <img alt="..." name="user_picture'+ next +'" class="float-left rounded" id="user_picture'+ next +'" src="./img/avataaars.svg" style="width:250px;height:250px;margin-top:3%;margin-bottom:3%"> <input type="file" accept=.png,.jpg,.jpeg class=form-control-file onchange=\"readURL(this, \'user_picture'+ next +'\')\"></div>'
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

$(document).ready(function () {
    var next = 0;
    $("#add-more-stakeholder").click(function(e){
        e.preventDefault();
        var addto = "#stakeholder_field" + next;
        var addRemove = "#stakeholder_field" + (next);
        next = next + 1;
        
        // var newIn = '<div id="field'+ next +'" name="field'+ next +'"><div class=container><div class=row><div class=col style=margin-top:10%><div class=form-group><label class="control-label col-md-4"for=user_name'+ next +'">Name</label><div class=col-md-5><input class="form-control input-md"id=user_name'+ next +'" name=user_name'+ next +'" placeholder="Jane Smith"></div></div><div class=form-group><label class="control-label col-md-4"for=user_email'+ next +'">Email</label><div class=col-md-5><input class="form-control input-md"id=user_email'+ next +'" name=user_email'+ next +'" placeholder=Jane@Smith.com></div></div></div><div class=col><label class="float-left control-label" for=user_picture'+ next +'">Member Photo (Required: 500px x 500px)</label> <img alt="..." name="user_picture'+ next +'" class="float-left rounded" id="user_picture'+ next +'" src="./img/avataaars.svg" style="width:250px;height:250px;margin-top:3%;margin-bottom:3%"> <input type="file" accept=.png,.jpg,.jpeg class=form-control-file onchange=\"readURL(this, \'user_picture'+ next +'\')\"></div>'
        var newIn = '<div id="stakeholder_field'+ next +'" name="stakeholder_field'+ next +'"><div class=container><div class=row><div class=col style=margin-top:10%><div class=form-group><label class="control-label col-md-4"for=stakeholder_name'+ next +'">Name</label><div class=col-md-5><input class="form-control input-md"id=stakeholder_name'+ next +'" name=stakeholder_name'+ next +'" placeholder="Jane Smith"></div></div><div class=form-group><label class="control-label col-md-4"for=stakeholder_email'+ next +'">Email</label><div class=col-md-5><input class="form-control input-md"id=stakeholder_email'+ next +'" name=stakeholder_email'+ next +'" placeholder=Jane@Smith.com></div></div></div><div class=col><label class="float-left control-label" for=stakeholder_picture'+ next +'">Stakeholder Photo (Required: 500px x 500px)</label> <img alt="..." name="stakeholder_picture'+ next +'" class="float-left rounded" id="stakeholder_picture'+ next +'" src="./img/avataaars.svg" style="width:250px;height:250px;margin-top:3%;margin-bottom:3%"> <input type="file" accept=.png,.jpg,.jpeg class=form-control-file onchange=\"readURL(this, \'stakeholder_picture'+ next +'\')\"></div>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >Remove</button></div></div><div id="stakeholder_field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#stakeholder_field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#stakeholder_field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });

});

function downloadContent(name, content) {
    var atag = document.createElement("a");
    var file = new Blob([content], {type: 'text/plain'});
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

    // validate stakeholder information
    var stakeholderName = document.getElementById("stakeholder_name").value;
    if(stakeholderName == ""){
        alert("Please enter Stakeholder Name!")
        validForm=false;
    }else{
        globalInformation.stakeholderName = stakeholderName;
    }

    var stakeholderEmail = document.getElementById("stakeholder_email").value;
    // if(ValidateEmail(stakeholderEmail)){
        globalInformation.stakeholderEmail = stakeholderEmail;
    // }else{
    //     alert("Please enter a valid Stakeholder Email!")
    //     validForm = false;
    // }

    // validate Images
    // logo
    // var logo_x = document.getElementById("teamLogo").naturalWidth;
    // var logo_y = document.getElementById("teamLogo").naturalHeight;
    // if(logo_x != 500 && logo_y != 500){
    //     // console.log(logo_x, logo_y)
    //     alert("Your Logo is: " + logo_x + " x " +logo_y + ". Please make sure Logo is 500px by 500px exactly!")
    //     validForm=false;
    // }

    //screenshot1
    // var screenshot1_x = document.getElementById("screenshot1").naturalWidth;
    // var screenshot1_y = document.getElementById("screenshot1").naturalHeight;
    // if(screenshot1_x != 500 && screenshot1_y != 500){
    //     // console.log(screenshot1_x, screenshot1_y)
    //     alert("Your Screenshot 1 is: " + screenshot1_x + " x " + screenshot1_y + ". Please make sure Screenshot 1 is 500px by 500px exactly!")
    //     validForm=false;
    // }

    //screenshot2
    // var screenshot2_x = document.getElementById("screenshot2").naturalWidth;
    // var screenshot2_y = document.getElementById("screenshot2").naturalHeight;
    // if(screenshot2_x != 500 && screenshot2_y != 500){
    //     // console.log(screenshot2_x, screenshot2_y)
    //     alert("Your Screenshot 2 is: " + screenshot2_x + " x " +screenshot2_y + ". Please make sure Screenshot 2 is 500px by 500px exactly!")
    //     validForm=false;
    // }
    return validForm;
}

function getUserAttributes(){
        // Error bool
        var userAttributeErrorFound = false;

        // Get user names
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
    
        // Get user emails
        var userEmailInput = $( "input[name*='user_email']" );
        var userEmails = [];
        for(var i=0; i<userEmailInput.length; i++){
            // console.log(userEmailInput[i].value)
            if(userEmailInput[i].value == ""){
                userAttributeErrorFound = true;
            }else{

                // if(ValidateEmail(userEmailInput[i])){
                    userEmails.push(userEmailInput[i].value) 
                // }else{
                //     var memberNum = i +1;
                //     alert("Email for member " + memberNum + " is formatted incorrectly");
                //     userAttributeErrorFound = true;
                // }

            }
        }

        // validate user pictures
        // var userPictureInput = $( "img[name*='user_picture']" );
        // for(var i=0; i<userPictureInput.length; i++){
        //     if(userPictureInput[i].naturalHeight != 500 || userPictureInput[i].naturalWidth != 500){
        //         userAttributeErrorFound = true
        //         alert("Your " + userPictureInput[i].id + " is: " + userPictureInput[i].naturalHeight + " x " + userPictureInput[i].naturalWidth + ". Please make sure " + userPictureInput[i].id +" is 500px by 500px exactly!")
        //     }
        // }


        if(userAttributeErrorFound == true){
            // alert("Please make sure all member names and emails are filled out!")
            return("error");
        }else{
            // setting global variables
            globalInformation.teamMemberNames = userNames;
            globalInformation.teamMemberEmails = userEmails;
        }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

function createWebsiteTemplate(){

    // Create team section of website
    varFinalMemberSection="";
    for(var i=0; i< globalInformation.teamMemberNames.length; i++){
        var pic = 'user_picture' + i;
        console.log(pic)
        console.log(globalInformation.teamMemberPhotos[pic])
        var teamMemberInfo = '<div class="row"> <div class="col"> <img id="user_picture'+i+'" name="user_picture'+i+'" src="'+globalInformation.teamMemberPhotos[pic]+'" class="rounded float-left" alt="..." style="width: 250px; height: 250px; margin-top: 3%; margin-bottom: 3%"> </div><div class="col" style="margin-top: 10%"> <div class="form-group"> <label class="col-md-4 control-label" for="user_name0">Name:' + globalInformation.teamMemberNames[i] + '</label> </div><div class="form-group"> <label class="col-md-4 control-label" for="user_email0">Email: ' + globalInformation.teamMemberEmails[i] + '</label> </div></div></div>'
        varFinalMemberSection = varFinalMemberSection + teamMemberInfo;
    }

    // Create advisor section
    if(globalInformation.advisor == "salvage"){
        var name = "Prof. Jeff Salvage";
        var AdvisorTemplate = ' <div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3>Behind The Scenes</h3> <div class="row"> <div class="col" ><h5>Advisor</h5> <h6>'+name+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.advisorImage+'"> </label> </div><div class="col"> <h5>Stakeholder</h5> <h6>'+globalInformation.stakeholderName+'</h6> <h6>'+globalInformation.stakeholderEmail+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.stakeholder+'"> </label> </div></div></div></div>';

    }else if(globalInformation.advisor == "gupta"){
        var name = "Adit Gupta";
        var AdvisorTemplate = ' <div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3>Behind The Scenes</h3> <div class="row"> <div class="col" ><h5>Advisor</h5> <h6>'+name+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.advisorImage+'"> </label> </div><div class="col"> <h5>Stakeholder</h5> <h6>'+globalInformation.stakeholderName+'</h6> <h6>'+globalInformation.stakeholderEmail+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.stakeholder+'"> </label> </div></div></div></div>';

    }else if(globalInformation.advisor == "vokolos"){
        var name = "Dr. Filippos Vokolos";
        var AdvisorTemplate = ' <div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3>Behind The Scenes</h3> <div class="row"> <div class="col" ><h5>Advisor</h5> <h6>'+name+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.advisorImage+'"> </label> </div><div class="col"> <h5>Stakeholder</h5> <h6>'+globalInformation.stakeholderName+'</h6> <h6>'+globalInformation.stakeholderEmail+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.stakeholder+'"> </label> </div></div></div></div>';

    }else if(globalInformation.advisor == "weber"){
        var name = "Dr. Rosina Weber";
        var AdvisorTemplate = ' <div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3>Behind The Scenes</h3> <div class="row"> <div class="col" ><h5>Advisor</h5> <h6>'+name+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.advisorImage+'"> </label> </div><div class="col"> <h5>Stakeholder</h5> <h6>'+globalInformation.stakeholderName+'</h6> <h6>'+globalInformation.stakeholderEmail+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.stakeholder+'"> </label> </div></div></div></div>';

    }else if(globalInformation.advisor == "hislop"){
        var name = "Dr. Gregory Hislop";
        var AdvisorTemplate = ' <div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3>Behind The Scenes</h3> <div class="row"> <div class="col" ><h5>Advisor</h5> <h6>'+name+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.advisorImage+'"> </label> </div><div class="col"> <h5>Stakeholder</h5> <h6>'+globalInformation.stakeholderName+'</h6> <h6>'+globalInformation.stakeholderEmail+'</h6> <label> <img style="width: 250px; height:250px" src="'+globalInformation.stakeholder+'"> </label> </div></div></div></div>';
    }

    var htmlTemplate ='<!DOCTYPE html><html lang="en"><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <meta name="description" content=""> <meta name="author" content=""> <title>CCI Senior Design</title> <style>pre{overflow-x:auto;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}</style> <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"> <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous"/> <link href="https://gitcdn.link/repo/BlackrockDigital/startbootstrap-freelancer/master/css/freelancer.min.css" rel="stylesheet"></head><body id="page-top"> <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav"> <div class="container"> <a class="navbar-brand js-scroll-trigger" href="#page-top">Senior Design 2019</a> <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> Menu <i class="fas fa-bars"></i> </button><!-- <div class="collapse navbar-collapse" id="navbarResponsive"> <ul class="navbar-nav ml-auto"> <li class="nav-item mx-0 mx-lg-1"> <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Make Team Site</a> </li></ul> </div>--> </div></nav> <header class="masthead bg-warning text-white text-center"> <div class="container d-flex align-items-center flex-column"> <img class="masthead-avatar mb-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Drexel_Dragons_logo.svg/1200px-Drexel_Dragons_logo.svg.png" alt=""> <h1 class="masthead-heading text-uppercase mb-0">Drexel University</h1> <div class="divider-custom divider-light"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><p class="masthead-subheading font-weight-light mb-0">College of Computing and Informatics</p></div></header> <section class="page-section portfolio" id="portfolio"> <div class="container"> <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">'+globalInformation.projectName+'</h2> <div class="form-group"> <label for="projectDescription">Project Description</label> <pre>'+globalInformation.oneLineProjectDesc+'</pre> </div><div class="form-row"> <div class="form-group col-md-6"> <label for="exampleFormControlFile1" class="float-left">Team Logo</label> <img id="teamLogo" name="exampleFormControlFile1" src="'+globalInformation.teamLogo+'" class="rounded float-left" alt="..." style="width: 500px; height: 500px; margin-top: 2%; margin-bottom: 5%"> </div></div><div class="form-group"> <label for="abstract">Abstract</label> <pre>'+globalInformation.abstract+'</pre> </div><div class="container"> <div class="row"> <div class="col"> <label for="exampleFormControlFile1" class="float-left">Screenshot 1</label> <img id="screenshot1" src="'+globalInformation.screenshot1+'" class="rounded float-left" alt="..." style="width: 500px; height: 500px; margin-top: 5%; margin-bottom: 5%"> </div><div class="col"> <label for="exampleFormControlFile1" class="float-left">Screenshot 2</label> <img id="screenshot2" src="'+globalInformation.screenshot2+'" class="rounded float-left" alt="..." style="width: 500px; height: 500px; margin-top: 5%; margin-bottom: 5%"> </div></div></div><div class="divider-custom divider-dark"> <div class="divider-custom-line"></div><div class="divider-custom-icon"> <i class="fas fa-star"></i> </div><div class="divider-custom-line"></div></div><div class="col-xs-12"> <div class="col-md-12" > <h3> Team Members</h3> <div class="col-xs-12"> <div class="col-md-12" > <div id="field"> <div class="container">'+varFinalMemberSection+'</div></div></div></div></div></div>'+AdvisorTemplate+'</div></div></div></div></section> <footer class="footer text-center"> <div class="container"> <div class="row"> <div class="col-lg-4 mb-5 mb-lg-0"> </div><div class="col-lg-4 mb-5 mb-lg-0"> <h4 class="text-uppercase mb-4">Drexel University</h4> <p class="lead mb-0">3675 Market Street <br>Philadelphia, PA 19104</p></div><div class="col-lg-4 mb-5 mb-lg-0"> </div></div></div></footer> <section class="copyright py-4 text-center text-white"> <div class="container"> <small>Copyright &copy; CCI Drexel 2019</small> </div></section> <div class="scroll-to-top d-lg-none position-fixed "> <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"> <i class="fa fa-chevron-up"></i> </a> </div><script>!function(t){"use strict";t(\'a.js-scroll-trigger[href*="#"]:not([href="#"])\').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=t(this.hash);if((o=o.length?o:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:o.offset().top-71},1e3,"easeInOutExpo"),!1}}),t(document).scroll(function(){100<t(this).scrollTop()?t(".scroll-to-top").fadeIn():t(".scroll-to-top").fadeOut()}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#mainNav",offset:80});function o(){100<t("#mainNav").offset().top?t("#mainNav").addClass("navbar-shrink"):t("#mainNav").removeClass("navbar-shrink")}o(),t(window).scroll(o),t(function(){t("body").on("input propertychange",".floating-label-form-group",function(o){t(this).toggleClass("floating-label-form-group-with-value",!!t(o.target).val())}).on("focus",".floating-label-form-group",function(){t(this).addClass("floating-label-form-group-with-focus")}).on("blur",".floating-label-form-group",function(){t(this).removeClass("floating-label-form-group-with-focus")})})}(jQuery); (function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})}); </script></body></html>';

    this.downloadContent("index.html",htmlTemplate)

}

function submitForm(){
    //Validate inputs
    if(this.validateInputs()){
        var userAttributes = this.getUserAttributes();
        if(userAttributes == "error"){
            alert("There was an error generating your team website!")
        }else{
            console.log(globalInformation)
            this.createWebsiteTemplate()
            alert("Congratulations! Your site has been created!")
        }
    }
}

function radioClick(advisor){

    if(advisor == "advisor1"){
        document.getElementById("advisor1").checked = true;
        document.getElementById("advisor2").checked = false;
        document.getElementById("advisor3").checked = false;
        document.getElementById("advisor4").checked = false;
        document.getElementById("advisor5").checked = false;

        globalInformation.advisor = "salvage";
        globalInformation.advisorImage = "http://www.cci.drexel.edu/SeniorDesign/images/JeffSalvage.jpg";
    }
    if(advisor == "advisor2"){
        document.getElementById("advisor1").checked = false;
        document.getElementById("advisor2").checked = true;
        document.getElementById("advisor3").checked = false;
        document.getElementById("advisor4").checked = false;
        document.getElementById("advisor5").checked = false;

        globalInformation.advisor = "gupta";
        globalInformation.advisorImage = "http://cci.drexel.edu/seniordesign/2018_2019/VyB/adit.png";

    }
    if(advisor == "advisor3"){
        document.getElementById("advisor1").checked = false;
        document.getElementById("advisor2").checked = false;
        document.getElementById("advisor3").checked = true;
        document.getElementById("advisor4").checked = false;
        document.getElementById("advisor5").checked = false;

        globalInformation.advisor = "vokolos";
        globalInformation.advisorImage = "http://cci.drexel.edu/seniordesign/2018_2019/ASLive/Vokolos.jpg";

    }
    if(advisor == "advisor4"){
        document.getElementById("advisor1").checked = false;
        document.getElementById("advisor2").checked = false;
        document.getElementById("advisor3").checked = false;
        document.getElementById("advisor4").checked = true;
        document.getElementById("advisor5").checked = false;

        globalInformation.advisor = "weber";
        globalInformation.advisorImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIUNMBIuTgt3W8gxARcptBwGFOLZeeJ1U6MG_FL4PRD-ltefy";
    }
    if(advisor == "advisor5"){
        document.getElementById("advisor1").checked = false;
        document.getElementById("advisor2").checked = false;
        document.getElementById("advisor3").checked = false;
        document.getElementById("advisor4").checked = false;
        document.getElementById("advisor5").checked = true;

        globalInformation.advisor = "hislop";
        globalInformation.advisorImage = "https://drexel.edu/~/media/Images/cci/Stories/hislop_700.ashx?h=700&w=700&hash=261110D37BD7E07724F186EDDCE33C31E0B3D75B";

    }
}

function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  //invalid email
    return (false)
}


// Things to do: 
// Advisors --done
// ABsrtact change to longer section - add styling 
// Fix dragon
// Fix no loaded image yet 
// Team members
// Test with Jpeg
// Check for email validation
// check with Jpegs