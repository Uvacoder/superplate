(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(155)),c=n(159),o=n(160),s={id:"tailwind",title:"Tailwind CSS",sidebar_label:"Tailwind CSS",description:"How to use Tailwind CSS in Next.js?"},l={unversionedId:"react/tailwind",id:"react/tailwind",isDocsHomePage:!1,title:"Tailwind CSS",description:"How to use Tailwind CSS in Next.js?",source:"@site/docs/react/tailwind.md",slug:"/react/tailwind",permalink:"/superplate/docs/react/tailwind",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/tailwind.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"Tailwind CSS",sidebar:"someSidebar",previous:{title:"Azure Pipelines",permalink:"/superplate/docs/nextjs/ci/azure-pipelines"},next:{title:"Bootstrap",permalink:"/superplate/docs/react/bootstrap"}},u=[{value:"Configuration files",id:"configuration-files",children:[]},{value:"Include Tailwind in your CSS",id:"include-tailwind-in-your-css",children:[]},{value:"Purging unused styles",id:"purging-unused-styles",children:[]},{value:"Configuring PostCSS",id:"configuring-postcss",children:[]},{value:"Adding Tailwind CSS to your project later",id:"adding-tailwind-css-to-your-project-later",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs"}),"Go to Docs ","\u2192")),Object(i.b)("h2",{id:"configuration-files"},"Configuration files"),Object(i.b)("p",null,"Tailwind plugin produces the two ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/guides/create-react-app#create-your-configuration-file"}),"necessary config files:")," ",Object(i.b)("inlineCode",{parentName:"p"},"tailwind.config.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"craco.config.js"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/configuration"}),"See Tailwind configuration docs ","\u2192")),Object(i.b)("h2",{id:"include-tailwind-in-your-css"},"Include Tailwind in your CSS"),Object(i.b)("p",null,"Tailwind is imported directly in ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'}),'import "tailwindcss/tailwind.css";\n')),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/guides/create-react-app#include-tailwind-in-your-css"}),"You can also include tailwind in your custom css ","\u2192")),Object(i.b)("h2",{id:"purging-unused-styles"},"Purging unused styles"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tailwind.config.js")," is configured to purge unused styles in pages and components."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'}),'module.exports = {\n    purge: ["./src/**/*.tsx"]\n}\n')),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/optimizing-for-production"}),"See guide on optimizing for production on Tailwind docs ","\u2192")),Object(i.b)("h2",{id:"configuring-postcss"},"Configuring PostCSS"),Object(i.b)("p",null,"Since Create React App doesn't let you override the PostCSS configuration natively. We need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"craco.config.js")," file to set up Tailwind with React properly."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="craco.config.js"',title:'"craco.config.js"'}),"module.exports = {\n    style: {\n      postcss: {\n        plugins: [\n          require('tailwindcss'),\n          require('autoprefixer'),\n        ],\n      },\n    },\n  }\n")),Object(i.b)("h2",{id:"adding-tailwind-css-to-your-project-later"},"Adding Tailwind CSS to your project later"),Object(i.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @craco/craco\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add @craco/craco\n")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="package.json" {7-9}',title:'"package.json"',"{7-9}":!0}),'{\n    // ...\n    "scripts": {\n-   "start": "react-scripts start",\n-   "build": "react-scripts build",\n-   "test": "react-scripts test",\n+   "start": "craco start",\n+   "build": "craco build",\n+   "test": "craco test",\n  },\n}\n')),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tailwindcss.com/docs/installation"}),"Refer to official documentation for detailed installation. ","\u2192")))}d.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(f,o(o({ref:t},l),{},{components:n})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},157:function(e,t,n){"use strict";var a=n(0),r=n(158);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(157),c=n(156),o=n(55),s=n.n(o),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,b=e.className,f=Object(i.a)(),m=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(a.useState)(o),g=O[0],y=O[1],w=a.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==g&&p.some((function(e){return e.value===v}))&&y(v)}var h=function(e){y(e),null!=d&&j(d,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return h(t)},onClick:function(){h(t)}},n)}))),t?Object(a.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},160:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);