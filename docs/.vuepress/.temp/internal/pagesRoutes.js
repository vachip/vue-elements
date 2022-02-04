import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-eb1c736e","/components/input-text.html",{"title":"Text Input"},["/components/input-text","/components/input-text.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-8daa1a0e","/",{"title":"My Component library"},["/index.html","/README.md"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
