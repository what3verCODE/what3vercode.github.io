(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),i=n(8),o=n.n(i),c=(n(15),n(2)),m=n(5),s=(n(16),n(17),function(e){var t=e.value,n=e.status;return l.a.createElement("div",{className:"tag "+(null!=n?n:"")},t)});!function(e){e[e.Male=0]="Male",e[e.Female=1]="Female"}(a||(a={}));var u,d,p,f,b,E=function(e){var t=e.employee,n=e.selected,r=e.onClick;return l.a.createElement("tr",{className:n?"employee employee-selected":"employee",onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return r()}))},l.a.createElement("td",{className:"employee_name"},t.name),l.a.createElement("td",{className:"employee_gender"},null!=t.gender?t.gender===a.Male?"\u041c":"\u0416":""),l.a.createElement("td",{className:"employee_position"},t.position),l.a.createElement("td",{className:"employee_date"},null!=t.dateOfBirth?t.dateOfBirth.toLocaleDateString():"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"),l.a.createElement("td",{className:"employee_is-fired"},t.isFired?l.a.createElement(s,{value:"\u0423\u0432\u043e\u043b\u0435\u043d",status:"danger"}):l.a.createElement(s,{value:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442",status:"success"})))},h=(n(18),function(e){var t=e.employees,n=e.selected,a=e.onRowSelection;return l.a.createElement("table",{className:"employees"},l.a.createElement("thead",{className:"employees-heading"},l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"35%"}},"\u0424\u0418\u041e"),l.a.createElement("th",{style:{width:"10%"}},"\u041f\u043e\u043b"),l.a.createElement("th",{style:{width:"20%"}},"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),l.a.createElement("th",{style:{width:"20%"}},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),l.a.createElement("th",{style:{width:"15%",textAlign:"center"}},"\u0421\u0442\u0430\u0442\u0443\u0441"))),l.a.createElement("tbody",null,t.map((function(e,t){return l.a.createElement(E,{key:t,employee:e,selected:n===t,onClick:function(){return a(t)}})}))))}),y=(n(19),function(e){var t=e.employee,n=e.onEmployeeEdit,i=Object(r.useState)({name:"",position:""}),o=Object(m.a)(i,2),s=o[0],u=o[1],d=function(e){var t=e.target,n=t.name,a=t.value,r=Object(c.a)({},s);switch(n){case"name":r.name=0===a.length?"\u041f\u043e\u043b\u0435 '\u0424\u0418\u041e' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c":"",p(a);break;case"position":r.position=0===a.length?"\u041f\u043e\u043b\u0435 '\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c' \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c":"",f(a);break;case"gender":b(Number.parseInt(a));break;case"dateOfBirth":E(a);break;case"isFired":h()}u(Object(c.a)({},r))},p=function(e){return n(Object(c.a)(Object(c.a)({},t),{},{name:e}))},f=function(e){return n(Object(c.a)(Object(c.a)({},t),{},{position:e}))},b=function(e){return n(Object(c.a)(Object(c.a)({},t),{},{gender:e}))},E=function(e){return n(Object(c.a)(Object(c.a)({},t),{},{dateOfBirth:new Date(e)}))},h=function(){return n(Object(c.a)(Object(c.a)({},t),{},{isFired:!t.isFired}))};return l.a.createElement("form",{className:"employee-form",noValidate:!0},l.a.createElement("div",{className:"form-input required"},l.a.createElement("label",{htmlFor:"name"},"\u0424\u0418\u041e:"),l.a.createElement("input",{name:"name",type:"text",className:s.name.length>0?"is-invalid":"",value:t.name,onChange:function(e){return d(e)},required:!0}),s.name.length>0&&l.a.createElement("span",{className:"form-input_invalid"},s.name)),l.a.createElement("div",{className:"form-input required"},l.a.createElement("label",{htmlFor:"position"},"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c:"),l.a.createElement("input",{name:"position",type:"text",className:s.position.length>0?"is-invalid":"",value:t.position,onChange:function(e){return d(e)},required:!0}),s.position.length>0&&l.a.createElement("span",{className:"form-input_invalid"},s.position)),l.a.createElement("div",{className:"form-input form-radio-group"},l.a.createElement("label",{htmlFor:"gender"},"\u041f\u043e\u043b:"),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"gender",id:"gender-male",value:a.Male,checked:t.gender===a.Male,onChange:function(e){return d(e)}}),l.a.createElement("label",{htmlFor:"gender-male"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430")),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"gender",id:"gender-female",value:a.Female,checked:t.gender===a.Female,onChange:function(e){return d(e)}}),l.a.createElement("label",{htmlFor:"gender-female"},"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"))),l.a.createElement("div",{className:"form-input form-date"},l.a.createElement("label",{htmlFor:"dateOfBirth"},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"),l.a.createElement("input",{name:"dateOfBirth",type:"date",value:null!=t.dateOfBirth?t.dateOfBirth.toISOString().substring(0,10):(new Date).toISOString().substring(0,10),onChange:function(e){return d(e)}})),l.a.createElement("div",{className:"form-input form-checkbox"},l.a.createElement("label",{htmlFor:"isFired"},"\u0423\u0432\u043e\u043b\u0435\u043d:"),l.a.createElement("input",{name:"isFired",id:"isFired",type:"checkbox",checked:t.isFired,onChange:function(e){return d(e)}})))}),v=n(25),g=n(3),O=n(9),N=n(4),j=(n(20),n(1)),F={employeesStore:new(u=function e(){Object(O.a)(this,e),Object(g.a)(this,"employees",d,this),Object(g.a)(this,"addEmployee",p,this),Object(g.a)(this,"editEmployee",f,this),Object(g.a)(this,"removeEmployee",b,this)},d=Object(N.a)(u.prototype,"employees",[j.e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=Object(N.a)(u.prototype,"addEmployee",[j.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.employees.push(t)}}}),f=Object(N.a)(u.prototype,"editEmployee",[j.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){e.employees[t]=n}}}),b=Object(N.a)(u.prototype,"removeEmployee",[j.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.employees=e.employees.filter((function(e,n){return n!==t}))}}}),u)},S=l.a.createContext({}),w=function(e){var t=e.children;return l.a.createElement(S.Provider,{value:F},t)},k=(n(22),function(){var e=l.a.useContext(S),t=l.a.useState(),n=Object(m.a)(t,2),a=n[0],r=n[1];return Object(v.a)((function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"heading"},l.a.createElement("ul",null,l.a.createElement("li",{className:"btn btn-success",onClick:function(){return function(t){if(null!=a){var n=Object(c.a)({},e.employeesStore.employees[a]);if(""===n.name||""===n.position)return}e.employeesStore.addEmployee(t),r(e.employeesStore.employees.length-1)}({name:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",position:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"})}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"),l.a.createElement("li",{className:null!=a?"btn btn-success":"btn btn-success btn-disabled",onClick:function(){var t;null!=a&&(t=a,r(void 0),e.employeesStore.removeEmployee(t))}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"))),l.a.createElement("div",{className:"sections"},l.a.createElement("div",{className:"left-side"},l.a.createElement(h,{employees:e.employeesStore.employees,selected:a,onRowSelection:function(e){return r(e)}})),l.a.createElement("div",{className:"right-side"},null!=a?l.a.createElement(y,{employee:e.employeesStore.employees[a],onEmployeeEdit:function(t){return n=a,r=t,void e.employeesStore.editEmployee(n,r);var n,r}}):null)))}))}),C=l.a.createElement(w,null,l.a.createElement(k,null));o.a.render(C,document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.6c0c7991.chunk.js.map