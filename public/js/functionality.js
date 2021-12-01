// var profileIdList = ['profile1','profile2','profile3','profile4','profile5']
// var selectedPrfileElements = [];
var profileCount = 0;
var compCount = 0;


function calculateComponents(){
    let targetList = document.querySelector('.add-component-apex-class');
    let targetList2 = document.querySelector('.add-component-custom-object');
    let targetList3 = document.querySelector('.add-component-lwc');
    compCount =  targetList.childElementCount + targetList2.childElementCount + targetList3.childElementCount;
    let chartComponents = document.querySelector('#chart-components');
    chartComponents.innerText = compCount.toString();
    showChart();

}

function updateActiveDeployments(){
    const targetElement = document.querySelector('.get-active');
    let intValue = parseInt(targetElement.innerText);
    intValue++
    targetElement.remove();
    let newEl = document.createElement('div');
    newEl.classList.add('h5','mb-0','font-weight-bold','text-gray-800','get-active');
    newEl.innerText = intValue.toString();
    let parentEl = document.querySelector('.active-deployment-card');
    parentEl.appendChild(newEl);
}

// function setSelectors(){
//     selectedPrfileElements.length = 0;
//     for(let i=0;i<profileIdList.length;i++){
//         selectedPrfileElements.push(document.querySelector(`#${profileIdList[i]}`))
//     }
//     console.log('selectedPrfileElements.length ',selectedPrfileElements.length)
    
//     for(let i=0;i<selectedPrfileElements.length;i++){
//         selectedPrfileElements[i].addEventListener('click', event => {
//             let parentClass = event.target.parentElement.parentElement.getAttribute('class');
//             if(parentClass == 'back-profile'){
//                 console.log('parent element class - ',parentClass);
//                 let var1 = document.createElement('li');
//                 var1.innerText = event.target.innerText;
//                 var1.setAttribute('id',event.target.getAttribute('id'));
//                 var1.setAttribute('data-parentremoveclass',parentClass);
//                 let targetList = document.querySelector('.add-profile');
//                 targetList.appendChild(var1);
//                 //event.target.parentElement.remove();
//                 event.target.remove();
//                 calculateProfiles();
//                 setSelectors();
//             }else{
//                 console.log('Else Parent Class - ',parentClass);
//             }
//           });
//     }
// }

function calculateProfiles(){
    let targetList = document.querySelector('.add-profile');
    profileCount =  targetList.childElementCount;
    let chartProfiles = document.querySelector('#chart-profiles');
    chartProfiles.innerText = profileCount.toString();
    showChart();
} 



// Add Profile
$('body').on('click', '.moveProfile', function() {
    $(this).parent().remove();
    var profile = $(this).attr("profile-data");
    var newList = "<li><span class='moveBackProfile right-list-item' profile-data='" + profile + "'><i class='fas fa-user-tie' ></i>" + profile +  "&ensp; <i class='fas fa-times-circle cusrsor-pointer-class text-danger'></i></span></li>";
    $(".add-profile").append(newList);
    calculateProfiles();

});

// Remove Profile
$('body').on('click', '.moveBackProfile', function() {
    $(this).parent("li").remove();
    var profile_back = $(this).attr("profile-data");
    var backList = "<li class='nav-item hover-none '><span class='profile-list-item moveProfile' profile-data='"+ profile_back+"'><i class='fas fa-user-tie'></i> "+ profile_back+"  </span></li>";
    $(".back-profile").append(backList);
    calculateProfiles();
});

// Add Apex Class
$('body').on('click', '.moveApex', function() {
    $(this).remove();
    var apex = $(this).attr("apex-data");
    var newList = "<li><span class='moveBackApex right-list-item' apex-data='" + apex + "'> " + apex +  "&ensp; <i class='fas fa-times-circle cusrsor-pointer-class text-danger'></i></span></li>";
    $(".add-component-apex-class").append(newList);
    $(".right-apex").css("display","block");
    if($('.back-apex').children().length == 0){
        $(".back-apex").parent().removeClass("show");
        $(".nav-link").addClass("collapsed");
    }
    calculateComponents();
});

// Remove Apex Class
$('body').on('click', '.moveBackApex', function() {
    $(this).parent("li").remove();
    var apex_back = $(this).attr("apex-data");
    var backList = "<span class='collapse-item moveApex right-list-item cusrsor-pointer-class' apex-data='" + apex_back + "'>" + apex_back + "</span>";
    // var backList = "<li class='nav-item hover-none '><span class='profile-list-item moveProfile' profile-data='"+ apex_back+"'><i class='fas fa-user-tie'></i> "+ apex_back+"  </span></li>";
    $(".back-apex").append(backList);
    if ($('ul.add-component-apex-class li').length < 1) {
        $(".right-apex").css("display","none");
    }
    calculateComponents();
});

// Add Lwc
$('body').on('click', '.moveLwc', function() {
    $(this).remove();
    var lwc = $(this).attr("lwc-data");
    var newList = "<li><span class='remove-lwc right-list-item' lwc-data='" + lwc + "'> " + lwc +  "&ensp; <i class='fas fa-times-circle cusrsor-pointer-class text-danger'></i></span></li>";
    $(".add-component-lwc").append(newList);
    $(".right-lwc").css("display","block");
    if($('.lwc-list').children().length == 0){
        $(".lwc-list").parent().removeClass("show");
        $(".nav-link").addClass("collapsed");
    }
    calculateComponents();
});

//Remove Lwc
$('body').on('click', '.remove-lwc', function() {
    $(this).parent("li").remove();
    var lwc = $(this).attr("lwc-data");
    var backList = "<span class='collapse-item moveLwc cusrsor-pointer-class' lwc-data='" + lwc + "'>" + lwc + "</span>";
    // var backList = "<li class='nav-item hover-none '><span class='profile-list-item moveProfile' profile-data='"+ apex_back+"'><i class='fas fa-user-tie'></i> "+ apex_back+"  </span></li>";
    $(".lwc-list").append(backList);
    if ($('ul.add-component-lwc li').length < 1) {
        $(".right-lwc").css("display","none");
    }
    calculateComponents();
});

// Add Custom Object
$('body').on('click', '.moveCustomObject', function() {
    $(this).remove();
    var custom_object_data = $(this).attr("custom-object-data");
    var newList = "<li><span class='remove-custom-object right-list-item' custom-object-data='" + custom_object_data + "'> " + custom_object_data +  "&ensp; <i class='fas fa-times-circle cusrsor-pointer-class text-danger'></i></span></li>";
    $(".add-component-custom-object").append(newList);
    $(".right-custom-object").css("display","block");
    if($('.custom-object-list').children().length == 0){
        $(".custom-object-list").parent().removeClass("show");
        $(".nav-link").addClass("collapsed");
    }
    calculateComponents();
});

//Remove Custom Object
$('body').on('click', '.remove-custom-object', function() {
    $(this).parent("li").remove();
    var custom_object_data = $(this).attr("custom-object-data");
    var backList = "<span class='collapse-item moveCustomObject cusrsor-pointer-class' custom-object-data='" + custom_object_data + "'>" + custom_object_data + "</span>";
    // var backList = "<li class='nav-item hover-none '><span class='profile-list-item moveProfile' profile-data='"+ apex_back+"'><i class='fas fa-user-tie'></i> "+ apex_back+"  </span></li>";
    $(".custom-object-list").append(backList);
    if ($('ul.add-component-custom-object li').length < 1) {
        $(".right-custom-object").css("display","none");
    }
    calculateComponents();
});

//Add Deployment Card
$('body').on('click', '.instant-deploy-item', function() {

    if (($('ul.add-component-apex-class li').length < 1) && ($('ul.add-component-lwc li').length < 1) && ($('ul.add-component-custom-object li').length < 1) && ($('ul.add-profile li').length < 1)){
        alert("Please add any component or profile to deploy");
    }
    else{
        $("#deployment-status-bar").attr("style","width: 1%");
        var element_id = $(this).attr("id");
        var element_name = element_id.split("-")[0];
        $("#deployment-card").css("display","block");
        $("#deployment-card-html").html("Deploying to " + element_name );
        var deployment_status_bar = setInterval(function(){ 
            var deployment_status_style = $("#deployment-status-bar").attr("style");
            var status = parseInt(deployment_status_style.split(": ")[1].split("%")[0]);
            if (status == 100) {
                $("#deployment-card-html").html("<b>Successfully Deployed !!</b>" );
                $("#deployment-status-bar").removeClass("progress-bar-animated");
                $("#deployment-status-bar").removeClass("bg-info");
                $("#deployment-status-bar").removeClass("progress-bar-striped");
                $("#deployment-status-bar").addClass("bg-success");
                $("#deployment_div_1").removeClass("border-left-info");
                $("#deployment_div_1").addClass("border-left-success");
                $("#deployment-card-html").removeClass("text-info");
                $("#deployment-card-html").addClass("text-success");

                clearInterval(deployment_status_bar);
            }else{
                $("#deployment-status-bar").addClass("progress-bar-animated");
                $("#deployment-status-bar").addClass("bg-info");
                $("#deployment-status-bar").addClass("progress-bar-striped");
                $("#deployment-status-bar").removeClass("bg-success");
                $("#deployment_div_1").addClass("border-left-info");
                $("#deployment_div_1").removeClass("border-left-success");
                $("#deployment-card-html").addClass("text-info");
                $("#deployment-card-html").removeClass("text-success");
            }
            status += 1;
            var new_style = "width: " + status + "%";
            $("#deployment-status-bar").attr("style",new_style);
        }, 1000);
        updateActiveDeployments();
    }

});

// Schedule the deployment 

