(this["webpackJsonpgithub-emoji"]=this["webpackJsonpgithub-emoji"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"name":"github-emoji","version":"1.3.0","private":true,"description":"Finally a complete list of GitHub Emojis.","homepage":"https://marcomontalbano.github.io/github-emoji/","author":{"name":"Marco Montalbano","email":"me@marcomontalbano.com","url":"https://marcomontalbano.com"},"license":"MIT","repository":{"type":"git","url":"https://github.com/marcomontalbano/github-emoji/"},"keywords":["mmontalbano","marcomontalbano","emoji","github emoji","emoticon","smile"],"engines":{"node":">= 10"},"devDependencies":{"@testing-library/jest-dom":"^5.11.2","@testing-library/react":"^10.4.7","@testing-library/user-event":"^12.1.0","gh-pages":"^3.1.0","npm-run-all":"^4.1.5"},"dependencies":{"flux":"^3.1.3","prop-types":"^15.7.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","gh-pages":"node ./scripts/gh-pages.js","deploy":"npm-run-all build gh-pages"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},16:function(e,t,n){e.exports=n(41)},33:function(e,t,n){},34:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),c=n.n(o),r=n(2),s=n(3),u=n(5),l=n(4),m=new(n(12).Dispatcher),d="LOADED_EMOJI",p="SEARCH",h={load:function(){fetch("".concat(window.location.pathname.replace(/\/$/,""),"/emoji.json")).then((function(e){return e.json()})).then((function(e){return h.loadedEmoji(e)}))},loadedEmoji:function(e){m.dispatch({type:d,value:e})},search:function(e){m.dispatch({type:p,value:e})}},f=new(function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this,m)).storedResults=[],e}return Object(s.a)(n,[{key:"getInitialState",value:function(){return{results:[],hasResults:null}}},{key:"reduce",value:function(e,t){switch(t.type){case d:return this.storedResults=t.value,{hasResults:t.value.length>0,results:t.value};case p:return{hasResults:this.storedResults.length>0,results:this.storedResults.filter((function(e){return e.name.toLowerCase().indexOf(t.value.toLowerCase())>=0}))};default:return e}}}]),n}(n(13).ReduceStore)),g=n(6),b=(n(33),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isSearching:!1},a.onChangeHandler=a.onChangeHandler.bind(Object(g.a)(a)),a.onChangeTimeout=null,a}return Object(s.a)(n,[{key:"onChangeHandler",value:function(e){var t=e.target.value;clearTimeout(this.onChangeTimeout),this.onChangeTimeout=setTimeout((function(){h.search(t)}),500),this.setState({isSearching:t.length>0})}},{key:"render",value:function(){return i.a.createElement("div",{className:"Filter"},i.a.createElement("div",{className:"container"},i.a.createElement("input",{className:this.state.isSearching?"is-searching":"",onChange:this.onChangeHandler,placeholder:"Search Emoji ..",type:"text"})))}}]),n}(a.Component)),v=function(){return i.a.createElement("div",{className:"Spinner"},i.a.createElement("img",{src:"".concat(window.location.pathname.replace(/\/$/,""),"/images/dizzy_face.png"),alt:"no results"}),i.a.createElement("div",{className:"text"},"no results"))},y=(n(34),function(){return i.a.createElement("div",{className:"Spinner jump"},i.a.createElement("img",{src:"".concat(window.location.pathname.replace(/\/$/,""),"/images/smile.png"),alt:"loading"}),i.a.createElement("div",{className:"text"},"loading"))}),j=n(14),E=n.n(j),C=(n(37),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isCopied:!1},a.handleClickToCopy=a.handleClickToCopy.bind(Object(g.a)(a)),a}return Object(s.a)(n,[{key:"copyToClipboard",value:function(e){var t=document.createElement("textarea");t.innerText=e.textContent,document.getElementsByTagName("body")[0].append(t),t.select();try{document.execCommand("copy")&&e.classList.add("copied"),setTimeout((function(){e.classList.remove("copied")}),2e3)}catch(n){console.error("Oops, unable to copy")}t.remove()}},{key:"handleClickToCopy",value:function(e){this.copyToClipboard(e.target)}},{key:"render",value:function(){var e="".concat(window.location.pathname.replace(/\/$/,""),"/emoji/").concat(this.props.item.name,".png"),t=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(this.props.item.inner_html);return i.a.createElement("div",{className:"Emoji ".concat(this.state.isCopied?"copied":"")},t?i.a.createElement("div",{className:"image is-emoji",dangerouslySetInnerHTML:{__html:this.props.item.inner_html}}):i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:e,alt:this.props.item.name})),i.a.createElement("div",{className:"name"},this.props.item.code),i.a.createElement("div",{className:"details"},i.a.createElement("div",{className:"name",onClick:this.handleClickToCopy},this.props.item.code),i.a.createElement("div",{className:"name char"},i.a.createElement("div",{onClick:this.handleClickToCopy,className:"column column-left",dangerouslySetInnerHTML:{__html:this.props.item.html_entity}}),i.a.createElement("div",{onClick:this.handleClickToCopy,className:"column column-right"},this.props.item.html_entity))))}}],[{key:"propTypes",get:function(){return{item:E.a.object.isRequired}}}]),n}(a.Component)),k=(n(38),function(e){var t=e.hasResults,n=e.results;return i.a.createElement("div",{className:"Results container"},function(e,t){return!0===e&&0===t.length?i.a.createElement(v,null):t.length>0?t.map((function(e,t){return i.a.createElement(C,{key:t,item:e})})):i.a.createElement(y,null)}(t,n))}),O=(n(39),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={emoji:f.getState()},e.onEmojiStoreHandler=function(){e.setState({emoji:f.getState()})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){h.load(),this.listener=f.addListener(this.onEmojiStoreHandler)}},{key:"componentWillUnmount",value:function(){this.listener.remove()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,this.state.emoji),i.a.createElement(k,this.state.emoji))}}]),n}(a.Component)),N=n(15);n(40);c.a.render(i.a.createElement(O,null),document.getElementById("root")),c.a.render(i.a.createElement("div",null,"v ",N.version),document.getElementById("version"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f6fc1ab2.chunk.js.map