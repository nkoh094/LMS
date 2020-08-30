export default {
    user: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    icon: 'feather icon-home',
                }
            ]
        }
    ],
    faculty: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/home',
                    icon: 'feather icon-home',
                },
                {
                    id: 'classes',
                    title: 'Classes',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'listClasses',
                            title: 'List',
                            type: 'item',
                            url: '/class/list'
                        },
                        {
                            id: 'create',
                            title: 'Create',
                            type: 'item',
                            url: '/class/c  reate'
                        }
                    ]
                },
                {
                    id: 'announcements',
                    title: 'Announcements',
                    type: 'collapse',
                    icon: 'feather icon-box',
                    children: [
                        {
                            id: 'listAnnouncements',
                            title: 'List',
                            type: 'item',
                            url: '/announcements/list'
                        },
                        {
                            id: 'create',
                            title: 'Create',
                            type: 'item',
                            url: '/announcements/create'
                        }
                    ]
                }
            ]
        }
    ]
}