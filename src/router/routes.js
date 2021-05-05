import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog'
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
        path: '/blog', component: Blog, name: 'blog'
    },
    {
        path: '/message', component: Message, name: 'message'
    },
    {
        path: '/project', component: Project, name: 'project'
    },
]
export default routes