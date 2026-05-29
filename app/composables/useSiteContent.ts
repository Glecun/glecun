import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import frSite from '../../content/fr/site.json'
import enSite from '../../content/en/site.json'
import frCv from '../../content/fr/cv.json'
import enCv from '../../content/en/cv.json'

export function useSiteContent() {
  const { locale } = useI18n()

  const site = computed(() => (locale.value === 'fr' ? frSite : enSite))
  const cv = computed(() => (locale.value === 'fr' ? frCv : enCv))

  return { site, cv }
}
