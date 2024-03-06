import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";



const bindSentEvent= () => {
    $('#sent').on('click', (e)=>{
        console.log('click!!')
        getEmailData();
    });
}

    //按下傳送按鈕後執行
    function getEmailData() {
        let $name_input = $('#name_input');
        let $email_input = $('#email_input');
        let $phone_input = $('#phone_input');
        let $content_input = $('#content_input');
        let $mailTo = $('#mailTo');
        let to = "wang.fa@msa.hinet.net"; // 寫死的傳送對象
        let name = $name_input.val(); // 讀取 ID 物件中的值
        let email = $email_input.val();
        let tel = $phone_input.val();
        let subject = "王發機械：問題詢問";

//把資料都塞到 mail body 中
        let body = "" + $content_input.val() + '%0A%0A%0A';//%0A是換行 換了三行
        body += "From：" + name + '%0A';
        body += "Email：" + email + '%0A';
        body += "Tel：" + tel;
//傳送的主要程式碼
        $mailTo.attr('href', "mailto:" + to + "?subject=" + subject + "&body=" + body);
        $mailTo[0].click();
    }

$(window).on('load', function () {
    header();
    footer();
    bindSentEvent();
});

