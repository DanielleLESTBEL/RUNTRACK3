//function jourtravaille () {
   // const year = new Date(2020)

      //  const (let numbers=1; numbers <= 151; numbers++) {

      //      if (numbers % 3 == 0 && numbers % 5 == 0) {
    //         console.log("FizzBuzz");
    //        } else if (numbers % 3 === 0) {
     //           console.log("Fizz");
      //      } else if (numbers % 5 === 0) {
      //          console.log("Buzz");
      //      } else {
      //          console.log(numbers);
     //       }
        
        


        function jourtravaille(date) {
          const joursFeries = [
              new Date('2020-01-01'), // 1er janvier    
              new Date('2020-04-13'), // Lundi de Pâques
              new Date('2020-05-01'), // Fête du travail
              new Date('2020-05-08'), // Victoire 1945
              new Date('2020-05-21'), // Ascension
              new Date('2020-06-01'), // Lundi de Pentecôte
              new Date('2020-07-14'), // Fête nationale
              new Date('2020-08-15'), // Assomption
              new Date('2020-11-01'), // Toussaint
              new Date('2020-11-11'), // Armistice 1918
              new Date('2020-12-25')  // Noël
          ];
      
          const jour = date.getDate();
          const mois = date.getMonth() + 1; // mois commence à 0
          const annee = date.getFullYear();
      
          if (joursFeries.some(jourFerie => jourFerie.getTime() === date.getTime())) {
              console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
          } else if (date.getDay() === 0 || date.getDay() === 6) {
              console.log(`Le ${jour} ${mois} ${annee} est un week-end`);
          } else {
              console.log(`Lle ${jour} ${mois} ${annee} est un jour travaillé`);
          }
      }
      
      jourtravaille(new Date('2020-01-01')); // jour férié
      jourtravaille(new Date('2020-02-15')); // week-end
      jourtravaille(new Date('2020-04-13')); // jour férié
      jourtravaille(new Date('2020-06-10')); // jour travaillé
      jourtravaille(new Date('2020-01-06')); // jour travaillé
      jourtravaille(new Date('2020-08-21')); // jour travaillé
      jourtravaille(new Date('2020-11-29')); // week-end



