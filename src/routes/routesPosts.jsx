import ChatHeader from '../components/Chat/ChatHeader';

let routesPosts = [

    {
        url: '/general',
        component: ChatHeader,
        exact: true,
        title: 'general',
    },
    {
        url: '/support',
        component: ChatHeader,
        exact: true,
        title: 'support',
    },
    {
        url: '/marketing',
        component: ChatHeader,
        exact: true,
        title: 'marketing',
    },
    {
        url: '/thailand',
        component: ChatHeader,
        exact: true,
        title: 'thailand',
    },
    {
        url: '/jobs',
        component: ChatHeader,
        exact: true,
        title: 'jobs',
    },
    {
        url: '/startups',
        component: ChatHeader,
        exact: true,
        title: 'startups',
    },
    {
        url: '/freelance',
        component: ChatHeader,
        exact: true,
        title: 'freelance',
    },

]

export default routesPosts;