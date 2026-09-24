describe("Testing API Automation dengan Cypress - FakeApi Platzi- Categories", () => {

  // TC_API_001 - GET All Categories
  it("TC_API_001 - GET All Categories", () => {
    cy.request({
      method: "GET",
      url: "/categories",
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.be.an("array");
    })
  })

  // TC_API_002 - GET Category by ID 1
  it("TC_API_002 - GET Category by ID", () => {
    cy.request({
      method: "GET",
      url: "/categories/1",
    }).then((response) => {
    
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_003 - GET Category by ID 5
  it("TC_API_003 - GET Category by ID", () => {
    cy.request({
      method: "GET",
      url: "/categories/5",
    }).then((response) => {
    
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_004 - GET Invalid Category ID
  it("TC_API_004 - GET Invalid Category ID", () => {
    cy.request({
      method: "GET",
      url: "/categories/100000",
      failOnStatusCode: false,
    }).then((response) => {

      expect(response.status).to.eq(400);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_005 - POST Create Category
  it("TC_API_005 - POST Create Category", () => {

    cy.request({
      method: "POST",
      url: "/categories",
      body: {
        name: "Ayo Belajar Cypress",
        image: "https://placehold.co/600x400"
      }
    }).then((response) => {

      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_006 - POST Create Category 2
  it("TC_API_006 - POST Create Category 2", () => {

    cy.request({
      method: "POST",
      url: "/categories",
      body: {
        name: "ayo semangat",
        image: "https://placehold.co/600x400"
      }
    }).then((response) => {

      expect(response.status).to.eq(201);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_007 - POST Invalid Category
  it("TC_API_007 - POST Invalid Category", () => {

    cy.request({
      method: "POST",
      url: "/categories",
      failOnStatusCode: false,
      body: {
        name: "",
        image: ""
      }
    }).then((response) => {

      expect(response.status).to.be.oneOf([400, 422]);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.not.be.empty;
    })
  })

  // TC_API_008 - PUT Update Category
  it("TC_API_008 - PUT Update Category", () => {

    cy.request({
      method: "PUT",
      url: "/categories/1",
      body: {
        name: "halo ini update",
        image: "https://placehold.co/600x400"
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })

  // TC_API_009 - PUT Update Category 
  it("TC_API_009 - PUT Update Category", () => {

    cy.request({
      method: "PUT",
      url: "/categories/1",
      body: {
        name: "tes 123",
        image: "https://placehold.co/600x400"
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })
  
  // TC_API_010 - PUT invalid Update Category 
  it('TC_PUT_010 - Update category dengan nama kosong', () => {
  cy.request({
    method: "PUT",
    url: "/categories/1",
    body: {
      name: ''
    },
    failOnStatusCode: false
  }).then((response) => {

    expect(response.status).to.be.eq(200)
    expect(response.duration).to.be.lessThan(2000)
    expect(response.body).to.have.property("name");
  })
})

  // TC_API_011 - DELETE Category
  it("TC_API_011 - DELETE Category", () => {

    cy.request({
      method: "DELETE",
      url: "/categories/1"
    }).then((response) => {

      expect(response.status).to.be.oneOf([200, 204]);
      expect(response.duration).to.be.lessThan(2000);
    })
  })

  // TC_API_012 - GET Verifikasi Deleted Category
  it("TC_API_012 - GET Verifikasi Deleted Category", () => {

    cy.request({
      method: "GET",
      url: "/categories/1",
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property("name");
    })
  })
})