$(document).ready(function () {
  $(".text").toggle()
  $("#punchbtn").click(function () {
    $("#punch").toggle()
  })
  $("#ironbtn").click(function () {
    $("#iron").toggle()
  })
  $("#lavobtn").click(function () {
    $("#lavo").toggle()
  })
  $("#prof").click(function () {
    $("#emailBtn").html("Email professional request")
  })
  $("#pers").click(function () {
    $("#emailBtn").html("Email personal request")
  })
  $("#robot").click(function () {
    $("#robotLabel").removeClass("invalid")
    $("#emailBtn").removeAttr("disabled")
  })
  $("#emailBody").keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault()
      $("#emailBtn").focus().click()
    }
  })
  $("#emailBtn").click(function () {
    window.open(
      "mailto:ryan@aol.com?subject=Hello&body=" + $("#emailBody").val(),
      "_blank"
    )
  })
})
