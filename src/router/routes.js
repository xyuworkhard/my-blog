import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'
const routes = [{
        path: '/',
        component: Home,
        name: 'home',
        meta: {
            title: "首页",
        },
    },
    {
        path: '/about',
        component: About,
        name: 'about',
        meta: {
            title: "关于我",
        },
    },
    {
        path: '/article',
        component: Blog,
        name: 'blog',
        meta: {
            title: "文章",
        },
    },
    {
        path: "/article/cate/:categoryId",
        component: Blog,
        name: "CategoryBlog",
        meta: {
            title: "文章",
        },
    },
    {
        path: "/article/:id",
        component: BlogDetail,
        name: "BlogDetail",
        meta: {
            title: "文章详情",
        },
    },
    {
        path: '/message',
        component: Message,
        name: 'message',
        meta: {
            title: "留言板",
        },

    },
    {
        path: '/project',
        component: Project,
        name: 'project',
        meta: {
            title: "项目&效果",
        },
    },
]
export default routes