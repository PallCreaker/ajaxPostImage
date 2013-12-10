// 1個目のフォーム
$(function(){
  $("#hogeForm").submit(function(event){
    event.preventDefault();

    var form;
    var fd;
    form = $(this+ ":file");
    // fd = new FormData(form);
    // console.log(form);
    // console.log($form);

    //var file = $('#Image').prop('files');
    //var fr = new FileReader();
    // console.log(fd);
    var file = $('#hogeForm input#Image').val();
    // console.log(file);

    $.ajax({
      type: 'post',
      url: 'ajax.php',
      processData: false,
      contentType: false,
      data: fd,
      dataType: 'json',
      success: function(data){
        // console.log(data);
        $('#res').text(data);
      },
      error : function(jqXHR, textStatus, errorThrown) {
        // console.log(jqXHR);
        // console.log(textStatus);
        // console.log(errorThrown);
      }
    });
    return false;
  });
});

$('#hogeForm').submit(function(){
        return false;
});


// 2個目のフォーム
$(function(){
    // ファイルのアップロード
    $('#submit').click(function() {

    // FormData の作成
    var form = $('#file').file[0];
    var formData = new FormData(form);
    console.log(formData);
    // FormData を送信
    $.ajax({
        url : 'ajax.php',
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'json',
        error: function() {
            console.log('error');
        },
        success: function() {
            console.log('success');
        }
    });
    // false を返してデフォルトの動作をキャンセル
    return false;
    });
});
$('#submit').submit(function(){
        return false;
});

// 対応しているか
if(window.FormData){
  console.log("FormData に対応しています。");
}else{
  console.log("FormData に未対応です。");
}