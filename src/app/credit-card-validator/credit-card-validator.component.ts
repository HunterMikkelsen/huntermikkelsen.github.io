import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-validator',
  templateUrl: './credit-card-validator.component.html',
  styleUrls: ['./credit-card-validator.component.css']
})
export class CreditCardValidatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardNumber!: number;
  isValidCard = false;

  validateCard(eventData: Event): boolean{
    this.cardNumber = parseInt((<HTMLInputElement>eventData.target).value);
    if(this.cardNumber.toString().length == 16){
       //Convert the cardNumber into an array of integers
       let cardArray = Array.from(this.cardNumber.toString()).map(Number);
       let cardSum = 0;
       let cardCheckSum = cardArray[cardArray.length-1];
       let calculatedCheckSumDigit = -1;
       //Remove the checksum digit from the array
       cardArray.pop();
       for (let index = 0; index < cardArray.length; index++) {
         if(index % 2 == 0){
           cardArray[index] *= 2;
           if(cardArray[index] > 9){
            let digits = Array.from(cardArray[index].toString()).map(Number)
            cardArray[index] = digits[0] + digits[1];
           }
         }
         cardSum += cardArray[index];
       }
       calculatedCheckSumDigit = cardSum % 10;
       if((cardSum + cardCheckSum) % 10 == 0){
         this.isValidCard = true;
         return true;
       };
    }
    this.isValidCard = false;
    return false;
  }
  validateInput(event: { which: any; keyCode: any; preventDefault: () => void; }):boolean {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
