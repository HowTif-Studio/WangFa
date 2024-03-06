import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

const htmlMap = {
    productBlock: (data) => {
        return `<div class="product-block">
                    <img class="product-img" src="${data.product_pic}">
                    <div class="product-name">${data.productName}</div>
                    <div class="product-spec">${data.traits} · ${data.size}</div>
                    <button class="product-specImg" data-imgsrc="${data.productspec_pic}">產品規格圖 ></button>
                </div>`
    }
};

const stateMap= {
    productData: []
}

const mockData = [
    {
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '60*60',
        productspec_pic: '/image/square_1.png'
    },
    {
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '70*70',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '80*80',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '60cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/square_1.png',
        productName: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '70cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋',
        traits: '圓形',
        size: '80cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋',
        traits: '方框圓蓋',
        size: '60x60cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋',
        traits: '方框圓蓋',
        size: '70x70cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_1.png',
        productName: '自設污水蓋',
        traits: '方框圓蓋',
        size: '80x80cm∮',
        productspec_pic: '產品規格圖'
    },{
        product_pic:'/image/circle_2.png',
        productName: '自設污水蓋',
        traits: '圓型',
        size: '60cm∮',
        productspec_pic: '產品規格圖'
    },

];

const productRender = ($container, productData) => {
    $container.empty();
    productData.forEach((data)=>{
        let $productBlock = $(htmlMap.productBlock(data));
        let $specImgButton = $productBlock.find('.product-specImg');
        $specImgButton.on('click',()=>{
            console.log(data.productspec_pic);
            let $spec_img = $(`<img src="${data.productspec_pic}">`);
            $('.modal').find('.content').empty();
            $('.modal').find('.content').append($spec_img);
            $('.modal_container').show();
        })
        $container.append($productBlock);
    });
}

const bindFilterEvent = ($selector) => {
    let $items = $selector.find('.item');
    $items.each((index, item)=>{
        $(item).on('click',()=>{
            let newData = [];
            $items.removeClass('active');
            if($(item).hasClass('all')){
               newData = stateMap.productData;
            } else {
                stateMap.productData.forEach((data)=>{
                    if(data.productName.includes($(item).text())){
                        newData.push(data)
                    }
                });
            }
            $(item).addClass('active');
            productRender($('.product-container'), newData);
        });
    });
}

const getProductData = () =>{
    stateMap.productData = mockData;
}

const bindModalCloseEvent = () =>{
    $('.modal').find('.close').on('click',()=>{
        $('.modal_container').hide();
    });
}

//TODO: 彈跳視窗未完成
$(window).on('load', function (){
    header();
    footer();
    getProductData();
    productRender($('.product-container'), stateMap.productData);
    bindFilterEvent($('.selector'));
    bindModalCloseEvent();
});