/* eslint-disable @typescript-eslint/no-explicit-any */
 const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        title: 'Description',
        name: 'description',
        type: 'array',
        validation: (Rule:any) => Rule.required(),
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'External link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL',
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean',
                      description: 'Read https://css-tricks.com/use-target_blank/',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessibility.',
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
      {
        title: 'Delivery instructions',
        name: 'deliveryInstructions',
        type: 'array',
        of: [
          {
            type: 'block',
            marks: {
              annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'External link',
                  fields: [
                    {
                      name: 'href',
                      type: 'url',
                      title: 'URL',
                    },
                    {
                      title: 'Open in new tab',
                      name: 'blank',
                      type: 'boolean',
                      description: 'Read https://css-tricks.com/use-target_blank/',
                    },
                  ],
                },
              ],
            },
          },
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessibility.',
                options: {
                  isHighlighted: true,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'isFeatured',
        type: 'boolean',
        title: 'Is Featured',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        to: [{ type: 'category' }],
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: 'variations',
        type: 'array',
        title: 'Product Variations',
        of: [
          {
            type: 'object',
            title: 'Variation',
            fields: [
              {
                name: 'name',
                type: 'string',
                title: 'Variation Name',
              },
              {
                name: 'price',
                type: 'number',
                title: 'Price',
                validation: (Rule:any) => Rule.min(0),
              },
              {
                name: 'isDefault',
                type: 'boolean',
                title: 'Default Variant',
                description: 'Mark this as the default variant',
              },
            ],
          },
        ],
        validation: (Rule:any) => Rule.custom((variations:any) => {
          if (!variations || variations.length === 0) return true;
          const defaultCount = variations.filter((v:any) => v.isDefault).length;
          return defaultCount === 1
            ? true
            : 'Exactly one variant must be marked as the default.';
        }),
      },
    ],
  };
  export default product;