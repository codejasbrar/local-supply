//window.selectCallback is standard location for this function. Called whenever variant dropdown changes.
//Shopify's multi-currency code depends on it.
window.selectCallback = function(variant, selector){
  var $form = $(document.getElementById(selector.domIdPrefix)).closest('form');
  var $button = $form.find('input[type="submit"]');
  var $price = $form.closest('.detail').find('.price');
  //Update price & add-to-cart button states
  if(variant && variant.available == true) {
      $button.removeAttr('disabled');
      var priceHTML = Shopify.formatMoney(variant.price);
      if(variant.compare_at_price > variant.price) {
         priceHTML = '<span class="was-price">' + Shopify.formatMoney(variant.compare_at_price) + '</span>' + priceHTML;
      }
      $price.html(priceHTML);
  } else {
    $button.attr('disabled', 'disabled');
    if(variant) {
      $price.html(Shopify.formatMoney(variant.price) + ' <span class="productlabel soldout"><span>'+"translation missing: en.products.labels.sold_out"+'</span></span>');
    } else {
      $price.html("translation missing: en.products.variant.non_existent");
    }
  }
  /* Variant Image Linking */
  if (variant && variant.featured_image) {
    // desktop
    var newImageUrl = Shopify.Image.getSizedImageUrl('' + variant.featured_image.src, 'master').split('?')[0];
    $form.closest('.product-detail').find('.gallery .thumbnails a[data-full-size-url^="' + newImageUrl + '"]').first().trigger('select');
    // mobile
    var newImageUrl = Shopify.Image.getSizedImageUrl('' + variant.featured_image.src, '1024x1024').split('?')[0];
    var $toShow = $form.closest('.product-detail').find('.gallery .mobile-slideshow .slick-slide:not(.slick-cloned) img[src^="' + newImageUrl + '"], .gallery .mobile-slideshow .slick-slide:not(.slick-cloned) img[data-lazy^="' + newImageUrl + '"]').first().closest('.slide');
    var idx = $toShow.index('.slick-slide:not(.slick-cloned)');
    if(idx >= 0) {
      $toShow.closest('.slick-slider').slick('slickGoTo', idx);
    }
  }
}

//Lightbox
var fbOpts = { overlayColor: '#fff', padding: 1, margin: 60, overlayOpacity: 0.9 };

/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-input-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){i.cssText=a}function x(a,b){return w(prefixes.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b){for(var d in a){var e=a[d];if(!z(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}function C(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return y(b,"string")||y(b,"undefined")?A(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),B(e,b,c))}function D(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)q[c[d]]=c[d]in j;return q.list&&(q.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),q}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j=b.createElement("input"),k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.csstransitions=function(){return C("transition")};for(var E in o)v(o,E)&&(t=E.toLowerCase(),e[t]=o[E](),r.push((e[t]?"":"no-")+t));return e.input||D(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return A([a])},e.testAllProps=C,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* Placeholders.js v4.0.1 */
/*!
 * The MIT License
 *
 * Copyright (c) 2012 James Allardice
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
!function(a){"use strict";function b(){}function c(){try{return document.activeElement}catch(a){}}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return!0;return!1}function e(a,b,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):void 0}function f(a,b){var c;a.createTextRange?(c=a.createTextRange(),c.move("character",b),c.select()):a.selectionStart&&(a.focus(),a.setSelectionRange(b,b))}function g(a,b){try{return a.type=b,!0}catch(c){return!1}}function h(a,b){if(a&&a.getAttribute(B))b(a);else for(var c,d=a?a.getElementsByTagName("input"):N,e=a?a.getElementsByTagName("textarea"):O,f=d?d.length:0,g=e?e.length:0,h=f+g,i=0;h>i;i++)c=f>i?d[i]:e[i-f],b(c)}function i(a){h(a,k)}function j(a){h(a,l)}function k(a,b){var c=!!b&&a.value!==b,d=a.value===a.getAttribute(B);if((c||d)&&"true"===a.getAttribute(C)){a.removeAttribute(C),a.value=a.value.replace(a.getAttribute(B),""),a.className=a.className.replace(A,"");var e=a.getAttribute(I);parseInt(e,10)>=0&&(a.setAttribute("maxLength",e),a.removeAttribute(I));var f=a.getAttribute(D);return f&&(a.type=f),!0}return!1}function l(a){var b=a.getAttribute(B);if(""===a.value&&b){a.setAttribute(C,"true"),a.value=b,a.className+=" "+z;var c=a.getAttribute(I);c||(a.setAttribute(I,a.maxLength),a.removeAttribute("maxLength"));var d=a.getAttribute(D);return d?a.type="text":"password"===a.type&&g(a,"text")&&a.setAttribute(D,"password"),!0}return!1}function m(a){return function(){P&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)?f(a,0):k(a)}}function n(a){return function(){l(a)}}function o(a){return function(){i(a)}}function p(a){return function(b){return v=a.value,"true"===a.getAttribute(C)&&v===a.getAttribute(B)&&d(x,b.keyCode)?(b.preventDefault&&b.preventDefault(),!1):void 0}}function q(a){return function(){k(a,v),""===a.value&&(a.blur(),f(a,0))}}function r(a){return function(){a===c()&&a.value===a.getAttribute(B)&&"true"===a.getAttribute(C)&&f(a,0)}}function s(a){var b=a.form;b&&"string"==typeof b&&(b=document.getElementById(b),b.getAttribute(E)||(e(b,"submit",o(b)),b.setAttribute(E,"true"))),e(a,"focus",m(a)),e(a,"blur",n(a)),P&&(e(a,"keydown",p(a)),e(a,"keyup",q(a)),e(a,"click",r(a))),a.setAttribute(F,"true"),a.setAttribute(B,T),(P||a!==c())&&l(a)}var t=document.createElement("input"),u=void 0!==t.placeholder;if(a.Placeholders={nativeSupport:u,disable:u?b:i,enable:u?b:j},!u){var v,w=["text","search","url","tel","email","password","number","textarea"],x=[27,33,34,35,36,37,38,39,40,8,46],y="#ccc",z="placeholdersjs",A=new RegExp("(?:^|\\s)"+z+"(?!\\S)"),B="data-placeholder-value",C="data-placeholder-active",D="data-placeholder-type",E="data-placeholder-submit",F="data-placeholder-bound",G="data-placeholder-focus",H="data-placeholder-live",I="data-placeholder-maxlength",J=100,K=document.getElementsByTagName("head")[0],L=document.documentElement,M=a.Placeholders,N=document.getElementsByTagName("input"),O=document.getElementsByTagName("textarea"),P="false"===L.getAttribute(G),Q="false"!==L.getAttribute(H),R=document.createElement("style");R.type="text/css";var S=document.createTextNode("."+z+" {color:"+y+";}");R.styleSheet?R.styleSheet.cssText=S.nodeValue:R.appendChild(S),K.insertBefore(R,K.firstChild);for(var T,U,V=0,W=N.length+O.length;W>V;V++)U=V<N.length?N[V]:O[V-N.length],T=U.attributes.placeholder,T&&(T=T.nodeValue,T&&d(w,U.type)&&s(U));var X=setInterval(function(){for(var a=0,b=N.length+O.length;b>a;a++)U=a<N.length?N[a]:O[a-N.length],T=U.attributes.placeholder,T?(T=T.nodeValue,T&&d(w,U.type)&&(U.getAttribute(F)||s(U),(T!==U.getAttribute(B)||"password"===U.type&&!U.getAttribute(D))&&("password"===U.type&&!U.getAttribute(D)&&g(U,"text")&&U.setAttribute(D,"password"),U.value===U.getAttribute(B)&&(U.value=T),U.setAttribute(B,T)))):U.getAttribute(C)&&(k(U),U.removeAttribute(B));Q||clearInterval(X)},J);e(a,"beforeunload",function(){M.disable()})}}(this),function(a,b){"use strict";var c=a.fn.val,d=a.fn.prop;b.Placeholders.nativeSupport||(a.fn.val=function(a){var b=c.apply(this,arguments),d=this.eq(0).data("placeholder-value");return void 0===a&&this.eq(0).data("placeholder-active")&&b===d?"":b},a.fn.prop=function(a,b){return void 0===b&&this.eq(0).data("placeholder-active")&&"value"===a?"":d.apply(this,arguments)})}(jQuery,this);
   
/*
* debouncedresize: special jQuery event that happens once after a window resize
*
* latest version and complete README available on Github:
* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
*
* Copyright 2011 @louis_remi
* Licensed under the MIT license.
*/
(function($) {
    var $event = $.event,
    $special,
    resizeTimeout;
    
    $special = $event.special.debouncedresize = {
        setup: function() {
            $( this ).on( "resize", $special.handler );
        },
        teardown: function() {
            $( this ).off( "resize", $special.handler );
        },
        handler: function( event, execAsap ) {
            // Save the context
            var context = this,
                args = arguments,
                dispatch = function() {
                    // set correct event type
                    event.type = "debouncedresize";
                    $event.dispatch.apply( context, args );
                };
    
            if ( resizeTimeout ) {
                clearTimeout( resizeTimeout );
            }
    
            execAsap ?
                dispatch() :
                resizeTimeout = setTimeout( dispatch, $special.threshold );
        },
        threshold: 200
    };
  
  
  $('input[type="checkbox"]').on('change', function(){
    if($(this).is(':checked')){
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });
  
  $('.faq-section').on('click', '> h3', function(){
    var $this = $(this),
        $parent = $this.parent();
    
    if($parent.hasClass('active')){
    	$parent.removeClass('active');
    } else {
    	$('.faq-content-wrap .faq-section').removeClass('active');
      	$parent.addClass('active');
    }
    
  });
  
  var links = document.links;
  for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
      links[i].rel = 'noreferrer noopener';
    }
  }
})(jQuery);
   
$(function($){
    //Return elements that have an ancestor/parent matching the supplied selector
    $.fn.hasAncestor = function(a) {
        return this.filter(function() {
            return $(this).closest(a).length > 0;
        });
    };
    
    //Side up and remove
    $.fn.slideUpAndRemove = function(speed){
        if(typeof speed == 'undefined') speed = 200;
        $(this).each(function(){
            $(this).slideUp(speed, function(){
                $(this).remove();
            });
        });
    }
    
    //Fade out image, replace src, fade back in when loaded
    $.fn.fadeToAnotherImage = function(newSrc, callback){
      var $img = $(this);
      if($img.attr('src') != newSrc) {
        $img.animate({opacity:0}, 200, function(){
          var oldHeight = $img.height();
          $img = $img.replaceImageWithOneOfNewSrc(newSrc);
          $img.css({ height: oldHeight, display: 'block' }); //Placeholder height until loaded. d:b required for occupying space in FF
          $img.imagesLoaded(function(){
            $img.css({height: '', display: ''}); //Revert to natural height
            $img.animate({opacity:1}, 200, function(){
                $('.layout-column-half-left .main-image img').removeAttr('style');
            });
            if(callback) callback($img);
          });
        });
      }
      return $img;
    }
    
    $.fn.replaceImageWithOneOfNewSrc = function(newSrc) {
        //Used in a few places to avoid blank.gif breaking imagesLoaded
        var newTag = $(this).clone().wrap('<div />').parent().html();
        newTag = newTag.replace(/(src=")([^"]*)/gi, "$1" + newSrc);
        var $newTag = $(newTag);
        $(this).after($newTag).remove();
        return $newTag;
    }
    
    /// Reusable function to expand/contract a div
    $(document).on('click', 'a[data-toggle-target]', function(e){
      var $target = $($(this).data('toggle-target'));
      if($target.hasClass('height-hidden')) {
        $target.hide().removeClass('height-hidden');
      }
      $(this).find('.state').html( $target.is(':visible') ? '+' : '-' );
      $target.slideToggle(200);
      e.preventDefault();
    });
    
    //Already visible? Set state
    $('a[data-toggle-target]').each(function(){
        var $target = $($(this).data('toggle-target'));
        $(this).find('.state').html( ($target.is(':visible') && !$target.hasClass('height-hidden')) ? '-' : '+' );
    });
    
    //Redirect dropdowns
    $(document).on('change', 'select.navdrop', function(){
        window.location = $(this).val();
    });
    
    //General purpose lightbox
  	$('a[rel="fancybox"]').fancybox($.extend({}, fbOpts, { titleShow: false }));
    
    /// NAV
    //Show expander plusses
  	$('.multi-level-nav ul li a').each(function(){
      var $siblingUL = $(this).siblings('ul');
      if($siblingUL.length > 0) {
        if($siblingUL.hasClass('listed')) {
          	$(this).addClass('has-children listing-title');
        } else {
        	$(this).addClass('has-children').append('<span class="exp">+</span>');
        }
      }
  	});
  
    //Handle expanding nav
  	$(document).on('click clickinstant', '.multi-level-nav a.has-children', function(e){
      var navAnimSpeed = 200;
      if(e.type == 'clickinstant') {
        navAnimSpeed = 0;
      }
      
      //Mobile main nav?
      if($(this).closest('#main-nav').length == 1 && $('#main-nav').css('position') == 'fixed') {
        if($(this).parent().hasClass('mobile-expanded')) {
          $(this).siblings('ul').slideUp(navAnimSpeed, function(){
            $(this).css('display','').parent().removeClass('mobile-expanded');
          });
          
        } else {
          $(this).siblings('ul').slideDown(navAnimSpeed, function(){
            $(this).css('display','');
          }).parent().addClass('mobile-expanded');
        }
      } else {
        //Large menu
        //Not for list titles
        if($(this).hasClass('listing-title')) return true;
           
        //Set some useful vars
        var $tierEl = $(this).closest('[class^="tier-"]');
        var $tierCont = $tierEl.parent();
        var targetTierNum = parseInt($tierEl.attr('class').split('-')[1]) + 1;
        var targetTierClass = 'tier-' + targetTierNum;
        var $targetTierEl = $tierCont.children('.' + targetTierClass);

        ///Remove nav for all tiers higher than this one
        $tierCont.children().each(function(){
          if(parseInt($(this).attr('class').split('-')[1]) >= targetTierNum) {
            $(this).slideUpAndRemove(navAnimSpeed);
          }
        });

        //Are we expanding or collapsing
        if($(this).hasClass('expanded')) {
          //Collapsing. Reset state
          $(this).removeClass('expanded').find('.exp').html('+');
        } else {
          ///Show nav
          //Reset other nav items at this level
          $tierEl.find('a.expanded').removeClass('expanded').find('.exp').html('+');
          //If next tier div doesn't exist, make it
          if($targetTierEl.length == 0) {
            $targetTierEl = $('<div />').addClass(targetTierClass).appendTo($tierCont).hide();
          }
          $targetTierEl.empty().stop().append($(this).siblings('ul').clone().attr('style','')).slideDown(navAnimSpeed, function(){
            $(this).css('height', ''); //Clear height
          });
          //Mark as expanded
          $(this).addClass('expanded').find('.exp').html('-');
        }
      }
      return false;
    });
    
  
  
    /// Mobile nav
    $(document).on('click', '.mobile-nav-toggle', function(e){
      e.preventDefault();
      $('body').toggleClass('reveal-mobile-nav');
      $('#main-nav div[class^="tier-"]:not(.tier-1)').remove(); //Remove any expanded rows
    });
    $('<a href="#" class="mobile-nav-toggle" id="mobile-nav-return"></a>').appendTo('body');
    
  
  //For all image fades
  var imageFadeInSpeed = 300;
    
  //Fade in images in product blocks
//   $('.product-block .image-cont').each(function(){
//     var $cont = $(this);
//     $(this).find('img').imagesLoaded(function(obj){
//       $cont.animate({opacity:1}, imageFadeInSpeed).css({
//         maxWidth: $cont.find('img').width()
//       });
//     });
//   });
  
  // check image widths don't cause trouble
//   $(window).on('debouncedresize', function(){
//     $('.product-block .image-cont').filter(function(){ return $(this).css('max-width') != 'none' }).css('max-width', '').each(function(){
//       $(this).css('max-width', $(this).find('img').width());
//     });
//   });
    
    //For fading in other images created by js
    function fadeInImageWhenReady($el, callback) {
        var $imgs = $el.is('img') ? $el : $el.find('img');
        $imgs.css('opacity', 0).imagesLoaded(function(){
            $imgs.animate({opacity: 1}, imageFadeInSpeed);
            if(callback) {
                callback();
            }
        });
    };
    
    //Enables any images inside a container
    function awakenImagesFromSlumber($cont) {
        $cont.find('img[data-src]').each(function(){
            $(this).replaceImageWithOneOfNewSrc($(this).data('src'));
        });
    };
    
    /// View modes for collection page
    function saveGridStreamChoice(type) {
      var cfg = { expires:1, path:'/', domain:window.location.hostname };
      $.cookie('gridstream', type, cfg);
    }
    function getGridStreamChoice() {
      return $.cookie('gridstream');
    }
  
    $(document).on('click', '#view-as-tiles', function(){
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#view-as-stream').removeClass('active');
        saveGridStreamChoice('grid');
        var $listing = $('.collection-listing-stream').removeClass('collection-listing-stream').addClass('collection-listing');
        $(window).trigger('debouncedresize');
      }
      return false;
    });
    
    $(document).on('click', '#view-as-stream', function(){
      if(!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('#view-as-tiles').removeClass('active');
        saveGridStreamChoice('stream');
        var $listing = $('.collection-listing').removeClass('collection-listing').addClass('collection-listing-stream');
        //All images enabled in this view (do before optionate, in case it switches images)
        awakenImagesFromSlumber($listing);
        //Close any open doodads & reset 'style=' styling to default
        $listing.find('.product-block').stop().each(function(){
          if($(this).hasClass('expanded')) {
            $(this).removeClass('expanded');
          }
          $(this).add($(this).find('.product-detail').stop()).removeAttr('style', '');
          $(this).find('select[name="id"]').trigger('optionate');
        });
      }
      return false;
    });
    //Have we chosen before?
    if($('#view-as-stream, #view-as-tiles').length > 0 && getGridStreamChoice() != null) {
      if(getGridStreamChoice() == 'stream') {
        $('#view-as-stream').trigger('click');
      } else {
        $('#view-as-tiles').trigger('click');
      }
    }
    
    
    
    //For each product block in a listing
    $('.collection-listing .product-block, .collection-listing-stream .product-block').each(function(){
        //Add close button
        $('<a href="#" class="close-detail">X</a>').data('block', $(this)).appendTo($(this).find('.product-detail'));
    });
    
  /// Ensure all product blocks are the same height, for the quick-buy
  $(window).on('load debouncedresize normprodblockheights', function(){
    $('.collection-listing .product-list').each(function(){
      if($(window).width() >= 768 || $(this).closest('.collection-slider-row').length > 0 ) {
        var tallest = 0;
        $(this).find('.product-block .block-inner .image-cont').each(function(){
          if($(this).height() > tallest) tallest = $(this).height();
        });
        $(this).find('.product-block .block-inner').css('height', tallest);
      } else {
        $(this).find('.product-block .block-inner').css('height', '');
      }
      
    });
  }).trigger('normprodblockheights');
    
     /// Collection slider
     jQuery.fn.reverse = [].reverse; //Genius deserves credit: http://stackoverflow.com/questions/1394020/jquery-each-backwards
     
     //Evaluate visibility of left/right buttons, and height
     $(window).on('load debouncedresize checkcollectionpaging', function(){
       $('.collection-slider:has(.product-block)').each(function(){
         var $prods = $(this).find('.product-block > .block-inner');
         $(this).toggleClass('no-pages', $prods.first().offset().top == $prods.last().offset().top);
         
         $(this).find('.collection-listing').css('height', $prods.first().parent().outerHeight());
       });
     });
     
  	 //Init slider
     $('.collection-slider').each(function(){
       var $nextPrevCont = $(this).find('.view-all, .has-paging'); //One or the other
       $(this).imagesLoaded(function(){
         $('<a class="prev" href="#"><i class="icon-arrow3-left"></i></a>').prependTo($nextPrevCont);
         $('<a class="next" href="#"><i class="icon-arrow3-right"></i></a>').appendTo($nextPrevCont);
         $(window).trigger('checkcollectionpaging');
       });
     });
     $('.collection-slider').on('click', '.prev, .next', function(){
       //Find items visible in first row
       var showingNext = $(this).hasClass('next');
       var $items = $(this).closest('.collection-slider').find('.product-block');
       var $cont = $items.parent();
       var itemsToMove = [];
       var runningOffset = 0;
       if(showingNext) {
         //Next
         $items.each(function(index){
           if(index == 0) {
             runningOffset = $(this).offset().top;
             itemsToMove.push($(this));
           } else {
             if($(this).offset().top == runningOffset) {
               itemsToMove.push($(this));
             } else {
               return false; //Break loop
             }
           }
         });
       } else {
         //Previous
         var contWidth = $cont.width();
         $items.reverse().each(function(){
           runningOffset += $(this).outerWidth();
           if(runningOffset <= contWidth) {
             itemsToMove.push($(this));
           } else {
             return false; //Break loop
           }
         });
       }
       //Fade out
       $items.stop().animate({opacity: 0}, 500, function(){
         //Rearrange
         $.each(itemsToMove, function(index, item){
           if(showingNext) {
             $cont.append(item);
           } else {
             $cont.prepend(item);
           }
         });
         //Fade in
         $items.stop().animate({opacity: 1}, 500);
       });
       return false;
     });
    
    /// Show lightbox for any shrunken images inside certain areas
  /*
    var imageKeys = ['_pico.','_icon.','_thumb.','_small.','_compact.','_medium.','_large.','_grande.'];
    $('.lightboximages img[src]').each(function(){
        if(!$(this).parent().is('a')) {
            var imgurl = $(this).attr('src');
            for(var i = 0; i < imageKeys.length; i++) {
                if(imgurl.indexOf(imageKeys[i]) > -1) {
                    imgurl = imgurl.replace(imageKeys[i], '.');
                    break;
                }
            }
            var $wrapa = $('<a>').attr('href', imgurl).addClass('fancyboximg');
            $(this).wrap($wrapa);
            $(this).parent().fancybox(fbOpts);
        }
    });
    */
    /// Galleries (inc. product page)
    $(document).on('click select', '.gallery .thumbnails a', function(e){
      var newMainImageURL = $(this).attr('href');
      var $mainImageArea = $(this).closest('.gallery').find('.main-image');
      var $mainATag = $mainImageArea.find('a');
      //If this is a change in main image...
      if($mainATag.data('href') != $(this).data('full-size-url')) {
        //Set active class
        $(this).addClass('active').siblings().removeClass('active');
        //Set main image data - so we know which one is selected
        $mainATag.data('href', $(this).data('full-size-url'));
        //Set link if on product page - for lightbox
        if($mainATag.hasClass('shows-lightbox')) {
          $mainATag.attr('href', $(this).data('full-size-url'));
        }
        //Title tag
        $mainATag.attr('title', $(this).attr('title'));
        $mainImageArea.find('img').attr('alt', $(this).attr('title')).fadeToAnotherImage(newMainImageURL, function($img){
          $img.closest('.inner').trigger('changedsize');
          $('.layout-column-half-left .main-image img').removeAttr('style');
        });
      }
      e.preventDefault();
    });

    $(document).on('optionate', 'select[name="id"]', function(){
        if(typeof $(this).data('optionated') == 'undefined') {
            $(this).data('optionated', true);
            var prodId = parseInt($(this).attr('id').split('-')[2]);
            for(var i=0; i<window.productJSON.length; i++) {
              	var prodJSON = window.productJSON[i];
                if(prodJSON.id == prodId) {
                  new Shopify.OptionSelectors($(this).attr('id'), { product: prodJSON, onVariantSelected: window.selectCallback, enableHistoryState: $('body').hasClass('template-product') });
                  
                  
                  
                  
                  break;
                }
            }
        }
    });

    //Default stream view - process dropdowns right away
    $('.collection-listing-stream select[name="id"]').trigger('optionate');
    
    /// Product page
    //Dropdowns
    $('#main-product-detail select[name="id"]').trigger('optionate');
    $('#main-product-detail').on('click', '.gallery .main-image a', function(){
      
        //Create list of imgs to box, so prev/next works
        var $thumbs = $(this).closest('.gallery').find('.thumbnails');
        if($thumbs.length > 0) {
            //Create dupes, rejig, launch matching link
            var $boxObjs = $thumbs.clone();
            $('body > .t-lightbox-thumbs').remove(); //Tidy
            $boxObjs.addClass('t-lightbox-thumbs').hide().appendTo('body').find('a').each(function(){
                $(this).attr('href', $(this).attr('data-full-size-url'));
            }).attr('rel', 'gallery').fancybox($.extend({}, fbOpts, { cyclic: true })).filter('[href="' + $(this).attr('href') + '"]').trigger('click');
        } else {
            //Create dupe of self and launch - thumbs may be hidden
            $(this).clone().fancybox($.extend({}, fbOpts, { cyclic: true })).trigger('click');
        }
        return false;
    });
    
    
    
    //Show a quick generic text popup above an element
    window.showQuickPopup = function(message, $origin){
        var $popup = $('<div>').addClass('simple-popup');
        var offs = $origin.offset();
        $popup.html(message).css({ 'left':offs.left, 'top':offs.top }).hide();
        $('body').append($popup);
        $popup.css('margin-top', - $popup.outerHeight() - 10);
        $popup.fadeIn(200).delay(3500).fadeOut(400, function(){
            $(this).remove();
        });
    };
    
    //Start any slideshows on the page
    $('.slideshow').each(function(){
      $(this).slick({
        autoplay: $(this).hasClass('auto-play'),
        fade: false,
        infinite: true,
        useTransform: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'progressive' : null
            }
          }
        ],
        lazyLoad: $(this).find('[data-lazy]').length > 0 ? 'ondemand' : null, // to avoid loading all on desktop product page
        autoplaySpeed: 7000 // milliseconds to wait between slides
      });
    });
    
    //Quantity inputs - select when focus
    $(document).on('focusin click', 'input.select-on-focus', function(){
        $(this).select();
    }).on('mouseup', 'input.select-on-focus', function(e){
        e.preventDefault(); //Prevent mouseup killing select()
    });
    
    // forms don't all have correct label attributes
    $('#template label').each(function(){
        var $sibinputs = $(this).siblings('input:not([type="submit"]), textarea');
        if($sibinputs.length == 1 && $sibinputs.attr('id').length > 0) {
            $(this).attr('for', $sibinputs.attr('id'));
        }
    });
  
    //Using JS in our forms?
    if($('html.ie8, html.ie7').length == 0) {
      $('body').addClass('jsforms');

      // show placeholders instead of labels
      $('#template').find('input, textarea').each(function(){
        var $label = $('label[for='+$(this).attr('id')+']');
        if($label.length) {
          $(this).attr('placeholder', $label.hide().text());
          Placeholders.enable( $(this)[0] );
        }
      });
    }
    
    /// Main search input
    $('#pageheader .search-box input[type="text"]').bind('focusin focusout', function(e){
        $(this).closest('.search-box').toggleClass('focus', e.type == 'focusin');
    });
     

    /// Live search
    var preLoadLoadGif = $('<img src="//cdn.shopify.com/s/files/1/0264/3073/t/98/assets/ajax-load.gif?v=30805140861959149871661496455" />');
    var searchTimeoutThrottle = 500;
    var searchTimeoutID = -1;
    var currReqObj = null;
    var $resultsBox = $('<div class="results-box" />').appendTo('#pageheader .search-box');
    $('#pageheader .search-box input[type="text"]').bind('keyup change', function(){
        //Only search if search string longer than 2, and it has changed
        if($(this).val().length > 2 && $(this).val() != $(this).data('oldval')) {
            //Reset previous value
            $(this).data('oldval', $(this).val());
            
            // Kill outstanding ajax request
            if(currReqObj != null) currReqObj.abort();
            
            // Kill previous search
            clearTimeout(searchTimeoutID);
          
          	var $form = $(this).closest('form');
          
          	//Search term
          	var term = '*' + $form.find('input[name="q"]').val() + '*';
            
            //URL for full search page
            var linkURL = $form.attr('action') + '?type=product&q=' + term;
            
            //Show loading
            $resultsBox.html('<div class="load"></div>');
            
            // Do next search (in X milliseconds)
            searchTimeoutID = setTimeout(function(){
                //Ajax hit on search page
                currReqObj = $.ajax({
                  url: $form.attr('action'),
                  data: {
                    type: 'product',
                    view: 'json',
                    q: term,
                  },
                  dataType: "json",
                  success: function(data){
                        currReqObj = null;
                        if(data.results_total == 0) {
                            //No results
                            $resultsBox.html('<div class="note">'+ "translation missing: en.layout.live_search.no_results" +'</div>');
                        } else {
                            //Numerous results
                            $resultsBox.empty();
                            $.each(data.results, function(index, item){
                                var $row = $('<a></a>').attr('href', item.url);
                              	$row.append('<div class="img"><img src="' + item.thumb + '" /></div>');
                                $row.append(item.title);
                                $resultsBox.append($row);
                            });
                            $resultsBox.append('<a href="' + linkURL + '" class="note">translation missing: en.layout.live_search.see_all (' + data.results_total + ')</a>');
                        }
                  }
                });
            }, searchTimeoutThrottle);
        } else if ($(this).val().length <= 2) {
            //Deleted text? Clear results
            $resultsBox.empty();
        }
    }).attr('autocomplete', 'off').data('oldval', '').bind('focusin', function(){
        //Focus, show results
        $resultsBox.fadeIn(200);
    }).bind('click', function(e){
        //Click, prevent body from receiving click event
        e.stopPropagation();
    });
    $('body').bind('click', function(){
        //Click anywhere on page, hide results
        $resultsBox.fadeOut(200);
    });
  
    //Search box should mimic live search string: products only, partial match
    $('.search-form, #search-form').on('submit', function(e){
      e.preventDefault();
      var term = '*' + $(this).find('input[name="q"]').val() + '*';
      var linkURL = $(this).attr('action') + '?type=product&q=' + term;
      window.location = linkURL;
    });
    
    /// Collection page
    //If a tag is active in a group, other tags within that group must be links to that tag only, within that group.
    $('.multi-tag-row .tags').each(function(){
      var $active = $(this).find('li.active');
      $(this).find('li:not(.active) a').each(function(){
        var href = $(this).attr('href');
        $active.each(function(){
          var tag = $(this).data('tag');
          href = href.replace('+'+tag, '').replace(tag+'+', ''); //Collection
          href = href.replace('%2B'+tag, '').replace(tag+'%2B', ''); //Vendor
        });
        $(this).attr('href', href);
      });
    });
     
    /// Text that scales down - scale it up/down based on column width
    function resizeScalingTextFromColumn() {
      $('.scaled-text').each(function(){
        var $base = $(this).closest('.scaled-text-base');
        var scale = $base.width() / ;
                             $(this).css('font-size', (scale * 100) + '%');
    });
    }
    resizeScalingTextFromColumn();
    $(window).on('debouncedresize', resizeScalingTextFromColumn);
      
    /// Showing dropdown signup
    $('#pageheader .util-area .signup-reveal').bind('click', function(){
      $(this).parent().toggleClass('show-drop');
      return false;
    });
               
    /// Collection sorting. Code courtesy of the reliably-brilliant Caroline: https://gist.github.com/carolineschnapp/11352987
    var $sortBy = $('#sort-by');
    if($sortBy.length > 0) {
      Shopify.queryParams = {};
      if (location.search.length) {
        for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
          aKeyValue = aCouples[i].split('=');
          if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
          }
        }
      }
      $sortBy.val($sortBy.data('initval')).bind('change', function() {
        Shopify.queryParams.sort_by = $(this).val();
        location.search = $.param(Shopify.queryParams);
      });
    }
              
  /// Custom share buttons
  $('.sharing').on('click', 'a', function(e){
    var $parent = $(this).parent();
    if($parent.hasClass('twitter')) {
      e.preventDefault();
      var url = $(this).attr('href');
      var width  = 575,
          height = 450,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          opts   = 'status=1, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0' +
          ',width='  + width  +
          ',height=' + height +
          ',top='    + top    +
          ',left='   + left;
      window.open(url, 'Twitter', opts);

    } else if($parent.hasClass('facebook')) {
      e.preventDefault();
      var url = $(this).attr('href');
      var width  = 626,
          height = 256,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          opts   = 'status=1, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0' +
          ',width='  + width  +
          ',height=' + height +
          ',top='    + top    +
          ',left='   + left;
      window.open(url, 'Facebook', opts);

    } else if($parent.hasClass('pinterest')) {
      e.preventDefault();
      var url = $(this).attr('href');
      var width  = 700,
          height = 550,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          opts   = 'status=1, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0' +
          ',width='  + width  +
          ',height=' + height +
          ',top='    + top    +
          ',left='   + left;
      window.open(url, 'Pinterest', opts);

    } else if($parent.hasClass('google')) {
      e.preventDefault();
      var url = $(this).attr('href');
      var width  = 550,
          height = 450,
          left   = ($(window).width()  - width)  / 2,
          top    = ($(window).height() - height) / 2,
          opts   = 'status=1, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0' +
          ',width='  + width  +
          ',height=' + height +
          ',top='    + top    +
          ',left='   + left;
      window.open(url, 'Google+', opts);

    }
  });
              
  /// Style text links nicely
  $('.user-content a:not(:has(img))').addClass('text-link');
});


  

