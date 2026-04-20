import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlogItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_blog_items';
  info: {
    displayName: 'blog-item';
    icon: 'calendar';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blog-item': SharedBlogItem;
    }
  }
}
