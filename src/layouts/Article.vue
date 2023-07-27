<script setup lang="ts">
import { useData } from 'vitepress'
import NavLink from '../components/NavLink.vue'

const { frontmatter } = useData()
</script>

<template>
  <section class="article">
    <article class="vp-doc">
      <h1>{{ frontmatter.title }}</h1>
      <div>
        <span>{{ frontmatter.tags?.join('-') }}</span>/
        <span>{{ frontmatter.categories?.join('-') }}</span>
      </div>
      <Content />
    </article>
    <nav>
      <NavLink href="/posts/b">
        pre
      </NavLink>
      <NavLink href="/posts/b">
        next
      </NavLink>
    </nav>
  </section>
</template>
