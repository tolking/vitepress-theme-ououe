<script setup>
import { useData } from 'vitepress'
import { data } from './posts.data'

console.log('data', data, useData());

const { page, frontmatter } = useData()
</script>

<template>
  <h1>Custom Layout!</h1>

  <div v-for="{ title, url, date } of data">
    <p>{{title}}</p>
    <a :href="url">{{url}}</a>
    <p>{{date}}</p>
  </div>

  <div v-if="frontmatter.layout === 'page'">
    <span>1</span><span>2</span><span>3</span><span>4</span>
  </div>

  <div v-if="page.isNotFound">
    Custom 404 page!
  </div>
  <Content v-else />
</template>
