import React from 'react';
import { fireEvent, getByAltText, render } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

  it('renders App', async () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('writes something in search field', () => {
    // acessar elementos
    const { getByTestId } = render(<App />);
    const inputSearch = getByTestId('input');
    expect(inputSearch).toHaveValue('');
    fireEvent.change(inputSearch, { target: { value: 'ogremon' } })
    expect(inputSearch).toHaveValue('ogremon');
  });

  it('tests the search button', async () => {
    const { getByTestId, findByText, getByAltText } = render(<App />);

    const digimon = [{
      img: "https://digimon.shadowsmith.com/img/ogremon.jpg",
      level: "Champion",
      name: "Ogremon"
    }];

    const response = { json: jest.fn().mockImplementation(() => Promise.resolve(digimon)) }
    // const response = { json: jest.fn(() => Promise.resolve(digimon)) }
    // const response = { json: jest.fn().mockResolvedValue(digimon) }

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response))

    const inputSearch = getByTestId('input');
    expect(inputSearch).toHaveValue('');
    fireEvent.change(inputSearch, { target: { value: 'Ogremon' } })
    expect(inputSearch).toHaveValue('Ogremon');

    const button = getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    fireEvent.click(button)

    await findByText('level: Champion');
    expect(getByTestId('digimonName')).toBeInTheDocument();
    expect(getByAltText('Ogremon'));
  })

});