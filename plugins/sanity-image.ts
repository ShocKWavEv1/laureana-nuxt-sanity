import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

export default defineNuxtPlugin(() => {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);

  function urlFor(source: Image) {
    return builder.image(source);
  }

  function urlForPlaceholder(source: Image) {
    return builder.image(source).width(50).quality(5).blur(20);
  }

  return {
    provide: { urlFor, urlForPlaceholder },
  };
});
