function manager(managerInfo) {
    return `
        <div class="card">
            <h3 class="card-header"> ${managerInfo.name}</h3>
            <h3 class="card-header">Title: ${managerInfo.role}</h3>
            <div class="card-body">
                <p class="card-text">ID: ${managerInfo.id}</p>
                <p class="card-text"><a href="${managerInfo.email}" target="_blank">Email: ${managerInfo.email}</a></p>
                <p class="card-text">Office: ${managerInfo.officeNumber}</p>
            </div>
        </div>`
}

function intern(internInfo) {
    for (const info of internInfo){
        window.write(`
        <div class="card">
            <h3 class="card-header"> ${info.name}</h3>
            <h3 class="card-header">Title: ${info.role}</h3>
            <div class="card-body">
                <p class="card-text">ID: ${info.id}</p>
                <p class="card-text"><a href="${info.email}" target="_blank">Email: ${info.email}</a></p>
                <p class="card-text">School: ${info.school}</p>
            </div>
        </div>`);
    }
}

function engineer(engineerInfo) {
    return `
        <div class="card">
            <h3 class="card-header"> ${engineerInfo.name}</h3>
            <h3 class="card-header">Title: ${engineerInfo.role}</h3>
            <div class="card-body">
                <p class="card-text">ID: ${engineerInfo.id}</p>
                <p class="card-text"><a href="${engineerInfo.email}" target="_blank">Email: ${engineerInfo.email}</a></p>
                <p class="card-text">Github Username: <a href="https://github.com/${engineerInfo.github}" target="_blank">${engineerInfo.github}</a></p>
            </div>
        </div>`
}

function generateHTML(managerInfo, engineerInfo, internInfo) {
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
            ${manager(managerInfo)}
            ${engineer(engineerInfo)}
            ${intern(internInfo)}
            </section>
        </main>
    </body>
    </html>`
}

module.exports = generateHTML;