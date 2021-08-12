(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(6),i=n.n(o),s=n(4),b=n(3),l=n(13),u=n.n(l),d=n(8),j=n(14),m=n(2),h=n(32),O=Object(b.b)("phonebook/addContact",(function(e){return{payload:{name:e.name,number:e.number,id:Object(h.a)()}}})),f=Object(b.b)("phonebook/deleteContact"),p=Object(b.b)("phonebook/filterContacts"),x=Object(b.c)([],(a={},Object(d.a)(a,O,(function(e,t){return[].concat(Object(j.a)(e),[t.payload])})),Object(d.a)(a,f,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),g=Object(b.c)("",Object(d.a)({},p,(function(e,t){return t.payload}))),v=Object(m.b)({items:x,filter:g}),C=Object(b.a)({reducer:{contacts:v},middleware:function(e){return e().concat(u.a)}}),k=(n(24),n(12)),N=(n(25),n(26),n(1));function y(e){var t=e.name,n=e.number,a=e.handleChange,c=e.handleSubmit;return Object(N.jsxs)("form",{className:"phonebook-form",onSubmit:c,children:[Object(N.jsxs)("label",{className:"phonebook-label",children:["Name",Object(N.jsx)("input",{className:"phonebook-input",onChange:a,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{className:"phonebook-label",children:["Number",Object(N.jsx)("input",{className:"phonebook-input",onChange:a,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)("button",{className:"submt-form",type:"submit",children:"Submit"})]})}n(28);function w(e){var t=e.filter,n=e.handleChange;return Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"filter-title",children:"Find contacts by name"}),Object(N.jsx)("input",{className:"search",onChange:n,type:"text",name:"filter",value:t})]})}n(29);function S(e){var t=e.contacts,n=e.deleteItem;return Object(N.jsx)("ul",{children:t.map((function(e){return Object(N.jsxs)("li",{className:"list-item",children:["".concat(e.name,": ").concat(e.number),Object(N.jsx)("button",{id:e.id,onClick:n,className:"delete-btn",children:"delete"})]},e.id)}))})}var A=function(){var e=Object(c.useState)(""),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(k.a)(r,2),i=o[0],b=o[1],l=Object(s.c)((function(e){return e.contacts.items})),u=Object(s.c)((function(e){return e.contacts.filter})),d=Object(s.b)(),j=function(e){"filter"!==e.target.name?"name"!==e.target.name?"number"!==e.target.name||b(e.target.value):a(e.target.value):d(p(e.target.value))};return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h1",{children:"Phonebook"}),Object(N.jsx)(y,{name:n,number:i,handleChange:j,handleSubmit:function(e){e.preventDefault(),l.some((function(e){return e.name.includes(n)}))?alert("".concat(n," is already in contacts")):(d(O({name:n,number:i})),a(""),b(""))}}),Object(N.jsx)("h2",{children:"Contacts"}),Object(N.jsx)(w,{filter:u,handleChange:j}),Object(N.jsx)(S,{contacts:l.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})),deleteItem:function(e){var t=e.target.id;d(f(t))}})]})};i.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(s.a,{store:C,children:Object(N.jsx)(A,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.44a12814.chunk.js.map