$(document).ready(function() {
    var pageItem = $(".pagination li").not(".prev,.next");
    var prev = $(".pagination li.prev");
    var next = $(".pagination li.next");
  
    pageItem.click(function() {
      pageItem.removeClass("active");
      $(this).not(".prev,.next").addClass("active");
    });
  
    next.click(function() {
      $('li.active').removeClass('active').next().addClass('active');
    });
  
    prev.click(function() {
      $('li.active').removeClass('active').prev().addClass('active');
    });
  
  });
  $(document).ready(function () {
    $('#dtBasicExample').DataTable({
      "paging": false // false to disable pagination (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');
  });