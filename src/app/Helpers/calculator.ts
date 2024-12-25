import { FormGroup, FormBuilder } from '@angular/forms';
import { rangeValidator } from 'src/app/Helpers/rangeValidator'; 

const fb = new FormBuilder();
const form: FormGroup = fb.group({
  note1: ['', [rangeValidator(0, 20)]],
  note2: ['', [rangeValidator(0, 20)]],
  note3: ['', [rangeValidator(0, 20)]],
  resultControl: [''],
  creditControl: ['']
});

//calcul moyenne et credit par matiere
export function updateCalculatedValues(
  note1: string, note2: string, note3: string, 
  resultControl: string, creditControl: string, 
  coef1: number, coef2: number, coef3: number, 
  creditValue: number, form: FormGroup
): void {

  const value1 = form.get(note1)?.value;
  const value2 = form.get(note2)?.value;
  const value3 = form.get(note3)?.value;

  let result = 0;

  // Check if the form controls are valid
  if (form.get(note1)?.valid && form.get(note2)?.valid && form.get(note3)?.valid) {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    const num3 = parseFloat(value3);
    
    result = (num1 * coef1) + (num2 * coef2) + (num3 * coef3);
  }

  const resultControlObj = form.get(resultControl);
  if (resultControlObj) {
    resultControlObj.setValue(result.toFixed(2), { emitEvent: false });
  }

  const credit = result >= 10 ? creditValue : 0;
  const creditControlObj = form.get(creditControl);
  if (creditControlObj) {
    creditControlObj.setValue(credit, { emitEvent: false });
  }
}

interface ModuleFields {
  moyField: string;
  creditField: string;
  scores: { [key: string]: string };
  weights: number[];
  passingScore: number;
  defaultCredits: number;
  credits?: { [key: string]: string };
}

export function updateModuleAverageAndCredits(
  form: FormGroup,
  moduleConfigurations: ModuleFields[]
): void {
  moduleConfigurations.forEach(moduleFields => {
    // Extract scores and corresponding form values
    const values = Object.entries(moduleFields.scores).reduce((acc, [key, fieldName]) => {
      acc[key] = parseFloat(form.get(fieldName)?.value) || 0;
      return acc;
    }, {} as { [key: string]: number });

    // Calculate weighted average
    const totalWeight = moduleFields.weights.reduce((a, b) => a + b, 0);
    const weightedSum = Object.keys(values).reduce((sum, key, index) => sum + values[key] * (moduleFields.weights[index] || 0), 0);
    const average = weightedSum / totalWeight;

    // Update average in the form
    form.get(moduleFields.moyField)?.setValue(average.toFixed(2), { emitEvent: false });

    // Determine credits
    let creditsValue = average >= moduleFields.passingScore ? moduleFields.defaultCredits : 0;
    if (average < moduleFields.passingScore && moduleFields.credits) {
      creditsValue = Object.values(moduleFields.credits).reduce((sum, creditField) => sum + (parseFloat(form.get(creditField)?.value) || 0), 0);
    }
    // Update credits in the form
    form.get(moduleFields.creditField)?.setValue(creditsValue, { emitEvent: false });
  });
}

export function calculateGeneralAverageAndCredits(
  form: FormGroup,
  moduleAverages: { [key: string]: number },
  weightSum: number,
  creditFields: string[]
): void {
  // Calculate weighted average
  const weightedSum = Object.entries(moduleAverages).reduce((sum, [key, weight]) => {
    const average = parseFloat(form.get(key)?.value) || 0;
    return sum + (average * weight);
  }, 0);
  const generalAverage = weightedSum / weightSum;

  // Calculate total credits
  const totalCredits = creditFields.reduce((sum, field) => sum + (parseFloat(form.get(field)?.value) || 0), 0);

  // Update general average and total credits in the form
  form.get('moy')?.setValue(generalAverage.toFixed(2), { emitEvent: false });
  form.get('credit')?.setValue(totalCredits, { emitEvent: false });
}
