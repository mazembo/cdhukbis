$(document).ready(function(){function t(t){return t.split(/,\s*/)}function i(i){return t(i).pop()}$('nav#actions.multilist > ul:not(.search_list) li a[href$="'+window.location.pathname+'"]').parent().addClass("selected"),0==$("nav#actions.multilist > ul:not(.search_list) li.selected").length&&$("nav#actions.multilist > ul:not(.search_list) li a:nth(1)").parent().addClass("selected"),$("nav#actions.multilist > ul:not(.search_list) li > a").each(function(){null==$(this).data("dialog-title")&&$(this).bind("click",function(){$(this).css("background-image","url('/images/refinery/icons/ajax-loader.gif') !important")})}),$("ul.collapsible_menu").each(function(){(first_li=$(this).children("li:first")).after(div=$("<div></div>")),$("<span class='arrow'>&nbsp;</span>").appendTo(first_li),0==$(this).children("li.selected").length&&(div.hide(),first_li.addClass("closed")),$(this).children("li:not(:first)").appendTo(div),first_li.find("> a, > span.arrow").click(function(t){$(this).parent().toggleClass("closed"),$(this).parent().toggleClass("open"),$(this).parent().next("div").animate({opacity:"toggle",height:"toggle"},250,$.proxy(function(){$(this).css("background-image",null)},$(this))),t.preventDefault()})}),$(".success_icon, .failure_icon").bind("click",function(t){$.get($(this).attr("href"),$.proxy(function(t){$(this).css("background-image",null).removeClass("failure_icon").removeClass("success_icon").addClass(t.enabled?"success_icon":"failure_icon")},$(this))),t.preventDefault()}),$(function(){$("#page-tabs").tabs(),$("#copy_body_link").click(function(t){var i=$("#post_custom_teaser")[0],e=null;$.each(WYMeditor.INSTANCES,function(t,n){n._element[0]==i&&(e=n)}),e&&e.html($("#post_body").attr("value")),t.preventDefault()})}),page_options.init(!1,"",""),$("<%= dom_id %>").bind("keydown",function(t){t.keyCode===$.ui.keyCode.TAB&&$(this).data("autocomplete").menu.active&&t.preventDefault()}).autocomplete({source:function(t,e){$.getJSON("<%= url %>",{term:i(t.term)},e)},search:function(){var t=i(this.value);return t.length<2?!1:void 0},focus:function(){return!1},select:function(i,e){var n=t(this.value);return n.pop(),n.push(e.item.value),n.push(""),this.value=n.join(", "),!1}})});