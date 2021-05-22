import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'
const routes = [
    {
        path: '/', component: Home, name: 'home'
    },
    {
        path: '/about', component: About, name: 'about'
    },
    {
        path: '/article', component: Blog, name: 'blog'
    },
    { path: "/article/cate/:categoryId", component: Blog, name: "CategoryBlog" },
    { path: "/article/:id", component: BlogDetail, name: "BlogDetail" },
    {
        path: '/message', component: Message, name: 'message'
    },
    {
        path: '/project', component: Project, name: 'project'
    },
]
export default routes