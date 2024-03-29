import "../scss/main.scss";
import $ from "jquery";
import axios from "axios";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

const htmlMap = {
    productBlock: (data) => {
        return `<div class="product-block">
                    <img class="product-img" src="${data.product_pic}">
                    <div class="product-name">${data.productname}</div>
                    <div class="product-spec">${data.traits} · ${data.size}</div>
                    <button class="product-specImg" data-imgsrc="${data.spec_pic}">產品規格圖 ></button>
                </div>`
    }
};

const stateMap= {
    productData: []
}

const mockData = [
    {
        product_pic:'/image/60_square.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '60*60',
        spec_pic: '/image/specImg.jpeg'
    },
    {
        product_pic:'/image/70_square.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '70*70',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/80_square.png',
        productname: '防臭式鑄鐵蓋',
        traits: '方型',
        size: '80*80',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/60_circle.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '60cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/70_circle.png',
        productname: '防臭式鑄鐵蓋',
        traits: '圓形',
        size: '70cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/80_circle.png',
        productname: '自設污水蓋',
        traits: '圓形',
        size: '80cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/60_circle_square.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '60x60cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/70_circle_square.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '70x70cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/80_circle_square.png',
        productname: '自設污水蓋',
        traits: '方框圓蓋',
        size: '80x80cm∮',
        spec_pic: '/image/specImg.jpeg'
    },{
        product_pic:'/image/circle_2.png',
        productname: '自設污水蓋',
        traits: '圓型',
        size: '60cm∮',
        spec_pic: '/image/specImg.jpeg'
    },

];

const productRender = ($container, productData) => {
    $container.empty();
    productData.forEach((data)=>{
        let $productBlock = $(htmlMap.productBlock(data));
        let $specImgButton = $productBlock.find('.product-specImg');
        $specImgButton.on('click',()=>{
            let $spec_img = $(`<img src="${data.spec_pic}">`);
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
                    if(data.productname.includes($(item).text())){
                        newData.push(data)
                    }
                });
            }
            $(item).addClass('active');
            productRender($('.product-container'), newData);
        });
    });
}

const getProductData = async ($container) =>{
    let apiUri = "/api/product";

    await axios.get(apiUri)
        .then((result)=>{
            stateMap.productData = result.data;
        })
        .catch((error)=>{
            console.log(error);
        });
}

const bindModalCloseEvent = () =>{
    $('.modal').find('.close').on('click',()=>{
        $('.modal_container').hide();
    });
}


//TODO: 彈跳視窗未完成
$(window).on('load', async function (){
    header();
    footer();
    await getProductData();
    productRender($('.product-container'), stateMap.productData);
    bindFilterEvent($('.selector'));
    bindModalCloseEvent();
});