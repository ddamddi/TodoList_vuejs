webpackJsonp([1],{AWfW:function(t,e){},EiTW:function(t,e){},KmU7:function(t,e){},N9Nq:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[e("span",{staticClass:"animated bounceIn",staticStyle:{display:"inline-block"}},[this._v("TODO it!")])])])}]};var s=o("VU/8")({},n,!1,function(t){o("c4sQ")},"data-v-18b8b638",null).exports,i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"modal","enter-active-class":"animated jackInTheBox","leave-active-class":"animated hinge"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[this._t("header",[this._v("\r\n              default header\r\n            ")])],2),this._v(" "),e("div",{staticClass:"modal-body"},[this._t("body",[this._v("\r\n              default body\r\n            ")])],2)])])])])},staticRenderFns:[]};var d=o("VU/8")({},i,!1,function(t){o("XROo")},null,null).exports,l={data:function(){return{newTodoItem:"",showModal:!1}},methods:{addTodo:function(){var t=this.newTodoItem.trim();t&&null!=t&&""!=t?(this.$store.commit("addTodo",t),this.clearInput()):this.showModal=!this.showModal},clearInput:function(){this.newTodoItem=""}},components:{Modal:d}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"inputBox shadow animated bounceIn"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Add What You Have TODO"},domProps:{value:t.newTodoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodoItem=e.target.value)}}}),t._v(" "),o("span",{staticClass:"addContainer",on:{click:t.addTodo}},[o("i",{staticClass:"addBtn fas fa-plus",attrs:{"aria-hidden":"true"}})])]),t._v(" "),t.showModal?o("modal",{on:{close:function(e){t.showModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("경고!")]),t._v(" "),o("span",{attrs:{slot:"body"},on:{click:function(e){t.showModal=!1}},slot:"body"},[t._v("\n      할 일을 입력하세요!!\n      "),o("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"}})])]):t._e()],1)},staticRenderFns:[]};var c=o("VU/8")(l,r,!1,function(t){o("EiTW")},"data-v-168721ba",null).exports,m=o("Dd8w"),u=o.n(m),h=o("NYxO"),f={data:function(){return{editItem:"",editModal:!1,oldItem:"",oldIndex:"",isFilled:!1}},methods:u()({popEditModal:function(t,e){this.oldItem=t,this.oldIndex=e,this.editItem=t.item,this.editModal=!this.editModal}},Object(h.c)(["removeTodo","toggleComplete","highlight","editTodo"])),computed:u()({},Object(h.b)(["storedTodoItems"])),components:{Modal:d}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("transition-group",{attrs:{name:"list",tag:"ul","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},t._l(this.storedTodoItems,function(e,a){return o("li",{key:e.item,staticClass:"shadow",class:{hl:e.highlight&&!e.completed}},[o("i",{staticClass:"checkBtn fas fa-check",class:{checkBtnCompleted:e.completed},attrs:{"aria-hidden":"true"},on:{click:function(o){return t.toggleComplete({todoItem:e,index:a})}}}),t._v(" "),o("span",{class:{textCompleted:e.completed}},[t._v(" "+t._s(e.item)+" ")]),t._v(" "),o("div",{staticClass:"btn-align"},[e.completed?t._e():o("span",{staticClass:"starBtn",attrs:{type:"button"},on:{click:function(o){return t.highlight({todoItem:e,index:a})}}},[o("i",{staticClass:"fa-star",class:{far:!e.highlight,fas:e.highlight},attrs:{"aria-hidden":"true"}})]),t._v(" "),e.completed?t._e():o("span",{staticClass:"editBtn",attrs:{type:"button"},on:{click:function(o){return t.popEditModal(e,a)}}},[o("i",{staticClass:"far fa-edit",attrs:{"aria-hidden":"true"}})]),t._v(" "),o("span",{staticClass:"removeBtn",attrs:{type:"button"},on:{click:function(o){return t.removeTodo({todoItem:e,index:a})}}},[o("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])])}),0),t._v(" "),t.editModal?o("modal",{on:{close:function(e){t.editModal=!1}}},[o("h3",{attrs:{slot:"header"},slot:"header"},[t._v("Edit TODO")]),t._v(" "),o("span",{attrs:{slot:"body"},slot:"body"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.editItem,expression:"editItem"}],attrs:{type:"text",placeholder:"Edit What You Have TODO",onfocus:"this.select()",autofocus:"autofocus"},domProps:{value:t.editItem},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editTodo({oldItem:t.oldItem,oldIndex:t.oldIndex,editItem:t.editItem}),t.editModal=!1},input:function(e){e.target.composing||(t.editItem=e.target.value)}}}),t._v(" "),o("i",{staticClass:"far fa-edit",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editTodo({oldItem:t.oldItem,oldIndex:t.oldIndex,editItem:t.editItem}),t.editModal=!1}}}),t._v(" "),o("i",{staticClass:"closeModalBtn fas fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editModal=!1}}})])]):t._e()],1)},staticRenderFns:[]};var p=o("VU/8")(f,v,!1,function(t){o("N9Nq")},"data-v-4407bd87",null).exports,I={data:function(){return{showInfo:!1}},computed:u()({},Object(h.b)(["storedTodoItems"])),methods:u()({},Object(h.c)(["clearAll","clearDone","sort"]))},g={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"animated bounceIn"},[o("div",{staticClass:"btnWrapper"},[o("div",{staticClass:"btnContainer shadow"},[o("span",{staticClass:"removeDoneBtn",on:{click:this.clearDone}},[t._v("Clear Done")])]),t._v(" "),o("div",{staticClass:"infoBtnContainer shadow"},[t.showInfo?t._e():o("router-link",{attrs:{to:"/vuejs_todolist"}},[o("span",{staticClass:"far fa-question-circle infoBtn",on:{click:function(e){t.showInfo=!t.showInfo,t.sort()}}})]),t._v(" "),t.showInfo?o("router-link",{attrs:{to:"/info"}},[o("span",{staticClass:"far fa-question-circle infoBtn",on:{click:function(e){t.showInfo=!t.showInfo,t.sort()}}})]):t._e()],1),t._v(" "),o("div",{staticClass:"btnContainer shadow"},[o("span",{staticClass:"clearAllBtn",on:{click:this.clearAll}},[t._v("Clear All")])])])]),t._v(" "),o("transition",{attrs:{name:"router-aim","enter-active-class":"animated bounceIn","leave-active-class":"animated bounceOut"}},[o("router-view")],1)],1)},staticRenderFns:[]};var _={computed:function(){},components:{TodoHeader:s,TodoInput:c,TodoList:p,TodoFooter:o("VU/8")(I,g,!1,function(t){o("AWfW")},"data-v-279f865b",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("TodoHeader"),this._v(" "),e("TodoInput"),this._v(" "),e("TodoList"),this._v(" "),e("TodoFooter")],1)},staticRenderFns:[]};var C=o("VU/8")(_,b,!1,function(t){o("KmU7")},null,null).exports,T=o("/ocq");a.a.use(T.a);var k=new T.a({mode:"history",routes:[{path:"/vuejs_todolist",name:"Home",component:{template:""}},{path:"/info",name:"Info",component:{template:"<div>\n      <br/>\n        <b>TODO it!</b>\n        <br>©ddamddi All Rights Reserved\n        <br/>Blog : ddamddi.github.io\n        <br/>Github : github.com/ddamddi\n        <br/>Email : leonardkkh@gmail.com</div>"}}]}),w=o("mvHQ"),x=o.n(w);a.a.use(h.a);var y=function(){var t=[];if(localStorage.length>0)for(var e=0;e<localStorage.length;e++)"loglevel:webpack-dev-server"!==localStorage.key(e)&&t.push(JSON.parse(localStorage.getItem(localStorage.key(e))));return t},O=new h.a.Store({state:{todoItems:y()},getters:{storedTodoItems:function(t){return t.todoItems}},mutations:{addTodo:function(t,e){if(null==localStorage.getItem(e)){var o={completed:!1,highlight:!1,item:e};localStorage.setItem(e,x()(o)),t.todoItems.push(o)}else alert("중복된 TODO")},clearAll:function(t){localStorage.clear(),t.todoItems=[]},removeTodo:function(t,e){localStorage.removeItem(e.todoItem.item),t.todoItems.splice(e.index,1)},editTodo:function(t,e){localStorage.removeItem(e.oldItem.item),t.todoItems[e.oldIndex].item=e.editItem,localStorage.setItem(e.oldItem.item,x()(e.oldItem))},clearDone:function(t){for(var e=0;e<localStorage.length;e++)if("loglevel:webpack-dev-server"!==localStorage.key(e)){var o=JSON.parse(localStorage.getItem(localStorage.key(e)));if(1==o.completed)for(var a=0;a<t.todoItems.length;a++)t.todoItems[a].item==o.item&&(t.todoItems.splice(a,1),localStorage.removeItem(o.item),e--)}},toggleComplete:function(t,e){t.todoItems[e.index].completed=!t.todoItems[e.index].completed,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,x()(e.todoItem))},highlight:function(t,e){t.todoItems[e.index].highlight=!t.todoItems[e.index].highlight,localStorage.removeItem(e.todoItem.item),localStorage.setItem(e.todoItem.item,x()(e.todoItem))},sort:function(t){for(var e=[],o=0;o<t.todoItems.length;o++)1==t.todoItems[o].highlight&&0==t.todoItems[o].completed&&(e.push(t.todoItems[o]),t.todoItems.splice(o,1),o--);for(var a=0;a<t.todoItems.length;a++)0==t.todoItems[a].completed&&(e.push(t.todoItems[a]),t.todoItems.splice(a,1),a--);for(var n=0;n<t.todoItems.length;n++)e.push(t.todoItems[n]),t.todoItems.splice(n,1),n--;console.log(e),t.todoItems=e}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:k,store:O,components:{App:C},template:"<App/>"})},XROo:function(t,e){},c4sQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.47389645cb2cbc2fba9f.js.map