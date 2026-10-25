import { getCollection, type CollectionKey } from 'astro:content';

// Collection entries sorted by `order`.
export async function getOrdered<C extends CollectionKey>(collection: C) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => a.data.order - b.data.order);
}
