import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import frSite from '../../content/fr/site.json'
import enSite from '../../content/en/site.json'
import frCv from '../../content/fr/cv.json'
import enCv from '../../content/en/cv.json'

type SiteContent = typeof frSite
type CvContent = typeof frCv

export function useSiteContent() {
  const { locale } = useI18n()

  const site = computed<SiteContent>(() => (locale.value === 'fr' ? frSite : enSite))
  const cv = computed<CvContent>(() => (locale.value === 'fr' ? frCv : enCv))

  return { site, cv }
}
