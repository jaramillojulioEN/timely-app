"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1236],{1236:(I,f,i)=>{i.r(f),i.d(f,{UserinfoPageModule:()=>A});var Z=i(6814),n=i(95),r=i(3582),d=i(9021),m=i(5861),o=i(2029),p=i(4414),U=i(9862);const T=[{path:"",component:(()=>{var t;class a{constructor(e,l,s,u,h,g){this.loadingController=e,this.fb=l,this.router=s,this.route=u,this.alertController=h,this.http=g,this.oper="",this.userInfo=JSON.parse(localStorage.userInfo),this.nombre=this.userInfo.nombreUsuario,this.modalidad="Selecciona",this.user=[],this.formularioInfo=this.fb.group({institucion:new n.NI("",n.kI.required),grado:new n.NI("",n.kI.required),modalidad:new n.NI("",n.kI.required)})}onModalidaChange(e){this.modalidad=e.detail.value,console.log(this.modalidad)}guardar(){var e=this;return(0,m.Z)(function*(){const l=yield e.loadingController.create({message:"Completando tu perfil..."});yield l.present();try{const s=`https://pruebasjulioj.000webhostapp.com/API-TIMELY/?action=completeInfo&institucion=${e.formularioInfo.value.institucion}&user=${e.userInfo.idUsuario}&grado=${e.formularioInfo.value.grado}&modalidad=${e.formularioInfo.value.modalidad}`,u=yield e.http.get(s).toPromise();e.user=u,2!==u&&(localStorage.setItem("userInfo",JSON.stringify(e.user)),e.formularioInfo.reset(),yield(yield e.alertController.create({header:"Exito",message:"Se ha terminado de configurar tu perfil",buttons:[{text:"Aceptar",handler:(g=(0,m.Z)(function*(){e.router.navigate(["/tabs/tab2"])}),function(){return g.apply(this,arguments)})}]})).present())}catch(s){console.log(s),yield(yield e.alertController.create({header:"Error",message:"Ha ocurrido un error al actualizar el peprfil",buttons:["Aceptar"]})).present()}finally{yield l.dismiss()}var g})()}ngOnInit(){this.oper=this.route.snapshot.queryParamMap.get("oper"),console.log(this.oper),null!==this.userInfo.cursoInfo&&null==this.oper&&this.router.navigate(["/tabs/tab2"])}}return(t=a).\u0275fac=function(e){return new(e||t)(o.Y36(p.HT),o.Y36(n.qu),o.Y36(d.F0),o.Y36(d.gz),o.Y36(p.Br),o.Y36(U.eN))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-userinfo"]],decls:62,vars:4,consts:[[3,"fullscreen"],[1,"container"],[1,"row","mt-5","mb-5"],[1,"col-12","text-center"],[3,"formGroup"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12"],[1,"mt-2"],["formControlName","modalidad","interface","action-sheet","fill","solid",3,"ionChange"],["value","Semestre"],["value","Cuatrimestre"],[1,"col-lg-8","col-md-12","col-sm-12"],["label","Instituci\xf3n:","label-placement","floating","formControlName","institucion","fill","solid","placeholder","Escribe el nombre de tu instituci\xf3n",1,"mt-2"],[1,"col-lg-4","col-md-12","col-sm-12"],["formControlName","grado","interface","action-sheet"],[1,"row","mt-4"],[1,"col-12"],[1,"w-100",3,"click"]],template:function(e,l){1&e&&(o.TgZ(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5"),o._uU(5),o.qZA()()(),o.TgZ(6,"form",4)(7,"div",5)(8,"div",6)(9,"ion-item",7)(10,"ion-label"),o._uU(11,"Modalidad"),o.qZA(),o.TgZ(12,"ion-select",8),o.NdJ("ionChange",function(u){return l.onModalidaChange(u)}),o.TgZ(13,"ion-select-option",9),o._uU(14,"Semestre"),o.qZA(),o.TgZ(15,"ion-select-option",10),o._uU(16,"Cuatrimestre"),o.qZA()()()(),o.TgZ(17,"div",11),o._UZ(18,"ion-input",12),o.qZA(),o.TgZ(19,"div",13)(20,"ion-item",7)(21,"ion-label"),o._uU(22),o.qZA(),o.TgZ(23,"ion-select",14)(24,"ion-select-option"),o._uU(25,"1"),o.qZA(),o.TgZ(26,"ion-select-option"),o._uU(27,"2"),o.qZA(),o.TgZ(28,"ion-select-option"),o._uU(29,"3"),o.qZA(),o.TgZ(30,"ion-select-option"),o._uU(31,"4"),o.qZA(),o.TgZ(32,"ion-select-option"),o._uU(33,"5"),o.qZA(),o.TgZ(34,"ion-select-option"),o._uU(35,"6"),o.qZA(),o.TgZ(36,"ion-select-option"),o._uU(37,"7"),o.qZA(),o.TgZ(38,"ion-select-option"),o._uU(39,"8"),o.qZA(),o.TgZ(40,"ion-select-option"),o._uU(41,"9"),o.qZA(),o.TgZ(42,"ion-select-option"),o._uU(43,"10"),o.qZA(),o.TgZ(44,"ion-select-option"),o._uU(45,"11"),o.qZA(),o.TgZ(46,"ion-select-option"),o._uU(47,"12"),o.qZA(),o.TgZ(48,"ion-select-option"),o._uU(49,"13"),o.qZA(),o.TgZ(50,"ion-select-option"),o._uU(51,"14"),o.qZA(),o.TgZ(52,"ion-select-option"),o._uU(53,"15"),o.qZA(),o.TgZ(54,"ion-select-option"),o._uU(55,"16"),o.qZA(),o.TgZ(56,"ion-select-option"),o._uU(57,"17"),o.qZA()()()()(),o.TgZ(58,"div",15)(59,"div",16)(60,"ion-button",17),o.NdJ("click",function(){return l.guardar()}),o._uU(61," Guardar"),o.qZA()()()()()()),2&e&&(o.Q6J("fullscreen",!0),o.xp6(5),o.hij("Termina tu perfil, ",l.nombre,""),o.xp6(1),o.Q6J("formGroup",l.formularioInfo),o.xp6(16),o.Oqu(l.modalidad))},dependencies:[n._Y,n.JJ,n.JL,r.YG,r.W2,r.pK,r.Ie,r.Q$,r.t9,r.n0,r.QI,r.j9,n.sg,n.u]}),a})()}];let v=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.Bz.forChild(T),d.Bz]}),a})(),A=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Z.ez,n.u5,r.Pc,n.UX,v]}),a})()}}]);