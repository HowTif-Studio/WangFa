import "../scss/main.scss";
import $ from "jquery";
import {init as header} from "../../header/js/main";
import {init as footer} from "../../footer/js/main";

$(window).on('load', function (){
    header();
    footer();
});