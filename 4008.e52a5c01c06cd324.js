"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4008],{4008:(h,i,t)=>{t.r(i),t.d(i,{LoginComponent:()=>r});var _=t(177),e=t(7029),s=t(3396),o=t(4438),u=t(9906);let r=(()=>{var l;class g{constructor(n){this.auth=n}loginWithGoogle(){this.auth.loginWithGoogle().then(n=>{console.log("Logged in with Google:",n)}).catch(n=>{console.error("Error during Google login:",n)})}logout(){this.auth.logout().then(()=>{console.log("Logged out")})}}return(l=g).\u0275fac=function(n){return new(n||l)(o.rXU(u.u))},l.\u0275cmp=o.VBU({type:l,selectors:[["app-login"]],standalone:!0,features:[o.aNF],decls:9,vars:0,consts:[[1,"ion-padding"],[1,"login-container"],[3,"click"],["expand","full",3,"click"]],template:function(n,c){1&n&&(o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o.EFF(3,"Acceder"),o.k0s()()(),o.j41(4,"ion-content",0)(5,"div",1)(6,"app-button-google",2),o.bIt("click",function(){return c.loginWithGoogle()}),o.k0s(),o.j41(7,"ion-button",3),o.bIt("click",function(){return c.logout()}),o.EFF(8,"Logout"),o.k0s()()())},dependencies:[e.eU,e.ai,e.BC,e.W9,e.Jm,_.MD,s.J],styles:[".login-container[_ngcontent-%COMP%]{text-align:center}"]}),g})()}}]);