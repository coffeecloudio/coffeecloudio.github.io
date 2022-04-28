(this["webpackJsonpcoffee-cloud"]=this["webpackJsonpcoffee-cloud"]||[]).push([[14],{246:function(e,t,n){"use strict";n(0),n(247);var o=n(3);t.a=function(e){var t=e.width,n=void 0===t?"1140px":t,i=e.marginTop,a=e.title,r=e.subTitle,s=e.content,l=e.contentWidth,c=e.contentTextAlign,d=void 0===c?"left":c,p=e.white,u=void 0!==p&&p;return Object(o.jsxs)("div",{className:"title-wrap",style:{width:n,margin:"auto",marginTop:i},children:[r&&Object(o.jsx)("div",{style:{color:u?"#fff":"#6f6f6f"},className:"page-content-subtitle",children:r.toLocaleUpperCase()}),Object(o.jsx)("div",{style:{color:u?"#fff":"#1e1e1e",marginBottom:null!==s&&void 0!==s&&s.length?"60px":"100px"},className:"page-content-title",children:a}),s&&(null===s||void 0===s?void 0:s.length)&&Object(o.jsx)("div",{style:{color:u?"#fff":"#6f6f6f",textAlign:d,width:l},className:"page-content",children:s.map((function(e,t){return Object(o.jsx)("div",{children:e},t)}))})]})}},247:function(e,t,n){},270:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var o=n(246),i=(n(270),n(0)),a=n(1),r=n(4),s=n(8),l=n(12),c=n(13),d=n(15),p=n(19),u=n(11),m=n(7),g=n.n(m),h=n(70),f=n.n(h),b=n(42),x=n(35),y=n(6),v=i.forwardRef((function(e,t){var n,o=e.prefixCls,a=e.forceRender,s=e.className,l=e.style,c=e.children,d=e.isActive,p=e.role,u=i.useState(d||a),m=Object(y.a)(u,2),h=m[0],f=m[1];return i.useEffect((function(){(a||d)&&f(!0)}),[a,d]),h?i.createElement("div",{ref:t,className:g()("".concat(o,"-content"),(n={},Object(r.a)(n,"".concat(o,"-content-active"),d),Object(r.a)(n,"".concat(o,"-content-inactive"),!d),n),s),style:l,role:p},i.createElement("div",{className:"".concat(o,"-content-box")},c)):null}));v.displayName="PanelContent";var w=v,k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).handleItemClick=function(){var t=e.props,n=t.onItemClick,o=t.panelKey;"function"===typeof n&&n(o)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e){return!f()(this.props,e)}},{key:"render",value:function(){var e,t,n=this,o=this.props,s=o.className,l=o.id,c=o.style,d=o.prefixCls,p=o.header,u=o.headerClass,m=o.children,h=o.isActive,f=o.showArrow,b=o.destroyInactivePanel,y=o.accordion,v=o.forceRender,k=o.openMotion,j=o.expandIcon,C=o.extra,O=o.collapsible,B="disabled"===O,T=g()("".concat(d,"-header"),(e={},Object(r.a)(e,u,u),Object(r.a)(e,"".concat(d,"-header-collapsible-only"),"header"===O),e)),E=g()((t={},Object(r.a)(t,"".concat(d,"-item"),!0),Object(r.a)(t,"".concat(d,"-item-active"),h),Object(r.a)(t,"".concat(d,"-item-disabled"),B),t),s),P=i.createElement("i",{className:"arrow"});f&&"function"===typeof j&&(P=j(this.props));var I=null!==C&&void 0!==C&&"boolean"!==typeof C;return i.createElement("div",{className:E,style:c,id:l},i.createElement("div",{className:T,onClick:function(){return"header"!==O&&n.handleItemClick()},role:y?"tab":"button",tabIndex:B?-1:0,"aria-expanded":h,onKeyPress:this.handleKeyPress},f&&P,"header"===O?i.createElement("span",{onClick:this.handleItemClick,className:"".concat(d,"-header-text")},p):p,I&&i.createElement("div",{className:"".concat(d,"-extra")},C)),i.createElement(x.b,Object(a.a)({visible:h,leavedClassName:"".concat(d,"-content-hidden")},k,{forceRender:v,removeOnLeave:b}),(function(e,t){var n=e.className,o=e.style;return i.createElement(w,{ref:t,prefixCls:d,className:n,style:o,isActive:h,forceRender:v,role:y?"tabpanel":null},m)})))}}]),n}(i.Component);k.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var j=k;function C(e){var t=e;if(!Array.isArray(t)){var n=Object(u.a)(t);t="number"===n||"string"===n?[t]:[]}return t.map((function(e){return String(e)}))}var O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var o;Object(l.a)(this,n),(o=t.call(this,e)).onClickItem=function(e){var t=o.state.activeKey;if(o.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=Object(s.a)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}o.setActiveKey(t)},o.getNewChild=function(e,t){if(!e)return null;var n=o.state.activeKey,a=o.props,r=a.prefixCls,s=a.openMotion,l=a.accordion,c=a.destroyInactivePanel,d=a.expandIcon,p=a.collapsible,u=e.key||String(t),m=e.props,g=m.header,h=m.headerClass,f=m.destroyInactivePanel,b=m.collapsible,x=null!==b&&void 0!==b?b:p,y={key:u,panelKey:u,header:g,headerClass:h,isActive:l?n[0]===u:n.indexOf(u)>-1,prefixCls:r,destroyInactivePanel:null!==f&&void 0!==f?f:c,openMotion:s,accordion:l,children:e.props.children,onItemClick:"disabled"===x?null:o.onClickItem,expandIcon:d,collapsible:x};return"string"===typeof e.type?e:i.cloneElement(e,y)},o.getItems=function(){var e=o.props.children;return Object(b.a)(e).map(o.getNewChild)},o.setActiveKey=function(e){"activeKey"in o.props||o.setState({activeKey:e}),o.props.onChange(o.props.accordion?e[0]:e)};var a=e.activeKey,r=e.defaultActiveKey;return"activeKey"in e&&(r=a),o.state={activeKey:C(r)},o}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!f()(this.props,e)||!f()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,a=t.style,s=t.accordion,l=g()((e={},Object(r.a)(e,n,!0),Object(r.a)(e,o,!!o),e));return i.createElement("div",{className:l,style:a,role:s?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),t}}]),n}(i.Component);O.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},O.Panel=j;var B=O,T=(O.Panel,n(63)),E=n(34),P=n(57),I=n(26),A=function(e){Object(I.a)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=i.useContext(P.b).getPrefixCls,n=e.prefixCls,o=e.className,s=void 0===o?"":o,l=e.showArrow,c=void 0===l||l,d=t("collapse",n),p=g()(Object(r.a)({},"".concat(d,"-no-arrow"),!c),s);return i.createElement(B.Panel,Object(a.a)({},e,{prefixCls:d,className:p}))},N=n(71),W=n(22),F=function(e){var t,n=i.useContext(P.b),o=n.getPrefixCls,s=n.direction,l=e.prefixCls,c=e.className,d=void 0===c?"":c,p=e.bordered,u=void 0===p||p,m=e.ghost,h=o("collapse",l),f=function(){var t=e.expandIconPosition;return void 0!==t?t:"rtl"===s?"right":"left"}(),x=g()((t={},Object(r.a)(t,"".concat(h,"-borderless"),!u),Object(r.a)(t,"".concat(h,"-icon-position-").concat(f),!0),Object(r.a)(t,"".concat(h,"-rtl"),"rtl"===s),Object(r.a)(t,"".concat(h,"-ghost"),!!m),t),d),y=Object(a.a)(Object(a.a)({},N.a),{motionAppear:!1,leavedClassName:"".concat(h,"-content-hidden")});return i.createElement(B,Object(a.a)({openMotion:y},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,o=n?n(t):i.createElement(T.a,{rotate:t.isActive?90:void 0});return i.createElement("div",null,Object(W.a)(o,(function(){return{className:g()(o.props.className,"".concat(h,"-arrow"))}})))},prefixCls:h,className:x}),function(){var t=e.children;return Object(b.a)(t).map((function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var o=e.key||String(t),i=e.props,r=i.disabled,s=i.collapsible,l=Object(a.a)(Object(a.a)({},Object(E.a)(e.props,["disabled"])),{key:o,collapsible:null!==s&&void 0!==s?s:r?"disabled":void 0});return Object(W.a)(e,l)}return e}))}())};F.Panel=A;var K=F,D=n(3),R=[{title:"Blockchain Engineer / Backend Developer",teamTitle:"Blockchain & Engineering Team",content:[{subTitle:"Job Description",text:["We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features."]},{subTitle:"About this role",text:[{css:{marginBottom:"20px"},text:"We are looking for the next blockchain engineer who can take on the responsibilities and accountabilities in developing, designing, and delivering our blockchain based products and features for our fintech business."},{css:{marginBottom:"10px"},text:"If you have the drive and passion for technology with a strong desire to learn and grow with us. Then you may want to look no further, we are actively on the look-out for our next pool of talents here at our local offices within the CBD:"},"Degree holder in computer science, information technology, engineering, or related disciplines","At least 3+ years of relevant work experience in web application development","Proficient in bash shell scripting and Linux optimization","Knowledge in Filecoin blockchain, e.g. Lotus wallet, data store and message pool;","Experience building backend systems with one or more programming languages such as Golang FFI, Rust / C or C++, and Linux would be highly desirable","Excellent communication skills Chinese and English"]},{subTitle:"Preferred Experience",text:["Previous knowledge with blockchain technologies and digital assets","Experience in financial systems","If you are interested, parties please submit your CV and details in the form below."]}]},{title:"Flutter Developer (Web | Android & IOS)",content:[{subTitle:"Job Highlights",text:[{dot:!0,css:{marginBottom:"10px"},text:"Mobile App development"},{dot:!0,css:{marginBottom:"10px"},text:"Flutter and Android"}]},{subTitle:"Responsibilities:",text:[{dot:!0,css:{marginBottom:"10px"},text:"Responsible for development of mobile apps in Flutter + Android"},{dot:!0,css:{marginBottom:"10px"},text:"Contribute on user journey and logic flows"}]},{subTitle:"Requirements:",text:[{dot:!0,css:{marginBottom:"10px"},text:"Higher diploma or above in Computer Science, Programming or equivalent"},{dot:!0,css:{marginBottom:"10px"},text:"Solid experience in mobile app development in Flutter is highly preferable"},{dot:!0,css:{marginBottom:"10px"},text:"Hands-on in using ios and or Android"},{dot:!0,css:{marginBottom:"10px"},text:"Responsible, self-motivated and independents"},{dot:!0,css:{marginBottom:"10px"},text:"Excellent team player"},{dot:!0,css:{marginBottom:"10px"},text:"Time management skills"},{dot:!0,css:{marginBottom:"25px"},text:"5-day work week"},"If you are interested, parties please submit your CV and details in the form below."]}],topP:"We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features."},{title:"Product Manager \u2013 Blockchain",content:[{subTitle:"Job Highlights",text:[{dot:!0,css:{marginBottom:"10px"},text:"Fintech"},{dot:!0,css:{marginBottom:"10px"},text:"Product management"},{dot:!0,css:{marginBottom:"10px"},text:"Blockchain"}]},{subTitle:"Job Description",text:[{css:{marginBottom:"10px"},text:"Product Manager job to drive product initiatives from inception through execution. Your new company"},{css:{marginBottom:"10px"},text:"We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features. Your new role"},{dot:!0,css:{marginBottom:"10px"},text:"Create and maintain the team's roadmap, milestones, and dependencies with strategic priorities in mind"},{dot:!0,css:{marginBottom:"10px"},text:"Define features, write product specifications, facilitate user studies, iterate on feedback, help write test plans with Trading Managers and Developers, manage the backlog, and ultimately ship products/features in a timely manner"},{dot:!0,css:{marginBottom:"10px"},text:"Interview and interact with customers to build empathy, ensuring that their needs are met"},{dot:!0,css:{marginBottom:"10px"},text:"Prioritize initiatives and projects appropriately and weigh tradeoffs that must be made"},{dot:!0,css:{marginBottom:"10px"},text:"Perform market research and analysis"}]},{subTitle:"What you'll need to succeed",text:[{dot:!0,css:{marginBottom:"10px"},text:"4+ years of product/project management experience or equivalent"},{dot:!0,css:{marginBottom:"10px"},text:"Experience shipping and iterating on successful Software or Financial products at scale"},{dot:!0,css:{marginBottom:"10px"},text:"Product management experience on consumer product onboarding is highly preferable"},{dot:!0,css:{marginBottom:"10px"},text:"Demonstrated leadership with a focus on getting things done autonomously"},{dot:!0,css:{marginBottom:"10px"},text:"The ability to collaborate well with designers and engineers"},{dot:!0,css:{marginBottom:"10px"},text:"An analytical and data-driven work style"},{dot:!0,css:{marginBottom:"40px"},text:"Excellent interpersonal, communication, organization, and prioritization skills"},"If you are interested, parties please submit your CV and details in the form below."]}]},{title:"QA Tester / Engineer",topP:"We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features.",content:[{subTitle:"Highlights - who we are:",text:[{dot:!0,text:"Application Development"},{dot:!0,text:"Friendly working environment"},{dot:!0,text:"Blockchain or Technology"}]},{subTitle:"What we are looking for:",text:["Coffee Cloud is looking for passionate talents, who love and appreciate the fascination of Fintech and Crypto. Our team is active, energetic, and culturally diverse. To embrace the idea of work-life balance, we also endeavor to create a fun and enjoyable environment for our team members."]},{subTitle:"What You'll be doing:",text:["Take charge in the quality assurance of the company\u2019s trading platform business","Develop testing tools, automatic testing frameworks, automatic testing scripts, and conduct automatic testing","Test according to product requirements, including test plan, design, execution, BUG submission and tracking, test report and test improvement, etc","Participate in unit testing, code review, continuous integration, automatic deployment, online monitoring, etc. to ensure code quality and delivery efficiency"]},{subTitle:"Requirements from you:",text:["Solid software engineering, data structure, algorithm, and other foundations; good software application foundation","Interested in quality assurance work and have their own unique understanding","Strong learning ability, strong analytical and problem-solving ability, strong logical thinking ability and expression ability","Proactive in work, with a strong sense of responsibility and rigorous work style, positive thinking, continuous innovation, good collaboration and communication skills and teamwork spirit","Hands on in the following fields is preferred: AI big data, cloud computing, distributed storage, blockchain, cloud platform, etc","Lesser experience will be considered for a QA tester role",{css:{marginTop:"20px"},text:"We offer competitive remuneration package including 5-day work, discretionary bonus to the right applicant. Interested parties, please submit your CV and expected salary, availability in word doc by email or clicking \u201capply now.\u201d"},"(All personal data collected will be strictly for recruitment purposes only)"]}]},{title:"Trading Manager \u2013 Digital Assets Platform",content:[{subTitle:"Job Description",text:["We are looking for a Trading Manager to grow a digital assets platform in Hong Kong. We are a FINTECH Company and one of the market leaders for Cryptocurrency and Blockchain, we are now expanding our fast-growing business to Hong Kong, Dubai and Silicon Valley. We are seeking the right candidates to support our expanding business."]},{subTitle:"Responsibilities",text:["Design, develop and implement Algo trading/quantitative models on the Cryptocurrency market","Develop backtest engine, trading API, responsible for the portfolio of cryptocurrency and implement a trading strategy","Research new market opportunities","Ensure risks are properly managed on a portfolio level","Manage digital asset portfolio positions","Risk Management of trade"]},{subTitle:"Requirements",text:["University graduate with a degree in Computer Science, Programming, Information systems and business and or related disciplines","Cryptocurrency trading strategy experience is preferable","5-8+ years of relevant working experience with trading","Hands-on profitable Algo-trading model is highly preferable","Previous experience in Equity / Future/ FX/ Bond Algo-trading is a plus","Expertise in Python programming skills","Logical in numerical and quantitative analysis skills"]},{subTitle:"What you be doing with us during the on-boarding stage\u2026",text:["Huge responsibilities from Day 1. Be the owner of your own learning curve.","Work in a very dynamic and fast-paced environment. Be part of a growing international team across multiple regions Full involvement in developing brand new products from scratch using the latest technologies alongside a passionate and talented team","If you are interested, parties please submit your CV and details in the form below."]}]},{title:"Data Center Engineer",teamTitle:"Engineering & Networking Team",content:[{subTitle:"Company Overview",text:["Coffee Cloud gives your technology the caffeine kick it needs. Our solution is designed to be Customizable, Secure and Scalable. We are the perfect partner for Cloud & Data Solutions. Based in the heart of Asia, in the Greater Bay Area with a Global reach. Our international clients and partners trust us to provide exception quality digital and data solutions."]},{subTitle:"Responsibilities:",text:[{dot:!0,text:"Facilities Engineer: Carry out preventive and corrective maintenance to all facilities in the data center. Routine inspections. Liaise with and manage works of contractors"},{dot:!0,text:"DC Engineer: Assist in tendering, project planning, site supervision, testing & commissioning"}]},{subTitle:"Requirements",text:[{dot:!0,text:"Tertiary educated in Programming, Computer Engineering and or related discipline"},{dot:!0,text:"Min. 3 years system installation / maintenance experience for data center projects"},{dot:!0,text:"Familiar with UPS, CRAC, chiller, switchboards"},{dot:!0,text:"Registered Electrical Worker, REW A(0) or above"},{dot:!0,text:"Good communication skills"},{dot:!0,css:{marginBottom:"20px"},text:"Able to adapt in the command of languages"},"If you are interested, parties please submit your CV and details in the form below."]}]},{title:"Golang Developer / Protocol Engineer",content:[{subTitle:"Job Description",text:["We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features."]},{subTitle:"About this role",text:[{css:{marginBottom:"10px"},text:"We are looking for the next Golang developer | Protocol Engineer. If you have the drive and passion for technology with a strong desire to learn and grow with us. Then you may want to look no further, we are working in an agile environment whereby taking ownership and driving projects into a high note in completion its almost always an absolute must. If you are a techie and able to come in and jump start to fix issues and make improvements across all stack and decks."},"Degree holder in computer science, information technology, engineering, or related disciplines","At least 3+ years of relevant work experience in web application development","Knowledge in blockchain, e.g. Lotus wallet, data store and message pool;","Experience building backend systems with one or more programming languages such as Golang FFI, Rust / C or C++ would be highly desirable","Excellent communication skills Cantonese and Mandarin"]},{subTitle:"Preferred Experience",text:["Previous knowledge with blockchain technologies and digital assets","Experience in financial systems","If you are interested, parties please submit your CV and details in the form below."]}]},{title:"Rust Developer",content:[{subTitle:"Job Highlights",text:[{dot:!0,css:{marginBottom:"10px"},text:"AR blockchain development experience"},{dot:!0,css:{marginBottom:"10px"},text:"Good experience with Solidity"}]},{subTitle:"Job Description",text:[{css:{marginBottom:"10px"},text:"Experienced blockchain engineer with a passion for quality code and good design."},{css:{marginBottom:"10px"},text:"Who not shy away from exploring new languages and tools, acquiring the skills need to get the job done."},{css:{marginBottom:"10px"},text:"You have opinions about your favorite open-source projects and cryptocurrencies."},{css:{marginBottom:"10px"},text:"You have experience with Solidity, and you\u2019ve deployed smart contracts in the real world."},{dot:!0,css:{marginBottom:"10px"},text:"Real world blockchain development experience"},{dot:!0,css:{marginBottom:"10px"},text:"Proficient in Rust programming"},{dot:!0,css:{marginBottom:"10px"},text:"Great written and spoken English and Chinese (either Cantonese and or mandarin)"},{dot:!0,css:{marginBottom:"10px"},text:"Knowledge about crypto algorithms, e.g. Merkle Tree, ZN-SNARK"},{dot:!0,css:{marginBottom:"10px"},text:"Utilize and tune hardware performance, e.g. CPU, GPU and Memory"},{dot:!0,css:{marginBottom:"10px"},text:"Experience working with an asynchronous remote team"},{dot:!0,css:{marginBottom:"10px"},text:"You know how to write a pull-request and perform a code review"},{dot:!0,css:{marginBottom:"10px"},text:"Understanding of security issues and best practices"}]},{subTitle:"Benefit",text:[{dot:!0,css:{marginBottom:"10px"},text:"Unlimited Coffee, teas, and soft drink"},{dot:!0,css:{marginBottom:"10px"},text:"Daily Complimentary Fruits"},{dot:!0,css:{marginBottom:"10px"},text:"Flat hierarchy"},{dot:!0,css:{marginBottom:"10px"},text:"Periodical team zoom meeting\u2019s around the regions ( COVID permitting)"},{css:{marginTop:"15px"},text:"If you are interested, parties please submit your CV and details in the form below."}]}],topP:"We are a FINTECH Company and one of the market leaders for Cryptocurrency and blockchain technology. We are expanding our fast-growing business in Hong Kong and internationally. We are seeking for right candidates to support our latest projects and business features."}],H=function(){var e=K.Panel;return Object(D.jsx)(K,{accordion:!0,expandIconPosition:"right",ghost:!0,children:R.map((function(t,n){return Object(D.jsxs)("div",{children:[t.teamTitle?Object(D.jsx)("div",{className:"team_title",children:t.teamTitle},t.teamTitle):null,Object(D.jsx)(e,{header:t.title,children:Object(D.jsxs)("div",{children:[null!==t&&void 0!==t&&t.topP?Object(D.jsx)("p",{children:null===t||void 0===t?void 0:t.topP},n):Object(D.jsx)(D.Fragment,{}),null===t||void 0===t?void 0:t.content.map((function(e){return Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{className:"panel_title",children:e.subTitle}),e.text.map((function(e,t){return Object(D.jsxs)("p",{style:(null===e||void 0===e?void 0:e.css)||null,children:[null!==e&&void 0!==e&&e.dot?Object(D.jsx)("span",{style:{fontWeight:"bolder"},children:"\xa0\xb7\xa0"}):null,e.text||e]},t)}))]},e.subTitle)}))]},n)},n)]},n)}))})},S=n(21);t.default=function(){var e=Object(i.useMemo)((function(){return[["Engineering & Networking","Marketing"],["Sales & Business Development","Partnerships"],["Human Resources","Finance"],["Blockchain and Engineering","Operations"],["Legal","International Expansion"]]}),[]);return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(o.a,{title:"What\u2019s it like to work with us?",contentWidth:S.isMobile?"100%":"860px",marginTop:"50px",contentTextAlign:"left",content:["Here at Coffee Cloud, we are a diverse team looking to empower our new employees from their first day. We believe in colleagues taking responsibility and ownership of their tasks and projects. We believe this is vital to personal and professional development. Our dynamic teams take pride in working together and achieving their goals.","We expect teamwork, pooling resources, and creating a flexible and friendly dynamic work culture."]}),Object(D.jsxs)("div",{className:"career_collapse",children:[Object(D.jsx)("div",{children:"Current Vacancies"}),Object(D.jsx)(H,{})]}),Object(D.jsxs)("div",{className:"career_list",children:[Object(D.jsx)("div",{children:"Teams"}),Object(D.jsx)("div",{children:e.map((function(e,t){return Object(D.jsx)("div",{children:e.map((function(e,t){return Object(D.jsx)("div",{children:e},t)}))},t)}))})]}),Object(D.jsx)("div",{style:{textAlign:"center",paddingBottom:"40px"},children:Object(D.jsx)("iframe",{src:"https://www.cognitoforms.com/CoffeeCloudCompanyLimited/ApplyNow",frameBorder:"0",width:S.isMobile?"100%":860,height:S.isMobile?900:730})})]})}}}]);
//# sourceMappingURL=14.9373539e.chunk.js.map