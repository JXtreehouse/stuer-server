(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"17b8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile_container"},[e.userExist?a("div",{staticClass:"profile-info block"},[a("div",{staticClass:"profile-info-main"},[e.amI?a("el-upload",{class:e.avatar?"avatar-box":"avatar-uploader",attrs:{action:"/api/uploadImg","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.avatar?a("img",{staticClass:"avatar",attrs:{src:e.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a("div",{staticClass:"avatar-box"},[a("img",{staticClass:"avatar",attrs:{src:e.defaultAvatar}})]),a("div",{staticClass:"info-box"},[a("div",{staticClass:"nickName-box"},[a("h1",{staticClass:"nickName"},[e._v(e._s(e.nickName))]),a("div",{staticClass:"role"},[e._v(e._s(e.roleName))])]),a("div",{staticClass:"personSign-box"},[a("span",{class:{personSign:!0,lineMultiple:e.personSign.length>65},attrs:{title:e.personSign}},[e._v(e._s(e.personSign))])])])],1),a("div",{staticClass:"profile-info-opt"},[e.amI?a("button",{staticClass:"edit-profile-btn",on:{click:e.routeToUserEdit}},[e._v("编辑个人资料")]):e._e()])]):e._e(),e.userExist?a("div",{staticClass:"profile-main"},[a("div",{staticClass:"profile-main-nav block"},[a("ul",{staticClass:"profile-nav"},e._l(e.navs,function(t,s){return a("li",{key:s,class:{"profile-nav-item":!0,active:e.activeIndex===s},on:{click:function(t){e.activeIndex=s}}},[a("a",{attrs:{href:"/profile/"+e.$route.params.id+t.href}},[a("svg",{staticClass:"profile-nav-item-logo",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":t.icon}})]),a("span",[e._v(e._s(t.name))]),a("i",{staticClass:"el-icon-arrow-right icon-right"})])])}),0)]),a("div",{staticClass:"profile-main-content block"},[a("router-view")],1)]):e._e(),e.userExist?e._e():a("div",{staticClass:"userNotFound block"},[e._v("用户不存在")]),e.userExist?e._e():a("div",{staticClass:"toIndex"},[a("el-button",{attrs:{type:"primary"},on:{click:e.routeToIndex}},[e._v("返回首页")])],1)])},r=[],i=(a("96cf"),a("3b8d")),n=a("cebc"),o=a("2f62"),c=a("cb15"),u=a.n(c),l=a("365c"),p={data:function(){return{activeIndex:0,defaultAvatar:u.a,navs:[{href:"",icon:"#icon-home",name:"首页"},{href:"/discuss",icon:"#icon-discuss",name:"讨论帖"},{href:"/likes",icon:"#icon-zan",name:"点赞"},{href:"/basicInfo",icon:"#icon-user",name:"基本信息"},{href:"/moreInfo",icon:"#icon-more-info",name:"更多信息"},{href:"/setting",icon:"#icon-setting",name:"设置"}],userExist:!0}},computed:Object(n["a"])({},Object(o["b"])(["pageUser","amI"]),{avatar:function(){return this.pageUser&&this.pageUser.avatar?this.pageUser.avatar:""},nickName:function(){return this.pageUser&&this.pageUser.nickName?this.pageUser.nickName:"".concat(this.amI?"你":"他","的昵称")},personSign:function(){return this.pageUser&&this.pageUser.personSign?this.pageUser.personSign:"".concat(this.amI?"你":"他","的个性签名/座右铭/人生感悟")},roleName:function(){var e={1:"毕业生",2:"在校生",3:"老师",4:"运营管理员",5:"学校管理员",6:"企业管理员",7:"超级管理员"};return this.pageUser&&this.pageUser.email&&"14glwu@stu.edu.cn"===this.pageUser.email?"Stuer网创始人":this.pageUser&&this.pageUser.role&&e[this.pageUser.role]||"毕业生"}}),created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPageUserInfo();case 2:(this.pageUser&&this.pageUser.role>2||!this.amI)&&this.navs.splice(4,1);case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{getPageUserInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["e"])(this.$route.params.id);case 2:t=e.sent,0===t.code?this.$store.commit("setPageUser",t.data):2003===t.code&&(this.userExist=!1);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleAvatarSuccess:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,a){var s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.code){e.next=6;break}return this.avatar=t.data.fileUrl,e.next=4,Object(l["j"])({avatar:t.data.fileUrl});case 4:s=e.sent,0===s.code&&(this.$store.commit("setPageUser",s.data),this.$store.commit("setUser",s.data));case 6:case"end":return e.stop()}},e,this)}));function t(t,a){return e.apply(this,arguments)}return t}(),beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t},routeToUserEdit:function(){this.$router.push("/profile/".concat(this.$route.params.id,"/basicInfo#edit"))},routeToIndex:function(){this.$router.push("/")}}},f=p,d=(a("e52e"),a("2877")),h=Object(d["a"])(f,s,r,!1,null,null,null);t["default"]=h.exports},"7d0d":function(e,t,a){},e52e:function(e,t,a){"use strict";var s=a("7d0d"),r=a.n(s);r.a}}]);
//# sourceMappingURL=profile.9723d272.js.map