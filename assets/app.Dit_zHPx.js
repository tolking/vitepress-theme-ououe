import{t as i}from"./chunks/theme.DyfTJv1d.js";import{B as o,Z as u,$ as c,a0 as l,a1 as f,a2 as d,a3 as m,a4 as h,a5 as g,a6 as A,a7 as C,d as P,b,C as v,a8 as y,a9 as w,aa as E,ab as R,ac as S}from"./chunks/framework.CX8CsZLn.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=b();return v(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),E(),R(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=$(),a=_();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function _(){return g(T)}function $(){let e=o,a;return A(t=>{let n=C(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{D as createApp};
