import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";
import axios from "axios";

const htmlMap = {
    productBlock: (data, index) => {
        return `<div class="product-block">
                    <img class="product-img" src="${!!data ? data.product_pic : ''}">
                    <form method="post" enctype="multipart/form-data">
                        <div class="form">
                            <div class="text">
                                產品名稱：
                                <input id="productname" value="${!!data ? data.productname : ''}">
                            </div>
                            <div class="text">形狀：
                                <input id="traits" value="${!!data ? data.traits : ''}"</input>
                            </div>
                            <div class="text">尺寸：
                                <input id="size" value="${!!data ? data.size: ''}">
                            </div>
                            <div class="fileBlock">
                                <div class="text">產品圖：</div>
                                <div class="choose">
                                    <label for="product_pic_${!!index ? index : 'create'}">選擇檔案</label>
                                    <input type="file" name="img" class="product_pic" id="product_pic_${!!index ? index : 'create'}">
                                    <input type="text" name="img_path" class="product_pic_path" id="product_pic_path" value="${!!data ? data.product_pic : ''}">
                                </div>
                            </div>
                            <div class="fileBlock">
                                <div class="text">規格圖：</div>
                                <div class="choose">
                                    <label for="spec_pic_${!!index ? index : 'create'}">選擇檔案</label>
                                    <input type="file" name="img_spec" class="spec_pic" id="spec_pic_${!!index ? index : 'create'}">
                                    <input type="text" name="img_spec_path" class="img_spec_path" id="img_spec_path" value="${!!data ? data.spec_pic : ''}">
                                </div>
                            </div>
                            <div class="text">優先序：
                                <input id="priority" value="${!!data ? data.priority : ''}">
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
        spec_pic: '/image/square_1.png'
    },
    {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '70*70',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '80*80',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '60cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/square_1.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '70cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '圓形',
        size: '80cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '60x60cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '70x70cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_1.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '80x80cm∮',
        spec_pic: '產品規格圖'
    }, {
        product_pic: '/image/circle_2.png',
        productname: '自設污水蓋',
        traits: '圓型',
        size: '60cm∮',
        spec_pic: '產品規格圖'
    },
];


const productRender = ($container, productData) => {
    $container.empty();
    productData.forEach((data, index) => {
        let $productBlock = $(htmlMap.productBlock(data, index+=2));
        let $productImgButton = $productBlock.find('.product_pic');
        let $specImgButton = $productBlock.find('.spec_pic');
        let $submit = $productBlock.find('#submit');
        let $delete = $productBlock.find('#delete');

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

// 新增
const bindCreateEvent = ($container) => {
    $("#create").on('click', ()=>{
        let $newProductBlock = $(htmlMap.productBlock());
        let $sentButton = $(`<input id="add" value='新增' type="button">`);
        let $productImgButton = $newProductBlock.find('#product_pic_create');
        let $specImgButton = $newProductBlock.find('#spec_pic_create');

        $newProductBlock.find('#submit').remove();
        $newProductBlock.find('#delete').remove();



        $productImgButton.change(picUpload);
        $specImgButton.change(picUpload);

        $sentButton.on('click', async ()=>{
            let $productname = $newProductBlock.find("#productname");
            let $traits = $newProductBlock.find("#traits");
            let $size = $newProductBlock.find("#size");
            let $product_pic = $newProductBlock.find("#product_pic_path");
            let $spec_pic = $newProductBlock.find("#img_spec_path");
            let $priority = $newProductBlock.find("#priority");
            let newProductData = {
                productname: $productname.val(),
                traits: $traits.val(),
                size: $size.val(),
                product_pic: $product_pic.val(),
                spec_pic: $spec_pic.val(),
                priority: $priority.val()
            };
            await createProductData(newProductData);
        });

        $newProductBlock.find('.buttonBlock').append($sentButton);
        $container.append($newProductBlock);
    });
};
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
const createProductData = async (data) => {
    let apiUrl = "/api/product";
    await axios.post(apiUrl, data)
        .then( async (result)=>{
            if(result.data){
                alert("新增成功");
                await reRenderProduct();
            } else {
                alert("新增失敗");
            }
        })
        .catch((error)=>{
            console.log(error)
        });
}

// 上傳圖片
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
    bindCreateEvent($('.product-container'));
});