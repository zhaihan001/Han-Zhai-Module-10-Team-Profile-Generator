function generate(response) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-4">My Team</h1>
        </div>
    
        <main class="container">
            <section class="row my-4">
                <div class="card">
                    <h3 class="card-header name"> ${response.managerName}</h3>
                    <h3 class="card-header title">Title: Manager</h3>
                    <div class="card-body">
                        <p class="card-text id">ID: ${response.managerId}</p>
                        <p class="card-text email"><a href="${response.managerEmail}">Email: ${response.managerEmail}</a></p>
                        <p class="card-text office">Office: ${response.managerOffice}</p>
                    </div>
                </div>
            </section>
        </main>
    </body>
    </html>`
}

module.exports = {
    generate
}