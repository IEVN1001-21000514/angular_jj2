"use strict";(self.webpackChunkMaterialM=self.webpackChunkMaterialM||[]).push([[842],{7842:(x,l,n)=>{n.r(l),n.d(l,{AuthenticationRoutes:()=>b});var e=n(9417),s=n(2168),d=n(4163),a=n(8834),t=n(3953),p=n(2765),m=n(2102),g=n(9631),c=n(5596);const f=()=>["/dashboard"],u=()=>["/"],k=()=>["/authentication/register"],v=()=>["/dashboard"],F=()=>["/"],w=()=>["/authentication/login"],b=[{path:"",children:[{path:"login",component:(()=>{class o{constructor(r){this.router=r,this.form=new e.gE({uname:new e.MJ("",[e.k0.required,e.k0.minLength(6)]),password:new e.MJ("",[e.k0.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/"])}static#t=this.\u0275fac=function(i){return new(i||o)(t.rXU(s.Ix))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-side-login"]],standalone:!0,features:[t.aNF],decls:43,vars:8,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/logo.svg","alt","logo",1,"align-middle","m-2"],[1,"row","m-t-24","custom-row"],[1,"col-6"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center"],["src","/assets/images/svgs/google-icon.svg","alt","google","width","16",1,"m-r-8"],[1,"d-none","d-lg-block"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["src","/assets/images/svgs/facebook-icon.svg","alt","facebook","width","40",1,"m-r-4"],[1,"or-border","m-t-30"],[1,"m-t-30"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","password"],[1,"d-flex","align-items-center","m-b-12"],["color","primary"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["mat-flat-button","","color","primary",1,"w-100",3,"routerLink"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(i,j){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t.nrm(7,"img",7),t.k0s()(),t.j41(8,"div",8)(9,"div",9)(10,"button",10)(11,"div",11),t.nrm(12,"img",12),t.j41(13,"span",13),t.EFF(14,"Sign in with Google"),t.k0s()()()(),t.j41(15,"div",9)(16,"button",14)(17,"div",11),t.nrm(18,"img",15),t.j41(19,"span",13),t.EFF(20,"Sign in with FB"),t.k0s()()()()(),t.j41(21,"div",16),t.EFF(22,"or sign in with"),t.k0s(),t.j41(23,"form",17)(24,"mat-label",18),t.EFF(25,"Username"),t.k0s(),t.j41(26,"mat-form-field",19),t.nrm(27,"input",20),t.k0s(),t.j41(28,"mat-label",18),t.EFF(29,"Password"),t.k0s(),t.j41(30,"mat-form-field",19),t.nrm(31,"input",21),t.k0s(),t.j41(32,"div",22)(33,"mat-checkbox",23),t.EFF(34,"Remember this Device"),t.k0s(),t.j41(35,"a",24),t.EFF(36,"Forgot Password ?"),t.k0s()(),t.j41(37,"a",25),t.EFF(38," Sign In "),t.k0s()(),t.j41(39,"span",26),t.EFF(40,"New to MaterialM? "),t.j41(41,"a",27),t.EFF(42," Create an account"),t.k0s()()()()()()()),2&i&&(t.R7$(6),t.Y8G("routerLink",t.lJ4(4,f)),t.R7$(29),t.Y8G("routerLink",t.lJ4(5,u)),t.R7$(2),t.Y8G("routerLink",t.lJ4(6,u)),t.R7$(4),t.Y8G("routerLink",t.lJ4(7,k)))},dependencies:[s.iI,s.Wk,d.G,p.So,m.rl,m.nJ,g.fg,c.RN,c.m2,a.It,a.$z,e.YN,e.qT,e.cb,e.cV,e.X1,a.Hl],encapsulation:2})}return o})()},{path:"register",component:(()=>{class o{constructor(r){this.router=r,this.form=new e.gE({uname:new e.MJ("",[e.k0.required,e.k0.minLength(6)]),email:new e.MJ("",[e.k0.required]),password:new e.MJ("",[e.k0.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/"])}static#t=this.\u0275fac=function(i){return new(i||o)(t.rXU(s.Ix))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-side-register"]],standalone:!0,features:[t.aNF],decls:42,vars:6,consts:[[1,"blank-layout-container","justify-content-center","align-items-center","bg-light"],[1,"position-relative","row","w-100","h-100","bg-gredient","justify-content-center"],[1,"col-lg-4","d-flex","align-items-center"],[1,"cardWithShadow","boxed-auth"],[1,"p-32"],[1,"text-center"],[3,"routerLink"],["src","./assets/images/logos/logo.svg","alt","logo",1,"align-middle","m-2"],[1,"row","m-t-24","custom-row"],[1,"col-6"],["mat-stroked-button","",1,"w-100"],[1,"d-flex","align-items-center"],["src","/assets/images/svgs/google-icon.svg","alt","google","width","16",1,"m-r-8"],[1,"d-none","d-lg-block"],["mat-stroked-button","",1,"w-100","d-flex","align-items-center"],["src","/assets/images/svgs/facebook-icon.svg","alt","facebook","width","40",1,"m-r-4"],[1,"or-border","m-t-30"],[1,"m-t-30"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput",""],["matInput","","type","email"],["matInput","","type","password"],["mat-flat-button","","color","primary",1,"w-100",3,"routerLink"],[1,"d-block","f-w-500","text-center","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"]],template:function(i,j){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"div",5)(6,"a",6),t.nrm(7,"img",7),t.k0s()(),t.j41(8,"div",8)(9,"div",9)(10,"button",10)(11,"div",11),t.nrm(12,"img",12),t.j41(13,"span",13),t.EFF(14,"Sign in with Google"),t.k0s()()()(),t.j41(15,"div",9)(16,"button",14)(17,"div",11),t.nrm(18,"img",15),t.j41(19,"span",13),t.EFF(20,"Sign in with FB"),t.k0s()()()()(),t.j41(21,"div",16),t.EFF(22,"or sign up with"),t.k0s(),t.j41(23,"form",17)(24,"mat-label",18),t.EFF(25,"Name"),t.k0s(),t.j41(26,"mat-form-field",19),t.nrm(27,"input",20),t.k0s(),t.j41(28,"mat-label",18),t.EFF(29,"Email Adddress"),t.k0s(),t.j41(30,"mat-form-field",19),t.nrm(31,"input",21),t.k0s(),t.j41(32,"mat-label",18),t.EFF(33,"Password"),t.k0s(),t.j41(34,"mat-form-field",19),t.nrm(35,"input",22),t.k0s(),t.j41(36,"a",23),t.EFF(37," Sign Up "),t.k0s()(),t.j41(38,"span",24),t.EFF(39,"Already have an Account? "),t.j41(40,"a",25),t.EFF(41," Sign In"),t.k0s()()()()()()()),2&i&&(t.R7$(6),t.Y8G("routerLink",t.lJ4(3,v)),t.R7$(30),t.Y8G("routerLink",t.lJ4(4,F)),t.R7$(4),t.Y8G("routerLink",t.lJ4(5,w)))},dependencies:[s.iI,s.Wk,d.G,m.rl,m.nJ,g.fg,c.RN,c.m2,a.It,a.$z,e.YN,e.qT,e.cb,e.cV,e.X1],encapsulation:2})}return o})()}]}]}}]);