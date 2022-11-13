
$(document).ready(function(){
    //hide the contact form default
    $('.contact-form').hide();
    //showing the contact form on button click
    $('.contact-form-trigger').click(function(){
        $(this).hide();
        $('.contact-form').show('slow');
    });
    
    $('.more-text').click(function(){
        $('.hidden-text').toggleClass('visited');
        if ($(this).text() == "Show More +")
            $(this).text("- Show Less")
        else
            $(this).text("Show More +");
    });

    $('.navbar-brand').click(function(){
        window.location = 'index.html';   
    })
    $(".content").fancybox();

});

$(window).on('load', function () {
    $('.gallery-item').each(function(i) {
        var height = $(this).children('.content').height();
        console.log(height);
        var all = Math.ceil(height/16);
        var final = all+1;
        console.log(all);
        $(this).css("grid-row-end" , `span ${final}`);
    });
});

function sendEmail(title, email, message) {
    var title= $('#name').val();
    var email= $('#email').val();
    var message= $('#massage').val();
    var body='Name:'+title+ 'Email:'+email+ 'Message:'+message;

    Email.send({
      Host: "smtp.gmail.com",
      Username: "rudrapaul423@gmail.com",
      Password: "vcwawrlmnfigktwq",
      To: 'sankarpaul6789@gmail.com',
      From: "rudrapaul423@gmail.com",
      Subject: "New Massage Form Website",
      Body: body,
    })
    .then(function (message) {
        alert("mail sent successfully");
    });
    console.log(body);
};


