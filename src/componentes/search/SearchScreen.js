import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { platos } from '../../data/platos'
import { useForm } from '../../hooks/useForm';
import { TarjetaPlato } from '../platos/TarjetaPlato';
import { getPlatosByName } from '../../selectors/getPlatosByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);



    const [formValues, handleInputChange] = useForm({
        searchText: q,

    });

    const { searchText } = formValues;

    const platosFiltrados =  useMemo(() =>  getPlatosByName(q), [q]);
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);



    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="ingrese la comida a buscar"
                            className="form-control"
                            autoComplete="off"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}

                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                            Buscar</button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Realice una busqueda de platos

                    </div>
                    }
                       {
                        (q !== '' && platosFiltrados.length===0)
                        &&
                        <div className="alert alert-danger">
                            no hay platos de nombre {q}

                    </div>
                    }
                    {
                        platosFiltrados.map(plato => (
                            <TarjetaPlato key={plato.id}
                                {...plato} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
