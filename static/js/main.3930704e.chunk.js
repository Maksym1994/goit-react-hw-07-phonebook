(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={itemText:"ContactList_itemText__2t32d",contactItem:"ContactList_contactItem__3qyel",itemName:"ContactList_itemName__twZbt",deleteBtn:"ContactList_deleteBtn__2sTjl"}},20:function(t,e,n){t.exports={titleFilter:"Filter_titleFilter__lUKnI",inputFilter:"Filter_inputFilter__15Eit"}},21:function(t,e,n){t.exports={title:"App_title__1DDsC"}},37:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),i=(n(37),n(7)),o=n(22),s=n(9),l=n.n(s),b=n(4),j=n.n(b),f=n(8),p=n(3),d=n(11),m=n.n(d);function O(){return h.apply(this,arguments)}function h(){return(h=Object(f.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(j.a.mark((function t(e){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("contacts",e);case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m.a.defaults.baseURL="https://616ae77016e7120017fa112d.mockapi.io/api/v1/";var g=Object(p.c)("contacts/getContacts",Object(f.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),C=Object(p.c)("contacts/addContacts",function(){var t=Object(f.a)(j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),N=Object(p.c)("contacts/deleteContacts",function(){var t=Object(f.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=n(1);var F=function(){var t=Object(i.b)(),e=Object(a.useState)(""),n=Object(o.a)(e,2),r=n[0],c=n[1],u=Object(a.useState)(""),s=Object(o.a)(u,2),b=s[0],j=s[1],f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"phone":j(a)}},p=function(){c(""),j("")};return Object(w.jsxs)("form",{className:l.a.form,onSubmit:function(e){e.preventDefault(),function(e,n){t(C({name:e,phone:n}))}(r,b),p()},children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("h2",{className:l.a.labelTitle,children:"Name"}),Object(w.jsx)("input",{className:l.a.input,value:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("h2",{className:l.a.labelTitle,children:"Number"}),Object(w.jsx)("input",{className:l.a.input,value:b,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:f})]}),Object(w.jsx)("button",{className:l.a.button,type:"submit",children:"Add to contacts"})]})},k=n(16),L=function(t){return t.contacts.filter},T=Object(k.a)([function(t){return t.contacts.items},L],(function(t,e){var n=e.toLowerCase().trim();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),A=n(12),B=n.n(A),D=function(){var t=Object(i.c)(T),e=Object(i.b)();return Object(a.useEffect)((function(){e(g())}),[e]),Object(w.jsx)("ul",{children:t.map((function(t){var n=t.id,a=t.name,r=t.phone;return Object(w.jsxs)("li",{className:B.a.contactItem,children:[Object(w.jsxs)("p",{className:B.a.itemName,children:["Name: ",a]}),Object(w.jsxs)("p",{className:B.a.itemName,children:["Number: ",r]}),Object(w.jsx)("button",{className:B.a.deleteBtn,type:"button",onClick:function(){return function(t){return e(N(t))}(n)},children:"Delete"})]},n)}))})},I=Object(p.b)("contacts/changeFilter"),S=n(20),z=n.n(S),Z=function(){var t=Object(i.c)(L),e=Object(i.b)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h3",{className:z.a.titleFilter,children:"Find contacts by name"}),Object(w.jsx)("input",{className:z.a.inputFilter,type:"text",value:t,onChange:function(t){return e(I(t.target.value))}})]})},q=n(21),E=n.n(q);var J,K,M,P=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{className:E.a.title,children:"Phonebook"}),Object(w.jsx)(F,{}),Object(w.jsx)(Z,{}),Object(w.jsx)("h2",{className:E.a.title,children:"Contacts"}),Object(w.jsx)(D,{})]})},U=n(2),W=n(32),R=n(6),Y=Object(p.d)([],(J={},Object(U.a)(J,g.fulfilled,(function(t,e){return e.payload})),Object(U.a)(J,C.fulfilled,(function(t,e){var n=e.payload;return t.some((function(t){return t.name.toLowerCase()===n.name}))?(alert("".concat(n.name," is already in contacts")),t):[].concat(Object(W.a)(t),[n])})),Object(U.a)(J,N.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),J)),$=Object(p.d)("",Object(U.a)({},I,(function(t,e){return e.payload}))),G=Object(p.d)(!1,(K={},Object(U.a)(K,g.pending,(function(){return!0})),Object(U.a)(K,g.fulfilled,(function(){return!1})),Object(U.a)(K,g.rejected,(function(){return!1})),Object(U.a)(K,C.fulfilled,(function(){return!1})),Object(U.a)(K,C.pending,(function(){return!0})),Object(U.a)(K,C.rejected,(function(){return!1})),Object(U.a)(K,N.fulfilled,(function(){return!1})),Object(U.a)(K,N.pending,(function(){return!0})),Object(U.a)(K,N.rejected,(function(){return!1})),K)),H=Object(p.d)(null,(M={},Object(U.a)(M,g.rejected,(function(t,e){return e.payload.message})),Object(U.a)(M,g.pending,(function(){return null})),Object(U.a)(M,C.pending,(function(){return null})),Object(U.a)(M,C.rejected,(function(t,e){return e.payload.message})),Object(U.a)(M,N.pending,(function(){return null})),Object(U.a)(M,N.rejected,(function(t,e){return e.payload.message})),M)),Q=Object(R.b)({items:Y,loading:G,error:H,filter:$}),V=Object(p.a)({reducer:{contacts:Q},devTools:!1});u.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{store:V,children:Object(w.jsx)(P,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__DxYS7",input:"ContactForm_input__3tbFf",labelTitle:"ContactForm_labelTitle__29PWF",button:"ContactForm_button__K7CBW"}}},[[64,1,2]]]);
//# sourceMappingURL=main.3930704e.chunk.js.map