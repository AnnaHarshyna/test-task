(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{65:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=(a(65),a(15)),o=a(32),l=a.n(o),d=a(41),j=function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("https://jsonplaceholder.typicode.com/posts/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=(a(67),[a.p+"static/media/1.b8b10899.jpg",a.p+"static/media/2.2de20ff1.jpg",a.p+"static/media/3.ddbc9da8.jpg",a.p+"static/media/4.136a23b0.jpg",a.p+"static/media/5.1796def9.jpg",a.p+"static/media/6.aeeb7d93.jpg",a.p+"static/media/7.5ea61f50.jpg",a.p+"static/media/8.539853c0.jpg"]),p=a(42),m=a(5),h=function(e){var t=e.slides,a=Object(n.useState)(0),c=Object(s.a)(a,2),i=c[0],r=c[1],o=t.length;return!Array.isArray(t)||t.length<=0?null:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{class:"title",children:"Types of sports (in carousel):"}),Object(m.jsxs)("section",{className:"slider",children:[Object(m.jsx)(p.a,{className:"left-arrow",onClick:function(){r(0===i?o-1:i-1)}}),Object(m.jsx)(p.b,{className:"right-arrow",onClick:function(){r(i===o-1?0:i+1)}}),b.map((function(e,t){return Object(m.jsx)("div",{className:t===i?"slide active":"slide",children:t===i&&Object(m.jsx)("img",{src:e,alt:"sport image",className:"image"})},t)}))]})]})},O=a(52),x=a(109),f=a(54),g=a(111),v=a(121),y=a(123),C=a(112),k=a(113),w=a(120),N=a(114),S=a(115),F=a(116),T=a(117),B=a(118),P=a(119),z=a(106),A=Object(z.a)((function(e){return{mainFeaturesPost:{position:"relative",color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturesPostContent:{position:"relative",padding:e.spacing(6),marginTop:e.spacing(6)},cardMedia:{paddingTop:"55%"},cardContent:{flexGrow:1},cardGrid:{marginTop:e.spacing(4)}}})),L=function(e){var t=e.postsList,a=A(),c=Object(n.useState)(""),i=Object(s.a)(c,2),r=i[0],o=i[1],l=Object(n.useState)(""),d=Object(s.a)(l,2),j=d[0],u=d[1],b=Object(n.useState)(t),p=Object(s.a)(b,2),h=p[0],z=p[1],L=Object(n.useState)(!1),R=Object(s.a)(L,2),W=R[0],E=R[1],G=Object(n.useState)(!1),I=Object(s.a)(G,2),M=I[0],q=I[1],D=function(){E(!1)},J=Object(n.useCallback)((function(e){var t=h.filter((function(t){return t!==e}));z(t),q(!1)}),[h]),H=Object(n.useCallback)((function(e){e.preventDefault();var t={title:r,body:j};if(""!==r||""!==j){var a=[].concat(Object(O.a)(h),[t]);z(a),E(!1),o(""),u("")}}),[h]),K=function(e){console.log(e),q(!0)},Q=function(){q(!1)};return Object(m.jsxs)("main",{children:[Object(m.jsx)("div",{className:a.mainContent,children:Object(m.jsxs)(x.a,{maxWidth:"sm",children:[Object(m.jsx)(f.a,{variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Posts list"}),Object(m.jsx)("div",{className:a.mainButtons,children:Object(m.jsx)(g.a,{container:!0,spacing:3,justify:"center",children:Object(m.jsxs)(g.a,{item:!0,children:[Object(m.jsx)(v.a,{variant:"contained",color:"primary",onClick:function(){E(!0)},children:"Add post"}),Object(m.jsxs)(y.a,{open:W,onClose:D,"aria-labelledby":"form-dialog-title-add",children:[Object(m.jsx)(C.a,{id:"add-dialog-title",children:"Add post"}),Object(m.jsxs)(k.a,{children:[Object(m.jsx)(w.a,{required:!0,autoFocus:!0,margin:"dense",id:"name",label:"Title",type:"text",value:r,onChange:function(e){o(e.target.value)},fullWidth:!0}),Object(m.jsx)(w.a,{required:!0,margin:"dense",id:"description",label:"Body",type:"text",value:j,onChange:function(e){u(e.target.value)},fullWidth:!0,multiline:!0})]}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)(v.a,{size:"small",onClick:H,color:"primary",children:"Save"}),Object(m.jsx)(v.a,{size:"small",onClick:D,color:"secondary",children:"Cancel"})]})]})]})})})]})}),Object(m.jsx)(x.a,{className:a.cardGrid,maxWidth:"md",children:Object(m.jsx)(g.a,{container:!0,spacing:4,children:h.map((function(e){return Object(m.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsxs)(S.a,{className:a.card,children:[Object(m.jsx)(F.a,{className:a.cardMedia,image:"https://picsum.photos/200/300",title:"Image title"}),Object(m.jsxs)(T.a,{className:a.cardContent,children:[Object(m.jsx)(f.a,{variant:"h6",gutterBottom:!0,color:"primary",children:e.title}),Object(m.jsx)(f.a,{children:e.body})]}),Object(m.jsxs)(B.a,{children:[Object(m.jsx)(v.a,{size:"small",color:"secondary",onClick:K,children:"Remove"}),Object(m.jsxs)(y.a,{open:M,onClose:Q,"aria-labelledby":"form-dialog-title",children:[Object(m.jsx)(C.a,{id:"remove-dialog-title",children:"Remove the post"}),Object(m.jsx)(k.a,{children:Object(m.jsx)(P.a,{children:"Are you sure you want to remove the post?"})}),Object(m.jsxs)(N.a,{children:[Object(m.jsx)(v.a,{size:"small",color:"secondary",onClick:function(){return J(e)},children:"Remove"}),Object(m.jsx)(v.a,{size:"small",onClick:Q,color:"primary",children:"Cancel"})]})]})]})]})},e)}))})})]})},R=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u().then((function(e){c(e)}))}),[]),a.length>0?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(L,{postsList:a}),Object(m.jsx)(h,{slides:b})]}):null},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),W()}},[[74,1,2]]]);
//# sourceMappingURL=main.cfc8f1e9.chunk.js.map