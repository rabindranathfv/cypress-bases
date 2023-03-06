describe('Should use cypress for test API endpoints', () => {
    beforeEach(() => {
        cy.visit('https://jsonplaceholder.typicode.com/')
    })

    it('should obtained a status 200 for posts GET endpoint', async () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then((res) => {
            expect(res.status).to.eq(200)
        }).its('body').should('have.length', 100)
    })

    it('should obtained a status 200 for posts with id 10 GET endpoint', async () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/10'
        }).then((res) => {
            expect(res.status).to.eq(200)
        }).its('body').then(res => {
            expect(res).to.deep.eq({
                "userId": 1,
                "id": 10,
                "title": "optio molestias id quia eum",
                "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
              })
        })
    })

    it('should obtained a status 201 for posts POST endpoint after being created', async () => {
        // USANDO EL DEBUG PUEDO VER QUE ENVIA EL REQUEST Y Q RESPONDE COLOCANDOLO LUEGO DEL REQUEST
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: { userId: 1, title: 'titulo de prueba', description: 'descripcion de prueba', body: 'body de prueba' }
        }).then((res) => {
            expect(res.body).to.have.property('title', 'titulo de prueba')
            expect(res.body).to.have.property('description', 'descripcion de prueba')
            expect(res.body).to.have.property('body', 'body de prueba')
            expect(res.body).to.have.property('id')
            expect(res.status).to.eq(201)
            expect(res.statusText).to.eq('Created')
            expect(res.body).to.deep.eq({
                "userId": 1,
                "title": "titulo de prueba",
                "description": "descripcion de prueba",
                "body": "body de prueba",
                "id": 101
            })
        })
    })


    it('should obtained a status 200 for post with id 2 PUT endpoint', async () => {
        // USANDO EL DEBUG PUEDO VER QUE ENVIA EL REQUEST Y Q RESPONDE
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/2',
            body: { title: 'titulo de prueba', description: 'descripcion de prueba' }
        }).then((res) => {
            expect(res.body).to.have.property('title', 'titulo de prueba')
            expect(res.body).to.have.property('description', 'descripcion de prueba')
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
            expect(res.body).to.deep.eq({
                "title": "titulo de prueba",
                "description": "descripcion de prueba",
                "id": 2
            })
        })
    })

    it('should obtained a status 200 for post with id 2 DELETE endpoint', async () => {
        // USANDO EL DEBUG PUEDO VER QUE ENVIA EL REQUEST Y Q RESPONDE
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1').then((res) => {
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
    })
 })