"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[692],{4692:(D,p,a)=>{a.r(p),a.d(p,{ReportsModule:()=>O});var h=a(6895),m=a(3599),v=a(9019),t=a(1571),S=a(4691),y=a(4383),f=a(5804),g=a(1077);function A(e,n){if(1&e&&t._UZ(0,"google-chart",17),2&e){const o=t.oxw();t.Q6J("data",o.orderStatusChart)}}const Z=[{path:"",component:(()=>{class e{constructor(o,r){this._httpService=o,this._toastr=r,this.invoice=[],this.settings={actions:!1,columns:{invoiceNo:{title:"Invoice No"},orderId:{title:"Order Id"},orderStatus:{title:"Order Status",type:"html"},paymentDate:{title:"Payment Date"},paymentMethod:{title:"Payment Method"},paymentStatus:{title:"Payment Status",type:"html"},shippingAmount:{title:"Shipping Amount"},subTotalAmount:{title:"SubTotal Amount"},totalAmount:{title:"Total Amount"}}}}ngOnInit(){this.GetOrderStatusChart(),this.getInvoiceData()}getInvoiceData(){this._httpService.get(v.N.BASE_API_PATH+"PaymentMaster/GetReportInvoiceList").subscribe(o=>{o.isSuccess?this.invoice=o.data:this._toastr.error(o.errors[0],"Invoice")})}GetOrderStatusChart(){let o=[],r=["Date"];this._httpService.get(v.N.BASE_API_PATH+"PaymentMaster/GetChartOrderStatus").subscribe(u=>{if(u.isSuccess){let l=u.data,b=l.map(s=>s.date).filter((s,i,d)=>d.indexOf(s)===i),c=l.map(s=>s.orderStatus).filter((s,i,d)=>d.indexOf(s)===i);for(let s of c)r.push(s);o.push(r);for(let s of b){r=[],r.push(s);for(let i of c)r.push(0);for(let i in c)for(let d in l)c[i]===l[d].orderStatus&&s===l[d].date&&(r[parseInt(i)+1]=l[d].counts);o.push(r)}this.orderStatusChart={chartType:"LineChart",dataTable:o,options:{legend:{position:"none"},bars:"vertical",vAxis:{format:"decimal"},height:340,width:"100%",colors:["#ff7f83","#a5a5a5"],backgroundColor:"transparent"}}}else this._toastr.error(u.errors[0],"Dashboard")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.O),t.Y36(y._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reports"]],decls:32,vars:3,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12","col-md-12"],[1,"card"],[1,"card-header"],[1,"card-body","sell-graph"],[1,"card","report-employee"],[1,"card-body","p-0","o-hidden"],[1,"ct-4","flot-chart-container","report-full"],[1,"col-sm-12"],[1,"card-body"],["id","batchDelete",1,"custom-datatable"],[1,"table-responsive"],[3,"settings","source"],[1,"col-lg-12"],[1,"sales-chart"],[3,"ngIf"],[3,"data"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5"),t._uU(6,"Sales Data Payment Type Wise"),t.qZA()(),t._UZ(7,"div",5),t.qZA()(),t.TgZ(8,"div",2)(9,"div",6)(10,"div",4)(11,"h5"),t._uU(12,"Customer Growth"),t.qZA()(),t.TgZ(13,"div",7),t._UZ(14,"div",8),t.qZA()()(),t.TgZ(15,"div",9)(16,"div",3)(17,"div",4)(18,"h5"),t._uU(19,"Invoice List"),t.qZA()(),t.TgZ(20,"div",10)(21,"div",11)(22,"div",12),t._UZ(23,"ng2-smart-table",13),t.qZA()()()()(),t.TgZ(24,"div",14)(25,"div",3)(26,"div",4)(27,"h5"),t._uU(28,"Order status data"),t.qZA()(),t.TgZ(29,"div",10)(30,"div",15),t.YNc(31,A,1,1,"ng-template",16),t.qZA()()()()()()),2&o&&(t.xp6(23),t.Q6J("settings",r.settings)("source",r.invoice),t.xp6(8),t.Q6J("ngIf",r.orderStatusChart))},dependencies:[h.O5,f.T5,g.P4]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(Z),m.Bz]}),e})();var T=a(4466),R=a(433),I=a(7918);let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ez,C,T.m,R.UX,I.P,f.ne,g.Ye]}),e})()}}]);