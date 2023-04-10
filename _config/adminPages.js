export default {
  posts: {
    permission: 'iblog.posts.manage',
    activated: true,
    authenticated: true,
    path: '/blog/posts/index',
    name: 'qblog.admin.posts',
    crud : import('@imagina/qblog/_crud/posts'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iblog.cms.sidebar.adminPosts',
    icon: 'fa-light fa-newspaper',
    subHeader: {
      refresh: true,
    }
  },
  categories: {
    permission: 'iblog.categories.manage',
    activated: true,
    authenticated: true,
    path: '/blog/categories/index',
    name: 'qblog.admin.categories',
    crud : import('@imagina/qblog/_crud/categories'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iblog.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },
  postsInternal: {
    permission: 'iblog.posts.manage',
    activated: true,
    authenticated: true,
    path: '/blog/posts/internal',
    name: 'qblog.admin.posts.internal',
    page: () => import('@imagina/qblog/_pages/admin/posts/internal'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'iblog.cms.sidebar.adminPostsInternal',
    icon: 'fa-light fa-newspaper',
    subHeader: {
      refresh: true,
    }
  },
}
