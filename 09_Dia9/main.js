document.addEventListener("DOMContentLoaded", () => {

    for(i=0; i<7; i++){
        const luna = document.querySelector(".luna");
        const crater = document.createElement("div");
        crater.classList.add("crater");
        crater.classList.add(`crater${i}`);
        luna.appendChild(crater); 
             
    }

    const container = document.querySelector(".container__animacion");
    
  
    setInterval(() => {
        
        for(i=0;i<4;i++){
        const gota = document.createElement("div");
        gota.classList.add("animacion__gota");
        container.appendChild(gota);
  
            // Asigna un valor aleatorio a left entre 0% y 100%
            const leftValue = Math.random() * 500;
            const scaleValue = Math.random() *5;
            
            if(scaleValue<3){
                const opacityValue = Math.random() *1;
                gota.style.opacity = opacityValue;
            }
            
            gota.style.left = `${leftValue}px`;
            gota.style.padding = `${scaleValue}px`;
        }    
        
        
    }, 100);
   
  });
  