import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import DownloadImage from '@/components/DownloadImage.vue'

function mountTheComponent() {
  const wrapper = mount(DownloadImage, { props: { moodMosaicImage: {} } })
  return wrapper
}

describe('DownloadImageComponent', () => {
  it('Mounts properly', () => {
    expect(mountTheComponent()).toBeTruthy()
  })
});
