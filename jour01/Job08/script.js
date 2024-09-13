        function sommenombrespremiers(nombreA, nombreB, ) {    
            if (estPremier(nombreA) && estPremier(nombreB)) {
                console.log( nombreA + nombreB );
            }
            return false;
        }   

            function estPremier(nombre) {
                if (nombre <= 1) {
                    console.log("le nombre " + nombre + " n'est pas premier");
                    return false;
                }
                    

                for (let sommeNbre = 2; sommeNbre <= Math.sqrt(nombre); sommeNbre++) {
                    if (nombre % sommeNbre === 0) {
                                            
                        console.log("le nombre " + nombre + " n'est pas premier");
                        return false;
                    }
                }
                return true;

            }
      
    
    sommenombrespremiers(3, 19); // 22 pas 1er
    sommenombrespremiers(500, 41); // 541
