(this.webpackJsonpfoodnet=this.webpackJsonpfoodnet||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var r=a(176),n=a(177),i=a(0),s=a.n(i),c=a(11),o=a.n(c),l=a(89),d=a(13),u=a(166),j=a(175),b=a(179),h=a(170),f=a(163),p=a(20),x=a(18),O=a(61),g=a.n(O),m=a(81),v=a(43),y=a(82),C=a.n(y),R=Object(v.b)("app/retrieve",Object(m.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://o2pyf6yarl.execute-api.ap-southeast-2.amazonaws.com/dev/restaurants");case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e)})))),w=Object(v.c)({name:"appSlice",initialState:{restaurants:[],searchedRestaurants:[],filteredRestaurants:[],filters:[],sortCriteriaId:1,isLoading:!1,searchTerm:"",searchedLocation:""},reducers:{searchRestaurants:function(e,t){var a=t.payload;a.searchTerm&&a.location&&(e.searchTerm=a.searchTerm,e.searchedLocation=a.location,console.log(a.searchTerm.length,a.location),e.searchedRestaurants=e.restaurants.filter((function(e){return e.address.toLowerCase().includes(a.location.toLowerCase())&&(e.types.toLowerCase().includes(a.searchTerm.toLowerCase())||e.name.toLowerCase().includes(a.searchTerm.toLowerCase()))})),e.filteredRestaurants=Object(x.a)(e.searchedRestaurants),e.sortCriteriaId=1,e.filters=[])},updateSortCriteria:function(e,t){var a=t.payload;switch(e.sortCriteriaId=null!==a&&void 0!==a?a:1,e.sortCriteriaId){case 1:e.filteredRestaurants=e.filteredRestaurants.sort();break;case 2:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return t.average_rating-e.average_rating}));break;case 3:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return Number(t.price_indicator)-Number(e.price_indicator)}));break;case 4:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return Number(e.price_indicator)-Number(t.price_indicator)}))}},updateFilter:function(e,t){var a=t.payload;switch("add"===a.action?e.filters.push(a.value):e.filters=e.filters.filter((function(e){return e!==a.value})),e.filteredRestaurants=e.searchedRestaurants,e.filters.includes(1)||e.filters.includes(2)||e.filters.includes(3),e.filters.includes(4)||e.filters.includes(5)||e.filters.includes(6)||e.filters.includes(7),(e.filters.includes(8)||e.filters.includes(9)||e.filters.includes(10)||e.filters.includes(11)||e.filters.includes(12)||e.filters.includes(13)||e.filters.includes(14)||e.filters.includes(15))&&(e.filteredRestaurants=e.filteredRestaurants.filter((function(t){return(!e.filters.includes(8)||t.info.includes('"handicap_options": 1'))&&(!e.filters.includes(9)||t.info.includes('"vegan": 1'))&&(!e.filters.includes(10)||t.info.includes('"vegan": 1'))&&(!e.filters.includes(11)||t.info.includes("gluten-free"))&&(!e.filters.includes(12)||t.info.includes('"wifi": 1'))&&(!e.filters.includes(13)||t.info.includes("serve alcohol"))&&(!e.filters.includes(14)||t.info.includes('"currently_open": true'))&&(!e.filters.includes(15)||t.info.includes('"near_train": 1'))}))),e.sortCriteriaId){case 1:e.filteredRestaurants=e.filteredRestaurants.sort();break;case 2:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return e.average_rating-t.average_rating}));break;case 3:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return Number(e.price_indicator)-Number(t.price_indicator)}));break;case 4:e.filteredRestaurants=e.filteredRestaurants.sort((function(e,t){return Number(t.price_indicator)-Number(e.price_indicator)}))}}},extraReducers:function(e){return e.addCase(R.fulfilled,(function(e,t){var a=t.payload;e.restaurants=a,e.isLoading=!1})).addCase(R.pending,(function(e){e.isLoading=!0})).addCase(R.rejected,(function(e){e.restaurants=[],e.isLoading=!1}))}}),N=w.actions,k=N.searchRestaurants,T=N.updateFilter,F=N.updateSortCriteria,S=w.reducer,I=a(167),L=a(168),_=a(169),B=a(171),E=a(172),A=a(173),D=a(85),P=a.n(D),W=a(86),z=a.n(W),M=a(44),V=a(3),U=a(2);function G(e){var t=e.costIndication,a=e.maxCost,r=void 0===a?5:a,n=Object(V.a)(e,["costIndication","maxCost"]);return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(f.a,Object(M.a)(Object(M.a)({color:"textPrimary",display:"inline"},n),{},{children:"$".repeat(t)})),Object(U.jsx)(f.a,Object(M.a)(Object(M.a)({color:"textSecondary",display:"inline"},n),{},{children:"$".repeat(r-t)}))]})}var H=a(182),J=Object(u.a)((function(e){return{smallText:{fontSize:12},infoText:{fontSize:14},root:{maxWidth:500,margin:"auto"}}}));function K(e){var t=e.rank,a=e.restaurant,r=J();return Object(U.jsxs)(I.a,{className:r.root,children:[Object(U.jsx)(L.a,{component:"img",style:{height:150},src:"https://via.placeholder.com/728x90.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/"}),Object(U.jsx)(_.a,{children:Object(U.jsxs)(h.a,{container:!0,justify:"space-between",children:[Object(U.jsxs)(h.a,{xs:5,children:[Object(U.jsx)(f.a,{variant:"h6",color:"primary",style:{fontWeight:"bold"},children:"".concat(t,". ").concat(a.name)}),Object(U.jsx)(f.a,{className:r.smallText,children:a.address})]}),Object(U.jsx)(h.a,{xs:1,children:Object(U.jsx)(B.a,{orientation:"vertical",flexItem:!0,style:{height:"80%",margin:"auto"}})}),Object(U.jsxs)(h.a,{xs:5,style:{textAlign:"center"},children:[Object(U.jsx)(f.a,{children:Object(U.jsx)(H.a,{precision:.1,value:Number(a.average_rating),readOnly:!0})}),Object(U.jsx)(f.a,{className:r.smallText,children:a.info.includes('"currently_open": true')?"Open Now":"Closed"})]}),Object(U.jsx)(h.a,{xs:12,children:Object(U.jsx)(B.a,{component:"hr",style:{margin:5}})}),Object(U.jsx)(h.a,{xs:3,children:Object(U.jsx)(f.a,{className:r.infoText,style:{fontWeight:"bolder"},children:"COST:"})}),Object(U.jsx)(h.a,{xs:9,children:Object(U.jsx)(f.a,{className:r.infoText,children:Object(U.jsx)(G,{costIndication:Number(a.price_indicator)})})}),Object(U.jsx)(h.a,{xs:3,children:Object(U.jsx)(f.a,{className:r.infoText,style:{fontWeight:"bolder"},children:"CUISINES:"})}),Object(U.jsx)(h.a,{xs:9,children:Object(U.jsx)(f.a,{className:r.infoText,children:a.types})})]})}),Object(U.jsxs)(E.a,{children:[Object(U.jsx)(A.a,{variant:"contained",disableElevation:!0,startIcon:Object(U.jsx)(P.a,{}),children:"Call"}),Object(U.jsx)(A.a,{variant:"contained",disableElevation:!0,startIcon:Object(U.jsx)(z.a,{}),children:"View Menu"}),Object(U.jsx)(A.a,{variant:"contained",disableElevation:!0,style:{backgroundColor:"#FF3008",color:"white"},children:"DoorDash"})]})]})}function $(e){var t=e.service,a=e.rating,r=e.numberOfReviews;return Object(U.jsx)(I.a,{style:{marginBottom:25},children:Object(U.jsxs)(_.a,{children:[Object(U.jsx)(f.a,{display:"inline",children:t}),Object(U.jsx)(H.a,{value:Number(a),readOnly:!0}),Object(U.jsx)(f.a,{color:"textSecondary",display:"inline",children:r})]})})}function q(e){var t=e.rank,a=e.restaurant;return Object(U.jsxs)(h.a,{container:!0,spacing:6,children:[Object(U.jsx)(h.a,{item:!0,xs:6,children:Object(U.jsx)(K,{rank:t,restaurant:a})}),Object(U.jsx)(h.a,{item:!0,xs:6,children:a.ratings.map((function(e){return Object(U.jsx)($,{service:e.service,rating:e.rating,numberOfReviews:e.numberOfReviews},e.service)}))})]})}function Q(){var e=Object(p.c)((function(e){return e})).filteredRestaurants;return Object(U.jsx)(U.Fragment,{children:e.map((function(e,t){return Object(U.jsx)(q,{rank:t+1,restaurant:e},e.name)}))})}var X=a(180),Y=Object(u.a)((function(e){return{chip:{width:"100%",textAlign:"center",marginBottom:e.spacing(.5),marginTop:e.spacing(.5),backgroundColor:"".concat(e.palette.grey[200]," !important")},chipSelected:{backgroundColor:"#C0C0C0 !important"}}}));function Z(e){var t=e.title,a=e.options,r=e.selectedOptions,n=e.onFilterChange,i=Y();return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(f.a,{variant:"h6",children:t}),Object(U.jsx)(B.a,{component:"hr"}),a.map((function(e){return Object(U.jsx)(X.a,{onClick:function(){return t=e.value,void(r.includes(t)?n(t,"remove"):n(t,"add"));var t},label:e.label,className:r.includes(e.value)?"".concat(i.chip," ").concat(i.chipSelected):i.chip},e.value)}))]})}var ee=Object(u.a)((function(e){return{root:{padding:e.spacing(2),borderRadius:5,backgroundColor:"white"}}})),te=[{label:"Popularity - high to low",value:1},{label:"Rating - high to low",value:2},{label:"Cost - high to low",value:3},{label:"Cost - low to high",value:4}];function ae(){var e=Object(p.c)((function(e){return e})),t=e.filters,a=e.sortCriteriaId,r=Object(p.b)(),n=ee(),i=function(e,t){r(T({value:e,action:t}))};return Object(U.jsxs)(b.a,{className:n.root,children:[Object(U.jsx)(f.a,{variant:"h6",children:"Filters"}),Object(U.jsx)(B.a,{component:"hr"}),Object(U.jsx)(Z,{title:"Sort By",options:te,onFilterChange:function(e,t){r(F("add"===t?e:void 0))},selectedOptions:a?[a]:[]}),Object(U.jsx)(Z,{title:"Category",options:[{label:"Dine in - 12",value:1},{label:"Delivery - 8",value:2},{label:"Takeaway - 10",value:3}],selectedOptions:t,onFilterChange:i}),Object(U.jsx)(Z,{title:"Atmosphere",options:[{label:"Casual dining - 9",value:4},{label:"Wine Bar - 5",value:5},{label:"Fine Dining - 4",value:6},{label:"Cafe - 6",value:7}],selectedOptions:t,onFilterChange:i}),Object(U.jsx)(Z,{title:"Extra Filters",options:[{label:"Handicap Accessible - 6",value:8},{label:"Vegetarian Options - 8",value:9},{label:"Vegan Options - 6",value:10},{label:"Gluten-Free - 4",value:11},{label:"Free Wi-Fi - 7",value:12},{label:"Serve Alcohol - 8",value:13},{label:"Open right now - 12",value:14},{label:"Close to Public Transport - 7",value:15}],selectedOptions:t,onFilterChange:i})]})}var re=a(24),ne=a(174),ie=a(178),se=a(87),ce=a.n(se),oe=Object(u.a)((function(e){return{root:{marginLeft:25,marginRight:25,width:300}}}));function le(e){var t=e.onSearch,a=e.onChange,r=e.searchTerm,n=oe();return Object(U.jsx)(ie.a,{value:r,onChange:a,onKeyPress:function(e){"Enter"===e.key&&t()},InputProps:{startAdornment:Object(U.jsx)(ce.a,{})},className:n.root,variant:"outlined",placeholder:"...Desserts (Search for a cuisine or dish)"})}var de=a(88),ue=a.n(de),je=Object(u.a)((function(e){return{root:{marginLeft:25,width:250}}}));function be(e){var t=e.onSearch,a=e.onChange,r=e.searchTerm,n=je();return Object(U.jsx)(ie.a,{value:r,onChange:a,onKeyPress:function(e){"Enter"===e.key&&t()},InputProps:{startAdornment:Object(U.jsx)(ue.a,{style:{color:"red"}})},className:n.root,variant:"outlined",placeholder:"Enter your location"})}var he=Object(u.a)((function(e){return{root:{height:"60vh",textAlign:"center",backgroundImage:"url(".concat("/FoodNetUi","/background.png)"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},text:{color:"white"},logoBox:{paddingTop:180}}}));function fe(){var e=he(),t=Object(p.b)(),a=s.a.useState(""),r=Object(re.a)(a,2),n=r[0],i=r[1],c=s.a.useState(""),o=Object(re.a)(c,2),l=o[0],d=o[1],u=function(){t(k({searchTerm:n,location:l}))};return Object(U.jsxs)(ne.a,{position:"static",className:e.root,elevation:0,children:[Object(U.jsxs)(b.a,{className:e.logoBox,children:[Object(U.jsx)("img",{src:"icon.png",style:{paddingBottom:88,paddingRight:10},alt:"Logo icon"}),Object(U.jsx)("img",{src:"logo.png",alt:"Logo"})]}),Object(U.jsxs)(b.a,{children:[Object(U.jsx)(f.a,{display:"inline",className:e.text,variant:"h4",children:"Discover the best"}),Object(U.jsx)(le,{onSearch:u,searchTerm:n,onChange:function(e){e.persist(),i(e.target.value)}}),Object(U.jsx)(f.a,{display:"inline",className:e.text,variant:"h4",children:"in"}),Object(U.jsx)(be,{onSearch:u,searchTerm:l,onChange:function(e){e.persist(),d(e.target.value)}})]})]})}var pe=Object(u.a)((function(e){return{text:{display:"inline-block"},root:{paddingTop:e.spacing(3),paddingBottom:e.spacing(4),paddingLeft:e.spacing(4),paddingRight:e.spacing(4),backgroundColor:e.palette.grey[200]}}})),xe=function(){var e=pe(),t=Object(p.b)(),a=Object(p.c)((function(e){return e})),r=a.searchTerm,n=a.searchedLocation,i=a.isLoading;return s.a.useEffect((function(){t(R())}),[t]),Object(U.jsx)(U.Fragment,{children:i?Object(U.jsx)(j.a,{color:"primary",style:{margin:"auto"}}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(fe,{}),Object(U.jsx)(b.a,{className:e.root,children:Object(U.jsx)(h.a,{container:!0,justify:"center",children:r&&n?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(h.a,{item:!0,xs:12,children:Object(U.jsx)(f.a,{variant:"h4",style:{paddingBottom:15},children:"'".concat(r,"' places in '").concat(n,"'")})}),Object(U.jsx)(h.a,{item:!0,xs:2,children:Object(U.jsx)(ae,{})}),Object(U.jsx)(h.a,{item:!0,xs:10,children:Object(U.jsx)(Q,{})})]}):Object(U.jsx)(f.a,{variant:"h4",style:{paddingBottom:15},children:"Type in the search bar to start searching"})})})]})})};var Oe=function(){return Object(U.jsx)(l.a,{basename:"/FoodNetUi",children:Object(U.jsx)(d.c,{children:Object(U.jsx)(d.a,{path:"/",component:xe})})})},ge=a(90),me=Object(ge.a)({typography:{fontFamily:"Lato"},palette:{contrastThreshold:2,primary:{main:"#B30733"},secondary:{main:"#eeeee4"}},overrides:{MuiCssBaseline:{"@global":{body:{backgroundImage:"background.png"}}},MuiOutlinedInput:{input:{padding:"10px 14px"},root:{backgroundColor:"#eeeee4",borderRadius:25}}}}),ve=Object(v.a)({reducer:S});o.a.render(Object(U.jsxs)(s.a.StrictMode,{children:[Object(U.jsx)(r.a,{}),Object(U.jsx)(n.a,{theme:me,children:Object(U.jsx)(p.a,{store:ve,children:Object(U.jsx)(Oe,{})})})]}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.240ce87b.chunk.js.map