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

  it('should return a random number', async () => {
    const wrapper = mountTheComponent();
    const list = [1, 2, 3, 4, 5];

    const randomNumber = wrapper.vm.getRandomIndex(list.length);

    expectTypeOf(randomNumber).toEqualTypeOf<number>();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(list.length);
  });

  it('should select a random frame', async () => {
    const wrapper = mountTheComponent();

    wrapper.vm.selectRandomFrame();
    
    expect(wrapper.vm.selectedComponent).not.toBeNull();
  });

  it('should select random images', async () => {
    const wrapper = mountTheComponent();

    wrapper.vm.selectRandomImages();
    
    expect(wrapper.vm.selectedImages.calm).not.toBeNull();
    expect(wrapper.vm.selectedImages.calm).toContain("data:image/png;base64");
    expect(wrapper.vm.selectedImages.work).not.toBeNull();
    expect(wrapper.vm.selectedImages.work).toContain("data:image/png;base64");
  });
});
