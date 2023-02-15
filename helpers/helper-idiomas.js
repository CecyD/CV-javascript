document.getElementById("idiomas").addEventListener('click', function() {
    document.getElementById("textito").innerHTML=
    `
    <div class="row my-5 idiomas">
        <div class="card w-100 my-4">
            <div class="card-body mt-4">
                <h5 class="card-title fs-1 my-3">IDIOMAS</h5>
            </div>
        </div>

        <div class="col-4 mt-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">ESPAÑOL</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Nativo</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width: 100%" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-4 mt-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">INGLES</h5>
                    <h6 class="card-subtitle mb-2 text-muted">C2</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width: 90%" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-4 mt-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">PORTUGUES</h5>
                    <h6 class="card-subtitle mb-2 text-muted">B1+</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
