(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),o=n.n(i),r=(n(10),n(3)),l=n(0),s=function(e){var t=e.emojis,n=e.backgroundColor,c=e.scaling,i=Object(a.useRef)(null),o=window.innerWidth/t[0].length*c,r=window.innerHeight/t.length*c;return Object(a.useEffect)((function(){return function(e){e.fillStyle=n,e.fillRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="#000000";var a=e.canvas.width/(1.25*t[0].length);e.font=a+"px serif";for(var c=0;c<t.length;c++)e.fillText(t[c],0,c*r),console.log(t[c]);e.fill()}(i.current.getContext("2d")),function(){window.cancelAnimationFrame(undefined)}})),Object(l.jsxs)("div",{children:[Object(l.jsx)("canvas",{ref:i,width:t[0].length*o+"px",height:t.length*r+"px"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){!function(){var e=document.createElement("a");e.download="emoji.png",e.href=i.current.toDataURL(),e.click()}()},children:"Download Image"})]})},u=n(2),j=n.n(u);var p=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(null),o=Object(r.a)(i,2),u=o[0],p=o[1],d=Object(a.useState)("#fff"),f=Object(r.a)(d,2),g=f[0],h=f[1],b=Object(a.useState)(.75),m=Object(r.a)(b,2),O=m[0],x=m[1];return Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsx)("h1",{children:"Image to emojiImage"}),Object(l.jsxs)("div",{className:j.a.app,children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("image",n);fetch("https://emagecreator.herokuapp.com/convert",{method:"POST",headers:{enctype:"multipart/form-data"},body:t}).then((function(e){e.json().then((function(e){e.success&&p(e.emojis)}))})).catch((function(e){return console.log(e)}))},className:j.a.imageUpload,children:[Object(l.jsx)("input",{type:"file",onChange:function(e){return c(e.target.files[0])},name:"image"}),Object(l.jsx)("input",{type:"submit",value:"Upload image"})]}),n&&Object(l.jsx)("img",{src:URL.createObjectURL(n),class:j.a.image,alt:"uploaded"}),Object(l.jsxs)("div",{className:j.a.inputs,children:[Object(l.jsxs)("p",{children:["Hex Background color: ",Object(l.jsx)("input",{type:"text",onChange:function(e){return t=e.target.value,void(/^#([A-Fa-f0-9]{6})$/.test(t)&&h(t));var t},placeholder:"#000000"})]}),Object(l.jsxs)("p",{children:["Scale: ",Object(l.jsx)("input",{type:"number",onChange:function(e){return function(e){e>0&&e<=1&&x(e)}(e.target.value)},placeholder:"0.75"})," (0 - 1)"]})]})]}),u&&Object(l.jsx)(s,{emojis:u,backgroundColor:g,scaling:O})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),d()},2:function(e,t,n){e.exports={app:"app_app__1gXNt",imageUpload:"app_imageUpload__3m10J",image:"app_image__1aEpj",inputs:"app_inputs__20uYk"}}},[[12,1,2]]]);
//# sourceMappingURL=main.fccfbcb4.chunk.js.map