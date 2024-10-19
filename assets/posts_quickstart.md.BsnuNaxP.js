import{_ as a,c as i,Y as e,o as t}from"./chunks/framework.CX8CsZLn.js";const c=JSON.parse('{"title":"Quick Start","description":null,"frontmatter":{"title":"Quick Start","description":null,"date":"2023-08-19T00:00:00.000Z","image":"https://picsum.photos/536/354?random=1","index":1,"tags":["guide"],"categories":["docs"]},"headers":[],"relativePath":"posts/quickstart.md","filePath":"posts/quickstart.md","lastUpdated":1729000430000}'),n={name:"posts/quickstart.md"};function p(l,s,h,r,d,o){return t(),i("div",null,s[0]||(s[0]=[e(`<p>How to quickly use vitepress-theme-ououe as your blog theme</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Since this theme is based on <a href="https://vitepress.dev/" target="_blank" rel="noreferrer">vitepress</a>, you need to install it accordingly</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-afSFi" id="tab-sSZLUUh" checked><label data-title="npm" for="tab-sSZLUUh">npm</label><input type="radio" name="group-afSFi" id="tab-le2MY7n"><label data-title="pnpm" for="tab-le2MY7n">pnpm</label><input type="radio" name="group-afSFi" id="tab-sSxnNXX"><label data-title="yarn" for="tab-sSxnNXX">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-theme-ououe</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-theme-ououe</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-theme-ououe</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><ol><li>Import the theme</li></ol><p>-&gt; .vitepress/theme/index.ts</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Theme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-theme-ououe&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Theme</span></span></code></pre></div><ol start="2"><li>Add the theme configuration file</li></ol><p>-&gt; .vitepress/config.ts</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfigWithTheme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Theme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-theme-ououe&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfigWithTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><a href="./config">Detailed configuration information</a></p><h2 id="recommended-directory-structure" tabindex="-1">Recommended Directory Structure <a class="header-anchor" href="#recommended-directory-structure" aria-label="Permalink to &quot;Recommended Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>+- blog</span></span>
<span class="line"><span>  +- .vitepress</span></span>
<span class="line"><span>    +- theme</span></span>
<span class="line"><span>      +- index.ts</span></span>
<span class="line"><span>    +- config.ts</span></span>
<span class="line"><span>  +- posts</span></span>
<span class="line"><span>    +- one.md</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  +- category.md</span></span>
<span class="line"><span>  +- tag.md</span></span>
<span class="line"><span>  +- index.md</span></span>
<span class="line"><span>  ...</span></span></code></pre></div><p>Among them, posts is the directory mainly for placing articles</p>`,15)]))}const g=a(n,[["render",p]]);export{c as __pageData,g as default};
