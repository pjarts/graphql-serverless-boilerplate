import { expect } from 'chai'
import { describe, it } from 'mocha'
import { graphql } from 'graphql'
import AWS from 'aws-sdk'

import * as Penguin from './fixtures/penguins'

import handler from '../api/handler'

import { startEnv, stopEnv, createEventFromQuery } from './lib/environment'


describe('GraphQL API', () => {

    before(function(done) {
        this.timeout(5000)
        startEnv()
            .then(() => {
                console.log('environment started')
                done()
            })
            .catch(err => console.error(err))
    })

    after(done => {
        stopEnv()
            .then(() => {
                console.log('environment stopped')
                done()
            })
            .catch(err => console.error(err))
    })

    it('should be possible to get a penguin by id', done => {
        const id = 'penguin1';
        const expected = Penguin.items.filter(penguin => penguin.id === id)[0]
        const event = createEventFromQuery(`query ($id: ID) { penguin (id: $id) { id, name, age } }`, { id })
        handler.graphql(event, null, (err, data) => {
            if (err) console.error(err)
            expect(data.data.penguin).to.exist
            Object.keys(data.data.penguin).forEach(prop => {
                expect(data.data.penguin[prop]).to.equal(expected[prop])
            })
            done()
        })
    })

    it('should respond with an array of penguins from the database', done => {
        const fields = [ 'name', 'age', 'height' ]
        const expectedItems = Penguin.items.map(
            penguin => fields.reduce(
                (prev, cur) => {
                    prev[cur] = penguin[cur]
                    return prev
                }, {}
            )
        )

        const event = createEventFromQuery(`query { penguins { ${fields.join(',') } }}`)

        handler.graphql(event, null, (err, data) => {
            if (err) console.error(err)
            expect(data.data).to.exist
            expect(data.data.penguins).to.exist
            expect(data.data.penguins).to.deep.equal(expectedItems)
            done()
        })
    })
})
