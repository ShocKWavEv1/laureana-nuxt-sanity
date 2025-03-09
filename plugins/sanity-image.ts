import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

export default defineNuxtPlugin(() => {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);

  function urlFor(source: Image) {
    return builder.image(source).format("webp");
  }

  function urlForPlaceholder(source: Image) {
    return builder.image(source).width(300).quality(5).blur(250).format("webp");
  }

  return {
    provide: { urlFor, urlForPlaceholder },
  };
});
