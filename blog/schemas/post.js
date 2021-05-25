export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "youtube",
      type: "object",
      title: "YouTube Embed",
      fields: [
        {
          name: "url",
          type: "url",
          title: "YouTube video URL",
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      orderings: [
        {
          title: "Published at",
          name: "publishedAt",
          by: [{ field: "post.publishedAt", direction: "desc" }],
        },
      ],
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Post date",
      name: "postDate",
      by: [{ field: "post.postDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
