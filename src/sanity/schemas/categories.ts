/* eslint-disable @typescript-eslint/no-explicit-any */
const category = {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },

    ],
  };
  export default category