export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6196faab8fd17b1fa7313a72',
                  title: 'Sanity Studio',
                  name: 'sanity-bunjah-studio',
                  apiId: 'd86535bb-4060-4e81-ba7e-3536e4ea3bc8'
                },
                {
                  buildHookId: '6196faabb477411be852ba60',
                  title: 'Portfolio Website',
                  name: 'sanity-bunjah',
                  apiId: '1ca6157b-1865-4488-82e1-e0c99a206bab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/luckdam/sanity-bunjah',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-bunjah.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
