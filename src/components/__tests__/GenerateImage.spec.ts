import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import GenerateImage from '@/components/GenerateImage.vue'

function mountTheComponent() {
  const wrapper = mount(GenerateImage, { props: {} })
  return wrapper
}

describe('GenerateImageComponent', () => {
  it('Mounts properly', () => {
    expect(mountTheComponent()).toBeTruthy()
  })

  it('should ...', async () => {
    const wrapper = mountTheComponent();

    const createMoodMosaicImageSpy = vi.spyOn(GenerateImage.methods, 'createMoodMosaicImage');
    await wrapper.find('.create-image-btn').trigger('click');
    expect(createMoodMosaicImageSpy).toHaveBeenCalled();
    createMoodMosaicImageSpy.mockRestore();
  });
});
