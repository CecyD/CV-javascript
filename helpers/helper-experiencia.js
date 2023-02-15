document.getElementById("mi-expeciencia").addEventListener('click', function() {
    document.getElementById("textito").innerHTML=
    `
    <div class="card experiencia mt-5">
        <div class="card-body my-1">
            <h5 class="card-title fs-2 mb-4">MI EXPERIENCIA</h5>
        </div>
        <div class="card mb-3 w-75">
            <div class="row">
                <div class="col-md-4 w-50">
                <img src="./assets/Hotel.png" class="img-fluid logo-exp mt-2" alt="Logo Hotel">
                </div>
                <div class="col-md-8 w-50">
                <div class="card-body text-end">
                    <h5 class="card-title">HOWARD JOHNSON HOTEL YERBA BUENA</h5>
                    <p class="card-text">Recepción</p>
                    <p class="card-text"><small class="text-muted">Julio 2019 - Octubre 2022</small></p>
                </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 w-75">
            <div class="row">
                <div class="col-md-4 w-50">
                    <img src="./assets/Tucuman.png" class="img-fluid logo-exp" alt="Logo Tucumán">
                </div>
                <div class="col-md-8 w-50">
                    <div class="card-body text-end">
                        <h5 class="card-title">TURISMO SAN MIGUEL DE TUCUMÁN</h5>
                        <p class="card-text">Guía turística</p>
                        <p class="card-text"><small class="text-muted">Julio 2018 - Julio 2019</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
