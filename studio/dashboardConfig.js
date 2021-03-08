export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604609dcbc9af99e6f35ed70',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wyucx6ey',
                  apiId: 'a0557566-b17b-4287-b566-2ca4c28b7e0f'
                },
                {
                  buildHookId: '604609dc4813f79b6060fe75',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gi8w178e',
                  apiId: '628a0268-18cd-4721-87ea-3118c741c86e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tripkebab/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gi8w178e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
