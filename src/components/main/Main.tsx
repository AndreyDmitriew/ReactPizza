import {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

import {ContentItem} from '../contentItem/ContentItem';
import {usePizzasStore} from '../../store/usePizzasStore';

import {PizzaType} from '../../ts/types/types';

import './Main.scss';
import vector from '../../assets/vector.svg';
import Button from '../button/Button';
import {filerPizzas, filterButtons} from '../../config/config';
import {useRenderButtons} from './useRenderButtons';
import {sort} from '@assets/locale/ru.json';
import {getAllPizzas} from '../../core/api';
import {getAllPizzasUrl} from '../../core/config';
import {log} from "util";

export const Main = () => {
    const [pizzass, setPizzass] = useState(null);

    const getPizzas = usePizzasStore((state: any) => state.getPizzas); //any
    // const pizzass = usePizzasStore((state: any) => state.pizzas); //any
    // const isLoading = usePizzasStore((state: any) => state.isLoading); //any
    const [isSortListOpen, setIsSortListOpen] = useState(false);
    const filter = usePizzasStore((state: any) => state.filter); //any
    const handleChangeActiveButton = usePizzasStore(
        (state: any) => state.handleChangeActiveButton
    ); //any
    const handleUpdatePizzas = usePizzasStore(
        (state: any) => state.updatePizzas
    ); //any


    const {
        isLoading,
        error,
        data: pizzas,
    } = useQuery('repoData', async () => {
        try {
            return await getAllPizzas();
        } catch (error) {
            throw new Error(`Error! status: ${error}`);
        }
    });

    useEffect(() => {
        handleUpdatePizzas(pizzas)
        setPizzass(pizzas)
    }, [pizzas])

    useEffect(() => {
        const available = filerPizzas[filter]
        if (filter === "Все") {
            setPizzass(pizzas)
        } else {
            setPizzass(pizzas?.filter(({name}) => {
                return available.includes(name)
            }))
        }

    }, [filter])

    const handleSort = (e) => {
        console.log(e.target, 'e')
    }

    const t = sort;

    const renderButtons = useRenderButtons(filter, handleChangeActiveButton);

    return (
        <main>
            {
                <article className="nav-panel">
                    <div className="filter-buttons-container">{renderButtons}</div>
                    <label style={{position: 'relative'}} className="sort">
                        <img alt="Vector" className="vector" src={vector}/>
                        <p className="sort-title">{t.sortTitle}</p>
                        <p
                            className="sort-value"
                            onClick={() => setIsSortListOpen(!isSortListOpen)}
                        >
                            {t.popular}
                        </p>
                        {isSortListOpen && (
                            <div className="list-container">
                                <ul className="sort-list" onClick={handleSort}>
                                    <li>{t.popular}</li>
                                    <li>{t.price}</li>
                                    <li>{t.alphabet}</li>
                                </ul>
                            </div>
                        )}
                    </label>
                </article>
            }

            <h3 className="main-title">Все пиццы</h3>
            <section className="main-content">
                {pizzass?.map((el: PizzaType) => {
                    return <ContentItem key={el.id} pizza={el}/>;
                })}
            </section>
        </main>
    );
};
