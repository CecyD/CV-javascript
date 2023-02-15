console.log("Funciona helper")

document.getElementById("form-contacto").addEventListener('click', function() {
    document.getElementById("textito").innerHTML=
    `
    <div class="row idiomas">
                            <div class="card w-100 my-3">
                                <div class="card-body mt-4">
                                    <h5 class="card-title fs-1 my-3">CONTACTAME!</h5>
                                </div>
                        </div>
                        <form>
                            <div class="mb-3 w-50">
                              <input
                              type="email"
                              class="form-control input"
                              aria-describedby="emailHelp"
                              placeholder="Email"
                              maxlength="40"
                              required>
                            </div>

                            <div class="mb-3 w-75">
                                <input
                                type="text"
                                class="form-control input"
                                placeholder="Asunto"
                                maxlength="100"
                                required>
                            </div>

                            <div class="form-group col">
                                <textarea
                                    class="form-control text-area input"
                                    rows="5"
                                    maxlength="450">
                                </textarea>
                            </div>

                            <div class="container form-check my-3 ">
                                <input type="checkbox" id="cbx" style="display: none;">
                                <label for="cbx" class="check">
                                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                                        <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                        <polyline points="1 9 7 14 15 4"></polyline>
                                    </svg>

                                </label>
                                Quiero recibir novedades sobre tu CV
                            </div>
                            <div class="d-flex justify-content-center my-2">
                                <button type="submit" class="btn">ENVIAR</button>
                            </div>
                        </form>
    `
    ;
})
