import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zt7ws09q",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
