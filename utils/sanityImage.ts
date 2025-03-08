import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

export function urlFor(source: Image) {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);
  return builder.image(source);
}

export function urlForPlaceholder(source: Image) {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);
  return builder.image(source).width(100).quality(5).blur(100);
}
