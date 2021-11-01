(this["webpackJsonpnomflix-r"]=this["webpackJsonpnomflix-r"]||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.ea2ad102.png"},75:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(1),o=n.n(c),s=n(39),l=n.n(s),u=n(12),d=n(13),p=n(15),j=n(14),h=n(19),b=n(5),g=n(11),x=n.n(g),m=n(17),v=n(3),O=n(2),f=n(4),y=n.n(f),_=n(0),w=O.c.div(r||(r=Object(v.a)(["\n  margin-top:30px;\n  margin-left:10px;\n"]))),k=O.c.span(a||(a=Object(v.a)(["\n  font-size:20px;\n  line-height:30px;\n  font-weight:600;\n"]))),T=O.c.div(i||(i=Object(v.a)(["\n  display:grid;\n  grid-template-columns:repeat(auto-fill, 150px);\n  grid-gap:20px;\n  margin-top:20px;\n"]))),S=function(e){var t=e.title,n=e.children;return Object(_.jsxs)(w,{children:[Object(_.jsx)(k,{children:t}),Object(_.jsx)(T,{children:n})]})};S.prototype={title:y.a.string.isRequired,children:y.a.oneOfType([y.a.arrayOf(y.a.node),y.a.node])};var R,M,C,U,z,N,P,I,F,A,V=S,D=O.c.div(R||(R=Object(v.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),q=function(){return Object(_.jsx)(D,{children:"Loading..."})},B=O.c.div(M||(M=Object(v.a)(["\n  width: 100vw;\n  margin-top:80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),E=O.c.span(C||(C=Object(v.a)(["\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.color})),L=function(e){var t=e.text,n=e.color;return Object(_.jsx)(B,{children:Object(_.jsx)(E,{color:n,children:t})})},H=O.c.div(U||(U=Object(v.a)(["\n  font-size: 12px;\n"]))),J=O.c.div(z||(z=Object(v.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  height: 200px;\n  border-radius: 4px;\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.bgUrl})),G=O.c.span(N||(N=Object(v.a)(["\n  display: block;\n  margin: 7px 0;\n  position: absolute;\n  bottom: 0;\n  right: 10px;\n  opacity: 0;\n"]))),K=O.c.div(P||(P=Object(v.a)(["\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.6;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),J,G),Q=O.c.span(I||(I=Object(v.a)(["\n  display: block;\n  margin: 10px 0 4px;\n"]))),W=O.c.span(F||(F=Object(v.a)(["\n  color: rgba(255, 255, 255, 0.5);\n"]))),X=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.rating,c=e.year,o=(e.star,e.isMovie),s=void 0!==o&&o;return Object(_.jsx)(h.b,{to:s?"/movie/".concat(t):"/tv/".concat(t),children:Object(_.jsxs)(H,{children:[Object(_.jsxs)(K,{children:[Object(_.jsx)(J,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(30)}),Object(_.jsxs)(G,{children:[Object(_.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50"}),i," / 10"]})]}),Object(_.jsx)(Q,{children:a.length>15?"".concat(a.substring(0,15),"..."):a}),Object(_.jsx)(W,{children:c})]})})},Y=n(16),Z=O.c.div(A||(A=Object(v.a)(["\n  padding: 0 10px;\n"]))),$=function(e){var t=e.nowPlaying,n=e.upComing,r=e.popular,a=e.error,i=e.loading;return Object(_.jsxs)(_.Fragment,{children:[" ",Object(_.jsx)(Y.a,{children:Object(_.jsx)("title",{children:"Movies | Nomfilx-r"})}),i?Object(_.jsx)(q,{}):Object(_.jsxs)(Z,{children:[t&&t.length>0&&Object(_.jsx)(V,{title:"Now Playing",children:t.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(_.jsx)(V,{title:"UpComing",children:n.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),r&&r.length>0&&Object(_.jsx)(V,{title:"Popular",children:r.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),a&&Object(_.jsx)(L,{color:"#e74c3c",text:a})]})]})},ee=n(46),te=n.n(ee).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6fe05069d5908bc6d368589e832ee0b5",language:"en-US"}});te.get("tv/popular");var ne,re,ae,ie,ce,oe,se,le,ue=function(){return te.get("movie/now_playing")},de=function(){return te.get("movie/upcoming")},pe=function(){return te.get("movie/popular")},je=function(e){return te.get("movie/".concat(e),{params:{append_to_response:"videos"}})},he=function(e){return te.get("search/movie",{params:{query:encodeURIComponent(e)}})},be=function(){return te.get("tv/top_rated")},ge=function(){return te.get("tv/popular")},xe=function(){return te.get("tv/airing_today")},me=function(e){return te.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ve=function(e){return te.get("search/tv",{params:{query:encodeURIComponent(e)}})},Oe=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upComing:null,popular:null,error:null,loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,r,a,i,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue();case 3:return t=e.sent,n=t.data.results,e.next=7,de();case 7:return r=e.sent,a=r.data.results,e.next=11,pe();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upComing:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find Movie information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,r=e.popular,a=e.error,i=e.loading;return Object(_.jsx)($,{nowPlaying:t,upComing:n,popular:r,error:a,loading:i})}}]),n}(o.a.Component),fe=O.c.div(ne||(ne=Object(v.a)([""]))),ye=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Y.a,{children:Object(_.jsx)("title",{children:"TV | Nomfilx-r"})}),i?Object(_.jsx)(q,{}):Object(_.jsxs)(fe,{children:[t&&t.length>0&&Object(_.jsx)(V,{title:"Top Rated",children:t.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),r&&r.length>0&&Object(_.jsx)(V,{title:"Popular",children:r.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),n&&n.length>0&&Object(_.jsx)(V,{title:"Airing Today",children:n.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))}),a&&Object(_.jsx)(L,{color:"#e74c3c",text:a})]})]})},_e=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,r,a,i,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be();case 3:return t=e.sent,n=t.data.results,e.next=7,xe();case 7:return r=e.sent,a=r.data.results,e.next=11,ge();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,airingToday:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV information"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(_.jsx)(ye,{topRated:t,airingToday:n,popular:r,error:a,loading:i})}}]),n}(o.a.Component),we=O.c.div(re||(re=Object(v.a)(["\n  margin-top: 30px;\n  margin-left: 10px;\n"]))),ke=O.c.form(ae||(ae=Object(v.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Te=O.c.input(ie||(ie=Object(v.a)(["\n  all: unset;\n  font-size: 30px;\n  width: 100%;\n"]))),Se=function(e){var t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateTerm;return Object(_.jsxs)(we,{children:[Object(_.jsx)(Y.a,{children:Object(_.jsx)("title",{children:"Search | Nomfilx-r"})}),Object(_.jsx)(ke,{onSubmit:c,children:Object(_.jsx)(Te,{placeholder:"Search Movies or TV Shows...",value:r,onChange:o})}),i?Object(_.jsx)(q,{}):Object(_.jsxs)(_.Fragment,{children:[t&&t.length>0&&Object(_.jsx)(V,{title:"Movie Results",children:t.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0},e.id)}))}),n&&n.length>0&&Object(_.jsx)(V,{title:"TV Results",children:n.map((function(e){return Object(_.jsx)(X,{id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1},e.id)}))})]}),a&&Object(_.jsx)(L,{color:"#e74c3c",text:a}),n&&t&&0===t.length&&0===n.length&&Object(_.jsx)(L,{color:"#95a5a6",text:"Nothing Found for : ".concat(r)})]})},Re=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault(),""!=e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;console.log(n),e.setState({searchTerm:n})},e.searchByTerm=Object(m.a)(x.a.mark((function t(){var n,r,a,i,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,he(n);case 5:return r=t.sent,a=r.data.results,t.next=9,ve(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find result information"});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.error,i=e.loading;e.updateTerm;return console.log(this.state),Object(_.jsx)(Se,{movieResults:t,tvResults:n,searchTerm:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(o.a.Component),Me=O.c.header(ce||(ce=Object(v.a)(["\n  color: white;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  display: flex;\n  align-item: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.9);\n  z-index:10;\n"]))),Ce=O.c.ul(oe||(oe=Object(v.a)(["\n  display: flex;\n  &:hover {\n    backgrond-color: blue;\n  }\n"]))),Ue=O.c.li(se||(se=Object(v.a)(["\n  width: 80px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  border-bottom: 4px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"skyblue":"transparent"})),ze=Object(O.c)(h.b)(le||(le=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"])));var Ne,Pe,Ie,Fe,Ae,Ve,De,qe,Be,Ee=Object(b.g)((function(e){var t=e.location.pathname;return Object(_.jsx)(Me,{children:Object(_.jsxs)(Ce,{children:[Object(_.jsx)(Ue,{current:"/home"===t,children:Object(_.jsx)(ze,{to:"/home",children:"HOME"})}),Object(_.jsx)(Ue,{current:"/tv"===t,children:Object(_.jsx)(ze,{to:"/tv",children:"TV"})}),Object(_.jsx)(Ue,{current:"/search"===t,children:Object(_.jsx)(ze,{to:"/search",children:"SEARCH"})})]})})})),Le=O.c.div(Ne||(Ne=Object(v.a)(["\n  width: 80%;\n  height: calc(100vh - 80px);\n  padding: 50px;\n  margin: 0 auto;\n  @media screen and (max-width: 1024px) {\n    width: 100%;\n    padding: 30px;\n  }\n"]))),He=O.c.div(Pe||(Pe=Object(v.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  filter: blur(2px);\n  opacity: 0.5;\n  z-index: -1;\n"])),(function(e){return e.bgImg})),Je=O.c.div(Ie||(Ie=Object(v.a)(["\n  flex: 0.6;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n  @media screen and (max-width: 1024px) {\n    flex: 1;\n  }\n  @media screen and (max-width: 768px) {\n    flex: auto;\n    width: 40%;\n    margin: 0 auto;\n  }\n"])),(function(e){return e.bgImg})),Ge=O.c.div(Fe||(Fe=Object(v.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),Ke=O.c.div(Ae||(Ae=Object(v.a)(["\n  margin-left: 50px;\n  margin-top: 30px;\n  flex: 1;\n  @media screen and (max-width: 768px) {\n    margin-left: 0;\n  }\n"]))),Qe=O.c.div(Ve||(Ve=Object(v.a)(["\n  font-size: 32px;\n  line-height: 1.4;\n"]))),We=O.c.ul(De||(De=Object(v.a)(["\n  display: flex;\n  height: 40px;\n  align-items: center;\n  li {\n    &:not(:first-child) {\n      list-style: disc;\n      margin-left: 30px;\n    }\n  }\n"]))),Xe=O.c.p(qe||(qe=Object(v.a)(["\n  font-size: 15px;\n  text-align: justify;\n  line-height: 1.5;\n  margin-top: 20px;\n"]))),Ye=function(e){var t=e.result;e.error;return e.loading?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Y.a,{children:Object(_.jsx)("title",{children:"Loader | Nomfilx-r"})}),Object(_.jsx)(q,{})]}):Object(_.jsxs)(Le,{children:[Object(_.jsx)(Y.a,{children:Object(_.jsxs)("title",{children:[t.original_title?t.original_title:t.original_name," | Nomfilx-r"]})}),Object(_.jsx)(He,{bgImg:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(_.jsxs)(Ge,{children:[Object(_.jsx)(Je,{bgImg:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30)}),Object(_.jsxs)(Ke,{children:[Object(_.jsx)(Qe,{children:t.original_title?t.original_title:t.original_name}),Object(_.jsxs)(We,{children:[Object(_.jsx)("li",{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(_.jsxs)("li",{children:[t.runtime?t.runtime:t.episode_run_time[0]," min"]}),Object(_.jsxs)("li",{children:[t.vote_average," / 10 "]}),Object(_.jsxs)("li",{children:["\ud83d\udc4d ",t.vote_count]})]}),Object(_.jsx)(Xe,{children:t.overview})]})]})]})},Ze=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var r;Object(u.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(x.a.mark((function e(){var t,n,r,a,i,c,o,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,je(i);case 10:o=e.sent,c=o.data,e.next=18;break;case 14:return e.next=16,me(i);case 16:s=e.sent,c=s.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything"});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(_.jsx)(Ye,{result:t,error:n,loading:r})}}]),n}(o.a.Component),$e=function(){return Object(_.jsxs)(h.a,{children:[Object(_.jsx)(Ee,{}),Object(_.jsxs)(b.d,{children:[Object(_.jsx)(b.b,{path:"https://floraroh.github.io/home",exact:!0,component:Oe}),Object(_.jsx)(b.b,{path:"https://floraroh.github.io/search",component:Re}),Object(_.jsx)(b.b,{path:"https://floraroh.github.io/tv",exact:!0,component:_e}),Object(_.jsx)(b.b,{path:"https://floraroh.github.io/movie/:id",component:Ze}),Object(_.jsx)(b.b,{path:"https://floraroh.github.io/tv/:id",component:Ze}),Object(_.jsx)(b.a,{from:"*",to:"https://floraroh.github.io/home"})]})]})},et=n(47),tt=Object(O.a)(Be||(Be=Object(v.a)(["\n  ",";\n  a{\n    text-decoration:none;\n    color:inherit;\n  }\n  *{\n    box-sizing:border-box;\n  }\n  body{\n    font-size:14px;\n    background-color:rgba(20,20,20,1);\n    color:white;\n  }\n"])),et.a),nt=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($e,{}),Object(_.jsx)(tt,{})]})}}]),n}(c.Component);l.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(nt,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.d311bc18.chunk.js.map