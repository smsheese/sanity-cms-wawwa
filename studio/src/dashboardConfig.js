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
                  buildHookId: '6044cba3f32a8dcd85684c27',
                  title: 'Sanity Studio',
                  name: 'sanity-cms-wawwa-studio',
                  apiId: '100e2714-fa30-416f-97cf-a82f08747a49'
                },
                {
                  buildHookId: '6044cba3f64f70cebd73760f',
                  title: 'Blog Website',
                  name: 'sanity-cms-wawwa',
                  apiId: '2baf2dcb-72d4-4a92-993e-6e0e0fbab3ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smsheese/sanity-cms-wawwa',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-cms-wawwa.netlify.app', category: 'apps' }
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
