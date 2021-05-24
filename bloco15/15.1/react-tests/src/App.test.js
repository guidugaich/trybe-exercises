import { render, fireEvent } from '@testing-library/react';
import App from './App';


test('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);

  const inputName = getByTestId('input-nome');
  expect(inputName).toHaveValue('');
  fireEvent.change(inputName, { target: { value: 'Tryber' } });
  expect(inputName).toHaveValue('Tryber');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  fireEvent.change(inputEmail, { target: { value: 'tryber@trybe.com' } });
  expect(inputEmail).toHaveValue('tryber@trybe.com');
});
