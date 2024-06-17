// import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
// import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Quotes to Live By',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      // image: import('@/assets/testimonials/testimonial-1.jpeg'),
      author: 'Howard Stewart',
      relation: 'We work together as front-end developers at Google',
      content:
        'In nec mattis sem. Morbi purus lorem, euismod ac varius at, aliquet vitae augue. Pellentesque ut facilisis felis. In sed dui blandit, aliquet odio eu, elementum leo. In facilisis dapibus tortor ac volutpat. Cras cursus nec odio maximus elementum.',
      links: [github({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      // image: import('@/assets/testimonials/testimonial-2.jpeg'),
      author: 'Jean Richards',
      relation: 'My project manager at GitLab',
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
      links: [linkedin({ url: '#' })],
    },
    {
      // image: import('@/assets/testimonials/testimonial-3.jpeg'),
      author: 'Socrates',
      relation: 'Creator of Spongebob',
      content:
        'ligma balls and stuff',
      links: [website({ url: '#' })],
    },
  ],
}

export default testimonialsSectionData;
