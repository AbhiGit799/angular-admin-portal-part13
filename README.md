# angular-admin-portal-part13

Hi, <br/>

This is a simple Angular POC created by Abhishek Choubey. <br/>
In this POC I started building Admin Portal for Shopping website <br/>
This is 13th {Final} code push for the Admin Portal, for building this portal I am using Angular.<br/>

<b>Highlights of 13th Push</b> <br/>

Worked on settings component <br/>

<b>Command for Graphs</b>
ng2-google-charts <----------Graphs </br>


In DashboardModule { } add <br/>


import { ReactiveFormsModule } from '@angular/forms';<br/>
import { CountToModule } from 'angular-count-to';<br/>
import { Ng2SmartTableModule } from 'ng2-smart-table';<br/>
import { Ng2GoogleChartsModule } from 'ng2-google-charts';<br/>

@NgModule({<br/>
  declarations: [<br/>
    DashboardComponent<br/>
  ],<br/>
  imports: [<br/>
    CommonModule,<br/>
    DashboardRoutingModule,<br/>
    SharedModule,<br/>
    ReactiveFormsModule,<br/>
    CountToModule,<br/>
    Ng2SmartTableModule,<br/>
    Ng2GoogleChartsModule,<br/>

  ]<br/>
})<br/>
export class DashboardModule { }<br/>

Worked on Order status in dashboard component.<br/>
Worked on reports component<br/>
Worked on invoice component<br/>

<b>Highlights of 12th Push</b> <br/>

Worked on Product list Component <br/>
Worked on Add Product Component  <br/>

Command = npm i ngx-ckeditor <br/>

In products.module.ts file add <br/>
-----------------------------------------<br/>
import { CKEditorModule } from 'ngx-ckeditor'; <br/>


ReactiveformModule,<br/>
ngxdatatableModuel,<br/>
CKEditorModule,<br/>

In index.html file add <br/>

<script src="//cdn.ckeditor.com/4.7.1/full/ckeditor.js"></script> <br/>

Dashboard component <br/>

angular-count-to <br/>

ng2-smart-table In Angular <br/>


import { SharedModule } from 'src/app/shared/shared.module';<br/>
import { ReactiveFormsModule } from '@angular/forms';<br/>
import { CountToModule } from 'angular-count-to';<br/>
import { Ng2SmartTableModule } from 'ng2-smart-table';<br/>

@NgModule({<br/>
  declarations: [<br/>
    DashboardComponent<br/>
  ],<br/>
  imports: [<br/>
    CommonModule,<br/>
    DashboardRoutingModule,<br/>
    SharedModule,<br/>
    ReactiveFormsModule,<br/>
    CountToModule,<br/>
    Ng2SmartTableModule<br/>
  ]<br/>
})<br/>
export class DashboardModule { }<br/>



shared.module.ts file code<br/>
---------------------------------------<br/>

  exports:[FeatherIconComponent]<br/>
})<br/>
export class SharedModule { }<br/>

orders component<br/>
transaction component<br/>

<b>Highlights of 11th Push</b> <br/>

Worked on Category Component <br/>

users.module.ts file add <br/>

ReactiveFormModule <br/>
NgxDatatableModuel <br/>

Worked on add-user and list-user component <br/>


<b>Highlights of 10th Push</b> <br/>

In masters.module.ts file place <br/>
NgxDatatableModule<br/>
size.component.html file code <br/>
In size.component.ts file  getData() method put debugger to get column to bind in table. <br/>

Note<br/>
====<br/>
Force to login<br/>
Code added In app-routing.module.ts file<br/>

Note<br/>
=====<br/>
 { path: '', component: LayoutComponent, children: contentRoutes,canActivate : [AuthGuard] }<br/>
Code added in login.component.html file<br/>

Imp Note<br/>
========<br/>
Delete will not work, giving 500 internal server error.<br/>

Code in tag component <br/>
tag.component.ts file code <br/>
tag.component.html file code <br/>

User Type component <------- Working fine<br/>

Color component<--------- Working fine<br/>

styles.scss<br/>
=========<br/>
.imgWidth{<br/>
    width: 100px !important;<br/>
    height: 100px !important;<br/>
}<br/>

For brandlogo component<br/>


<b>Highlights of 9th Push</b> <br/>

Side bar issue fixed. <br/>

sidebar.component.html <br/>

Worked on Size Master component <br/>

Master.module.ts file<br/>
==================<br/>

@NgModule({<br/>
  declarations: [<br/>
    BrandlogoComponent,<br/>
    CategoryComponent,<br/>
    TagComponent,<br/>
    ColorComponent,<br/>
    UsertypeComponent,<br/>
    SizeComponent<br/>
  ],<br/>
  imports: [<br/>
    CommonModule,<br/>
    MastersRoutingModule,<br/>
    ReactiveFormsModule,  //<---------------------------for reactive forms<br/>
    FormsModule, //<--------------------------- for forms <br/>
    NgbModule //<--------------------------- for tabbing system<br/>
  ]<br/>
})<br/>
export class MastersModule { }<br/>

<b>NgxDataTable</b> <br/>
npm i ngx-datatable <br/>

For navigation we use @ViewChild('nav') elnav:any; <br>


<br/>

<b>Highlights of 8th Push</b> <br/>

<b>Build Creation Issue, not created index.html </b> <br>
https://stackoverflow.com/questions/53995948/warning-in-budgets-maximum-exceeded-for-initial </br>

Changes done in navigate in auth.service.ts <br/>

Code added for header, footer, sidebar <br/>
Coding inside shared folder components.<br/>

let userDetails = JSON.parse(localStorage.getItem('userDetails')); //converting from string to object <br/>

<b>Service Created </b><br>
ng g s collapse <br/>

<b>Note:-</b> public added in constructor keyword, so that we can access it in template file{html file} <br/>

<br/>

<b>Highlights of 7th Push</b> <br/>

Implemented and configure Routing for feature module and lazy loading. <br/>

In shared.module.ts file<br/>
======================<br/>
@NgModule({<br/>
  declarations: [<br/>
    HeaderComponent,<br/>
    FooterComponent,<br/>
    SidebarComponent,<br/>
    FeatherIconComponent,<br/>
    BreadcrumbComponent,<br/>
    LayoutComponent<br/>
  ],<br/>
  imports: [<br/>
    CommonModule,<br/>
    RouterModule        //<-------------------Added for <router-outlet><br/>
  ]<br/>
})<br/>
export class SharedModule { } <br/>                  


Imp Note<br/>
=========<br/>
Lazy Loading -->shared--->routes-->contentroute<br/>


Inside interceptors<br/>
================<br/>
ng g interceptor response<br/>

ng g interceptor request<br/>


In app.module.ts file we need to put provider<br/>

  providers: [<br/>
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },<br/>
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },<br/>
  ],<br/>


<br/><br/>

<b>Highlights of 6th Push</b> <br/>
Business logic added in auth.service.ts file  <br/>
Validation In Registration form added <br/>
Code added in auth guard inside auth folder <br/>

<br>

<b>Highlights of 5th Push</b> <br/>

<b>Inside app.module.ts file add</b> <br/>
imports:[ <br/>
    SharedModule, <br/>
    AuthModule, <br/>
]  <br/>


<b>Inside auth.module.ts file</b><br/>
ReactiveFormsModule,<br/>
NgbModule<br/>


<b>Add routing in auth-routing.module.ts file</b><br>
{path:'auth/login',component }<br/>

<b> /auth/login <-------In url </b> <br/>

<b>Code in login component</b> </br>


<b>tsconfig.json-------------> strict = false </b> </br>

<b>Make sure  <router-outlet></router-outlet>  present in app.component.html file</b><br>

<b>Code in Login Page Done</b></br>

<b>Code In Register form is pending</b></br>

<br/>

<b>Highlights of 4th Push</b> <br/>

Inside shared--->services---> cmd run ng g s http <br/>

<b>Inside app.module.ts file Add </b> <br>

import {HttpClientModule} from '@angular/common/http';<br>
import { FormsModule } from '@angular/forms';<br>

imports:[<br>
    HttpClientModule,<br>
    FormsModule,<br>
]<br>

<b>URL Settings for API </b> <br/> 

Add inside environment.ts<======= file for development environment <br>

Add inside environment.prod.ts <===== file for production environment <br>

<b>Enum for Save/Update Button</b> <br>
ng g e db-operation <br>

<b>Custom Validation</b> <br/>
Inside Validators  create file validation.validator.ts  <br/>

<b>Create interface for Left side menu</b><br>
Inside interface folder menu.interface.ts<br>

<b>Create service for Menu data</b><br>
ng g s menu <br>

 <br/>

<b>Highlights of 3rd Push</b> <br/>

<b>Inside app create folders we create following folders</b> <br/> 
1) components <br/>
2) interceptors <br/>
3) validations  <br/>

 <br/>

<b>Inside components folder  we will create</b><br/>
ng g m dashboard --routing <br/>
create component inside dashboard module. <br/>
ng g c dashboard/dashboard --flat --skip-tests <br/>

<b>Inside components folder  we will create</b><br/>
ng g m auth --routing <br/>
Inside auth feature module we will create <br/>
login logout component <br/>
ng g c auth/login  <br/>



<b>Guard for login<b> <br/>
============ <br/>
ng g g auth/auth <br/>


CanActivate <br/>


<b>Service for auth gurad<b><br/>
=================== <br/>
ng g s auth/auth <br/>



<b>Inside components folder  we will create<b><br/>
ng g m invoice --routing <br/>

ng g m components/masters --routing <br/>

<b> Inside masters components we will create </b> <br/> 
ng g c brandlogo <br/>
ng g c category <br/>
ng g c tag <br/>
ng g c color<br/>
ng g c usertype<br/>
ng g c size<br/>

<br>

<b> Inside component folder</b> <br>
ng g m products --routing <br>
Inside products <br>
ng g c products/manage/add-product <br>
ng g c products/manage/product-list <br>

<b>Note:- Inside Products component manage is folder name.</b> <br/>


<b>Inside component folder</b><br>
====================<br>
ng g m reports --routing<br>
Inside reports<br>
ng g c reports/reports --flat<br>


<b>Inside component folder</b><br>
==================== <br>
ng g m sales --routing <br>
Inside sales <br>
ng g c sales/orders  <br>
ng g c sales/transactions <br>


<b>Inside component folder</b> <br>
==================== <br>
ng g m users --routing <br>
Inside users <br>
ng g c users/add-user <br>
ng g c users/list-user <br>


<b>Inside components</b><br>
================<br>
ng g m settings --routing <br>
inside settings<br>
ng g c settings/profile<br>


<b>shared </b><br>
====== <br>
Inside app folder we create shared feature module, for features which are common. <br>

ng g m shared <br/>

<b>Important Note:- Inside shared module we will not create routing file. </b> <br/>
Because shared contains feature which are common in whole application <br/>
so we can directly put selector where ever we need <br/>



<b>Inside shared</b>------> folder components <br/>
--------------------------------------------------- <br/>
ng g c header <br/>
ng g c footer <br/>
ng g c sidebar <br/>
ng g c feather-icon<br/>
ng g c breadcrumb<br/>


<b>master page = layout component </b><br/>
===========================<br/>
ng g c layout  <--------shared ke andar <br/>
<br/>

<b>Best practice when we apply lazy loading.</b> <br/>
Create separate file for routing<br/>
Don;t disturb app-routing.module.ts file<br/>
Inside shared-->routes folder-->content.routes.ts<br/>
Inside shared-->Create folder services<br/>
Inside shared-->Create folder interface<br/><br/>

<b>Highlights of 2nd Push</b> <br/>

<b> Following commands are used in this POC </b> <br/>
ng new backend    //for creating project  <br/>
stylesheet format would you like to use? = SCSS  <br/>
npm i bootstrap  //for installing bootstrap <br/>
npm install font-awesome  //for installing font awesome <br/>


<b>ng-bootstrap ; Installing from npm is simply doing </b> <br/>
npm install @ng-bootstrap/ng-bootstrap  <br/>
npm install @angular/localize --save  <br/>

Version Used ==> ng-bootstrap v15.1.0 <br/>
https://ng-bootstrap.github.io/#/components/progressbar/examples <br/>
npm i --save-dev @types/feather-icons  <--------------- This worked <br/>

const feather = require('feather-icons');  //<--------------------- This is required when we use above command inside ts file. <br/>

https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam <br/>

https://feathericons.com/?query=git     <------------------ Official site which contains icons. <br/>

ng g c feather-icon --skip-tests  <br/>

ngx-toastr <br/>
========
<br/>
npm i ngx-toastr@12.0.0
<br/>
npm install @angular/animations@12.0.0 --save
<br/>

<b>Important Note </b> <br/>

tsconfig.json <br/>
{
<br/>
...
<br/>
  complilerOptions: { <br/>
        ...
        "skipLibCheck": true <br/>
    } <br/>
} 

<br/>
Inside styles.css -----------> @import '../node_modules/ngx-toastr/toastr-old.css';  //<=============Imp
<br/>

npm i sweetalert2@11.7.1
<br/>
https://sweetalert2.github.io/#examples
<br/>
https://sweetalert2.github.io/#usage
<br/> <br/>


<b>Highlights of 1st Push</b> <br/>
ng new backend //for creating project
stylesheet format would you like to use? = SCSS
npm i bootstrap //for installing bootstrap
npm install font-awesome //for installing font awesome

<br/><br/>

<b> Version details of third party packages </b>
<br/>

"bootstrap": "^5.2.3",<br/>
"feather-icons": "^4.29.0",<br/>
"font-awesome": "^4.7.0",<br/>
"ngx-toastr": "^12.0.0",<br/>
"rxjs": "~7.5.0",<br/>
"sweetalert2": "^11.7.1",<br/>


Software Used <br/>
node --version = v14.20.0 <br/>
npm --version = 6.14.17 <br/>
ng version <br/>
Angular CLI: 14.0.0 <br/>

Check my work 👉👉👉👉  https://abhigit799.github.io/angular-admin-portal-part13/

<br/>
