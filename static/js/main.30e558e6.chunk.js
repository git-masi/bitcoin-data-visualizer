(this["webpackJsonpbitcoin-data-visualizatoin-app"]=this["webpackJsonpbitcoin-data-visualizatoin-app"]||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/bitcoin-logo.9ceffd75.svg"},130:function(e,t,a){e.exports={minMax:"PriceIndex_minMax__3UfIq"}},134:function(e,t,a){e.exports=a(291)},139:function(e,t,a){},140:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(139),a(34)),o=a(294),s=a(295),u=(a(140),function(e){var t=e.children;return r.a.createElement("section",{className:"page"},t)}),m=a(13),d=a.n(m),p=a(23),h=a(17),f=a(18),b=a(20),g=a(19),E=a(44),v=a.n(E),y=a(52),D=a.n(y),S=a(32),w=a(123),k=a.n(w),x=function(){return r.a.createElement(D.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",sticky:"top"},r.a.createElement(D.a.Brand,null,r.a.createElement("img",{alt:"Bitcoin Viz Logo",src:k.a,width:"30",height:"30",className:"d-inline-block align-top mr-3"}),"BitcoinViz"),r.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto"},r.a.createElement(S.IndexLinkContainer,{to:"/"},r.a.createElement(v.a.Link,null,"Home")),r.a.createElement(S.IndexLinkContainer,{to:"/about"},r.a.createElement(v.a.Link,null,"About")),r.a.createElement(S.IndexLinkContainer,{to:"/invest"},r.a.createElement(v.a.Link,null,"Invest")),r.a.createElement(S.IndexLinkContainer,{to:"/price-index"},r.a.createElement(v.a.Link,null,"Price Index")))))},C=a(124),j=a.n(C),O=a(84),P=a.n(O),T=function(){return r.a.createElement("div",{className:P.a.spinnerContainer},r.a.createElement(j.a,{className:P.a.spinner,animation:"border",variant:"primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},I=a(27),H=a.n(I),N=a(125),A=a.n(N),L=a(24),B=a.n(L),R=a(10),_=a.n(R),F=a(1),Q=a.n(F),G=a(64),M=a.n(G),U=a(35),z=a.n(U),V=a(36),Y=a.n(V),$=a(63),q=a.n($),W=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={curBitcoinRateUSD:null,rateChange:null,articles:[],dataLoaded:!1},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday";function a(){return(a=Object(p.a)(d.a.mark((function e(a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t).then((function(e){return Object.values(e.bpi)[0]}));case 2:return r=e.sent,e.abrupt("return",a/r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return r.apply(this,arguments)}function r(){return(r=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"GET",headers:{"Ocp-Apim-Subscription-Key":"de62115a7b5b46b49838c4508fbf2a89"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n("https://api.coindesk.com/v1/bpi/currentprice.json").then((function(e){return e.bpi.USD.rate_float})).then((function(t){return e.setState({curBitcoinRateUSD:t.toFixed(2)}),t})).then((function(e){return function(e){return a.apply(this,arguments)}(e)})).then((function(t){var a=100*(1-t);e.setState({rateChange:a.toFixed(4)})})).catch((function(e){return console.log(e)})),function(e){return l.apply(this,arguments)}('https://bitviz-bitcoin-news.cognitiveservices.azure.com/bing/v7.0/news/search?q="bitcoin"').then((function(e){return e.value})).then((function(t){var a=t.map((function(e){return{title:e.name,description:e.description,source:e.provider[0].name,url:e.url}}));e.setState({articles:a,dataLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.curBitcoinRateUSD,a=e.dataLoaded,l=e.rateChange,c=e.articles,i=r.a.createElement(Y.a,{variant:l>0?"success":"danger"},l),o=["news","bitcoin","cryptocurrency","code","finance"],s=c.map((function(e,t){return r.a.createElement(M.a.Item,{key:t},r.a.createElement("img",{className:"d-block w-100",src:"https://source.unsplash.com/1600x900/?".concat(o[t]),alt:"First slide"}),r.a.createElement(M.a.Caption,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"Read more at"," ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.source))))})),u=a?r.a.createElement(H.a,{className:"mb-4"},r.a.createElement(A.a,{fluid:!0,className:"mt-3 mb-0 ".concat(q.a.jumbotron)},r.a.createElement(H.a,null,r.a.createElement(B.a,{className:"justify-content-md-center"},r.a.createElement(_.a,{md:"auto",className:"d-flex justify-content-center"},r.a.createElement("div",{className:q.a.coin})),r.a.createElement(_.a,{md:"auto",className:"my-auto d-flex justify-content-center"},r.a.createElement("h1",{style:{textAlign:"center"}},"Bitcoin Price",r.a.createElement("span",{className:q.a.tickerSymbol}," (BTC)"),r.a.createElement("span",null," $",t)," ",i))))),r.a.createElement(B.a,null,r.a.createElement(_.a,{lg:4,className:"mt-3"},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Title,null,"Investment Tools"),r.a.createElement(Q.a.Text,null,"The invetment tools give you an idea of return on investment over different time periods, as well as useful information about price volatility."),r.a.createElement(S.LinkContainer,{exact:!0,to:"/invest"},r.a.createElement(z.a,{variant:"success"},"INVEST")))),r.a.createElement(Q.a,{className:"mt-3"},r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Title,null,"Historical Price Info"),r.a.createElement(Q.a.Text,null,"The historical price index shows you the value of bitcoin over time."),r.a.createElement(S.LinkContainer,{exact:!0,to:"price-index"},r.a.createElement(z.a,{variant:"info"},"PRICE INDEX"))))),r.a.createElement(_.a,{lg:8,className:"mt-3"},r.a.createElement(M.a,null,s)))):r.a.createElement(H.a,null,r.a.createElement(B.a,{className:"justify-content-center mt-3"},r.a.createElement(_.a,{xs:"auto"},r.a.createElement(T,null))));return r.a.createElement(n.Fragment,null,r.a.createElement(x,null),u)}}]),a}(n.Component),J=a(31),K=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement(H.a,{className:"mb-4"},r.a.createElement(B.a,null,r.a.createElement(_.a,null,r.a.createElement(Q.a,{bg:"danger",text:"white",className:"mt-3"},r.a.createElement(Q.a.Header,null,"Disclaimer"),r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Text,null,"Bitcoin Data Visualizer is ",r.a.createElement("strong",null,r.a.createElement("em",null,"NOT"))," a reliable source of financial information. The creator does not make any guarantees as to the accuracy of the information contained anywhere on the site. Please consult a financial advisor (preferably one with a fiduciary responsibility to you) if you are going to engage in any investment activities. The creator is not responsible for any losses that occur as a result of investments made using any features on this site."))),r.a.createElement(Q.a,{className:"mt-3"},r.a.createElement(Q.a.Header,null,"About the Creator"),r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Text,null,"Hi! I'm Eric Masi, Front-End Web Developer. Thanks for checking out my app."),r.a.createElement(Q.a.Text,null,"I got the idea for this app after finishing my first course on React. I have come to really enjoy the React workflow and I wanted to keep experimenting with the technology while learning new things."),r.a.createElement(Q.a.Text,null,"Bitcoin Data Visualizer is primarily a means for me to practice consuming API data, using component libraries (Bootstrap React), data visualization, and using Firebase. That\u2019s a lot of new stuff for me to learn! I would be lying if I said that it wasn\u2019t extremely frustrating at times, but I had fun doing it."),r.a.createElement(Q.a.Text,null,"I think the word \u201cpassion\u201d is a bit overused these days. Especially when talking about yourself and your work (kind of like what I\u2019m doing now). Do I have a passion for web development? Well, I spend most of my free time learning new things about web development. Morning, noon, night, weekday, weekend, it doesn\u2019t matter. On any given day I try to do something to further my knowledge and abilities. That\u2019s why I made this app. I think bitcoin is cool and all but I think web development generally is even cooler. So I'll leave it for you to decide if this is passion or not."),r.a.createElement(Q.a.Text,null,"Anyway, if you like this app feel free to get in contact with me and/or check out my portfolio or my GitHub page. Thanks!"),r.a.createElement(J.Link,{to:"https://gitmasi.com/"},"Portfolio")," | ",r.a.createElement(J.Link,{to:"https://github.com/git-masi"},"GitHub"))),r.a.createElement(Q.a,{className:"mt-3"},r.a.createElement(Q.a.Header,null,"My History With Bitcoin"),r.a.createElement(Q.a.Body,null,r.a.createElement(Q.a.Text,null,"I first heard about bitcoin back in college, some time in 2010. At the time bitcoin was just a curiosity and no one in the mainstream was talking about cryptocurrency or blockchain (as far as I\u2019m aware). My friends and I discussed mining bitcoin for several years after but to my knowledge none of us ever did."),r.a.createElement(Q.a.Text,null,"As they say hindsight is 20/20. There was no way that any of us could have known that several years later, at its peak, a single bitcoin would be worth $20k! Certainly if I could go back in time and tell myself to make any one investment it would be to hoard bitcoin while it still costs hundreds of dollars or less and sell it when the price hit that peak."),r.a.createElement(Q.a.Text,null,"It is true that the \u201cvalue\u201d of bitcoin has reached staggering levels, even the price at the time of this writing is somewhere just south of $9k (which would have been unbelievable back in 2010). But I put the word \u201cvalue\u201d in quotes because for most of us bitcoin, and cryptocurrency generally, is still just a curiosity. In my opinion, we have yet to fully realize the potential of this technology."),r.a.createElement(Q.a.Text,null,"I mean think about it, even the fact that we still think of the value of bitcoin as it relates to fiat money is an indication that it\u2019s full potential has yet to be realized. Just as I couldn\u2019t have predicted what an amazing investment bitcoin was back in 2010, even not in 2019 I can\u2019t predict what the ultimate impact of cryptocurrency and blockchain will be. And I suspect that anyone who makes strong assertions about the future of these technologies is either lying, selling something, delusional about their own abilities to predict the future, or some combination of those things."),r.a.createElement(Q.a.Text,null,"It\u2019s all just speculation at this point. But it\u2019s still fun to think about.")))))))},X=a(50),Z=a(8),ee=a.n(Z),te=a(40),ae=a.n(te),ne=a(41),re=a.n(ne),le=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={purchaseDate:"",saleDate:"",purchaseQuant:0,saleQuant:0,validated:!1},e.inputHandler=function(t){e.setState(Object(X.a)({},t.target.name,t.target.value))},e.formSubmitHandler=function(t){if(t){t.preventDefault();var a=t.currentTarget;if(e.setState({validated:!0}),a.checkValidity()){var n={purchaseDate:e.state.purchaseDate,saleDate:e.state.saleDate,purchaseQuant:e.state.purchaseQuant,saleQuant:e.state.saleQuant};e.props.formSubmitHandler(n)}}},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.validated,a=e.purchaseDate,n=e.saleDate,l=e.purchaseQuant,c=e.saleQuant,i=function(){var e=new Date;return new Date(e.setDate(e.getDate()-1)).toISOString().replace(/[T](\S*)$/,"")};return r.a.createElement(Q.a,{border:"light",className:"mt-3"},r.a.createElement(Q.a.Header,null,"Date Range"),r.a.createElement(Q.a.Body,null,r.a.createElement(ee.a,{noValidate:!0,validated:t,onSubmit:this.formSubmitHandler},r.a.createElement(ee.a.Row,null,r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"Purchase Date"),r.a.createElement(ae.a,{placement:"bottom",overlay:r.a.createElement(re.a,null,"Cannot be earlier than 07/17/2010.")},r.a.createElement(ee.a.Control,{type:"date",name:"purchaseDate",value:a,onChange:this.inputHandler,required:!0,min:"2010-07-17"})))),r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"Sale Date"),r.a.createElement(ae.a,{placement:"bottom",overlay:r.a.createElement(re.a,{id:"bottom"},"Must be between Purchase Date and ",i(),".")},r.a.createElement(ee.a.Control,{type:"date",name:"saleDate",value:n,onChange:this.inputHandler,required:!0,min:function(){if(""!==a){var e=Date.parse(a),t=new Date(e),n=new Date(e+6e4*t.getTimezoneOffset());return new Date(n.setDate(n.getDate()+1)).toISOString().replace(/[T](\S*)$/,"")}}(),max:i()}))))),r.a.createElement(ee.a.Row,null,r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"Purchase Quantity"),r.a.createElement(ee.a.Control,{type:"number",name:"purchaseQuant",value:l,onChange:this.inputHandler,required:!0,min:c,max:"21000000"}))),r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"Sale Quantity"),r.a.createElement(ee.a.Control,{type:"number",name:"saleQuant",value:c,onChange:this.inputHandler,required:!0,min:"0",max:"21000000"})))),r.a.createElement(z.a,{as:"input",variant:"outline-primary",type:"submit",value:"Submit"}))))}}]),a}(n.Component),ce=a(128),ie=a.n(ce),oe=a(30),se=a(53),ue=a.n(se),me=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.curPrice,a=e.salePrice,l=e.purchasePrice,c=e.saleQuant,i=e.purchaseQuant,o=e.ROI,s=l*i,u=a*c,m=a*c-l*c,d=(i-c)*t,p=function(){return 0===m?"":m>0?ue.a.gain:ue.a.loss};return r.a.createElement(n.Fragment,null,r.a.createElement(_.a,{lg:4,className:"mb-3"},r.a.createElement(Q.a,{className:"mt-3 ".concat(ue.a.fullHeight)},r.a.createElement(Q.a.Header,null,"Results"),r.a.createElement(Q.a.Body,{className:"d-flex justify-content-center align-items-center"},r.a.createElement(ie.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Principal"),r.a.createElement("td",null,"$",s.toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Sale"),r.a.createElement("td",null,"$",u.toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,"Gain / Loss"),r.a.createElement("td",{className:p()},"$",m.toFixed(2))),r.a.createElement("tr",null,r.a.createElement("td",null,"ROI"),r.a.createElement("td",{className:p()},"%",o)),r.a.createElement("tr",null,r.a.createElement("td",null,"Remaining Value"),r.a.createElement("td",null,"$",d.toFixed(2)))))))),r.a.createElement(_.a,{lg:4,className:"mb-3"},r.a.createElement(Q.a,{className:"mt-3 justify-content-center align-items-center ".concat(ue.a.fullHeight)},r.a.createElement(oe.b,{data:{datasets:[{data:[m,u,d],backgroundColor:["".concat(m>=0?"rgba(46, 204, 113, .7)":"rgba(231, 76, 60, .7)"),"rgba(52, 152, 219, .7)","rgba(52, 73, 94, .7)"]}],labels:["".concat(m>=0?"Gain":"Loss"),"Sale","Remaining Value"]},options:{responsive:!0,legend:{display:!0,position:"top"}}}))))}}]),a}(n.Component),de=a(43),pe=a(129);var he=function(e){var t=new Date;switch(!0){case"Past 7 Days"===e:return[n(t),a(t,7)];case"Past 30 Days"===e:return[n(t),a(t,30)];case"YTD"===e:return[n(t),a(t,function(e){var t=new Date(e.getTime()),a=new Date(e.getFullYear(),0,1);return Math.floor((t-a)/864e5)}(t))];case"Past Year"===e:return[n(t),a(t,365)];case"All Time"===e:return[n(t),"2010-07-17"];default:console.log("something went wrong!")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7;return e.setDate(e.getDate()-t),n(e)}function n(e){return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().replace(/[T](\S*)$/,"")}},fe=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={labels:[],volatility:[],deviations:[]},e.calcVolatility=function(e){var t=e.reduce((function(e,t){return t+e}))/e.length,a=e.map((function(e){return e-t})).map((function(e){return Math.pow(e,2)})).reduce((function(e,t){return e+t}));return Math.sqrt(a/e.length)},e.makeBarChart=function(t){return{labels:e.props.volatilityRanges,datasets:[{label:"Historical Volatility",data:e.state.volatility,borderColor:"rgba(52, 73, 94, 1.0)",backgroundColor:"rgba(189, 195, 199, .6)",borderWidth:2}]}},e.getStandardDeviations=function(){e.getBitcoinPrice().then((function(e){return e.bpi.USD.rate_float})).then((function(t){for(var a=[],n=-3;n<4;n++)a.push((t+Number(e.state.volatility[0])*n).toFixed(2));return a})).then((function(t){return e.setState({deviations:t})}))},e.setColorGradient=function(e){var t=e.clientWidth,a=e.getContext("2d").createLinearGradient(0,0,t,0);return a.addColorStop(0,"rgba(231, 76, 60, .7)"),a.addColorStop(1/6,"rgba(231, 76, 60, .7)"),a.addColorStop(1/6,"rgba(241, 196, 15, .7)"),a.addColorStop(2/6,"rgba(241, 196, 15, .7)"),a.addColorStop(2/6,"rgba(46, 204, 113, .7)"),a.addColorStop(4/6,"rgba(46, 204, 113, .7)"),a.addColorStop(4/6,"rgba(241, 196, 15, .7)"),a.addColorStop(5/6,"rgba(241, 196, 15, .7)"),a.addColorStop(5/6,"rgba(231, 76, 60, .7)"),a.addColorStop(1,"rgba(231, 76, 60, .7)"),a},e.makeLineChart=function(t){return{labels:e.state.deviations,datasets:[{label:"Probability of Future 7 Day Price",data:[1.345,8.115,27.918,42.3,27.918,8.115,1.345],backgroundColor:e.setColorGradient(t),borderColor:"rgba(52, 73, 94, 1.0)",borderWidth:2,lineTension:.3}]}},e}return Object(f.a)(a,[{key:"getBitcoinPrice",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPriceIndexData",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,a,n,r,l,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"USD",a=c.length>1?c[1]:void 0,n=c.length>2?c[2]:void 0,e.next=5,fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=".concat(t,"&start=").concat(a,"&end=").concat(n));case 5:return r=e.sent,e.next=8,r.json();case 8:return l=e.sent,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e,t=this,a=[],n=Object(pe.a)(this.props.volatilityRanges);try{for(n.s();!(e=n.n()).done;){var r=e.value;a.push(he(r))}}catch(o){n.e(o)}finally{n.f()}for(var l=0,c=a;l<c.length;l++){var i=c[l];this.getPriceIndexData("USD",i[1],i[0]).then((function(e){return Object.values(e.bpi)})).then((function(e){return t.calcVolatility(e).toFixed(2)})).then((function(e){return t.setState({volatility:[].concat(Object(de.a)(t.state.volatility),[e])},(function(){return t.getStandardDeviations()}))}))}}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(_.a,{lg:6,className:"mb-2"},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Header,{className:"mb-2"},"Historical Price Volatility"),r.a.createElement(oe.a,{options:{responsive:!0,legend:!1,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Time Period"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Price (USD)"}}]}},data:this.makeBarChart}))),r.a.createElement(_.a,{lg:6},r.a.createElement(Q.a,null,r.a.createElement(Q.a.Header,{className:"mb-2"},"Probability of Future 7 Day Price"),r.a.createElement(oe.c,{options:{responsive:!0,legend:!1,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Price (USD)"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"% Probability"}}]}},data:this.makeLineChart}))))}}]),a}(n.Component);fe.defaultProps={volatilityRanges:["Past 7 Days","Past 30 Days","YTD","Past Year","All Time"]};var be=fe,ge=new(a(289)),Ee=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={curPrice:0,purchasePrice:0,salePrice:0,purchaseQuant:0,saleQuant:0,ROI:0},e.formSubmitHandler=function(t){var a=function(){var e=Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=".concat("USD","&start=").concat(t,"&end=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a().then((function(e){return e.bpi.USD.rate_float})).then((function(t){return e.setState({curPrice:t})})).then((function(){return n(t.purchaseDate)})).then((function(e){return e.bpi})).then((function(t){return e.setState({purchasePrice:Object.values(t)[0]})})).then((function(){return n(t.saleDate)})).then((function(e){return e.bpi})).then((function(t){return e.setState({salePrice:Object.values(t)[0]})})).then((function(){return e.setState({purchaseQuant:Number(t.purchaseQuant),saleQuant:Number(t.saleQuant)})})).then((function(){var t=ge.ROI(e.state.purchasePrice,e.state.salePrice);e.setState({ROI:t})})).catch((function(e){return console.log(e)}))},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state,t=e.curPrice,a=e.salePrice,l=e.purchasePrice,c=e.saleQuant,i=e.purchaseQuant,o=e.ROI;return r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement(H.a,{className:"mb-4"},r.a.createElement(B.a,null,r.a.createElement(_.a,{lg:4},r.a.createElement(le,{formSubmitHandler:this.formSubmitHandler})),r.a.createElement(me,{curPrice:t,salePrice:a,purchasePrice:l,saleQuant:c,purchaseQuant:i,ROI:o})),r.a.createElement(B.a,{className:"mt-3"},r.a.createElement(be,null))))}}]),a}(n.Component),ve=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currency:"USD",startDate:"",endDate:"",validated:!1},e.inputHandler=function(t){e.setState(Object(X.a)({},t.target.name,t.target.value))},e.currencyChangeHandler=function(t){e.setState(Object(X.a)({},t.target.name,t.target.value),(function(){e.setState({validated:!0});var t={currency:e.state.currency,startDate:e.state.startDate,endDate:e.state.endDate};e.props.formSubmitHandler(t)}))},e.fastActionHandler=function(t){var a=new Date,n=t.target.value;switch(!0){case"Past 7 Days"===n:e.setStartAndEndDates(e.getDateString(a),e.getPastDate(a,7));break;case"Past 30 Days"===n:e.setStartAndEndDates(e.getDateString(a),e.getPastDate(a,30));break;case"YTD"===n:e.setStartAndEndDates(e.getDateString(a),e.getPastDate(a,e.getYTD(a)));break;case"Past Year"===n:e.setStartAndEndDates(e.getDateString(a),e.getPastDate(a,365));break;case"All Time"===n:e.setStartAndEndDates(e.getDateString(a),"2010-07-17");break;default:console.log("something went wrong!")}e.formSubmitHandler()},e.formSubmitHandler=function(t){if(t){var a=t.currentTarget;if(t.preventDefault(),t.stopPropagation(),!a.checkValidity())return}e.setState({validated:!0});var n={currency:e.state.currency,startDate:e.state.startDate,endDate:e.state.endDate};e.props.formSubmitHandler(n)},e.getDateString=function(e){return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().replace(/[T](\S*)$/,"")},e.getPastDate=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7;return t.setDate(t.getDate()-a),e.getDateString(t)},e.setStartAndEndDates=function(t,a){e.setState({startDate:a,endDate:t},(function(){return e.formSubmitHandler()}))},e}return Object(f.a)(a,[{key:"getYTD",value:function(e){var t=new Date(e.getTime()),a=new Date(e.getFullYear(),0,1);return Math.floor((t-a)/864e5)}},{key:"componentDidMount",value:function(){var e=new Date;this.setStartAndEndDates(this.getDateString(e),this.getPastDate(e))}},{key:"render",value:function(){var e=this.state,t=e.validated,a=e.startDate,l=e.endDate;return r.a.createElement(n.Fragment,null,r.a.createElement(Q.a,{className:"mb-2"},r.a.createElement(Q.a.Header,null,"Exchange Currency"),r.a.createElement(Q.a.Body,null,r.a.createElement(ee.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Control,{as:"select",name:"currency",onChange:this.currencyChangeHandler},r.a.createElement("option",null,"USD"),r.a.createElement("option",null,"GBP"),r.a.createElement("option",null,"EUR"),r.a.createElement("option",null,"JPY"),r.a.createElement("option",null,"CAD")))))),r.a.createElement(Q.a,{border:"light",className:"mb-2"},r.a.createElement(Q.a.Header,null,"Date Range"),r.a.createElement(Q.a.Body,null,r.a.createElement(ee.a,{noValidate:!0,validated:t,onSubmit:this.formSubmitHandler},r.a.createElement(ee.a.Row,null,r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"Start Date"),r.a.createElement(ae.a,{placement:"bottom",overlay:r.a.createElement(re.a,null,"Cannot be earlier than 07/17/2010.")},r.a.createElement(ee.a.Control,{type:"date",name:"startDate",value:a,onChange:this.inputHandler,required:!0,min:"2010-07-17"})))),r.a.createElement(_.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Label,null,"End Date"),r.a.createElement(ae.a,{placement:"bottom",overlay:r.a.createElement(re.a,null,"Cannot be the same as or earlier than the Start Date.")},r.a.createElement(ee.a.Control,{type:"date",name:"endDate",value:l,onChange:this.inputHandler,required:!0,min:function(){if(""!==a){var e=Date.parse(a),t=new Date(e),n=new Date(e+6e4*t.getTimezoneOffset());return new Date(n.setDate(n.getDate()+1)).toISOString().replace(/[T](\S*)$/,"")}}()}))))),r.a.createElement(z.a,{as:"input",variant:"outline-primary",type:"submit",value:"Submit"})))),r.a.createElement(Q.a,{border:"light"},r.a.createElement(Q.a.Header,null,"Fast Actions"),r.a.createElement(Q.a.Body,null,r.a.createElement(ee.a,null,r.a.createElement(ee.a.Group,null,r.a.createElement(ee.a.Control,{as:"select",onChange:this.fastActionHandler},r.a.createElement("option",null,"Past 7 Days"),r.a.createElement("option",null,"Past 30 Days"),r.a.createElement("option",null,"YTD"),r.a.createElement("option",null,"Past Year"),r.a.createElement("option",null,"All Time")))))))}}]),a}(n.Component);oe.d.global.animation=!1;var ye=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).setColorGradient=function(e){var t=e.clientHeight,a=e.getContext("2d").createLinearGradient(0,t,0,0);return a.addColorStop(0,"rgba(231, 76, 60, .7)"),a.addColorStop(.38,"rgba(231, 76, 60, .7)"),a.addColorStop(.38,"rgba(241, 196, 15, .7)"),a.addColorStop(.67,"rgba(241, 196, 15, .7)"),a.addColorStop(.67,"rgba(46, 204, 113, .7)"),a.addColorStop(1,"rgba(46, 204, 113, .7)"),a},e.makeChart=function(t){return{labels:e.props.labels,datasets:[{label:"bitcoin price",data:e.props.data,backgroundColor:e.setColorGradient(t),borderColor:"rgba(52, 73, 94, 1.0)",borderWidth:2,borderJoinStyle:"round",lineTension:.2}]}},e}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(Q.a,{className:"mt-2"},r.a.createElement(Q.a.Header,null,"Historical Bitcoin Price Data"),r.a.createElement(Q.a.Body,{style:{position:"relative"}},r.a.createElement(oe.c,{options:{responsive:!0,legend:!1,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Date"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Price (".concat(this.props.currency,")")}}]}},data:this.makeChart})))}}]),a}(n.Component),De=a(130),Se=a.n(De),we=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currency:"USD",startDate:"",endDate:"",labels:[],data:[]},e.formSubmitHandler=function(t){e.setState({currency:t.currency,startDate:t.startDate,endDate:t.endDate})},e.controller=new AbortController,e}return Object(f.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/historical/close.json?currency=".concat(a.state.currency,"&start=").concat(a.state.startDate,"&end=").concat(a.state.endDate),{signal:a.controller.signal});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.endDate===this.state.endDate&&t.startDate===this.state.startDate||n().then((function(e){return a.setState({labels:Object.keys(e.bpi),data:Object.values(e.bpi),isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){this.controller.abort()}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(x,null),r.a.createElement(H.a,{className:"my-4"},r.a.createElement(B.a,null,r.a.createElement(_.a,{md:4},r.a.createElement(ve,{formSubmitHandler:this.formSubmitHandler})),r.a.createElement(_.a,{md:8},r.a.createElement(ye,{currency:this.state.currency,data:this.state.data,labels:this.state.labels}),function(){if(!(e.state.data.length<=0)){var t=Object(de.a)(e.state.data),a=Math.max.apply(Math,Object(de.a)(t)).toFixed(2),n=Math.min.apply(Math,Object(de.a)(t)).toFixed(2),l=(t.reduce((function(e,t){return t+e}))/t.length).toFixed(2),c=t[Math.floor(t.length/2)].toFixed(2);return r.a.createElement(Q.a,{body:!0,className:"mt-2 ".concat(Se.a.minMax)},r.a.createElement(Q.a.Text,null,r.a.createElement(Y.a,{variant:"danger"},"Low:")," ",n),r.a.createElement(Q.a.Text,null,r.a.createElement(Y.a,{variant:"success"},"High:")," ",a),r.a.createElement(Q.a.Text,null,r.a.createElement(Y.a,{variant:"info"},"Average:")," ",l),r.a.createElement(Q.a.Text,null,r.a.createElement(Y.a,{variant:"secondary"},"Median:")," ",c))}}()))))}}]),a}(n.Component),ke=function(e){return r.a.createElement(i.d,{render:function(e){var t=e.location;return r.a.createElement(o.a,null,r.a.createElement(s.a,{key:t.pathname,classNames:"page",timeout:1e3},r.a.createElement(i.g,{location:t},r.a.createElement(i.d,{exact:!0,path:"/",render:function(e){return r.a.createElement(u,null,r.a.createElement(W,e))}}),r.a.createElement(i.d,{exact:!0,path:"/about",render:function(e){return r.a.createElement(u,null,r.a.createElement(K,e))}}),r.a.createElement(i.d,{exact:!0,path:"/invest",render:function(e){return r.a.createElement(u,null,r.a.createElement(Ee,e))}}),r.a.createElement(i.d,{exact:!0,path:"/price-index",render:function(e){return r.a.createElement(u,null,r.a.createElement(we,e))}}))))}})};var xe=function(){return r.a.createElement(ke,null)};c.a.render(r.a.createElement(J.HashRouter,{basename:"/"},r.a.createElement(xe,null)),document.getElementById("root"))},53:function(e,t,a){e.exports={gain:"InvestResults_gain__288aQ",loss:"InvestResults_loss__82UDZ",fullHeight:"InvestResults_fullHeight__3Hs91"}},63:function(e,t,a){e.exports={jumbotron:"Home_jumbotron__1NZwP",coin:"Home_coin__3vHXu",tickerSymbol:"Home_tickerSymbol__3WU5K"}},84:function(e,t,a){e.exports={spinnerContainer:"StyledSpinner_spinnerContainer__2BVGA",spinner:"StyledSpinner_spinner__2wDNV"}}},[[134,1,2]]]);
//# sourceMappingURL=main.30e558e6.chunk.js.map