import{_ as s,o as a,c as n,g as l}from"./chunks/framework.777da7bb.js";const m=JSON.parse('{"title":"frontmatter","description":"","frontmatter":{"title":"frontmatter","descript":"如何配置博客的 frontmatter","date":"2023-08-19T00:00:00.000Z","image":"https://picsum.photos/536/354?random=4","index":4,"tags":["guide","frontmatter"],"categories":["docs"]},"headers":[],"relativePath":"posts/frontmatter.md","filePath":"posts/frontmatter.md","lastUpdated":1692503301000}'),p={name:"posts/frontmatter.md"},e=l(`<p>如何配置博客文章的 frontmatter 信息</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li>一个标准文章的 frontmatter</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">文章的标题</span></span>
<span class="line"><span style="color:#85E89D;">descript</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">文章的描述</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2023-08-19</span></span>
<span class="line"><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">图片链接 (可以省略)</span></span>
<span class="line"><span style="color:#85E89D;">tags</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">guide</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">frontmatter</span></span>
<span class="line"><span style="color:#85E89D;">categories</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#9ECBFF;">docs</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">文章的标题</span></span>
<span class="line"><span style="color:#22863A;">descript</span><span style="color:#24292E;">: </span><span style="color:#032F62;">文章的描述</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2023-08-19</span></span>
<span class="line"><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">图片链接 (可以省略)</span></span>
<span class="line"><span style="color:#22863A;">tags</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">guide</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">frontmatter</span></span>
<span class="line"><span style="color:#22863A;">categories</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#032F62;">docs</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><ul><li>一些控制界面的参数</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">createTime</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#85E89D;">lastUpdated</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#85E89D;">articlePagination</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#85E89D;">readingProgress</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">false (\`boolean | &#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;\`)</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">createTime</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#22863A;">lastUpdated</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#22863A;">articlePagination</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#22863A;">footer</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#22863A;">readingProgress</span><span style="color:#24292E;">: </span><span style="color:#032F62;">false (\`boolean | &#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;\`)</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><ul><li>特殊的属性 layout</li></ul><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">article (\`&#39;page&#39; | &#39;tag&#39; | &#39;category&#39; | &#39;article&#39;\`)</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">article (\`&#39;page&#39; | &#39;tag&#39; | &#39;category&#39; | &#39;article&#39;\`)</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div><p>参考 <a href="./tag">标签和分类</a> 和 <a href="./pagination">分页</a> 使用</p>`,9),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{m as __pageData,h as default};
