export const PROJECTS_QUERY = `*[
    _type == "project"
  ]|order(publishedAt desc)[0...12]{ title, summary, description,"videoUrl": video.asset->url, link}`;
