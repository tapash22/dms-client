(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2833fe9c"],{"8c75":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const c=e=>(Object(l["C"])("data-v-466527a6"),e=e(),Object(l["A"])(),e),s={class:"grid"},i={class:"col-12"},n={class:"card card-w-title"},d={class:"col-12"},r={class:"card"},o=c(()=>Object(l["j"])("div",{class:"grid"},[Object(l["j"])("h5",{class:"col"},[Object(l["j"])("a",{title:"",href:"javascript:void(0)",class:"btn"},[Object(l["j"])("i",{style:{"font-size":"large"},class:"btn pi text-pink-500 pi-folder"})]),Object(l["m"])(" Documents (10) ")])],-1)),b={class:"flex justify-content-between flex-column sm:flex-row"},m={class:"p-input-icon-left mb-2"},u=c(()=>Object(l["j"])("i",{class:"pi pi-search"},null,-1)),j={title:"Delete",href:"javascript:void(0)",class:"btn"},O=c(()=>Object(l["j"])("a",{title:"Approve",href:"javascript:void(0)",class:"btn"},[Object(l["j"])("i",{class:"btn pi text-pink-500 pi-check mr-5"})],-1));function p(e,t,a,c,p,f){const h=Object(l["H"])("Breadcrumb"),v=Object(l["H"])("Button"),y=Object(l["H"])("InputText"),g=Object(l["H"])("router-link"),w=Object(l["H"])("Column"),A=Object(l["H"])("DataTable"),F=Object(l["H"])("DocumentDetailCard2");return Object(l["z"])(),Object(l["i"])("div",s,[Object(l["j"])("div",i,[Object(l["j"])("div",n,[Object(l["n"])(h,{home:p.breadcrumbHome,model:p.breadcrumbItems},null,8,["home","model"])])]),Object(l["j"])("div",d,[Object(l["j"])("div",r,[o,Object(l["n"])(A,{value:p.folders,paginator:!0,class:"p-datatable-gridlines",rows:10,dataKey:"id",rowHover:!0,filters:p.filters1,"onUpdate:filters":t[2]||(t[2]=e=>p.filters1=e),filterDisplay:"menu",loading:p.loading1,responsiveLayout:"scroll",globalFilterFields:["name","sequence","status"]},{header:Object(l["R"])(()=>[Object(l["j"])("div",b,[Object(l["n"])(v,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined mb-2",onClick:t[0]||(t[0]=e=>f.clearFilter1())}),Object(l["j"])("span",m,[u,Object(l["n"])(y,{modelValue:p.filters1["global"].value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.filters1["global"].value=e),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])])])]),empty:Object(l["R"])(()=>[Object(l["m"])(" No customers found. ")]),loading:Object(l["R"])(()=>[Object(l["m"])(" Loading customers data. Please wait. ")]),default:Object(l["R"])(()=>[Object(l["n"])(w,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:Object(l["R"])(({data:e})=>[Object(l["j"])("a",j,[Object(l["j"])("i",{class:Object(l["u"])([e.icon,"btn pi text-pink-500 mr-5"])},null,2)]),"Folder"==e.type?(Object(l["z"])(),Object(l["g"])(g,{key:0,to:{name:"document-info",params:{type:e.name}}},{default:Object(l["R"])(()=>[Object(l["m"])(Object(l["L"])(e.name),1)]),_:2},1032,["to"])):(Object(l["z"])(),Object(l["g"])(g,{key:1,to:{name:"file-details"}},{default:Object(l["R"])(()=>[Object(l["m"])(Object(l["L"])(e.name),1)]),_:2},1024))]),_:1}),Object(l["n"])(w,{field:"date",class:"text-left",header:"Date",style:{"min-width":"12rem"}},{body:Object(l["R"])(({data:e})=>[Object(l["m"])(Object(l["L"])(e.date),1)]),_:1}),Object(l["n"])(w,{field:"created_by",class:"text-left",header:"Created By",style:{"min-width":"12rem"}},{body:Object(l["R"])(({data:e})=>[Object(l["m"])(Object(l["L"])(e.created_by),1)]),_:1}),Object(l["n"])(w,{field:"verified",header:"Action",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:Object(l["R"])(({data:e})=>[O]),_:1})]),_:1},8,["value","filters","loading"])])]),Object(l["n"])(F,{name:"Name",customer:"Custom Attributes",metaFields:"metaFields"}),Object(l["n"])(F,{name:"Name",customer:"Custom Attributes",metaFields:"metaFields"})])}var f=a("0393"),h=(a("bc3a"),a("2473"));var v=a("6b0d"),y=a.n(v);var g={data(){return{display:!1,mapAttributesOpen:!1,statuses:h["Z"],is_active:null,type:"",order:"",folders:null,filters1:null,loading1:!0,breadcrumbHome:null,breadcrumbItems:[],metaField:null,metaFields:h["K"]}},customerService:null,created(){this.initFilters1()},mounted(){this.folders=h["z"],this.breadcrumbHome={icon:"pi pi-home",to:"/"},this.breadcrumbItems=[{label:"Logic Software Ltd",slug:"lst"},{label:"Pending Approval List",slug:"dhaka"}],this.loading1=!1},methods:{open(){this.display=!0},close(){this.display=!1},openMapAttributesDialog(){this.mapAttributesOpen=!0},closeMapAttributesDialog(){this.mapAttributesOpen=!1},async addData(){},initFilters1(){this.filters1={global:{value:null,matchMode:f["a"].CONTAINS},name:{operator:f["b"].AND,constraints:[{value:null,matchMode:f["a"].STARTS_WITH}]},status:{operator:f["b"].OR,constraints:[{value:null,matchMode:f["a"].EQUALS}]}}},clearFilter1(){this.initFilters1()}}};a("df34");const w=y()(g,[["render",p],["__scopeId","data-v-466527a6"]]);t["default"]=w},d229:function(e,t,a){},df34:function(e,t,a){"use strict";a("d229")}}]);
//# sourceMappingURL=chunk-2833fe9c.9d897f98.js.map