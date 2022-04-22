"use strict";(self["webpackChunkmovieflix"]=self["webpackChunkmovieflix"]||[]).push([[929],{246:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Movie")],1)},r=[],n=a(2751),o=a(6133),s=a(796),l=a(3855),c=a(9726),u=(a(5003),a(1539),a(1299),a(3254)),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-link",{attrs:{to:"/"}},[a("font-awesome-icon",{staticClass:"mr-1 mt-3",attrs:{icon:"arrow-left-long"}}),e._v("Back")],1),a("div",{staticClass:"container mx-auto flex mt-10 border-b border-gray-600 pb-2"},[a("img",{staticClass:"w-64 mr-20",attrs:{src:e.moviePoster,alt:"joker"}}),a("div",{staticClass:"ml-5"},[a("h1",{staticClass:"text-4xl font-semibold"},[e._v(e._s(this.movieData.title))]),a("span",[a("font-awesome-icon",{staticClass:"fill-current text-yellow-500 mr-1 fa-xs",attrs:{icon:"star"}}),a("span",{staticClass:"text-gray-500 text-sm"},[e._v(e._s(this.movieData.vote_average)+"% | "+e._s(this.movieData.release_date)+" "),e._l(e.movieData.genres,(function(t,i){return a("span",{key:i},[e._v(" "+e._s(t.name)+e._s(e.genreName(i))+" ")])}))],2)],1),a("p",{staticClass:"mt-5"},[e._v(" "+e._s(this.movieData.overview)+" ")]),a("div",{staticClass:"mt-5"},[a("span",{staticClass:"mt-5 font-semibold"},[e._v("Featured Cast")]),a("div",{staticClass:"flex"},e._l(e.crew,(function(t,i){return a("div",{key:i},[i<2?a("div",{staticClass:"flex flex-col mt-5 mr-5"},[a("span",[e._v(e._s(t.name))]),a("span",{staticClass:"text-gray-500"},[e._v(e._s(t.job))])]):e._e()])})),0),a("div",{staticClass:"mt-5 text-black flex"},[a("a",{staticClass:"rounded bg-yellow-500 px-5 py-3",attrs:{target:"blank"},on:{click:function(t){return t.preventDefault(),e.openVideo.apply(null,arguments)}}},[a("font-awesome-icon",{attrs:{icon:"circle-play"}}),a("span",{staticClass:"ml-3"},[e._v("Play Trailer")])],1),a("a",{staticClass:"rounded bg-yellow-500 px-5 py-3 ml-5",attrs:{href:"#"}},[a("font-awesome-icon",{staticClass:"fill-current text-red-500",attrs:{icon:"heart"}}),a("span",{staticClass:"ml-3"},[e._v("Favourite")])],1)])])])]),a("Cast",{attrs:{casts:e.casts}}),a("Images",{attrs:{images:e.images},on:{"on-image-click":e.showImageModel}}),a("MediaModel",{attrs:{value:e.isOpened,mediaURL:e.mediaURL,isVideo:e.isVideo},on:{input:function(t){e.isOpened=t}}})],1)},f=[],v=a(6198),p=a(3263),m=a(3796),g=(a(8975),a(2222),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mx-auto border-b border-gray-600 px-4 py-4"},[a("h2",{staticClass:"text-4xl font-semibold"},[e._v("Cast")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mb-2"},e._l(e.casts,(function(t){return a("div",{key:t.id,staticClass:"mr-2 mt-4"},[a("img",{staticClass:"hover:opacity-75 transition easy-in-out duration-150",attrs:{src:e.castProfilePicture(t),alt:"Cast1"}}),a("span",{staticClass:"text-gray-300"},[e._v(e._s(t.name))])])})),0)])}),h=[],y=function(e,t,a,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},b=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),(0,m.Z)((0,p.Z)(e),"casts",void 0),e}return(0,n.Z)(a,[{key:"castProfilePicture",value:function(e){return e.profile_path?"https://image.tmdb.org/t/p/w300/".concat(e.profile_path):"https://via.placeholder.com/300x450"}}]),a}(u.w3);y([(0,u.fI)({required:!0})],b.prototype,"casts",void 0),b=y([(0,u.wA)({})],b);var w=b,_=w,Z=a(1001),x=(0,Z.Z)(_,g,h,!1,null,null,null),C=x.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mx-auto border-b border-gray-600 px-4 py-4"},[a("h2",{staticClass:"text-4xl font-semibold mb-5"},[e._v("Images")]),a("div",{staticClass:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mb-2"},e._l(e.images,(function(t,i){return a("div",{key:i,staticClass:"mr-3"},[a("img",{staticClass:"hover:opacity-75 transition easy-in-out duration-150",attrs:{src:e.movieImage(t),alt:"Cast1"},on:{click:function(a){return e.onImageClick(t)}}})])})),0)])},R=[],D=function(e,t,a,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},O=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),(0,m.Z)((0,p.Z)(e),"images",void 0),e}return(0,n.Z)(a,[{key:"onImageClick",value:function(e){var t="";return t=e.file_path?"https://image.tmdb.org/t/p/original/".concat(e.file_path):"https://via.placeholder.com/300x450",t}},{key:"movieImage",value:function(e){return e.file_path?"https://image.tmdb.org/t/p/original/".concat(e.file_path):"https://via.placeholder.com/300x450"}}]),a}(u.w3);D([(0,u.fI)({required:!0})],O.prototype,"images",void 0),D([(0,u.y1)("on-image-click")],O.prototype,"onImageClick",null),O=D([(0,u.wA)({})],O);var j=O,I=j,P=(0,Z.Z)(I,k,R,!1,null,null,null),V=P.exports,M=a(2328),A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.value?a("div",{staticClass:"fixed top-0 left-0 w-full h-full flex items-center shadow-inner",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"},attrs:{tabindex:"0"}},[a("div",{staticClass:"container mx-auto lg:px-32 rounded-lg overflow-y-auto"},[a("div",{staticClass:"bg-gray-900 rounded"},[a("div",{staticClass:"flex justify-end pr-4 pt-2"},[a("button",{staticClass:"text-3xl leading-none hover:text-gray-300",on:{click:e.close}},[e._v(" × ")])]),a("div",{staticClass:"modal-body px-8 py-8"},[a("div",{staticClass:"responsive-container overflow-hidden relative",style:e.isVideo?"padding-top: 56.25%":""},[e.isVideo?e._e():a("img",{attrs:{src:e.mediaURL,alt:"image"}}),e.isVideo?a("iframe",{staticClass:"responsive-iframe absolute top-0 left-0 w-full h-full",staticStyle:{border:"0"},attrs:{allow:"autoplay; encrypted-media",allowfullscreen:"",src:e.mediaURL}}):e._e()])])])])]):e._e()},L=[],U=a(2196),$=function(e,t,a,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},q=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),(0,m.Z)((0,p.Z)(e),"value",void 0),(0,m.Z)((0,p.Z)(e),"mediaURL",void 0),(0,m.Z)((0,p.Z)(e),"isVideo",void 0),(0,m.Z)((0,p.Z)(e),"cloneValue",(0,U.clone)(e.value)),e}return(0,n.Z)(a,[{key:"close",value:function(){return!1}}]),a}(u.w3);$([(0,u.fI)({required:!0})],q.prototype,"value",void 0),$([(0,u.fI)({required:!0})],q.prototype,"mediaURL",void 0),$([(0,u.fI)({required:!0})],q.prototype,"isVideo",void 0),$([(0,u.y1)("input")],q.prototype,"close",null),q=$([(0,u.wA)({})],q);var E=q,F=E,T=(0,Z.Z)(F,A,L,!1,null,null,null),N=T.exports,S=function(e,t,a,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},B=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),(0,m.Z)((0,p.Z)(e),"movieData",[]),(0,m.Z)((0,p.Z)(e),"isOpened",!1),(0,m.Z)((0,p.Z)(e),"isVideo",!1),(0,m.Z)((0,p.Z)(e),"mediaURL",""),e}return(0,n.Z)(a,[{key:"mounted",value:function(){var e=(0,v.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchMovieDataFromId(this.$route.params.id);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchMovieDataFromId",value:function(){var e=(0,v.Z)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.t.get("/movie/".concat(t,"?append_to_response=credits,videos,images"));case 2:a=e.sent,this.movieData=a.data,this.$store.commit("setMovieData",a.data);case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"genreName",value:function(e){return this.movieData.genres.length-1!==e?",":""}},{key:"openVideo",value:function(){this.mediaURL=this.playTrailer,this.isVideo=!0,this.isOpened=!0}},{key:"showImageModel",value:function(e){this.mediaURL=e,this.isVideo=!1,this.isOpened=!0}},{key:"moviePoster",get:function(){return this.movieData.poster_path?"https://image.tmdb.org/t/p/w500/".concat(this.movieData.poster_path):""}},{key:"casts",get:function(){var e;return null===(e=this.movieData.credits)||void 0===e?void 0:e.cast}},{key:"images",get:function(){var e;return null===(e=this.movieData.images)||void 0===e?void 0:e.backdrops}},{key:"crew",get:function(){var e;return null===(e=this.movieData.credits)||void 0===e?void 0:e.crew}},{key:"playTrailer",get:function(){return this.movieData.videos?"https://www.youtube.com/embed/".concat(this.movieData.videos.results[0].key):"#"}}]),a}(u.w3);B=S([(0,u.wA)({components:{Cast:C,Images:V,MediaModel:N}})],B);var z=B,G=z,H=(0,Z.Z)(G,d,f,!1,null,null,null),J=H.exports,K=function(e,t,a,i){var r,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,c.Z)(Reflect))&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(n<3?r(o):n>3?r(t,a,o):r(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o},Q=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(){return(0,o.Z)(this,a),t.apply(this,arguments)}return(0,n.Z)(a)}(u.w3);Q=K([(0,u.wA)({components:{Movie:J}})],Q);var W=Q,X=W,Y=(0,Z.Z)(X,i,r,!1,null,null,null),ee=Y.exports}}]);
//# sourceMappingURL=movie-legacy.e52293f2.js.map