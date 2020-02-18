export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e4be636b262e2e30f03d3fc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ixun5e6v',
                  apiId: 'c184332f-7053-4de9-8774-83beb900eae9'
                },
                {
                  buildHookId: '5e4be636cafa6fc4e8cefabb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ac397tgh',
                  apiId: '4863de1f-db02-42b0-9a5b-8b5918ac3683'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marconucara/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ac397tgh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
