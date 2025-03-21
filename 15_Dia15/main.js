

let uploadCard = document.getElementById("uploadCard");
let inputFile = document.getElementById("inputFile");
let uploadIcon = document.getElementById("uploadIcon");
const previewImage = document.getElementById("previewImage");
const fileName = document.getElementById("fileName");
let buttonUpload = document.getElementById("buttonUpload");
let buttonLoadingDone = document.getElementById("buttonLoadingDone");
let loadingAnimation = document.getElementById("loadingAnimation");
let progressBar = document.getElementById("progressBar");
let textButtonLoadding = document.getElementById("textButtonLoadding");
let loaddingIcon = document.getElementById("loaddingIcon");
let loaddingDoneIcon = document.getElementById("loaddingDoneIcon");


/* cuando hacen clic en la zona el input abre el explorador de archivos */
uploadCard.addEventListener("click", function () {
    inputFile.click();
});

// **Cuando se selecciona un archivo manualmente**
inputFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    handleFile(file);
});

/* Detecta que esta sobre la zona de soltar el archivo */
uploadCard.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadCard.classList.add("highlight");
});

// **Detectar cuando un archivo se arrastra fuera de la zona**
uploadCard.addEventListener("dragleave", () => {
    uploadCard.classList.remove("highlight");
});

uploadCard.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadCard.classList.remove("highlight");
    const file = event.dataTransfer.files[0]; // Obtener el archivo
    handleFile(file);
});

function handleFile(file) {
 
    if (file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            
            fileName.textContent = file.name; // Muestra el nombre del archivo
            fileName.style.display = "block"; // Hace visible el nombre del archivo
            uploadIcon.style.display = "none"; // Oculta el icono de subir archivo
           
            
        };

        buttonUpload.addEventListener("click", function handleUploadClick() {
            loadingAnimation.style.display = "flex";

            setTimeout(() => { /* esperar a que aparezca el padre o la transisión nos se aplica */

                    progressBar.style.width = "100%";
                    loaddingIcon.style.transform = "rotate(360deg)"; 

                    setTimeout(() => {
                        textButtonLoadding.innerHTML = "Done";
                        loaddingIcon.style.display = "none";
                        loaddingDoneIcon.style.display = "block";

                            buttonLoadingDone.addEventListener("click", function () {
                                loadingAnimation.style.display = "none";
                                loaddingIcon.style.transform = "rotate(0deg)";
                                uploadIcon.style.display = "block";
                                progressBar.style.width = "0%";
                                loaddingDoneIcon.style.display = "none";
                                fileName.style.display = "none";
                                
                                textButtonLoadding.innerHTML = "Uploading..";
                                loaddingIcon.style.display = "block";
                                loaddingDoneIcon.style.display = "none";
                            });

                            buttonUpload.removeEventListener("click", handleUploadClick);
                               
                    }, 2500);
                    
            }, 10);       
        });
        
        reader.readAsDataURL(file); // Convierte el archivo a base64
        
    }
};


// **Detectar cuando un archivo se arrastra sobre la zona**

// **Evita que el navegador abra el archivo si se suelta fuera de la zona**
document.addEventListener("dragover", (event) => event.preventDefault());
document.addEventListener("drop", (event) => event.preventDefault());
