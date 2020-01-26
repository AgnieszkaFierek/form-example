import {FormGroup, ValidatorFn} from '@angular/forms';

export function dateValidator(dateFromControlName: string, dateToControlName: string): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } => {
    const dateFrom = group.get(dateFromControlName);
    const dateTo = group.get(dateToControlName);

    if (dateFrom.value <= dateTo.value) {
      return { datesInvalid: false };
    }

    group.controls[dateToControlName].setErrors({datesInvalid: true});
    return { datesInvalid: true };
  };
}
