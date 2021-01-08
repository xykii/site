(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{79:function(e,o,t){"use strict";t.r(o),t.d(o,"frontMatter",(function(){return c})),t.d(o,"metadata",(function(){return s})),t.d(o,"toc",(function(){return a})),t.d(o,"default",(function(){return u}));var r=t(3),n=t(7),i=(t(0),t(87)),c={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",slug:"/troubleshooting"},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Common issues",source:"@site/docs/troubleshooting.md",slug:"/troubleshooting",permalink:"/site/docs/troubleshooting",editUrl:"https://github.com/localhost-run/docs.localhost.run/edit/master/website/docs/troubleshooting.md",version:"current",sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Security",permalink:"/site/docs/security"}},a=[{value:"Common issues",id:"common-issues",children:[{value:"&quot;localhost.run: Permission denied (publickey)&quot; error in your terminal",id:"localhostrun-permission-denied-publickey-error-in-your-terminal",children:[]},{value:"&quot;connect_to localhost port 8080: failed&quot; error in your terminal",id:"connect_to-localhost-port-8080-failed-error-in-your-terminal",children:[]},{value:"&quot;Something went wrong opening the port forward, check your SSH command output for clues!&quot; in your browser",id:"something-went-wrong-opening-the-port-forward-check-your-ssh-command-output-for-clues-in-your-browser",children:[]},{value:"I can see requests to localhost:8080 when browsing my site thru localhost.run",id:"i-can-see-requests-to-localhost8080-when-browsing-my-site-thru-localhostrun",children:[]}]}],l={toc:a};function u(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:o,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"common-issues"},"Common issues"),Object(i.b)("h3",{id:"localhostrun-permission-denied-publickey-error-in-your-terminal"},'"localhost.run: Permission denied (publickey)" error in your terminal'),Object(i.b)("p",null,"localhost.run requires a SSH key. You can generate one with this command and enter through the prompts to accept the defaults:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t rsa\n")),Object(i.b)("h3",{id:"connect_to-localhost-port-8080-failed-error-in-your-terminal"},'"connect_to localhost port 8080: failed" error in your terminal'),Object(i.b)("p",null,"Double check that your local application is accessible on localhost and your specificed port by accessing http://localhost:{your local port} in your browser."),Object(i.b)("h3",{id:"something-went-wrong-opening-the-port-forward-check-your-ssh-command-output-for-clues-in-your-browser"},'"Something went wrong opening the port forward, check your SSH command output for clues!" in your browser'),Object(i.b)("p",null,"Check your running SSH command for hints, and double check that your local application is accessible on localhost and your specificed port by accessing http://localhost:{your local port} in your browser."),Object(i.b)("h3",{id:"i-can-see-requests-to-localhost8080-when-browsing-my-site-thru-localhostrun"},"I can see requests to localhost:8080 when browsing my site thru localhost.run"),Object(i.b)("p",null,"Many web frameworks generate full URLs using the domain they ",Object(i.b)("em",{parentName:"p"},"think")," they're running under, which can sometimes be localhost and the port they listen on."),Object(i.b)("p",null,"Google the name of your framework + reverse proxy for hints on how to fix issues like this."))}u.isMDXComponent=!0},87:function(e,o,t){"use strict";t.d(o,"a",(function(){return p})),t.d(o,"b",(function(){return d}));var r=t(0),n=t.n(r);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),u=function(e){var o=n.a.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=u(e.components);return n.a.createElement(l.Provider,{value:o},e.children)},h={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},b=n.a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||h[b]||i;return t?n.a.createElement(d,s(s({ref:o},l),{},{components:t})):n.a.createElement(d,s({ref:o},l))}));function d(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var s={};for(var a in o)hasOwnProperty.call(o,a)&&(s[a]=o[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);