import{_ as s,o as n,c as a,g as l}from"./chunks/framework.777da7bb.js";const F=JSON.parse('{"title":"主题配置","description":"","frontmatter":{"title":"主题配置","descript":"如何配置博客的分页","date":"2023-08-19T00:00:00.000Z","image":"https://picsum.photos/536/354?random=10","index":10,"tags":["reference","config"],"categories":["docs"]},"headers":[],"relativePath":"posts/config.md","filePath":"posts/config.md","lastUpdated":1692503301000}'),p={name:"posts/config.md"},o=l(`<p>主题的所有配置项</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><h3 id="logo" tabindex="-1">logo <a class="header-anchor" href="#logo" aria-label="Permalink to &quot;logo&quot;">​</a></h3><ul><li>Type: <code>string</code> | <code>object</code></li></ul><p>网站的 logo 图片</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">logo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#B392F0;">logo</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;logo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#B392F0;">logo</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">light</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">dark</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">alt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;logo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">logo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#6F42C1;">logo</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;logo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"><span style="color:#6A737D;">// 或者</span></span>
<span class="line"><span style="color:#6F42C1;">logo</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">light</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">dark</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">alt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;logo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="cover" tabindex="-1">cover <a class="header-anchor" href="#cover" aria-label="Permalink to &quot;cover&quot;">​</a></h3><ul><li>Type: <code>string</code> | <code>object</code></li></ul><p>网站的封面图片，使用方式同 logo</p><h3 id="nav" tabindex="-1">nav <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;nav&quot;">​</a></h3><ul><li>Type: <code>array</code></li></ul><p>网站的导航栏，和 vitepress 具有相同的配置</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nav</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { text: </span><span style="color:#9ECBFF;">&#39;Home&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { text: </span><span style="color:#9ECBFF;">&#39;Tag&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/tag&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { text: </span><span style="color:#9ECBFF;">&#39;Category&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/category&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nav</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  { text: </span><span style="color:#032F62;">&#39;Home&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { text: </span><span style="color:#032F62;">&#39;Tag&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/tag&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { text: </span><span style="color:#032F62;">&#39;Category&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/category&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">],</span></span></code></pre></div><h3 id="sociallinks" tabindex="-1">socialLinks <a class="header-anchor" href="#sociallinks" aria-label="Permalink to &quot;socialLinks&quot;">​</a></h3><ul><li>Type: <code>array</code></li></ul><p>网站的社交链接，和 vitepress 具有相同的配置</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">socialLinks</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ariaLabel: </span><span style="color:#9ECBFF;">&#39;GitHub&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    link: </span><span style="color:#9ECBFF;">&#39;https://github.com/tolking/vitepress-theme-ououe&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">socialLinks</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    ariaLabel: </span><span style="color:#032F62;">&#39;GitHub&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    link: </span><span style="color:#032F62;">&#39;https://github.com/tolking/vitepress-theme-ououe&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">],</span></span></code></pre></div><h3 id="pagination" tabindex="-1">pagination <a class="header-anchor" href="#pagination" aria-label="Permalink to &quot;pagination&quot;">​</a></h3><ul><li>Type: <code>object | array</code></li></ul><p>分页的配置，具体的使用方法请参考<a href="./pagination">分页</a></p><h3 id="excerpt" tabindex="-1">excerpt <a class="header-anchor" href="#excerpt" aria-label="Permalink to &quot;excerpt&quot;">​</a></h3><ul><li>Type: <code>string | boolean | function</code></li><li>default: <code>---</code></li></ul><p>如何分割文章的摘要</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">excerpt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;!-- more --&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">excerpt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;!-- more --&gt;&#39;</span><span style="color:#24292E;">,</span></span></code></pre></div><h3 id="tag" tabindex="-1">tag <a class="header-anchor" href="#tag" aria-label="Permalink to &quot;tag&quot;">​</a></h3><ul><li>Type: <code>string</code></li></ul><p>标签的链接地址。在使用前，你需要参考<a href="./tag">标签和分类</a>来配置 tag 的页面</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tag</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/tag&#39;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tag</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/tag&#39;</span><span style="color:#24292E;">,</span></span></code></pre></div><h3 id="category" tabindex="-1">category <a class="header-anchor" href="#category" aria-label="Permalink to &quot;category&quot;">​</a></h3><ul><li>Type: <code>string</code></li></ul><p>分类的链接地址。在使用前，你需要参考<a href="./tag">标签和分类</a>来配置 category 的页面</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">category</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/category&#39;</span><span style="color:#E1E4E8;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">category</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/category&#39;</span><span style="color:#24292E;">,</span></span></code></pre></div><h3 id="createtime" tabindex="-1">createTime <a class="header-anchor" href="#createtime" aria-label="Permalink to &quot;createTime&quot;">​</a></h3><ul><li>Type: <code>object</code></li></ul><p>如何显示创建时间</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">createTime</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;创建时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">date</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(date).</span><span style="color:#B392F0;">toLocaleDateString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">createTime</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;创建时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">date</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(date).</span><span style="color:#6F42C1;">toLocaleDateString</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-label="Permalink to &quot;lastUpdated&quot;">​</a></h3><ul><li>Type: <code>object</code></li></ul><p>如何显示最后更新时间</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">lastUpdated</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;更新时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">date</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(date).</span><span style="color:#B392F0;">toLocaleDateString</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">lastUpdated</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;更新时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">date</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(date).</span><span style="color:#6F42C1;">toLocaleDateString</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="readingprogress" tabindex="-1">readingProgress <a class="header-anchor" href="#readingprogress" aria-label="Permalink to &quot;readingProgress&quot;">​</a></h3><ul><li>Type: <code>boolean | &#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></li></ul><p>如何显示阅读进度条，仅在文章页面有效</p><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h3><ul><li>Type: <code>object</code></li></ul><p>页脚的显示内容</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">copyright</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;copyright © 2023&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">copyright</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;copyright © 2023&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><h3 id="search" tabindex="-1">search <a class="header-anchor" href="#search" aria-label="Permalink to &quot;search&quot;">​</a></h3><ul><li>Type: <code>object</code></li></ul><p>搜索的配置，具体的使用方法请参考<a href="https://vitepress.dev/reference/default-theme-search" target="_blank" rel="noreferrer">搜索</a></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">search</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">provider</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">search</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">provider</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><details class="details custom-block"><summary>类型声明</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { DefaultTheme } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { MaybeArray } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Theme</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The logo of website</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> { src: &#39;/public/logo.png&#39;, alt: &#39;logo&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> { src: &#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;, alt: &#39;logo&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">logo</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ThemeableImage</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The cover image of pagination, tag, category pages</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> { src: &#39;/public/cover.png&#39;, alt: &#39;cover image&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">cover</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ThemeableImage</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The nav items.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">nav</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">NavItem</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The social links to be displayed at the end of the nav bar. Perfect for</span></span>
<span class="line"><span style="color:#6A737D;">   * placing links to social services such as GitHub, Twitter, Facebook, etc.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">socialLinks</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">SocialLink</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to paginate posts</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add some files to your directory</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`md</span></span>
<span class="line"><span style="color:#6A737D;">   * // [page].md</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: page</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#6A737D;">   * // [page].paths.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default {</span></span>
<span class="line"><span style="color:#6A737D;">   *   paths() { ... }</span></span>
<span class="line"><span style="color:#6A737D;">   * }</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Refer to [examples](https://github.com/tolking/vitepress-theme-ououe/blob/main/docs/%5Bpage%5D.paths.ts) for more information</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`ts</span></span>
<span class="line"><span style="color:#6A737D;">   * // When you only have a pagination in the root directory</span></span>
<span class="line"><span style="color:#6A737D;">   * {</span></span>
<span class="line"><span style="color:#6A737D;">   *   group: 7,</span></span>
<span class="line"><span style="color:#6A737D;">   *   // ...</span></span>
<span class="line"><span style="color:#6A737D;">   * }</span></span>
<span class="line"><span style="color:#6A737D;">   * // When you have multiple directories that require pagination</span></span>
<span class="line"><span style="color:#6A737D;">   * [</span></span>
<span class="line"><span style="color:#6A737D;">   *   {</span></span>
<span class="line"><span style="color:#6A737D;">   *     match: (path) =&gt; /^\\/($|index|page-)/.test(path), // match the root directory</span></span>
<span class="line"><span style="color:#6A737D;">   *     // ...</span></span>
<span class="line"><span style="color:#6A737D;">   *   },</span></span>
<span class="line"><span style="color:#6A737D;">   *   {</span></span>
<span class="line"><span style="color:#6A737D;">   *     dir: &#39;posts&#39;, // match posts</span></span>
<span class="line"><span style="color:#6A737D;">   *     // ...</span></span>
<span class="line"><span style="color:#6A737D;">   *   },</span></span>
<span class="line"><span style="color:#6A737D;">   *   // ...</span></span>
<span class="line"><span style="color:#6A737D;">   * ]</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">pagination</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MaybeArray</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">PaginationItem</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`boolean\`, whether to parse and include excerpt? (rendered as HTML)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`function\`, control how the excerpt is extracted from the content.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`string\`, define a custom separator to be used for extracting the</span></span>
<span class="line"><span style="color:#6A737D;">   * excerpt. Default separator is \`---\` if \`excerpt\` is \`true\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">true</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> &#39;&lt;!-- more --&gt;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">excerpt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ExcerptFunction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Link of the tag page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add a files to your directory. (eq. tag.md -&gt; &#39;/tag&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: tag</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> &#39;/tag&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tag</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Link of the tag page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add a files to your directory. (eq. category.md -&gt; &#39;/category&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: category</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> &#39;/category&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">category</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the create time?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> { text: &#39;Create Time&#39;, format(date) { ... }}</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">createTime</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TimeFormatOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the last updated time?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need add \`lastUpdated\` options to your config</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> { text: &#39;Last updated&#39;, format(date) { ... }}</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">lastUpdated</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TimeFormatOptions</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the reading progress bar?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">top</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">readingProgress</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ReadingProgress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The footer configuration.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">footer</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** The copyright message of the footer */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">copyright</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** The nav of the footer */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">nav</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">NavItemWithLink</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to enable the local search function?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * https://vitepress.dev/reference/default-theme-search#local-search</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">search</span><span style="color:#F97583;">?:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">provider</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">LocalSearchOptions</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">provider</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AlgoliaSearchOptions</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TimeFormatOptions</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Set custom time text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Set custom time format, Default transition to local timestamp */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">format</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ReadingProgress</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;top&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;bottom&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;right&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PostsItem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">url</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">description</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">excerpt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">date</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">image</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">ThemeableImage</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tags</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">categories</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// #region pagination</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaginationItem</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Pagination collapses when the total page count exceeds this value</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">5</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">group</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The prev button text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">Prev</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">prev</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The next button text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@default</span><span style="color:#6A737D;"> </span><span style="color:#9ECBFF;">&#39;</span><span style="color:#E1E4E8;">Next</span><span style="color:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">next</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Directory that requires statistical pagination data. **It is best to have a unique value throughout the pagination config**</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * default value: [srcDir](https://vitepress.dev/reference/site-config#srcdir)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * When your blog requires multiple pagination, you need to set dir to the current directory name</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">dir</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MaybeArray</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to match the path of route and current config</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If your pagination data is incorrect, you should increase it</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">match</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">path</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to filter the posts data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">filter</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PostsItem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to sort the posts data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sort</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PostsItem</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PostsItem</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Custom pagination jump link data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">formatPage</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">page</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DefaultTheme</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">NavItemWithLink</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PaginationParams</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * File name for generating [dynamic-routes](https://vitepress.dev/guide/routing#dynamic-routes)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> n === 1 ? &#39;index&#39; : \`page-\${n}\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If you are not using the recommended format, you need to custom \`pagination -&gt; formatPage\` match</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">page</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Current pagination, starting from 1</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">current</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Item count of each page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">limit</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion pagination</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ExcerptFunction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">file</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">data</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> { [</span><span style="color:#FFAB70;">key</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">]</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">content</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">excerpt</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">options</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { DefaultTheme } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { MaybeArray } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Theme</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The logo of website</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> { src: &#39;/public/logo.png&#39;, alt: &#39;logo&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> { src: &#39;https://avatars.githubusercontent.com/u/23313167?v=4&#39;, alt: &#39;logo&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">logo</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ThemeableImage</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The cover image of pagination, tag, category pages</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> { src: &#39;/public/cover.png&#39;, alt: &#39;cover image&#39; }</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">cover</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ThemeableImage</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The nav items.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">nav</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">NavItem</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The social links to be displayed at the end of the nav bar. Perfect for</span></span>
<span class="line"><span style="color:#6A737D;">   * placing links to social services such as GitHub, Twitter, Facebook, etc.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">socialLinks</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">SocialLink</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to paginate posts</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add some files to your directory</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`md</span></span>
<span class="line"><span style="color:#6A737D;">   * // [page].md</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: page</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`js</span></span>
<span class="line"><span style="color:#6A737D;">   * // [page].paths.ts</span></span>
<span class="line"><span style="color:#6A737D;">   * export default {</span></span>
<span class="line"><span style="color:#6A737D;">   *   paths() { ... }</span></span>
<span class="line"><span style="color:#6A737D;">   * }</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Refer to [examples](https://github.com/tolking/vitepress-theme-ououe/blob/main/docs/%5Bpage%5D.paths.ts) for more information</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`ts</span></span>
<span class="line"><span style="color:#6A737D;">   * // When you only have a pagination in the root directory</span></span>
<span class="line"><span style="color:#6A737D;">   * {</span></span>
<span class="line"><span style="color:#6A737D;">   *   group: 7,</span></span>
<span class="line"><span style="color:#6A737D;">   *   // ...</span></span>
<span class="line"><span style="color:#6A737D;">   * }</span></span>
<span class="line"><span style="color:#6A737D;">   * // When you have multiple directories that require pagination</span></span>
<span class="line"><span style="color:#6A737D;">   * [</span></span>
<span class="line"><span style="color:#6A737D;">   *   {</span></span>
<span class="line"><span style="color:#6A737D;">   *     match: (path) =&gt; /^\\/($|index|page-)/.test(path), // match the root directory</span></span>
<span class="line"><span style="color:#6A737D;">   *     // ...</span></span>
<span class="line"><span style="color:#6A737D;">   *   },</span></span>
<span class="line"><span style="color:#6A737D;">   *   {</span></span>
<span class="line"><span style="color:#6A737D;">   *     dir: &#39;posts&#39;, // match posts</span></span>
<span class="line"><span style="color:#6A737D;">   *     // ...</span></span>
<span class="line"><span style="color:#6A737D;">   *   },</span></span>
<span class="line"><span style="color:#6A737D;">   *   // ...</span></span>
<span class="line"><span style="color:#6A737D;">   * ]</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">pagination</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MaybeArray</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">PaginationItem</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`boolean\`, whether to parse and include excerpt? (rendered as HTML)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`function\`, control how the excerpt is extracted from the content.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If \`string\`, define a custom separator to be used for extracting the</span></span>
<span class="line"><span style="color:#6A737D;">   * excerpt. Default separator is \`---\` if \`excerpt\` is \`true\`.</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">true</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> &#39;&lt;!-- more --&gt;&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">excerpt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ExcerptFunction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Link of the tag page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add a files to your directory. (eq. tag.md -&gt; &#39;/tag&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: tag</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> &#39;/tag&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tag</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Link of the tag page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need to add a files to your directory. (eq. category.md -&gt; &#39;/category&#39;)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * layout: category</span></span>
<span class="line"><span style="color:#6A737D;">   * ---</span></span>
<span class="line"><span style="color:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> &#39;/category&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">category</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the create time?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> { text: &#39;Create Time&#39;, format(date) { ... }}</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">createTime</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TimeFormatOptions</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the last updated time?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * Before using, you need add \`lastUpdated\` options to your config</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> { text: &#39;Last updated&#39;, format(date) { ... }}</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">lastUpdated</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TimeFormatOptions</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to show the reading progress bar?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">top</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">readingProgress</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ReadingProgress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The footer configuration.</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">footer</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** The copyright message of the footer */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">copyright</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** The nav of the footer */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">nav</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">NavItemWithLink</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Whether to enable the local search function?</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * https://vitepress.dev/reference/default-theme-search#local-search</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">search</span><span style="color:#D73A49;">?:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">provider</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">; </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">LocalSearchOptions</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">provider</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;algolia&#39;</span><span style="color:#24292E;">; </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">AlgoliaSearchOptions</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TimeFormatOptions</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Set custom time text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Set custom time format, Default transition to local timestamp */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">format</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ReadingProgress</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;top&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;bottom&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;right&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostsItem</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">url</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">description</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">excerpt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">date</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">image</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">ThemeableImage</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tags</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">categories</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// #region pagination</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaginationItem</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Pagination collapses when the total page count exceeds this value</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">5</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">group</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The prev button text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">Prev</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">prev</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * The next button text</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@default</span><span style="color:#6A737D;"> </span><span style="color:#032F62;">&#39;</span><span style="color:#24292E;">Next</span><span style="color:#032F62;">&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">next</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Directory that requires statistical pagination data. **It is best to have a unique value throughout the pagination config**</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * default value: [srcDir](https://vitepress.dev/reference/site-config#srcdir)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * When your blog requires multiple pagination, you need to set dir to the current directory name</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">dir</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MaybeArray</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to match the path of route and current config</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If your pagination data is incorrect, you should increase it</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">match</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">path</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to filter the posts data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">filter</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostsItem</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Customize how to sort the posts data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sort</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostsItem</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PostsItem</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Custom pagination jump link data</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">formatPage</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">page</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DefaultTheme</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">NavItemWithLink</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PaginationParams</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * File name for generating [dynamic-routes](https://vitepress.dev/guide/routing#dynamic-routes)</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> n === 1 ? &#39;index&#39; : \`page-\${n}\`</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * If you are not using the recommended format, you need to custom \`pagination -&gt; formatPage\` match</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">page</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Current pagination, starting from 1</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">current</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Item count of each page</span></span>
<span class="line"><span style="color:#6A737D;">   *</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@requires</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">limit</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion pagination</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ExcerptFunction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">file</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">data</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> { [</span><span style="color:#E36209;">key</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">]</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">content</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">excerpt</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// eslint-disable-next-line @typescript-eslint/no-explicit-any</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">options</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span></span></code></pre></div></details>`,52),e=[o];function t(c,r,y,i,E,A){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{F as __pageData,g as default};
