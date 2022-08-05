import CardForPuzzle from "./CardForPuzzle/CardForPuzzle"
import Style from "./puzzle.module.scss"
import { useState, useEffect } from 'react';

const TextOfCard = {
    id: "3",
    imgPath:
        "https://thumbs.dreamstime.com/b/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8F-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%B0%D1%8F-222433714.jpg",
    title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sint re.",
    paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquceat, magni aliquid?piente ng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eesse cupiceat, magni aliquid?piente ng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eesse cupiid?piente ng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eng elit. Enim consequuntur beatae quibusdam quis ad repellat, eaque sapiente esse cupiditate, deserunt hic expedita corrupti porro repudiandae, eligendi amet. Placeat, magni aliquid?piente eesse cupi",
    dataPublic: "18.07.2022",
}



const getCards = (currentCard, visibleCards) => {
    let content = [];


    for (let index = currentCard; index < currentCard + visibleCards; index++) {
        content.push(<div
            className={(index === currentCard ? Style.grid__firstCell : ((index === currentCard + 1) & (visibleCards === 4 || visibleCards === 3)) ? Style.grid__secondCell : Style.grid__restCell)} > <CardForPuzzle id={`c${index}`} imgPath=
                {TextOfCard.imgPath}
                title={`${index} ${TextOfCard.title}`}
                paragraph={TextOfCard.paragraph}
                dataPublic={TextOfCard.dataPublic} /></div >);
    }
    return content;
};


export const useWindowSize = () => {
    const [size, setSize] = useState([window.innerWidth])

    const handleResize = () => {
        setSize([window.innerWidth])
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [size])

    // return (size[0] < 480 ? 3 : (size[0] < 768 ? 3 : (size[0] < 1200 ? 5 : 4)))
    return (size[0] < 768 ? 3 : (size[0] < 1200 ? 5 : (size[0] < 2000 ? 4 : 8)))
}

const Puzzle = () => {
    const [currentCard, setcurrentCard] = useState(0);
    const visibleCards = useWindowSize();

    return (
        <>
            <div className="container">
                <div className={Style.grid}>
                    {getCards(currentCard, visibleCards)}
                </div>
                {/* <button onClick={() => (currentCard === 0) ? setcurrentCard(currentCard) : setcurrentCard(currentCard - 1)}
                    className={Style.buttonNext}

                >Предыдущая новость
                </button>

                <button onClick={() => (currentCard === (10 - visibleCards)) ? setcurrentCard(currentCard) : setcurrentCard(currentCard + 1)}
                    className={Style.buttonNext}

                >Следующая новость
                </button> */}
            </div>
            

        </>
    );
};

export default Puzzle;