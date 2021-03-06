const pageTemplate = () => {
    //return HTML markup for password generator site
    return`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>CreateMyPassword</title>
                <link rel="stylesheet" href="../src/css/style.css" />
            </head>
            <body>
                <div class="wrapper">
                    <header>
                        <h1>CreateMyPassword</h1>
                    </header>
                    <div class="card">
                        <div class="card-header">
                            <h2>Generate a Password</h2>
                        </div>
                    <div class="card-body">
                        <textarea
                            readonly
                            id="password"
                            placeholder="         Your secure password will populate here...             Click 'Generate Password' to get started!"
                            aria-label="Generated Password"
                        ></textarea>
                    </div>
                        <div class="card-footer">
                            <button id="generate" class="btn">Generate Password</button>
                        </div>
                    </div>
                </div>
            <script src="../src/js/siteScript.js"></script>
            </body>
            </html>
    `;
}

module.exports = pageTemplate;