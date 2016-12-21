import config from '../../api/config'

export const table = {
    TableName: config.tables.penguins,
    KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' }
    ],
    AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}

export const items = [
    {
        id: 'penguin1',
        name: 'Happy Feet',
        age: 3,
        height: 0.88
    },
    {
        id: 'penguin2',
        name: 'Rufus',
        age: 2,
        height: 0.85
    },
    {
        id: 'penguin3',
        name: 'Ping Pong',
        age: 4,
        height: 1.02
    }
]
