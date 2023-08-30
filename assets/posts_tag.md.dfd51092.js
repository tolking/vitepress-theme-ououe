import{_ as s,o as a,c as n,g as p}from"./chunks/framework.777da7bb.js";const h=JSON.parse('{"title":"标签和分类","description":"","frontmatter":{"title":"标签和分类","descript":"如何配置博客的标签和分类","date":"2023-08-19T00:00:00.000Z","image":"https://picsum.photos/536/354?random=2","index":2,"tags":["guide","tag"],"categories":["docs"]},"headers":[],"relativePath":"posts/tag.md","filePath":"posts/tag.md","lastUpdated":1692503301000}'),l={name:"posts/tag.md"},e=p(`<p>如何快速显示所有文章的标签和分类数据</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>由于 vitepress 目前不能够生成纯动态的页面，所以需要增加 <code>tag.md</code> <code>category.md</code> 生成对应信息</p><p>-&gt; tag.md</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tag</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>-&gt; category.md</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">category</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">category</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>然后在配置中通过 <a href="./config#tag">tag 和 category</a> 属性配置对应链接</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在文档中的 <a href="./frontmatter">frontmatter</a> 中增加相关信息即可</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">vitepress-themt-ououe</span></span>
<span class="line"><span style="color:#85E89D;">categories</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">blog</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">theme</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">vitepress</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">vitepress-themt-ououe</span></span>
<span class="line"><span style="color:#22863A;">categories</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">blog</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">theme</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>或者</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">tag</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">vitepress</span></span>
<span class="line"><span style="color:#85E89D;">category</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">blog</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">tag</span><span style="color:#24292E;">: </span><span style="color:#032F62;">vitepress</span></span>
<span class="line"><span style="color:#22863A;">category</span><span style="color:#24292E;">: </span><span style="color:#032F62;">blog</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div>`,13),o=[e];function t(c,r,i,d,E,y){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{h as __pageData,u as default};
