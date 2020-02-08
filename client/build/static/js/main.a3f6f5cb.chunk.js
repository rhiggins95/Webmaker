(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,a,t){e.exports=t(61)},36:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),s=(t(36),t(1)),m=t(10),i=t(2),o=t.n(i),u=t(3),d=t(4),b=t.n(d);function p(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),p=d[0],E=d[1],f=Object(m.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){var a,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,o.a.awrap(b.a.get("/api/user?username=".concat(c,"&password=").concat(p)));case 3:a=n.sent,(t=a.data)?f.push("/user/".concat(t._id)):alert("Invalid Credential");case 6:case"end":return n.stop()}}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username",value:c,onChange:function(e){l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:p,onChange:function(e){E(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Login"),r.a.createElement(s.b,{className:"btn btn-success btn-block",to:"/register"},"Register")))}function E(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),p=d[0],E=d[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),v=g[0],h=g[1],N=Object(m.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",{onSubmit:function(e){var a,t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),p===v){n.next=4;break}return alert("The passwords you entered don't match, please try it again"),n.abrupt("return");case 4:return n.next=6,o.a.awrap(b.a.get("/api/user?username=".concat(c)));case 6:if(!n.sent.data){n.next=10;break}return alert("Username is taken, please try another one"),n.abrupt("return");case 10:return a={username:c,password:p,firstName:"",lastName:"",email:""},n.next=13,o.a.awrap(b.a.post("/api/user",a));case 13:t=n.sent,N.push("/user/".concat(t.data._id));case 15:case"end":return n.stop()}}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Username",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:p,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Verify Password",value:v,onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"Register"),r.a.createElement(s.b,{to:"/login",className:"btn btn-danger btn-block"},"Cancel")))}function f(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),p=d[0],E=d[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),v=g[0],h=g[1],N=Object(n.useState)(""),w=Object(u.a)(N,2),x=w[0],y=w[1],O=Object(n.useState)(""),j=Object(u.a)(O,2),k=j[0],C=j[1],F=Object(m.g)();Object(n.useEffect)((function(){!function(){var e,a;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/user/".concat(F.uid)));case 2:e=t.sent,a=e.data,l(a.username),E(a.email),h(a.firstName),y(a.lastName),C(a.password);case 9:case"end":return t.stop()}}))}()}),[]);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar bg-primary navbar-dark fixed-top"},r.a.createElement("span",{className:"navbar-brand h1 mb-0"},"Profile"),r.a.createElement("span",{className:"click",onClick:function(){var e;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={_id:F.uid,username:c,password:k,email:p,firstName:v,lastName:x},a.next=3,o.a.awrap(b.a.put("/api/user",e));case 3:alert("user info is updated!");case 4:case"end":return a.stop()}}))}},r.a.createElement("i",{className:"fas fa-check text-light"}))),r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username here...",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email here...",value:p,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"firstName",placeholder:"Enter your first name...",value:v,onChange:function(e){return h(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Enter your last name...",value:x,onChange:function(e){return y(e.target.value)}}))),r.a.createElement(s.b,{to:"/user/".concat(F.uid,"/website"),className:"btn btn-primary btn-block"},"Websites"),r.a.createElement(s.b,{className:"btn btn-danger btn-block",to:"/login"},"Logout")),r.a.createElement("nav",{className:"navbar bg-primary fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{className:"text-light",to:"/user/:uid"},r.a.createElement("i",{className:"fas fa-user"}))))}function g(e){var a=Object(m.g)(),t=Object(n.useState)([]),c=Object(u.a)(t,2),l=c[0],i=c[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/website/user/".concat(a.uid)));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"Websites")),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid,"/website/new")},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-group list-group-flush"},l.map((function(e){return r.a.createElement("li",{key:e._id,className:"list-group-item"},r.a.createElement(s.b,{to:"/user/".concat(e.developerId,"/website/").concat(e._id,"/page")},e.name),r.a.createElement(s.b,{className:"float-right",to:"/user/".concat(e.developerId,"/website/").concat(e._id)},r.a.createElement("i",{className:"fas fa-cog"})))})))),r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}function v(e){var a=Object(m.g)(),t=Object(m.f)(),c=Object(n.useState)([]),l=Object(u.a)(c,2),i=l[0],d=l[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),f=E[0],g=E[1],v=Object(n.useState)(""),h=Object(u.a)(v,2),N=h[0],w=h[1];Object(n.useEffect)((function(){x()}),[]);var x=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/website/user/".concat(a.uid)));case 2:e=t.sent,d(e.data);case 4:case"end":return t.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top row"},r.a.createElement("div",{className:"col-lg-3 d-none d-lg-block"},r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid,"/website")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"Websites")),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid,"/website/new")},r.a.createElement("i",{className:"fas fa-plus"})))),r.a.createElement("div",{className:"col-lg-9 navbar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-light d-lg-none ",to:"/user/".concat(a.uid,"/website")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"New Website")),r.a.createElement("button",{className:"text-light btn",form:"websiteForm"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("main",{className:"row"},r.a.createElement("aside",{className:"col-lg-3 d-none d-lg-block"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-group list-group-flush"},i.map((function(e){return r.a.createElement("li",{key:e._id,className:"list-group-item"},r.a.createElement(s.b,{to:"/user/".concat(e.developerId,"/website/").concat(e._id,"/page")},e.name),r.a.createElement(s.b,{className:"float-right",to:"/user/".concat(e.developerId,"/website/").concat(e._id)},r.a.createElement("i",{className:"fas fa-cog"})))}))))),r.a.createElement("section",{className:"col-lg-9"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={name:f,description:N,developerId:a.uid},r.next=4,o.a.awrap(b.a.post("/api/website",n));case 4:t.push("/user/".concat(a.uid,"/website"));case 5:case"end":return r.stop()}}))},id:"websiteForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",placeholder:"Enter website name...",value:f,onChange:function(e){return g(e.target.value)},className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"form-control",placeholder:"Enter website description...",rows:5,value:N,onChange:function(e){return w(e.target.value)}})))))),r.a.createElement("footer",{className:"navbar navbar-dark bg-primary fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}function h(e){var a=Object(m.g)(),t=Object(m.f)(),c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],d=l[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),f=E[0],g=E[1],v=Object(n.useState)([]),h=Object(u.a)(v,2),N=h[0],w=h[1];Object(n.useEffect)((function(){x(),y()}),[a.wid]);var x=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/website/user/".concat(a.uid)));case 2:e=t.sent,w(e.data);case 4:case"end":return t.stop()}}))},y=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/website/".concat(a.wid)));case 2:e=t.sent,d(e.data.name),g(e.data.description);case 5:case"end":return t.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-top row"},r.a.createElement("div",{className:"col-lg-3 d-none d-lg-block"},r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid,"/website")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"Websites")),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid,"/website/new")},r.a.createElement("i",{className:"fas fa-plus"})))),r.a.createElement("div",{className:"col-lg-9 navbar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-light d-lg-none ",to:"/user/".concat(a.uid,"/website")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"Edit Website")),r.a.createElement("button",{className:"text-light btn",form:"websiteForm"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 d-none d-lg-block"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"list-group list-group-flush"},N.map((function(e){return r.a.createElement("li",{key:e._id,className:"list-group-item"},r.a.createElement(s.b,{to:"/user/".concat(e.developerId,"/website/").concat(e._id,"/page")},e.name),r.a.createElement(s.b,{className:"float-right",to:"/user/".concat(e.developerId,"/website/").concat(e._id)},r.a.createElement("i",{className:"fas fa-cog"})))}))))),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{id:"websiteForm",onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={_id:a.wid,name:i,description:f,developerId:a.uid},r.next=4,o.a.awrap(b.a.put("/api/website",n));case 4:t.push("/user/".concat(a.uid,"/website"));case 5:case"end":return r.stop()}}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",placeholder:"Enter website name...",id:"name",className:"form-control",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"form-control",placeholder:"Enter website description...",rows:5,value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement("button",{type:"button",onClick:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(b.a.delete("/api/website/".concat(a.wid)));case 2:t.push("/user/".concat(a.uid,"/website"));case 3:case"end":return e.stop()}}))},className:"btn btn-danger btn-block"},"Delete"))))),r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{className:"text-light",to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}function N(e){var a=Object(m.g)(),t=Object(n.useState)([]),c=Object(u.a)(t,2),l=c[0],i=c[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/page/website/".concat(a.wid)));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar bg-light navbar-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand mb-0 h1 ml-4"},"Pages")),r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/new"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("main",{className:"container"},r.a.createElement("ul",{className:"list-group list-group-flush"},l.map((function(e){return r.a.createElement("li",{className:"list-group-item",key:e._id},r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(e._id,"/widget")},e.name),r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(e._id),className:"float-right"},r.a.createElement("i",{className:"fas fa-cog"})))})))),r.a.createElement("footer",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(a.uid),className:"text-dark"},r.a.createElement("i",{className:"fas fa-user"}))))}function w(e){var a=Object(m.f)(),t=Object(m.g)(),c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],d=l[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),f=E[0],g=E[1];return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(t.uid,"/website/").concat(t.wid,"/page"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 ml-4 mb-0"},"New Page")),r.a.createElement("button",{className:"text-dark btn",form:"pageForm"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement("main",{className:"container"},r.a.createElement("form",{id:"pageForm",onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={name:i,title:f,websiteId:t.wid},r.next=4,o.a.awrap(b.a.post("/api/page",n));case 4:a.push("/user/".concat(t.uid,"/website/").concat(t.wid,"/page"));case 5:case"end":return r.stop()}}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter page name...",id:"name",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter page title...",id:"title",value:f,onChange:function(e){return g(e.target.value)}})))),r.a.createElement("span",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(t.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}function x(e){var a=Object(m.f)(),t=Object(m.g)(),c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],d=l[1],p=Object(n.useState)(""),E=Object(u.a)(p,2),f=E[0],g=E[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var e,a;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.awrap(b.a.get("/api/page/".concat(t.pid)));case 2:e=n.sent,a=e.data,d(a.name),g(a.title);case 6:case"end":return n.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-dark",to:"/user/".concat(t.uid,"/website/").concat(t.wid,"/page")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Edit Page")),r.a.createElement("button",{className:"text-dark btn",form:"pageForm"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement("main",{className:"container"},r.a.createElement("form",{id:"pageForm",onSubmit:function(e){var n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),n={_id:t.pid,name:i,title:f,websiteId:t.wid},r.next=4,o.a.awrap(b.a.put("/api/page",n));case 4:a.push("/user/".concat(t.uid,"/website/").concat(t.wid,"/page"));case 5:case"end":return r.stop()}}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Enter page name...",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",className:"form-control",id:"title",placeholder:"Enter page title...",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement("button",{className:"btn btn-block btn-danger",type:"button",onClick:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(b.a.delete("/api/page/".concat(t.pid)));case 2:a.push("/user/".concat(t.uid,"/website/").concat(t.wid,"/page"));case 3:case"end":return e.stop()}}))}},"Delete"))),r.a.createElement("footer",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(t.uid),className:"text-dark"},r.a.createElement("i",{className:"fas fa-user"}))))}function y(e){var a=Object(m.g)(),t=Object(n.useState)([]),c=Object(u.a)(t,2),l=c[0],i=c[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/widget/page/".concat(a.pid)));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-dark",to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Widgets")),r.a.createElement(s.b,{className:"text-dark",to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget/new")},r.a.createElement("i",{className:"fas fa-plus"}))),r.a.createElement("main",{className:"container-fluid"},l.map((function(e){return r.a.createElement("section",{key:e._id},r.a.createElement("div",{className:"position-absolute absolute-right p-1 bg-light rounded-left front"},r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget/").concat(e._id)},r.a.createElement("i",{className:"fas fa-cog"})),r.a.createElement("i",{className:"fas fa-bars"})),"HEADING"===e.widgetType&&r.a.createElement("div",null,"1"===e.size&&r.a.createElement("h1",null,e.text),"2"===e.size&&r.a.createElement("h2",null,e.text),"3"===e.size&&r.a.createElement("h3",null,e.text),"4"===e.size&&r.a.createElement("h4",null,e.text),"5"===e.size&&r.a.createElement("h5",null,e.text),"6"===e.size&&r.a.createElement("h6",null,e.text)),"IMAGE"===e.widgetType&&r.a.createElement("div",null,r.a.createElement("img",{src:e.url,width:e.width,alt:e.url})),"YOUTUBE"===e.widgetType&&r.a.createElement("div",{style:{width:e.width},className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{src:e.url,title:"video",frameBorder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}))),r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-play"}),r.a.createElement("i",{className:"fas fa-eye ml-2"})),r.a.createElement(s.b,{className:"text-dark",to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}function O(e){var a=Object(m.g)(),t=Object(m.f)(),n=function(e){var n,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n={widgetType:e,pageId:a.pid},c.next=3,o.a.awrap(b.a.post("/api/widget",n));case 3:r=c.sent,t.push("/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget/").concat(r.data._id));case 5:case"end":return c.stop()}}))};return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Choose Widget"))),r.a.createElement("main",{className:"container"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("button",{onClick:n.bind(this,"HEADING"),className:"btn"},"Header")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Label")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"HTML")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Text Input")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Link")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Button")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("button",{className:"btn",onClick:n.bind(this,"IMAGE")},"Image")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("button",{className:"btn",onClick:n.bind(this,"YOUTUBE")},"YouTube")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Data Table")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:"!#"},"Repeater")))),r.a.createElement("footer",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(a.uid)},r.a.createElement("i",{className:"fas fa-user"}))))}var j=t(13),k=t(30);function C(e){var a=Object(m.g)();return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar bg-light navbar-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{className:"text-dark",to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget")},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Edit Widget")),r.a.createElement("button",{className:"text-dark btn",form:"widgetForm"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement("main",{className:"container"},r.a.createElement("form",{id:"widgetForm",onSubmit:e.update},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Widget Name...",id:"name",name:"name",value:e.widget.name?e.widget.name:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Widget Text",id:"text",name:"text",value:e.widget.text?e.widget.text:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"Size"),r.a.createElement("input",{type:"range",min:1,max:6,className:"form-control",id:"size",name:"size",value:e.widget.size?e.widget.size:"1",onChange:e.onChange})),r.a.createElement("button",{type:"button",onClick:e.remove,className:"btn btn-danger btn-block"},"Delete"))),r.a.createElement("footer",{className:"navbar navbar-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(a.uid),className:"text-dark"},r.a.createElement("i",{className:"fas fa-user"}))))}function F(e){var a=Object(m.g)();return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Edit Widget")),r.a.createElement("button",{className:"text-dark btn",form:"widgetForm"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement("main",{className:"container"},r.a.createElement("form",{id:"widgetForm",onSubmit:e.update},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter widget name...",name:"name",value:e.widget.name?e.widget.name:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",className:"form-control",id:"text",placeholder:"Enter Widget text...",name:"text",value:e.widget.text?e.widget.text:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"url",placeholder:"Enter image address...",name:"url",value:e.widget.url?e.widget.url:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"width"},"Width"),r.a.createElement("input",{type:"range",className:"form-control",min:1,max:100,id:"width",name:"width",value:e.widget.width?e.widget.width:"100",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"upload"},"Upload"),r.a.createElement("input",{type:"file",className:"form-control",id:"upload"})),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block"},"Upload Image"),r.a.createElement("button",{className:"btn btn-danger btn-block",onClick:e.remove},"Delete"))),r.a.createElement("footer",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(a.uid),className:"text-dark"},r.a.createElement("i",{className:"fas fa-user"}))))}function S(e){var a=Object(m.g)();return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-light fixed-top"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget"),className:"text-dark"},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("span",{className:"navbar-brand h1 mb-0 ml-4"},"Edit Widget")),r.a.createElement("button",{className:"text-dark btn",form:"widgetForm"},r.a.createElement("i",{className:"fas fa-check"}))),r.a.createElement("main",{className:"container"},r.a.createElement("form",{id:"widgetForm",onSubmit:e.update},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter widget name...",name:"name",value:e.widget.name?e.widget.name:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",className:"form-control",id:"text",placeholder:"Enter Widget text...",name:"text",value:e.widget.text?e.widget.text:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"url"},"URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"url",placeholder:"Enter image address...",name:"url",value:e.widget.url?e.widget.url:"",onChange:e.onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"width"},"Width"),r.a.createElement("input",{type:"range",className:"form-control",min:1,max:100,id:"width",name:"width",value:e.widget.width?e.widget.width:"100%",onChange:e.onChange})),r.a.createElement("button",{onClick:e.remove,type:"button",className:"btn btn-danger btn-block"},"Delete"))),r.a.createElement("footer",{className:"navbar navbar-light bg-light fixed-bottom"},r.a.createElement("span",null),r.a.createElement(s.b,{to:"/user/".concat(a.uid),className:"text-dark"},r.a.createElement("i",{className:"fas fa-user"}))))}function T(e){var a=Object(m.g)(),t=Object(m.f)(),c=Object(n.useState)({}),l=Object(u.a)(c,2),s=l[0],i=l[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a.get("/api/widget/".concat(a.wgid)));case 2:e=t.sent,i(e.data);case 4:case"end":return t.stop()}}))},p=function(e){i(Object(k.a)({},s,Object(j.a)({},e.target.name,e.target.value)))},E=function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(b.a.delete("/api/widget/".concat(a.wgid)));case 2:t.push("/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget"));case 3:case"end":return e.stop()}}))},f=function(e){var n,r;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),"HEADING"!==(n=s).widgetType||s.size||(s.size="1"),"IMAGE"!==n.widgetType&&"YOUTUBE"!==n.widgetType||(n.width?n.width+="%":n.width="100%"),"YOUTUBE"===n.widgetType&&(r=n.url.split("/"),n.url="https://www.youtube.com/embed/"+r[r.length-1]),c.next=7,o.a.awrap(b.a.put("/api/widget",n));case 7:t.push("/user/".concat(a.uid,"/website/").concat(a.wid,"/page/").concat(a.pid,"/widget"));case 8:case"end":return c.stop()}}))};return"HEADING"===s.widgetType?r.a.createElement(C,{widget:s,onChange:p,remove:E,update:f}):"IMAGE"===s.widgetType?r.a.createElement(F,{widget:s,onChange:p,remove:E,update:f}):"YOUTUBE"===s.widgetType?r.a.createElement(S,{widget:s,onChange:p,remove:E,update:f}):r.a.createElement("div",null)}var I=function(){return r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/login"},r.a.createElement(p,null)),r.a.createElement(m.a,{exact:!0,path:"/register"},r.a.createElement(E,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid"},r.a.createElement(f,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website"},r.a.createElement(g,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/new"},r.a.createElement(v,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid"},r.a.createElement(h,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page"},r.a.createElement(N,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page/new"},r.a.createElement(w,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page/:pid"},r.a.createElement(x,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page/:pid/widget"},r.a.createElement(y,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page/:pid/widget/new"},r.a.createElement(O,null)),r.a.createElement(m.a,{exact:!0,path:"/user/:uid/website/:wid/page/:pid/widget/:wgid"},r.a.createElement(T,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(p,null))))};l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.a3f6f5cb.chunk.js.map