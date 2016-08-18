$(function() {
    $('#details').empty();
    var $details = $('#details');
    var $friendData = $('#friendData');
    var $name = $('#inputName');
    var $age = $('#inputAge');
    var $eyeColor = $('#inputeyeColor');
    var $address = $('#inputeyeAddress');
    var $gender = $('#inputGender');
    var $email = $('#inputEmail');
    var $phone = $('#inputPhone');
    var $DOB = $('#DOB');
    var $picture = $('#inputImg');
    var startpoint = 0;
     var mvTital;
 


    $('#datetimepicker1').datetimepicker();
    $("#imgLode").fileinput({ showCaption: false });
    $('#updateDatetimepicker').datetimepicker();

    // viewAll
    allCall();

    $('#viewAll').on('click', function() {
        allCall();
    });

    function allCall() {
          $('#details').empty();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/friends?start=' + startpoint + '&_limit=50',
            success: function(details) {
                $.each(details, function(i, detail) {
                    addDetails(detail);
                });

            }
        });
    }
    //total data
    function yScroller() {
        mvTital = $("#searchBox").val();
        var wrap = document.getElementById('wraper');
      //   console.log(mvTital);
        var contentHeight = wrap.offsetHeight;
        var yoffset = window.pageYOffset;
        var y = yoffset + window.innerHeight;
        //  console.log(contentHeight+","+yoffset+","+y);
        if (y >= contentHeight) {
            // console.log("scrole enter");
            //http://localhost:8080/friends?q=female&_start=0&_limit=12
            startpoint = startpoint + 12;
            $.ajax({

                type: 'GET',
                url: 'http://localhost:8080/friends?q=' + mvTital + '&_start=' + startpoint + '&_limit=50',
                success: function(details) {
                    $.each(details, function(i, detail) {
                        addDetails(detail);
                    });
                }
            });


        }
    }
    window.onscroll = yScroller;
    // search -butten

    $('#search-btn').on('click', function() {
        mvTital = $("#searchBox").val();
        $('#details').empty();
           //   console.log(mvTital);
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/friends?q=' +mvTital+ '&_limit=12',
            success: function(details) {
                $.each(details, function(i, detail) {
                    addDetails(detail);
                });
            }
        });
    });

    // table creation
    function addDetails(detail) {
        var DetTemplate = $('#details-template').html();
        $details.append(Mustache.render(DetTemplate, detail));

    }
    //adding   
    $('#addForm').on('submit', function() {
        console.log("Adding");
        var friendDetail = {
            name: $name.val(),
            age: $age.val(),
            eyeColor: $eyeColor.val(),
            address: $address.val(),
            gender: $gender.val(),
            email: $email.val(),
            phone: $phone.val(),
            DOB: $DOB.val(),
            picture: $picture.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/friends',
            data: friendDetail,
            success: function(newdetail) {
                addDetails(newdetail);
            }
        });

    });
    //delete
    $details.delegate('.delete', 'click', function() {
        var $tr = $(this).closest('tr');

        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/friends/' + $(this).attr('data-id'),
            success: function() {
                $tr.fadeOut(300, function() {
                    $(this).remove();
                });
            }
        });
    });
    //li creation
    function ShowDetails(details) {
        $('#friendData').empty();
        var showTemplate = $('#showTemplate').html();
        // console.log(Mustache.render(showTemplate, details));
        $('#friendData').append(Mustache.render(showTemplate, details));

    }

    $details.delegate('.showWindow', 'click', function() {
        console.log();
        var $tr = $(this).closest('tr');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/friends/' + $(this).attr('data-id'),
            success: function(details) {

                ShowDetails(details);
            }
        });
    });


    //update window
    function upateDetails(details) {
        // console.log(details);
        $('#updateTemplateContainer').empty();
        var updateTemplate = $('#updateTemplate').html();
        // console.log(Mustache.render(updateTemplate, details));
        $('#updateTemplateContainer').append(Mustache.render(updateTemplate, details));

    }

    $('#details').delegate('.update', 'click', function() {
        console.log();
        var $tr = $(this).closest('tr');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/friends/' + $(this).attr('data-id'),
            success: function(details) {

                upateDetails(details);
            }
        });
    });
    //Udate data   
    $details.delegate('#SaveUpdate', 'click', function() {
        // console.log("enter in update ");
        // console.log($name + "," + $age + "," + $eyeColor + "," + $address + "," + $gender + "," + $email + "," +
        //   $phone + "," + $DOB + "," + $picture + "," + $(this).attr('data-id'));
        var friendDetail = {
            name: $('#updateName').val(),
            age: $('#updateAge').val(),
            eyeColor: $('#updateEyeColor').val(),
            address: $('#updateAddress').val(),
            gender: $('#updateGender').val(),
            email: $('#updateEmail').val(),
            phone: $('#updatePhone').val(),
            DOB: $('#updateDOB').val(),
            picture: $('#updateImg').val(),
        };
        $.ajax({
            type: 'PUT',
            url: 'http://localhost:8080/friends/' + $(this).attr('data-id'),
            data: friendDetail,
            success: function() {
                alert("Data update");
            }
        });

    });
});
