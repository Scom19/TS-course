import { validateDate } from './validateDate.ts';
import { errors } from '../utils/dictionarty.ts';

describe('Validation Tests', () => {
  describe('Date Validation', () => {
    it('Пропускает корректную дату в формате ДД.ММ.ГГГГ', () => {
      const validDate = '21.12.2024';
      const result = validateDate(validDate);

      expect(result.isValid).toBeTruthy();
      expect(result.message).toBe(errors.date.valid);
    });

    it('Не пропускает пустую строку', () => {
      const emptyDate = '';
      const result = validateDate(emptyDate);

      expect(result.isValid).toBeFalsy();
      expect(result.message).toBe(errors.date.required);
    });

    it('Не пропускает дату со специальными символами', () => {
      const invalidDateSpecialChars = '10.11.2024!';
      const resultSpecialChars = validateDate(invalidDateSpecialChars);

      expect(resultSpecialChars.isValid).toBeFalsy();
      expect(resultSpecialChars.message).toBe(errors.date.invalidCharacters);

      const invalidDateWithAmpersand = '10.11.2024&';
      const resultAmpersand = validateDate(invalidDateWithAmpersand);

      expect(resultAmpersand.isValid).toBeFalsy();
      expect(resultAmpersand.message).toBe(errors.date.invalidCharacters);
    });

    it('Не пропускает дату с буквами', () => {
      const invalidDateWithLetters = '20.09.2023abc';
      const resultWithLetters = validateDate(invalidDateWithLetters);

      expect(resultWithLetters.isValid).toBeFalsy();
      expect(resultWithLetters.message).toBe(errors.date.invalidCharacters);

      const invalidDateWithWords = 'Десятое октября 2023';
      const resultWithWords = validateDate(invalidDateWithWords);

      expect(resultWithWords.isValid).toBeFalsy();
      expect(resultWithWords.message).toBe(errors.date.pattern);
    });

    it('Выдаёт предупреждение, если дата раньше текущей', () => {
      const today = new Date();
      const pastDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1);//Сегодняшний день ввести можем
      const formattedPastDate = pastDate.toLocaleDateString('ru-RU');
      const result = validateDate(formattedPastDate);
      expect(result.isValid).toBeFalsy();
      expect(result.message).toBe(errors.date.past);
    });
  });
});