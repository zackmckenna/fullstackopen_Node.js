(window["webpackJsonppart2.6"]=window["webpackJsonppart2.6"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),l=function(e){var n=e.newSearch,t=e.handleSearchChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"Search"),r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,c=e.newNumber,u=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.personKey,t=(e.name,e.deleteName),a=n;return r.a.createElement("form",null,r.a.createElement("button",{key:n,value:a,onClick:t},"Delete"))},d=function(e){var n=e.personkey,t=e.name,a=e.number;return r.a.createElement("p",{key:n},t," : ",a)},f=function(e){var n=e.index,t=e.person,a=(e.newSearch,e.deleteName);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{key:t.id,personkey:t.id,name:t.name,number:t.number}),r.a.createElement(m,{key:n,personKey:t.id,name:t.name,deleteName:a}))},b=t(3),h=t.n(b),s="http://localhost:3001/api/persons",v=function(){return h.a.get(s)},g=function(e){return h.a.post(s,e)},p=function(e,n){return h.a.put("".concat(s,"/").concat(e),n)},E=function(e){return h.a.delete("".concat(s,"/").concat(e))},S=function(e){var n=e.error,t=e.notification;return null===t?null:n?r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},className:"notification"},t):n?void 0:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},className:"notification"},t)},y=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),m=Object(o.a)(u,2),d=m[0],b=m[1],h=Object(a.useState)(""),s=Object(o.a)(h,2),y=s[0],N=s[1],w=Object(a.useState)(""),O=Object(o.a)(w,2),j=O[0],k=O[1],C=Object(a.useState)(!0),D=Object(o.a)(C,2),x=D[0],B=D[1],z=Object(a.useState)(""),F=Object(o.a)(z,2),I=F[0],J=F[1],K=Object(a.useState)(!1),P=Object(o.a)(K,2),R=P[0],T=P[1];Object(a.useEffect)(function(){v().then(function(e){c(e.data)})},[]);var A=function(e){e.preventDefault();var n=Number(e.target.value),a=t.find(function(e){return e.id===n});!0===window.confirm("Delete ".concat(a.name,"?"))&&E(a.id).then(function(e){v().then(function(e){c(e.data)})}).catch(function(e){T(!0),J("".concat(a.name," has already been deleted from the server"))})},W=x?t:t.filter(function(e){return e.name.match(j)}),q=function(e){if(t.find(function(n){return n.name===e}))return!0};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(S,{error:R,notification:I}),r.a.createElement(l,{newSearch:j,handleSearchChange:function(e){""!==e.target.value?(B(!1),k(e.target.value)):""===e.target.value&&B(!0),k(e.target.value)}}),r.a.createElement("h3",null,"Add a Number"),r.a.createElement(i,{addName:function(e){e.preventDefault();var n={name:d,number:y,date:(new Date).toISOString()};if(q(n.name)){if(!0===window.confirm("".concat(d," is already registered. Want to update number?"))){var a=t.find(function(e){return e.name===n.name});p(a.id,n).then(function(e){v().then(function(e){c(e.data),T(!1),J("".concat(a.name,"'s number has been updated.")),setTimeout(function(){J(null)},5e3)}),b(""),N("")})}else b(""),N("");return b("")}g(n).then(function(e){v().then(function(e){c(e.data)}),b(""),N(""),T(!1),J("".concat(n.name," has been added to the Phonebook")),setTimeout(function(){J(null)},5e3)})},newName:d,handleNameChange:function(e){b(e.target.value)},newNumber:y,handleNumberChange:function(e){N(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),W.map(function(e,n){return r.a.createElement(f,{deleteName:A,key:n,index:n,person:e})}))};t(36);u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.273915af.chunk.js.map