
$(document).ready(function(){
    //hide the contact form default
    $('.contact-form').hide();
    //showing the contact form on button click
    $('.contact-form-trigger').click(function(){
        $(this).hide();
        $('.contact-form').show('slow');
    });
    $('.close-form').click(function() {
        $('.contact-form').hide();
        $('.contact-form-trigger').show('slow');
    })
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

let contactForm = document.getElementById('contact-form').onsubmit = function() {sendEmail(title, email, message)};

function sendEmail(title, email, message) {

    var title= $('#name').val();
    var email= $('#email').val();
    var message= $('#message').val();
    var phoneNumber = $('#phone-number').val();
    var body='Name: '+title+ '<br>Phone Number: '+phoneNumber+'<br>Email: '+email+ '<br>Message: '+message;

    Email.send({
        SecureToken:"64d22219-762d-495d-8bc3-f01aaf2fccaa",
        Host: "smtp.elasticemail.com",
        Username: "colorshotpm@gmail.com",
        Password: "04B01BD40820F307ECEDB9211DB1303AB161",
        To: 'bonkurockzzz@gmail.com',
        From: "colorshotpm@gmail.com",
        Subject: "New Massage Form Website",
        Body: body,
    })
    .then(function (message) {
        window.location.reload();
        console.log(message);
        alert("mail sent successfully");
    });
    console.log(body);
// Email.send({
//     SecureToken:"64d22219-762d-495d-8bc3-f01aaf2fccaa",
//     Host : "smtp.elasticemail.com",
//     Username : "colorshotpm@gmail.com",
//     Password : "04B01BD40820F307ECEDB9211DB1303AB161",
//     To: 'bonkurockzzz@gmail.com',
//     From: "colorshotpm@gmail.com",
//     Subject: "New message on contact from "+name,
//     Body: body
// }).then(
//     message =>{
//         //console.log (message);
//         if(message=='OK'){
//         alert('Your mail has been send. Thank you for connecting.');
//         }
//         else{
//             console.error (message);
//             alert('There is error at sending message. ')
            
//         }

//     }
// );
};


