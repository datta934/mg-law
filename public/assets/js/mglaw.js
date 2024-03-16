$(function () {
  let loading = {
    show: function () {
      $("body").append("<div class='main-loading'></div>");
    },
    hide: function () {
      $(".main-loading").remove();
    },
  };

  $(".smooth-link").click(function (e) {
    e.preventDefault();
    let $this = $(this),
      $target = $($this.attr("href"));
    $("html, body").animate({
      scrollTop: $target.offset().top - ($(".main-navbar").outerHeight() - 1),
    });

    return false;
  });

  $(window).scroll(function (e) {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 200) {
      $(".main-navbar").addClass("bg-dark");
    } else {
      $(".main-navbar").removeClass("bg-dark");
    }

    $("section").each(function () {
      if (
        scrollPosition >=
        $(this).offset().top - $(".main-navbar").outerHeight()
      ) {
        $(".smooth-link").parent().removeClass("active");
        $(".smooth-link[href='#" + $(this).attr("id") + "']")
          .parent()
          .addClass("active");
      }
    });
  });

  $("#sendMessageButton").click(function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var emailId = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (name === "" || emailId === "" || phone === "" || message === "") {
      alert("Please fill all details in the form");
    } else {
      window.location.href =
        "mailto:bmukherjee@mukherjeegonzalez.com.mx,fgonzalez@mukherjeegonzalez.com.mx?subject=" +
        subject +
        "&body=Name: " +
        name +
        "%0DEmail: " +
        emailId +
        "%0DPhone: " +
        phone +
        "%0DMessage: " +
        message;
    }
  });
});

$(document).ready(function () {
  var s_round = ".s_round";

  $(s_round).hover(function () {
    $(this).parent(".r_wrap").find(".b_round").toggleClass("b_round_hover");
    return false;
  });

  $(s_round).click(function () {
    // $(this).parentsUntil('.flip-box').find(".flip-box").toggleClass("flipped")
    var flipBox = $(this).parent(".r_wrap").siblings();

    // Toggle the 'flipped' class only for the found 'flip_box'
    flipBox.toggleClass("flipped");
    $(this).addClass("s_round_click");
    $(this).find(".s_arrow").toggleClass("s_arrow_rotate");
    $(this).find(".b_round").toggleClass("b_round_back_hover");
    return false;
  });

  $(s_round).on("transitionend", function () {
    $(this).removeClass("s_round_click");
    $(this).addClass("s_round_back");
    return false;
  });

  if (window.matchMedia("(max-width: 767px)").matches) {
    var scrollPosition = $(this).scrollTop();
    $(".navbar-toggler").click(function () {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark");
      }
      else if ($(".navbar-collapse").hasClass("show") && scrollPosition == 0) {
        console.log(scrollPosition)
        $(".navbar").removeClass("bg-dark");
      }
    });
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);