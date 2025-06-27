import { DecimalPipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputtype?: 'cel' | 'fah',
    digits?: string): string {
    let inputValue: number;
    let outputValue: number;
    let outputSymbol: string;

    if (typeof value === 'string') {
      inputValue = parseFloat(value);
    }
    else if (typeof value === 'number') {
      inputValue = value;
    }
    else {
      throw new Error('Invalid temperature value');
    }

    if (inputType === 'cel' && outputtype === 'fah') {
      outputValue = (inputValue * 9 / 5) + 32;
    }
    else if (inputType === 'fah' && outputtype === 'cel') {
      outputValue = (inputValue - 32) * 5 / 9;
    }
    else {
      outputValue = inputValue;
    }

    outputSymbol = (outputtype ?? inputType) === 'cel' ? ' °C' : ' °F';
    return `${outputValue.toFixed(2)} ${outputSymbol}`;
  }
}
