import { useData } from 'vitepress'
import { computed } from 'vue'

export function useLangs() {
  const { site, localeIndex } = useData()

  const prefix = computed(() => {
    return (
      site.value.locales[localeIndex.value]?.link ||
      (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`)
    )
  })

  function isLocaleUrl(url: string) {
    if (localeIndex.value === 'root') {
      const locales = Object.keys(site.value.locales).filter(
        (lang) => lang !== 'root',
      )
      const regExp = new RegExp(`^/(${locales.join('|')})/`)
      return !regExp.test(url)
    } else {
      return url.startsWith(prefix.value)
    }
  }

  return { prefix, isLocaleUrl }
}
