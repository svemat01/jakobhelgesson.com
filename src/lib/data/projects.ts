export const projects: {
    name: string;
    description: string;
    path: string;
    langs: {
        name: string;
        color: string;
        textColor?: string;
    }[];
}[] = [
    {
        name: '@lvksh/logger',
        description: 'Zero dependency, lightweight, blazing fast customizable logging library',
        path: 'https://www.npmjs.com/package/@lvksh/logger',
        langs: [
            {
                name: 'Typescript',
                color: '#2563EB'
            }
        ],
    },
    {
        name: 'Scyllo',
        description: 'The Cassandra/Scylla library you didn\'t want but got anyways.',
        path: 'https://www.npmjs.com/package/scyllo',
        langs: [
            {
                name: 'Typescript',
                color: '#2563EB'
            }
        ],
    },
    {
        name: 'Primo',
        description: 'System for monitoring printer ink levels utilizing micro services for IT admins.',
        path: '',
        langs: [
            {
                name: 'Typescript',
                color: '#2563EB'
            },
            {
                name: 'React',
                color: '#61DBFB',
                textColor: '#262626'
            }
        ],
    },
];
