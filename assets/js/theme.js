


if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}



 var validTab = false;


$(document).ready(function(){

    $("footer").append('<div class=container><div class=row><div class=col-sm-3><a href=./index.html class=footer-logo><img src=./assets/img/logo.png></a><p class=footer-content>People , Partnership and Passion are the heart of our success and drive everything we do .</div><div class=col-sm-3><h5>Menu</h5><ul><li><a href=./about-us.html>Who we are </a><li><a href=./services.html>What we do </a><li><a href=./register.html>Register</a><li><a href=./newsletter.html>Newsletter</a><li><a href=./contact-us.html>contact Us</a></ul></div><div class=col-sm-3><h5>Support</h5><ul><li><a href=#>FAQ</a><li><a href=#>Help desk</a><li><a href=#>Forums</a></ul></div><div class="col-sm-3 contactus"><h5>Contact Us</h5><ul><div><i aria-hidden=true class="fa fa-map-marker"></i><div class=footer-contact-info>3 Newbridge Square, Swindon, England,SN11HN.</div></div><div><i aria-hidden=true class="fa fa-phone"></i><div class=footer-contact-info><a href=tel:+13239134688 class=formingHrefTel>+1 323-913-4688</a>, <a href=tel:+13238884554 class=formingHrefTel>+1 323-888-4554</a></div></div><div><i aria-hidden=true class="fa fa-envelope"></i><div class=footer-contact-info><a href=mailto:callback@spectrumithubindia.com>callback@spectrumithubindia.com</a></div></div></ul><div class=social-icons><ul><li><a href="https://www.facebook.com/westgate.it.hub?mibextid=LQQJ4d"><i aria-hidden=true class="fa fa-facebook"></i></a><li><a href=""><i aria-hidden=true class="fa fa-twitter"></i></a><li><a href="https://www.linkedin.com/in/west-gate-it-hub-8ab215257"><i aria-hidden=true class="fa fa-linkedin"></i></a><li><a href="https://instagram.com/westgate_it_hub?igshid=YmMyMTA2M2Y="><i aria-hidden=true class="fa fa-instagram"></i></a></ul></div></div></div></div><div class=footer-copyright><p>© 2022 WestGate IT Hub</div>');

    $('.button-holder input[type="radio"]').click(function(){
    	var demovalue = $(this).val(); 
        $(".hideThis").hide();
        $("#show"+demovalue).show();
        
    });
    checkButtons();
  });



  

  var currentTab = 0;
document.addEventListener("DOMContentLoaded", function(event) {

 
            showTab(currentTab);
            
});

            function showTab(n) {
              var x = document.getElementsByClassName("tab");
              x[n].style.display = "block";
              
              if (n == 0) {
                document.getElementById("prevBtn").style.display = "none";
              } else {
                document.getElementById("prevBtn").style.display = "inline";
              }
              if (n == (x.length - 1)) {
                document.getElementById("nextBtn").innerHTML = "Submit";
              } else {
                document.getElementById("nextBtn").innerHTML = "Next";
              }
              fixStepIndicator(n)
            }
            function ShowMessage(){
              var countMe = 0;
              var getEmailOne2 = $('#exampleInputEmailjob').val();
       
               var validEmail2 = isEmail(getEmailOne2);
               var getAllInput = $("#formReg input");
               for(var i = 0;i<getAllInput.length-1;i++)
               {
                    var newData = $(getAllInput[i]).val();
                    if(newData != "")
                    {
                      countMe ++;
                    }
                 
               }
               if(validEmail2 == true)
               {
                
                 $('#exampleInputEmailjob').removeClass('wrong-border');
               }
               else{
                 validTab = false;
                 
                 $('#exampleInputEmailjob').addClass('wrong-border');
                 $('.error-div1 p').text('Please Enter Valid Email ID');
                 }
     
               if(countMe < getAllInput.length && $('#FormControlFile1').val() != "" && validEmail2 == true && $("#textarea#story").val() != "")
               {
                validTab = true;
                $('.error-div1').hide();
               } 
               if(validEmail2 != true){
                $('.error-div1').show();
                $('.error-div1 p').text('Please Enter Valid details');
              } 
                 
              if (validTab == true){
                document.getElementById("text-message1").style.display = "block"; 
                $('.hiddingThis').hide();
              }

                
            }
            function nextPrev(n) {
              if(n==1){
                validateFormDetails();
              }
              var x = document.getElementsByClassName("tab");
              if (n == 1  && !validateForm() ) return false;
              if(validTab == true){
              x[currentTab].style.display = "none";
              currentTab = currentTab + n;
              if (currentTab >= x.length) {
                 document.getElementById("nextprevious").style.display = "none";
                document.getElementById("all-steps").style.display = "none";
                document.getElementById("register").style.display = "none";
                 document.getElementById("text-message").style.display = "block";
               }
            }
              showTab(currentTab);
            }
           function validateForm() {
              var x, y, i, valid = true;
              x = document.getElementsByClassName("tab");
              y = x[currentTab].getElementsByTagName("input");
              for (i = 0; i < y.length; i++) {
                if (y[i].value == "") {
                  y[i].className += " invalid";
                  valid = false;
                }
              }
              if (valid) {
                document.getElementsByClassName("step")[currentTab].className += " finish";
              }
              return valid;
            }
            function fixStepIndicator(n) {
              var i, x = document.getElementsByClassName("step");
              for (i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(" active", "");
                
              }
              x[n].className += " active";
             
            }
            function checkButtons(){
       
        $('.accordion-item').each(function() {
          if($('.accordion-body', this).length <= 0) {
           $(this).addClass('className');
           
          }
      });
       }


  function validateFormDetails(){
    $('.tab').each(function()
    {
      if ( $(this).css('display') == 'block')
      {
        var id = $(this).attr('id');
        console.log(id);
      }
      if(id == 1)
      {
        var getEmailOne = $('#exampleInputEmail1').val();
       
        var validEmail = isEmail(getEmailOne);
        if(validEmail == true)
        {
          validTab = true;
          $('.error-div').hide();
          $('#exampleInputEmail1').removeClass('wrong-border');
           $('#exampleInputEmail2').val(getEmailOne);
        

        }
        else{
          validTab = false;
          $('.error-div').show();
          $('#exampleInputEmail1').addClass('wrong-border');
          $('.error-div p').text('Please Enter Valid Email ID');
          }

      }
      if(id == 2)
      {
        var getEmailOne1 = $('#exampleInputEmail2').val();
       var validEmail1 = isEmail(getEmailOne1);
        if(validEmail1 == true)
        {
          validTab = true;
          $('.error-div').hide();
        }
        else{
          validTab = false;
          $('.error-div').show();
          $('#exampleInputEmail2').addClass('wrong-border');
          $('#exampleInputEmail2').removeClass('wrong-border')
          $('.error-div p').text('Please Enter Valid Email ID');
        }
      }
      if(id == 3)
      {
        var counter = 0;
        var data = $('#accordionMaster input[type="checkbox"]:checked').length;
        console.log(data);
        
          if(data > 0) {
            validTab = true;
          $('.error-div').hide();
          }
          else
          {
            validTab = false;
            $('.error-div').show();
            $('.error-div p').text('Please Select atleast one CPV code');
           }
      }
      if( id == 4)
      {
        
          var check = true;
          $(".parent-container input:radio").each(function(){
              var name = $(this).attr("name");
              if($("input:radio[name="+name+"]:checked").length == 0){
                  check = false;
              }
          });
          
          if(check){
            validTab = true;
            $('.error-div').hide();
          }else{
            $('.error-div').show();
            $('.error-div p').text('Please select one option in each question.');
              
              validTab = false;
          }
      
      }
  });
  
    
   
    

  }
            function isEmail(email) {
              var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              return regex.test(email);
            }

           

            $('#phone').keypress(function(e) {  
              var arr = [];  
              var kk = e.which;  
             
              for (i = 48; i < 58; i++)  
                  arr.push(i);  
             
              if (!(arr.indexOf(kk)>=0))  
                  e.preventDefault();  
          });
          $('#phone1').keypress(function(e) {  
            var arr = [];  
            var kk = e.which;  
           
            for (i = 48; i < 58; i++)  
                arr.push(i);  
           
            if (!(arr.indexOf(kk)>=0))  
                e.preventDefault();  
        });    
            
         $('#phone3').keypress(function(e) {  
              var arr = [];  
              var kk = e.which;  
             
              for (i = 48; i < 58; i++)  
                  arr.push(i);  
             
              if (!(arr.indexOf(kk)>=0))  
                  e.preventDefault();  
          });
        

        var toggle = false;
        $('#headingOneMaster input[type="checkbox"]').click(function() {
                $("#collapseOneMaster input[type=checkbox]").attr("checked",!toggle);
                $("#collapseOneMaster input[type=checkbox]").toggleClass("main");
                toggle = !toggle;
        }); 
        var toggle1 = false;
        $('#headingTwoMaster input[type="checkbox"]').click(function() {
          $("#collapseTwoMaster input[type=checkbox]").attr("checked",!toggle1);
          $("#collapseTwoMaster input[type=checkbox]").toggleClass("main");
          toggle1 = !toggle1;
  }); 
