import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";

export function urlFor(source: Image) {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);
  return builder.image(source).format("webp");
}

export function urlForPlaceholder(source: Image) {
  const sanity = useSanity();
  const builder = imageUrlBuilder(sanity.client);
  return builder.image(source).width(300).quality(5).blur(250).format("webp");
}
