(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_rober_Desktop_Bootcamp_Week9_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_App_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_App_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_rober_Desktop_Bootcamp_Week9_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),display=_useState2[0],setDisplay=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState4=Object(C_Users_rober_Desktop_Bootcamp_Week9_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),operationDisplay=_useState4[0],setOperationDisplay=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState6=Object(C_Users_rober_Desktop_Bootcamp_Week9_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),operationAnswer=_useState6[0],setOperationAnswer=_useState6[1],setDisplayWithEvent=function(_){var e=display+_.target.value;setDisplay(e)},operatorClicked=function(_){var e=_.target.value,t=display;setOperationDisplay(0==operationAnswer?0==t?operationDisplay.slice(0,-1)+e:""==operationDisplay?t+e:operationDisplay+t+e:0==t?operationAnswer+e:operationDisplay+t+e),setDisplay("")},equalClicked=function equalClicked(){var result=eval(operationDisplay+display);setDisplay(""),setOperationDisplay(operationDisplay+display),setOperationAnswer(result)},clearClicked=function(){setDisplay(""),setOperationDisplay(""),setOperationAnswer(0)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"Child",children:[[1,2,3].map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button",onClick:setDisplayWithEvent,value:_,children:_})})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),[4,5,6].map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button",onClick:setDisplayWithEvent,value:_,children:_})})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),[7,8,9].map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button",onClick:setDisplayWithEvent,value:_,children:_})})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),[0].map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button",onClick:setDisplayWithEvent,value:_,children:_})})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button1",value:"C",onClick:clearClicked,children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button2",value:"=",onClick:equalClicked,children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button3",value:"+",onClick:operatorClicked,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button4",value:"-",onClick:operatorClicked,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button5",value:"*",onClick:operatorClicked,children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"button6",value:"/",onClick:operatorClicked,children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"text",value:display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["Equation: ",operationDisplay]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br",{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["Answer: ",operationAnswer]})]})})}__webpack_exports__.a=App},,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),s=t(4),n=t.n(s),i=(t(10),t(5)),c=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,n=e.getTTFB;t(_),r(_),a(_),s(_),n(_)}))},o=t(0);n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(i.a,{})}),document.getElementById("root")),c()}],[[13,1,2]]]);
//# sourceMappingURL=main.fcb99f68.chunk.js.map