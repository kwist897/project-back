(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21a1db93"],{"34c3":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"wrapper_content_sign"},s=Object(o["createVNode"])("span",null,"Регистрация",-1),a={class:"sign"};function c(e,t,n,c,u,i){return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[s,Object(o["createVNode"])("div",a,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.user.login=e})},null,512),[[o["vModelText"],u.user.login]]),Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"password",placeholder:"Пароль","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.user.password=e})},null,512),[[o["vModelText"],u.user.password]]),Object(o["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return i.send&&i.send.apply(i,arguments)})},"Зарегистрироваться")])])}n("96cf");var u=n("1da1"),i={name:"Signup",data:function(){return{user:{login:"",password:""}}},methods:{send:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""!=e.user.login&&""!=e.user.password&&e.axios.post("/api/user",e.user).then((function(t){200==t.status&&(e.$store.commit("setId",t.data.id),e.$store.commit("setLogin",t.data.login),localStorage.setItem("userId",t.data.id),localStorage.setItem("userLogin",t.data.login),e.$router.push("/"),e.axios.post("/api/courses/get",{userId:t.data.id}).then((function(t){e.$store.commit("setCourses",t.data),console.log(e.$store.state.courses)})))})).catch((function(t){e.user.password="",alert("Ошибка"),console.log(t)}));case 1:case"end":return t.stop()}}),t)})))()}}};n("39fb");i.render=c;t["default"]=i},"39fb":function(e,t,n){"use strict";n("77da")},"77da":function(e,t,n){}}]);
//# sourceMappingURL=chunk-21a1db93.a9c6bb0e.js.map