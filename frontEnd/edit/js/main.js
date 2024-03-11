import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";
import axios from "axios";

const htmlMap = {
    productBlock: (data) => {
        return `<div class="product-block">
                    <img class="product-img" src="${data.product_pic}">
                    <form method="post" enctype="multipart/form-data">
                        <div class="form">
                            <div class="text">
                                產品名稱：
                                <input id="productname" value="${data.productname}"></input>
                            </div>
                            <div class="text">形狀：
                                <input id="traits" value="${data.traits}"</input>
                            </div>
                            <div class="text">尺寸：
                                <input id="size" value="${data.size}"></input>
                            </div>
                            
                            <div class="fileBlock">
                                <label for="productspec_pic">產品圖：</label>
                                <input type="file" name="img_spec" id="productspec_pic">
                            </div>
                            <div class="fileBlock">
                                <label for="product_pic">規格圖：</label>
                                <input type="file" name="img" id="product_pic">
                            </div>
                            <div class="text">優先序：
                                <input id="priority" value="${data.priority}"></input>
                            </div>
                            <div class="buttonBlock">
                                <input class="submit" value='送出' type="button">
                            </div>
                        </div>
                    <from/>        
              </div>`
    }
};

const stateMap = {
    productData: []
}

const mockData = [
    {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '60*60',
        productspec_pic: '/image/square_1.png'
    },
    {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '70*70',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '80*80',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '60cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '70cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '圓形',
        size: '80cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '60x60cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '70x70cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '80x80cm∮',
        productspec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_2.png',
        productname: '自設污水蓋',
        traits: '圓型',
        size: '60cm∮',
        productspec_pic: '產品規格圖'
    },
];

const productRender = ($container, productData) => {
    $container.empty();
    productData.forEach((data) => {
        let $productBlock = $(htmlMap.productBlock(data));
        let $submit = $productBlock.find('.submit');

        $submit.data("id", data.id);
        $submit.on('click', async ()=>{
            let $productname = $productBlock.find("#productname");
            let $traits = $productBlock.find("#traits");
            let $size = $productBlock.find("#size");
            let $product_pic = $productBlock.find("#product_pic");
            let $spec_pic = $productBlock.find("#spec_pic");
            let $priority = $productBlock.find("#priority");
            let updateData = {
                id: data.id,
                productname: $productname.val(),
                traits: $traits.val(),
                size: $size.val(),
                product_pic: $product_pic.val(),
                spec_pic: $spec_pic.val(),
                priority: $priority.val()
            }
            await updateByProductData(updateData);
        });
        $container.append($productBlock);
    });
}

const bindFilterEvent = ($selector) => {
    let $items = $selector.find('.item');
    $items.each((index, item) => {
        $(item).on('click', () => {
            let newData = [];
            $items.removeClass('active');
            if ($(item).hasClass('all')) {
                newData = stateMap.productData;
            } else {
                stateMap.productData.forEach((data) => {
                    if (data.productname.includes($(item).text())) {
                        newData.push(data)
                    }
                });
            }
            $(item).addClass('active');
            productRender($('.product-container'), newData);
        });
    });
}

const getProductData = async ($container) => {
    let apiUri = "/api/product";

    await axios.get(apiUri)
        .then((result)=>{
            stateMap.productData = result.data;
        })
        .catch((error)=>{
            console.log(error);
        });
}


// 取得單一筆資料
const updateByProductData = async (updateData) => {
    let apiUrl = "/api/product";
    await axios.put(apiUrl, updateData)
        .then((result)=>{
            if(result.data == true){
                alert("更新成功");
            } else {
                alert("更新失敗");
            }
        })
        .catch((error)=>{
            console.log(error)
        });

}

// 送出
const sentEvent = ($container) => {
    let apiUri = "/api/product"+id;

    $('input[type=button]').on('click', async() => {

        await axios.put(apiUri)

        .then((result)=>{
            stateMap.productData = result.data;
        })
        .catch((error)=>{
            console.log(error);
            }
        );
    });
}

const bindModalCloseEvent = () => {
    $('.modal').find('.close').on('click', () => {
        $('.modal_container').hide();
    });
}

$(window).on('load', async function () {
    header();
    footer();
    await getProductData();
    productRender($('.product-container'), stateMap.productData);
    bindFilterEvent($('.selector'));
    bindModalCloseEvent();
});


// 上傳
    function picUpload() {
// 創建一個 FormData 物件
        var updateSpec = new FormData();
        var update = new FormData();

        // 向 updateDat 物件中添加鍵值對，鍵為 'file'，值是 input 標籤中選擇的檔案
        updateSpec.append('img_spec', $("#productspec_pic")[0].files[0]);
        update.append('img', $("#product_pic")[0].files[0]);

        var updateSpec = $("#productspec_pic")[0].files[0];
        var update = $("#product_pic")[0].files[0];


    if (updateSpec == null) {
        alert("請選擇圖片");
        return false;
    } else {
        // 使用 AJAX 函式發送 HTTP POST 請求
        $.ajax({
            // 指定請求的目標 URL
            url: "/upload",
            // 指定請求方法為 POST
            type: "POST",
            // 設置請求的數據為 FormData 物件，即所選檔案
            data: myform,
            // 設置為同步請求，等待服務器響應後再執行後續的程式碼
            async: false,
            // 禁止設置請求頭的 Content-Type，由瀏覽器自動設置
            contentType: false,
            // 禁止將數據轉換為查詢字符串，由於我們使用 FormData，因此不需要進行轉換
            processData: false,
            // 定義請求成功後的回調函式，處理服務器的響應數據
            success: function (result) {
                console.log(result);
                // 提示用戶上傳成功
                alert("上傳成功！");
                // 在網頁中展示上傳的圖片
                $("#div_show_img").html("<img id='input_img' src='" + result + "'>");
                // 將上傳的圖片路徑設置到隱藏的 input 標籤中
                $("#imgPath").attr("value", result);
                // 移除上傳圖片區域的顯示
                $("#div_upload").removeClass("show");
            },
            // 定義請求失敗時的回調函式，處理錯誤情況
            error: function (data) {
                // 提示用戶錯誤訊息
                alert("錯誤");
            }
        });
    }
    }