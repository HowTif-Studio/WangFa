import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

$(window).on('load', function () {
    header();
    footer();
    init();
});


    //宣告預設表單內容為空
    var initSubject = '', initBody = '';

    //按下傳送按鈕後執行
    function sentEmail() {
        var to = "wang.fa@msa.hinet.net"; // 寫死的傳送對象
        var name = name_input.value; // 讀取 ID 物件中的值
        var email = email_input.value;
        var tel = phone_input.value;
        var subject = "王發機械：問題詢問";

//把資料都塞到 mail body 中
        var body = "" + content_input.value + '%0A%0A%0A';//%0A是換行 換了三行
        body += "From：" + name_input.value + '%0A';
        body += "Email：" + email_input.value + '%0A';
        body += "Tel：" + phone_input.value;
//傳送的主要程式碼
        mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
        mailTo.click();
    }

    //onload
    function init() {
        subText.value = initSubject;
        toText.value = initTo;
        bodyText.value = initBody;
    }

