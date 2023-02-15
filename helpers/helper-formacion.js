document.getElementById("mi-formacion").addEventListener('click', function() {
    document.getElementById("textito").innerHTML=
    `
    <div class="card formacion">
        <div class="card-body my-1">
            <h5 class="card-title fs-2 mb-4">MI FORMACION</h5>
        </div>
        <div class="card mb-3 w-75">
            <div class="row">
                <div class="col-md-4 w-50">
                <img src="./assets/Colegio.png" class="img-fluid logo-formacion mt-2" alt="Logo Colegio del Sol">
                </div>
                <div class="col-md-8 w-50">
                <div class="card-body text-end">
                    <h5 class="card-title">DIPLOMA SECUNDARIO</h5>
                    <p class="card-text">Colegio del Sol - Tucumán</p>
                    <p class="card-text"><small class="text-muted">Graduación: Diciembre 2014</small></p>
                </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 w-75">
            <div class="row">
                <div class="col-md-4 w-50">
                    <img src="./assets/Argencat.png" class="img-fluid logo-formacion" alt="Logo Argencat">
                </div>
                <div class="col-md-8 w-50">
                    <div class="card-body text-end">
                        <h5 class="card-title">TÉCNICA EN ADMINISTACIÓN DE HOTELES</h5>
                        <p class="card-text">Escuela Superior Argencat</p>
                        <p class="card-text"><small class="text-muted">Graduación: Noviembre 2021</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3 w-75">
            <div class="row">
                <div class="col-md-4 w-50">
                                <img src="./assets/TICMAS.jfif" class="img-fluid logo-formacion" alt="Logo Ticmas">
                </div>
                <div class="col-md-8 w-50">
                    <div class="card-body text-end">
                        <h5 class="card-title">DESARROLLO FRONT-END</h5>
                        <p class="card-text">Academia TICMAS</p>
                        <p class="card-text"><small class="text-muted">Desde Diciembre 2022</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
});
