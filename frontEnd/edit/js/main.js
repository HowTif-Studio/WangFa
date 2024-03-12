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
                                <input id="productname" value="${data.productname}">
                            </div>
                            <div class="text">形狀：
                                <input id="traits" value="${data.traits}"</input>
                            </div>
                            <div class="text">尺寸：
                                <input id="size" value="${data.size}">
                            </div>
                            <div class="fileBlock">
                                <div class="text">產品圖：</div>
                                <div class="choose">
                                    <label for="product_pic">選擇檔案</label>
                                    <input type="file" name="img" id="product_pic">
                                    <input type="text" name="img_path" id="product_pic_path" value="${data.product_pic}">
                                </div>
                            </div>
                            <div class="fileBlock">
                                <div class="text">規格圖：</div>
                                <div class="choose">
                                    <label for="spec_pic">選擇檔案</label>
                                    <input type="file" name="img_spec" id="spec_pic">
                                    <input type="text" name="img_spec_path" id="img_spec_path" value="${data.spec_pic}">
                                </div>
                            </div>
                            <div class="text">優先序：
                                <input id="priority" value="${data.priority}">
                            </div>
                            <div class="buttonBlock">
                                <input id="submit" value='送出' type="button">
                                <input id="delete" value='刪除' type="button">
                            </div>
                        </div>
                    <from/>        
              </div>`;
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
        let $productImgButton = $productBlock.find('#product_pic');
        let $specImgButton = $productBlock.find('#spec_pic');
        let $submit = $productBlock.find('#submit');
        let $delete = $productBlock.find('#delete');
        // let $create = $productBlock.find('#create');

        // $productImgButton.on('click', picUpload);
        $productImgButton.change(picUpload);
        $specImgButton.change(picUpload);

        $submit.on('click', async ()=>{
            let $productname = $productBlock.find("#productname");
            let $traits = $productBlock.find("#traits");
            let $size = $productBlock.find("#size");
            let $product_pic = $productBlock.find("#product_pic_path");
            let $spec_pic = $productBlock.find("#img_spec_path");
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

        $delete.on('click', async ()=>{
            await deleteProductData(data.id);
        });

        // $create.on('click', async ()=>{
        //     await createProductData();
        // });

        $container.append($productBlock);

    });
}
// 篩選
const bindFilterEvent = ($selector) => {
    let $items = $selector.find('#submit');
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
// 即時更新
const reRenderProduct = async () =>{
    await getProductData();
    productRender($('.product-container'), stateMap.productData);
}

// 刪除
const  deleteProductData = async (id) => {
    let apiUri = "/api/product/" + id ;

    await axios.delete(apiUri)
        .then( async (result) => {
            if (result.data) {
                alert("刪除成功");
                await reRenderProduct();
            } else {
                alert("刪除失敗");
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

// 取得所有資料
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

// 新增
const createProductData = async () => {
    let apiUrl = "/api/product";
    await axios.post(apiUrl)
        .then((result)=>{
            if(result.data){
                alert("新增成功");
            } else {
                alert("新增失敗");
            }
        })
        .catch((error)=>{
            console.log(error)
        });
}

const picUpload = (e) =>{
    let $this = $(e.target);
    let $filePath = $this.siblings("input[type='text']");
    let fileData = $this[0].files[0];
    if(fileData === null || fileData === undefined){
        alert("尚未上傳圖片");
        return false;
    } else {
        let uploadData = new FormData();
        uploadData.append('file', fileData);
        axios.post("/upload", uploadData).then((result)=>{
            let newFilePath = result.data;
            $filePath.val(newFilePath);
        }).catch((error)=>{
            alert("上傳失敗");
           console.log(error)
        });
    }

};

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
//     function picUpload() {
// // 創建一個 FormData 物件
//         var formData = new FormData();
//         var update = new FormData();
//
//         // 向 updateDat 物件中添加鍵值對，鍵為 'file'，值是 input 標籤中選擇的檔案
//         updateSpec.append('img_spec', $("#productspec_pic")[0].files[0]);
//         update.append('img', $("#product_pic")[0].files[0]);
//
//         var updateSpec = $("#productspec_pic")[0].files[0];
//         var update = $("#product_pic")[0].files[0];
//
//
//     if (updateSpec == null) {
//         alert("請選擇圖片");
//         return false;
//     } else {
//         // 使用 AJAX 函式發送 HTTP POST 請求
//         $.ajax({
//             // 指定請求的目標 URL
//             url: "/upload",
//             // 指定請求方法為 POST
//             type: "POST",
//             // 設置請求的數據為 FormData 物件，即所選檔案
//             data: myform,
//             // 設置為同步請求，等待服務器響應後再執行後續的程式碼
//             async: false,
//             // 禁止設置請求頭的 Content-Type，由瀏覽器自動設置
//             contentType: false,
//             // 禁止將數據轉換為查詢字符串，由於我們使用 FormData，因此不需要進行轉換
//             processData: false,
//             // 定義請求成功後的回調函式，處理服務器的響應數據
//             success: function (result) {
//                 console.log(result);
//                 // 提示用戶上傳成功
//                 alert("上傳成功！");
//                 // 在網頁中展示上傳的圖片
//                 $("#div_show_img").html("<img id='input_img' src='" + result + "'>");
//                 // 將上傳的圖片路徑設置到隱藏的 input 標籤中
//                 $("#imgPath").attr("value", result);
//                 // 移除上傳圖片區域的顯示
//                 $("#div_upload").removeClass("show");
//             },
//             // 定義請求失敗時的回調函式，處理錯誤情況
//             error: function (data) {
//                 // 提示用戶錯誤訊息
//                 alert("錯誤");
//             }
//         });
//     }
//     }